import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./Context";
// const getDOM = async (path) => {
//   try {
//     // promise resolves to Response interface
//     const readableStream = await fetch(path);
//     const text = await readableStream.text(); // promise resolves to string
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(text, "text/html"); // returns HTMLDocument interface
//     // console.log("Running getDOM()");
//     // console.log(doc);
//     return doc;
//   } catch (error) {
//     console.log(`Fetch error: ${error}`);
//   }
// };

// const getTheadText = (dom) => {
//   const thead = dom.querySelector("thead");
//   const theadNodes = thead.querySelectorAll("th");

//   let colNames = [...theadNodes].map((elm) => elm.innerText);

//   colNames = colNames.map((elm) => {
//     const lower = elm.toLowerCase();
//     const noSpace = lower.replace(/\s/, "");
//     return noSpace;
//   });

//   // console.log(colNames);
//   return colNames;
// };

// const getRows = (dom) => {
//   const tbody = dom.querySelector("tbody");
//   const trNodeArr = [...tbody.querySelectorAll("tr")];

//   const trDataArr = [];

//   for (const rowNode of trNodeArr) {
//     const row = [...rowNode.children];
//     const subArr = [];

//     for (const data of row) {
//       subArr.push(data.innerText);
//     }

//     trDataArr.push(subArr);
//   }

//   console.log(trDataArr);
//   return trDataArr;
// };

// // DOMParser async(?)
// const sequential = async () => {
//   const vendorDOM = await getDOM("./adventure-pass-vendors-list.html");

//   const colNamesArr = getTheadText(vendorDOM);

//   const rowArr = getRows(vendorDOM);

//   const JSONArr = [];

//   for (const [i, row] of rowArr.entries()) {
//     const rowObj = {};

//     for (const [i, data] of row.entries()) {
//       const prop = colNamesArr[i];
//       rowObj[prop] = data;
//     }

//     JSONArr.push(rowObj);
//   }

//   console.log(JSONArr);
//   return JSONArr;
// };

// export const tableData = sequential();
// const tableDataJSON = JSON.stringify(tableData);

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
