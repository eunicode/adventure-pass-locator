// const fetchHTML = async () => {
//   try {
//     const readableStream = await fetch("./adventure-pass-vendors-list.html");
//     const text = await readableStream.text();
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(text, "text/html");
//     console.log("hi");
//     console.log(doc);
//     return doc;
//   } catch (error) {
//     console.log(error);
//   }
// };
// const x = fetchHTML();

// const getColNames = () => {
//   const thead = document.querySelector("thead");
//   const colNames = thead.querySelector("th");
//   console.log(colNames);
//   return colNames;
// };

// const test = getColNames();

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

*/
