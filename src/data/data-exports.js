import vendorsTable from "./vendors.json";
// import * as vendorsJson from "./vendors.json";
// import vendorsTable from "./vendors";
import vendorsHeaders from "./vendors-headers.json";
import { sortAscending } from "../utils/data-processing.js";

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
export const vendorZipcodesSorted = sortAscending(vendorZipcodesUnique);
console.dir(vendorZipcodesSorted, { maxArrayLength: null });

const zipUniqSorted = [
  80132, 80301, 80465, 80501, 80907, 85395, 90010, 90016, 90042, 90048, 90201,
  90230, 90241, 90245, 90249, 90255, 90266, 90290, 90301, 90303, 90401, 90403,
  90504, 90505, 90605, 90620, 90623, 90638, 90650, 90660, 90701, 90712, 90713,
  90731, 90740, 90745, 90746, 90755, 90802, 90804, 90808, 91001, 91006, 91011,
  91016, 91023, 91025, 91040, 91042, 91101, 91103, 91105, 91106, 91107, 91203,
  91303, 91310, 91316, 91324, 91335, 91342, 91344, 91350, 91351, 91355, 91360,
  91367, 91384, 91387, 91390, 91405, 91502, 91504, 91604, 91702, 91709, 91710,
  91719, 91722, 91730, 91731, 91739, 91741, 91744, 91748, 91754, 91759, 91761,
  91767, 91773, 91784, 91786, 91791, 91801, 91901, 91906, 91910, 91916, 91948,
  91962, 91977, 92009, 92020, 92024, 92026, 92027, 92028, 92036, 92054, 92056,
  92064, 92065, 92069, 92075, 92083, 92084, 92109, 92110, 92111, 92115, 92126,
  92127, 92128, 92154, 92173, 92220, 92223, 92234, 92236, 92243, 92252, 92253,
  92260, 92284, 92305, 92314, 92315, 92317, 92321, 92325, 92333, 92335, 92336,
  92339, 92345, 92351, 92352, 92356, 92358, 92359, 92371, 92373, 92376, 92378,
  92382, 92391, 92392, 92397, 92399, 92401, 92404, 92405, 92408, 92410, 92449,
  92503, 92506, 92509, 92530, 92539, 92543, 92544, 92545, 92549, 92553, 92561,
  92562, 92570, 92571, 92590, 92592, 92595, 92624, 92626, 92630, 92647, 92648,
  92664, 92665, 92676, 92678, 92680, 92685, 92688, 92706, 92708, 92714, 92782,
  92801, 92802, 92805, 92806, 92879, 92886, 93001, 93003, 93010, 93015, 93022,
  93023, 93036, 93060, 93065, 93101, 93105, 93117, 93210, 93222, 93225, 93243,
  93252, 93254, 93304, 93306, 93401, 93422, 93436, 93441, 93446, 93454, 93460,
  93510, 93532, 93534, 93535, 93543, 93551, 93552, 93553, 93561, 93591, 93637,
  93930, 93940, 95020, 95422, 95834, 97230, 97478, 98001, 98002, 98003, 98004,
  98008, 98012, 98026, 98031, 98032, 98033, 98037, 98042, 98055, 98072, 98148,
  98199, 98223, 98272, 98366, 98375, 98383, 98407, 98424, 98444, 98467,
];
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
