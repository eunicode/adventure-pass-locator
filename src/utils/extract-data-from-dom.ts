export const fetchHTML = async (path) => {
  try {
    // Promise resolves to Response interface
    const readableStream = await fetch(path);
    const text = await readableStream.text(); // Promise resolves to string
    const parser = new DOMParser();
    const dom = parser.parseFromString(text, "text/html"); // returns HTMLDocument interface
    // console.log("Running fetchHTML()");
    // console.log(doc);
    return dom;
  } catch (error) {
    console.log(`Fetch error: ${error}`);
  }
};

export const getColNames = (dom) => {
  const thead = dom.querySelector("thead");
  const theadNodes = thead.querySelectorAll("th");

  const colNames = [...theadNodes].map((elm) => elm.innerText);

  // console.log(colNames);
  return colNames;
};

export const formatPropNames = (arr) => {
  const formattedNames = arr.map((name) => {
    const lower = name.toLowerCase();
    const noSpace = lower.replace(/\s/, "");
    return noSpace;
  });
  return formattedNames;
};

export const getRows = (dom) => {
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

export const buildJSON = (dom) => {
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

/* NOTES

https://teamtreehouse.com/community/how-to-get-element-by-tag-in-another-tag

https://github.com/eunicode/survey-form/blob/master/src/js/main.js
https://github.com/eunicode/tech-doc/blob/master/src/js/main-section.js

https://stackoverflow.com/questions/24647839/referenceerror-document-is-not-defined-in-plain-javascript/24648001

This happened with me because I was using Next JS which has server side rendering. When you are using server side rendering there is no browser. Hence, there will not be any variable window or document. Hence this error shows up.

No fetch(), DOM in node
ReferenceError: document is not defined

Debug in html file, Chrome, to test fetch(), DOM

https://stackoverflow.com/questions/52682446/visual-studio-code-debugger-with-chrome-refused-to-connect-to-localhost

https://stackoverflow.com/questions/38738905/google-chrome-debugger-in-visual-studio-site-cannot-be-reached-localhost-refuse/46360672

Need server to use fetch()

https://www.npmjs.com/package/live-server

AJAX requests don't work with the file:// protocol due to security restrictions, i.e. you need a server if your site fetches content through JavaScript.

https://stackoverflow.com/questions/58128248/how-can-i-resolve-the-error-url-scheme-must-be-http-or-https-for-cors-reque

https://stackoverflow.com/questions/68429059/fetch-json-local-file-get-404-not-found

https://stackoverflow.com/questions/50007055/fetch-request-to-local-file-not-working

Tania Rascia react tutorial - form

https://stackoverflow.com/questions/37074543/get-text-between-tags-using-javascript

https://stackoverflow.com/questions/2600343/why-does-document-queryselectorall-return-a-staticnodelist-rather-than-a-real-ar
https://stackoverflow.com/questions/39300213/why-cant-i-use-map-on-the-result-of-a-queryselectorall

https://stackoverflow.com/questions/25590486/creating-json-file-and-storing-data-in-it-with-javascript

https://attacomsian.com/blog/nodejs-write-json-object-to-file

https://stackoverflow.com/questions/58419896/writing-scraped-data-into-json-using-python
*/
