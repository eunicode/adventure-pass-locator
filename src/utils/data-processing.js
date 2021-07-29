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

const createGraphs = (arr) => {
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

let test = [
  { z1: 90001, z2: 92503, d: 46.7069903542 },
  { z1: 90001, z2: 93015, d: 47.494265288 },
  { z1: 90001, z2: 92624, d: 49.549911907 },
  { z1: 90002, z2: 90255, d: 2.6753391126 },
  { z1: 90002, z2: 90201, d: 4.5615316014 },
  { z1: 90003, z2: 90303, d: 4.8776690268 },
  { z1: 90003, z2: 90303, d: 4.8776690268 },
];

let testa = createGraphs(test);
console.log(testa);
