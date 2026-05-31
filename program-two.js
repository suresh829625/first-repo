//number of occurences of letter E

// let para = "i live in banglore";
// // console.log(para.split());
// // console.log(para.length);
// let newvalue = para.split(" ");
// let count = 0;
// for (let i = 0; i <= newvalue.length; i++) {
//   if (newvalue[i] == "e") {
//     count++;
//   }
// }
// console.log("E occurane : ", count);

//find a largest word
let str = "hello i am attending class";
function largeword(sentence) {
  let arr = sentence.split(" ");
  let large = " ";
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length > large.length) {
      large = arr[i];
    }
  }
  // return large; //to print str
  // return large.length; //to print length of str
  return str.length;
}
let value = largeword(str);
console.log(value);

//printing length of string
// let city = "banglore  ";
// console.log("city", city.length);
// console.log("city", city.trim().length);
