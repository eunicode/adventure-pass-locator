// import { tableData } from "./main";
import React, { useState, useEffect, useContext } from "react";
import {
  fetchHTML,
  getColNames,
  formatPropNames,
  getRows,
  buildJSON,
} from "./utils/extract-data-from-dom";
const Context = React.createContext();

// const zipcode = 90011;

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
