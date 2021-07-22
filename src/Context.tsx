// import { tableData } from "./main";
import React, { useState, useEffect, useContext } from "react";

const Context = React.createContext();

const zipcode = 90011;

const fetchHTML = async (path) => {
  try {
    // promise resolves to Response interface
    const readableStream = await fetch(path);
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

const getColNames = (dom) => {
  const thead = dom.querySelector("thead");
  const theadNodes = thead.querySelectorAll("th");

  const colNames = [...theadNodes].map((elm) => elm.innerText);

  // console.log(colNames);
  return colNames;
};

const formatPropNames = (arr) => {
  const formattedNames = arr.map((name) => {
    const lower = name.toLowerCase();
    const noSpace = lower.replace(/\s/, "");
    return noSpace;
  });
  return formattedNames;
};

const getRows = (dom) => {
  const tbody = dom.querySelector("tbody");
  const trNodeArr = [...tbody.querySelectorAll("tr")];

  const trDataArr = [];

  for (const rowNode of trNodeArr) {
    const row = [...rowNode.children];
    const subArr = [];

    for (const data of row) {
      subArr.push(data.innerText);
    }

    trDataArr.push(subArr);
  }

  console.log(trDataArr);
  return trDataArr;
};

const buildJSON = (dom) => {
  const colNamesArr = formatPropNames(getColNames(dom));

  const rowArr = getRows(dom);

  const tableJSONArr = [];

  for (const row of rowArr) {
    const rowObj = {};

    for (const [i, data] of row.entries()) {
      const prop = colNamesArr[i];
      rowObj[prop] = data;
    }

    tableJSONArr.push(rowObj);
  }

  console.log(tableJSONArr);
  // setter(false);
  return tableJSONArr;
};

// async wrapper function
// DOMParser async(?)
// const sequential = async (setter) => {
//   const adventureHTML = await fetchHTML("./adventure-pass-vendors-list.html");
// };
// export const tableData = sequential();

const Provider = (props) => {
  const [zipcode, setZipcode] = useState(90011);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [colNames, setColNames] = useState([]);
  // let colNames = []
  const fetchDOM = async () => {
    try {
      const adventureHTML = await fetchHTML(
        "./adventure-pass-vendors-list.html"
      );
      const arrObj = buildJSON(adventureHTML);

      setData(arrObj);
      setLoading(false);
      setColNames(getColNames(adventureHTML));
      // colNames = getColNames(adventureHTML);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    console.log("useEffect called");
    fetchDOM();
    // const retrievedData = sequential(setLoading);
    // setData(retrievedData);
    // setLoading(false);
  }, []);
  // const handleZipCodeChange = () => {};

  return (
    <Context.Provider
      value={{ zipcode, setZipcode, data, setData, colNames, loading }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { Provider, Context };
