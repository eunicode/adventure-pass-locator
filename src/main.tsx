import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const fetchHTML = async (path) => {
  try {
    const readableStream = await fetch(
      // promise resolves to Response interface
      "./adventure-pass-vendors-list.html"
    );
    const text = await readableStream.text(); // promise resolves to string
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html"); // returns HTMLDocument interface
    // console.log("Running fetchHTML()");
    // console.log(doc);
    return doc;
  } catch (error) {
    console.log(`Fetch error: ${error}`);
  }
};

const advHTML = fetchHTML();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
