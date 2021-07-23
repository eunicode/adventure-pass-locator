import html from './html-string.js'
import jsdom from 'jsdom'
import fs from 'fs'

const { JSDOM } = jsdom;

const dom = new JSDOM(html)

// console.log(dom.window.document.querySelector("td").textContent)

// export const getDOM = async (path) => {
//     try {
//       // Promise resolves to Response interface
//       const readableStream = await fetch(path);
//       const text = await readableStream.text(); // Promise resolves to string
//       const parser = new DOMParser();
//       const dom = parser.parseFromString(text, "text/html"); // returns HTMLDocument interface
//       // console.log("Running getDOM()");
//       // console.log(doc);
//       return dom;
//     } catch (error) {
//       console.log(`Fetch error: ${error}`);
//     }
//   };
  
  export const getTheadText = (dom) => {
    const thead = dom.window.document.querySelector("thead");
    console.log('thead', thead)
    const theadNodes = thead.querySelectorAll("th");
    console.log('theadnodes', theadNodes)
    // Convert NodeList to array bc NodeList is not iterable
    const colNames = [...theadNodes].map((elm) => elm.textContent);
    // const colNames = [...theadNodes].map((elm) => elm.innerText);
  
    console.log('colNames', colNames);
    return colNames;
  };
  
let me = getTheadText(dom)
console.log(me)

  export const formatPropNames = (arr) => {
    const formattedNames = arr.map((name) => {
      const lower = name.toLowerCase();
      const noSpace = lower.replace(/\s/, "");
      return noSpace;
    });
  
    return formattedNames;
  };
  
  export const getRows = (dom) => {
    const tbody = dom.window.document.querySelector("tbody");
    const trNodeArr = [...tbody.querySelectorAll("tr")];
  
    const trDataArr = [];
  
    for (const rowNode of trNodeArr) {
      const row = [...rowNode.children];
      const subArr = [];
  
      for (const data of row) {
        subArr.push(data.textContent);
        // subArr.push(data.innerText);
      }
  
      trDataArr.push(subArr);
    }
  
    console.log(trDataArr);
    return trDataArr;
  };
  
  export const buildJSON = (dom) => {
    const colNamesArr = formatPropNames(getTheadText(dom));
  
    const rowArr = getRows(dom);
  
    const JSONArr = [];
  
    for (const row of rowArr) {
      const rowObj = {};
  
      for (const [i, data] of row.entries()) {
        const prop = colNamesArr[i];
        rowObj[prop] = data;
      }
  
      JSONArr.push(rowObj);
    }
  
    // console.log(JSONArr);

    return JSONArr;
  };
  
let vendorJs = buildJSON(dom)

let vendorJson = JSON.stringify(vendorJs);

// console.log(vendorJson)

fs.writeFile("vendor.json", vendorJson, (err, result) => {
  if (err) {
    console.log(`Error: ${err}`);
  }
});

/*
REQUIRE IS NOT DEFINED

Use import instead 

https://stackoverflow.com/questions/41514054/typescript-uncaught-referenceerror-require-is-not-defined 
https://learn.coderslang.com/0021-nodejs-require-is-not-defined-error/

`UNDEFINED` WITH JSDOM

Reason: innerText doesn't work with JSDom
Use textContent instead
https://github.com/jsdom/jsdom/issues/1245

*/