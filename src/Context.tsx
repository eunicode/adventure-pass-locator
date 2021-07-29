import React, { useState, useEffect } from "react";
import vendorsTable from "./data/vendors.js";
import vendorsHeaders from "./data/vendors-headers.js";
import { zipHash } from "./data/data-exports.js";
// import { getDOM, getTheadText, buildJSON } from "./utils/scrape-w-browser";
// import { tHeaders } from "./utils/scrape-w-node";

// Create Context object. It has a Provider property we will use.
const Context = React.createContext();

const AppProvider = (props) => {
  const [zipcode, setZipcode] = useState(90011);
  const [loading, setLoading] = useState(true);
  const [jsonData, setJsonData] = useState([]);
  const [colNames, setColNames] = useState([]);
  const [submitted, setSubmitted] = useState([false]);
  const [closest, setClosest] = useState("");
  const [zipHashT] = useState(zipHash);

  const fetchDataAsyncWrapper = async () => {
    try {
      // const vendorResponse = await fetch("/src/data/vendors.json", {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json",
      //   },
      // });

      // const vendorJson = await vendorResponse.json();
      // const vendorHeaderResponse = await fetch(
      //   "/src/data/vendors-headers.json"
      // );
      // const vendorHeaderJson = await vendorHeaderResponse.json();
      // =================================
      const vendorJson = vendorsTable;
      const vendorHeaderJson = vendorsHeaders;
      setColNames(vendorHeaderJson);
      setJsonData(vendorJson);
      setLoading(false);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    console.log("async useEffect called");
    fetchDataAsyncWrapper();
  }, []);

  // const handleZipCodeChange = () => {};

  return (
    <Context.Provider
      value={{
        zipcode,
        setZipcode,
        jsonData,
        setJsonData,
        setClosest,
        zipHashT,
        colNames,
        loading,
        closest,
        setSubmitted,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { AppProvider, Context };

/* 
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

ASYNC FUNCTIONS

async functions always return promises. 

Resonse.json() is asynchronous. It returns a promise. It needs `await`. 
const response = await fetch('/movies');
const movies = await response.json(); 

ASYNC - HOW TO EXPORT DATA FROM FETCH

https://stackoverflow.com/questions/48380991/export-data-returned-by-fetch-from-a-separate-js-file-in-react
https://stackoverflow.com/questions/65563912/how-to-export-the-response-data-obtained-from-a-get-api-using-fetch-from-one-mod
You can't. It's asynchronous. It's a promise. 
Use then() or async warpper function.

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
