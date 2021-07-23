import React, { useState, useEffect } from "react";
import { getDOM, getTheadText, buildJSON } from "./utils/scrape-w-browser";

// Create Context object. It has a Provider property we will use.
const Context = React.createContext();

// const zipcode = 90011;

const AppProvider = (props) => {
  const [zipcode, setZipcode] = useState(90011);
  const [loading, setLoading] = useState(true);
  const [jsonData, setJsonData] = useState([]);
  const [colNames, setColNames] = useState([]);
  // const [propNames, setPropNames] = useState([])

  const fetchDataAsyncWrapper = async () => {
    try {
      const vendorDOM = await getDOM("./adventure-pass-vendors-list.html"); // internal fetch() call

      const vendorJson = buildJSON(vendorDOM);
      setColNames(getTheadText(vendorDOM));
      // setLoading(false);
      setJsonData(vendorJson);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    console.log("useEffect called");
    fetchDataAsyncWrapper();
    // const jsonData = fetchDOM();
    // setJsonData(jsonData);
    setLoading(false);
  }, []);

  // const handleZipCodeChange = () => {};

  return (
    <Context.Provider
      value={{ zipcode, setZipcode, jsonData, setJsonData, colNames, loading }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { AppProvider, Context };

/* 

We will probably need to define a wrapper function inside of AppProvider. 
This is bc functions defined inside of AppProvider will have access to state, stateSetters, etc.

We can't do this bc we have to wait for fetch, or is it bc we have to wait for component to mount
or is it another reason? 
```A
let colNames = []
colNames = getTheadText(vendorDOM);
```
```B
const [colNames, setColNames] = useState([]);
```

My answer: It's bc we have to wait for fetch() 
```
const myAsyncFunc = async() => {
    let data = await fetch(url).json()
    return data
}

let json = myAsyncFunc()

console.log( json ) // <-- this will run automatically, instead of waiting
```

How to: 
Call a stateSetter inside of useEffect's callback function when the fetch is complete
  useEffect(() => {
    const retrievedData = myFetch(); // async
    setJsonData(retrievedData);
  }, []);

Multiple useEffect calls

https://stackoverflow.com/questions/54002792/should-i-use-one-or-many-useeffect-in-component

SETTING STATE INSIDE OF USEEFFECT

Generally speaking, using setState inside useEffect will create an infinite loop that most likely you don't want to cause. 
There are a couple of exceptions to that rule which I will get into later.

useEffect is called after each render, 
and when setState is used inside of it, 
it will cause the component to re-render, 
which will call useEffect and so on and so on.

One of the popular cases that using useState inside of useEffect will not cause an infinite loop is when you pass an empty array as a second argument to useEffect like useEffect(() => {....}, []) 
which means that the effect function should be called once: after the first mount/render only. 
This is used widely when you're doing data fetching in a component and you want to save the request data in the component's state.

ASYNC FUNCTIONS

async functions always return promises. 

ASYNC FUNCTIONS + USEEFFECT()

Don't make the callback function an async function. 
Bc then you can't return a cleanup function. Bc async functions return promises. 
Instead, call async function inside of useEffect's callback function.

https://dev.to/danialdezfouli/what-s-wrong-with-the-async-function-in-useeffect-4jne

CONTEXT

https://scotch.io/courses/10-react-challenges-beginner/use-context-to-pass-data
https://codesandbox.io/s/challenge-9-use-react-context-final-qq2bg?file=/src/NameComponent.js

Learn React Hooks and Context API by building a Recipe Search App (2)
https://dev.to/mongopark/learn-react-hooks-and-context-api-by-building-a-recipe-search-app-2-1g3o
https://github.com/olajohn-ajiboye/Blog-React-Hook-Tutorial/blob/master/src/context/index.js

https://stackoverflow.com/questions/57907129/update-react-context-using-a-rest-api-call-in-a-functional-component

https://stackoverflow.com/questions/58197800/set-the-data-in-react-context-from-asynchronous-api-call

*/
