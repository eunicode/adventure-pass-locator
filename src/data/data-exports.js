// import vendorsTable from "./vendors.json";
// import * as vendorsJson from "./vendors.json";
// import vendorsTable from "./vendors";
import vendorsTable from "./vendors.js";
// import vendorsHeaders from "./vendors-headers.json";
import vendorsHeaders from "./vendors-headers.js";
import { mergeSort, createGraphs } from "../utils/data-processing.js";
import distFinal from "./dist_final.json"
import dist1D from "./dist_final.js"

// console.log(vendorsTable);

let missing = vendorsTable.filter((vendor) => vendor.uncertainAddress);
// console.log("missing", missing)

// Array of vendor zipcodes
export const vendorZipcodes = vendorsTable.map((elm) => elm.zip.slice(0, 5));
// console.log(vendorZipcodes);

console.log("length", vendorZipcodes.length); // 467

// Array of unique vendor zipcodes
export const vendorZipcodesUnique = [...new Set(vendorZipcodes)];
console.log("lengthUnique", vendorZipcodesUnique.length); // 287

// Vendors table sorted by zipcode, ascending
export const vendorZipcodesSorted = mergeSort(vendorZipcodesUnique);
console.dir(vendorZipcodesSorted, { maxArrayLength: null });

export const zipHash = createGraphs(dist1D)



/* 
IMPORT JSON

https://stackoverflow.com/questions/60205891/import-json-extension-in-es6-node-js-throws-an-error

node --experimental-json-modules about.js

https://stackoverflow.com/questions/34944099/how-to-import-a-json-file-in-ecmascript-6

import * as data from './example.json';

https://medium.com/officialrajdeepsingh/how-to-read-local-json-file-in-react-js-564125235fc7

import data from ‘./data/data.json’;

https://stackoverflow.com/questions/39686035/import-json-file-in-react
https://www.pluralsight.com/guides/load-a-json-file-with-es6-modules-implementation
https://github.com/webpack-contrib/json-loader

One nice way (without adding a fake .js extension which is for code not for data and configs) is to use json-loader module. 
If you have used create-react-app to scaffold your project, the module is already included, you just need to import your json:

import Profile from './components/profile';

unmaintained!

https://stackoverflow.com/questions/50707019/how-do-i-import-json-file-in-react

convert to js file

https://stackoverflow.com/questions/7163061/is-there-a-require-for-json-in-node-js

readFile()

typescript config

https://www.stefanjudis.com/snippets/how-to-import-json-files-in-es-modules-node-js/
https://newbedev.com/how-to-import-a-json-file-in-ecmascript-6

MY WORKAROUND

Use experimental flag + js extension when console logging in terminal. 
Then switch to ts extension for development/production
Does the browser support importing json?

Or change json to js file
Or fix build settings and use fetch()
Or use require()
Or install json-loader

https://stackoverflow.com/questions/38380462/syntaxerror-unexpected-token-o-in-json-at-position-1

No need to parse imported JSON. Already JS object. 

*/
