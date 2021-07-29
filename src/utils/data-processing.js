/* Merge sort algorithm from codecademy */
export const mergeSort = (startArray) => {
  const length = startArray.length;
  if (length === 1) {
    return startArray;
  }

  const mid = Math.floor(length / 2);
  const leftArray = startArray.slice(0, mid);
  const rightArray = startArray.slice(mid, length);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

const merge = (leftArray, rightArray) => {
  const sortedArray = [];
  while (leftArray.length > 0 && rightArray.length > 0) {
    if (leftArray[0] < rightArray[0]) {
      sortedArray.push(leftArray[0]);
      leftArray.shift();
    } else {
      sortedArray.push(rightArray[0]);
      rightArray.shift();
    }
  }

  return sortedArray.concat(leftArray).concat(rightArray);
};

export const createGraphs = (arr) => {
  let currentZip = 90001;
  let zipDB = {};

  for (let vendor of arr) {
    if (zipDB[vendor.z1] === undefined) {
      zipDB[vendor.z1] = [];
    }
    zipDB[vendor.z1].push([vendor.z2, vendor.d]);
  }

  return zipDB;
};

let testDist1D = [
  { z1: 90001, z2: 92503, d: 46.7069903542 },
  { z1: 90001, z2: 93015, d: 47.494265288 },
  { z1: 90001, z2: 92624, d: 49.549911907 },
  { z1: 90002, z2: 90255, d: 2.6753391126 },
  { z1: 90002, z2: 90201, d: 4.5615316014 },
  { z1: 90003, z2: 90303, d: 4.8776690268 },
  { z1: 90003, z2: 90303, d: 4.8776690268 },
];

// let testDist2D = createGraphs(testDist1D);
// console.log(testDist2D);

let test = {
  '90001': [
    [ 92503, 46.7069903542 ],
    [ 93015, 47.494265288 ],
    [ 92624, 49.549911907 ]
  ],
  '90002': [ [ 90255, 2.6753391126 ], [ 90201, 4.5615316014 ] ],
  '90003': [ [ 90303, 4.8776690268 ], [ 90303, 4.8776690268 ] ]
}

let test2 = [
  {
    "vendorname": "4 Points Liquor",
    "address": "5510 Pearblossom Hwy",
    "city": "Palmdale",
    "zip": "92503",
    "phone": "661-533-1366",
    "products": "Annual, Daily, Secondary"
  }]

export const findVendors = (zipcode, zipHash, jsonData) => {
  let edgesCopy = JSON.parse(JSON.stringify(zipHash[zipcode]))
  // console.log(edgesCopy)

  edgesCopy.sort( (firstEl, secEl) => firstEl[1] - secEl[1])
  console.log(edgesCopy)
  // let firstFive = edgesCopy.slice(0, 5).map( (elm) => elm[1])
  // let firstFive = edgesCopy.slice(0, 5)
  // console.log(firstFive)

  for (let vendor of jsonData) {
    // if (vendor.zip == `${firstFive[1]}`) {
    if (vendor.zip == edgesCopy[0][0]) {
      console.log('ran')
      return `${vendor.vendorname} ${vendor.address} ${vendor.city} ${vendor.zip} ${vendor.phone} ${vendor.products}`
    }
  }
}

// let test3 = findVendors(90001, test, test2)
// console.log(test3)

