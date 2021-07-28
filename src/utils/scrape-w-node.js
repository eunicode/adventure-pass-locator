// import html from "../data/html-string.js";
import jsdom from "jsdom";
import fs from "fs";
import fetch from 'node-fetch'

const { JSDOM } = jsdom;

const fetchHtmlString = async(path) => {
  try {
    const readableStream = await fetch(path);
    const text = await readableStream.text(); 
    return text
  } catch (err) {
    console.log(`Fetch HTML error: ${err}`)
  }
}

const getTheadText = (dom) => {
  const thead = dom.window.document.querySelector("thead");
  console.log("thead", thead);
  const theadNodes = thead.querySelectorAll("th");
  console.log("theadnodes", theadNodes);
  // Convert NodeList to array bc NodeList is not iterable
  // jsdom does not support innerText
  const colNames = [...theadNodes].map((elm) => elm.textContent);

  console.log("colNames", colNames);
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
  const tbody = dom.window.document.querySelector("tbody");
  const trNodeArr = [...tbody.querySelectorAll("tr")];

  const trDataArr = [];

  for (const rowNode of trNodeArr) {
    const row = [...rowNode.children];
    const subArr = [];

    for (const data of row) {
      subArr.push(data.textContent);
    }

    trDataArr.push(subArr);
  }

  console.log(trDataArr);
  return trDataArr;
};

const buildJSON = (dom) => {
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

const asyncWrapper = async () => {
  let htmlString = await fetchHtmlString('https://www.fs.fed.us/portaldata/r5/ap/r5-ap-vendors.php') 
  let dom = new JSDOM(htmlString) // Create DOM from fetched text
  // let dom = new JSDOM(html); // Create DOM from imported string
  let tHeaders = getTheadText(dom);
  let tHeadersJson = JSON.stringify(tHeaders)
  let vendorJs = buildJSON(dom)
  let vendorJson = JSON.stringify(vendorJs);
  // console.log(vendorJson);

  fs.writeFile("vendors.json", vendorJson, (err) => {
    if (err) {
      console.log(`Error: ${err}`);
    }
  });

  fs.writeFile("vendors-headers.json", tHeadersJson, (err) => {
    if (err) {
      console.log(`Error: ${err}`)
    }
  })
}

// Run this file with Node in terminal `node scrape-w-node.js` to create JSON file
asyncWrapper();

/*
REQUIRE IS NOT DEFINED

Use import instead 

https://stackoverflow.com/questions/41514054/typescript-uncaught-referenceerror-require-is-not-defined 
https://learn.coderslang.com/0021-nodejs-require-is-not-defined-error/

`UNDEFINED` WITH JSDOM

Reason: innerText doesn't work with JSDom
Use textContent instead
https://github.com/jsdom/jsdom/issues/1245

REFERENCEERROR: GLOBAL IS NOT DEFINED IN JSDOM.JS

Solution: Don't reference this file (scrape-w-node.js) at all. 
I had exported the array of vendor headers to Context, and it lead to errors. 
Workaround is to write array of vendor headers into JSON file. 

WRITING SCRAPED DATA TO JSON W/ PYTHON
https://stackoverflow.com/questions/58419896/writing-scraped-data-into-json-using-python
https://www.tutorialspoint.com/python_web_scraping/python_web_scraping_data_processing.htm
*/
