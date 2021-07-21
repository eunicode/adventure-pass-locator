import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const fetchHTML = async (path) => {
  try {
    // promise resolves to Response interface
    const readableStream = await fetch(path);
    const text = await readableStream.text(); // promise resolves to string
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html"); // returns HTMLDocument interface
    // console.log("Running fetchHTML()");
    console.log(doc);
    return doc;
  } catch (error) {
    console.log(`Fetch error: ${error}`);
  }
};

const getColNames = (dom) => {
  const thead = dom.querySelector("thead");
  const theadNodes = thead.querySelectorAll("th");

  let colNames = [...theadNodes].map((elm) => elm.innerText);

  colNames = colNames.map((elm) => {
    const lower = elm.toLowerCase();
    const noSpace = lower.replace(/\s/, "");
    return noSpace;
  });

  // console.log(colNames);
  return colNames;
};

const getRows = (dom) => {
  const tbody = dom.querySelector("tbody");
  const trNodeArr = [...tbody.querySelectorAll("tr")];

  const trArr = [];

  for (const rowNode of trNodeArr) {
    const row = [...rowNode.children];
    const subArr = [];

    for (const data of row) {
      subArr.push(data.innerText);
    }

    trArr.push(subArr);
  }

  console.log(trArr);
  return trArr;
};

// DOMParser async(?)
const sequential = async () => {
  const adventureHTML = await fetchHTML("./adventure-pass-vendors-list.html");

  const colNamesArr = getColNames(adventureHTML);

  const rowArr = getRows(adventureHTML);

  const tableArr = [];

  for (const [i, row] of rowArr.entries()) {
    const rowObj = {};

    for (const [i, data] of row.entries()) {
      const prop = colNamesArr[i];
      rowObj[prop] = data;
    }

    tableArr.push(rowObj);
  }

  console.log(tableArr);
};

const tableData = sequential();
// const tableDataJSON = JSON.stringify(tableData);

// const fs = require("fs");

// fs.writeFile("vendor.json", dictstring, (err, result) => {
//   if (err) {
//     console.log(`Error: ${err}`);
//   }
// });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
