import React, { useState, useEffect } from "react";
import { getDOM, getTheadText, buildJSON } from "./utils/extract-data-from-dom";

// Create Context object. It has a Provider property we will use.
const Context = React.createContext();

// const zipcode = 90011;

const AppProvider = (props) => {
  const [zipcode, setZipcode] = useState(90011);
  const [loading, setLoading] = useState(true);
  const [jsonData, setJsonData] = useState([]);
  const [colNames, setColNames] = useState([]);

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
We can't do this bc we have to wait for fetch, or is it bc we have to wait for component to mount
or is it another reason? 
```
let colNames = []
colNames = getTheadText(vendorDOM);
```
```
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

We will probably need to define a wrapper function inside of AppProvider. 
This is bc functions defined inside of AppProvider will have access to state, stateSetters, etc.

How to: 
Call a stateSetter inside of useEffect's callback function when the fetch is complete
  useEffect(() => {
    const retrievedData = myFetch(); // async
    setJsonData(retrievedData);
  }, []);

Multiple useEffect calls
https://stackoverflow.com/questions/54002792/should-i-use-one-or-many-useeffect-in-component

ASYNC FUNCTIONS

async functions alawys return promises. 

ASYNC FUNCTIONS + USEEFFECT()

Don't make the callback function an async function. 
Bc then you can't return a cleanup function. Bc async functions return promises. 
Instead, call async function inside of useEffect's callback function.
*/
