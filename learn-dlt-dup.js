// let arr = [1, 2, 2, 3, 4, 5, 5, 5];
// let removeduplicates = [];

// for (let i = 0; i < arr.length; i++) {
//   if (removeduplicates.indexOf(arr[i]) == -1) {
//     removeduplicates.push(arr[i]);
//   }
// }
// console.log(removeduplicates);

let arr = [1, 2, 2, 3, 4, 5, 5, 5, 6, 6];
function printuniq(ar) {
  let removeduplicates = [];
  for (let i = 0; i < arr.length; i++) {
    if (removeduplicates.indexOf(arr[i]) == -1) {
      removeduplicates.push(arr[i]);
    }
  }
  return removeduplicates;
}
let uniqvalue = printuniq(arr);
console.log(uniqvalue);
