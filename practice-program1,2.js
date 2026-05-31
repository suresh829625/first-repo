//practice of pattern
// let num = 4;
// for (i = 1; i <= num; i++) {
//   let str = "*";
//   console.log(str.repeat(i));
// }
// let n = 4;
// for (i = n - 1; i >= 1; i--) {
//   let str = "*";
//   console.log(str.repeat(i));
// }

//practice of pyramid
// let num = 5;
// for (i = 1; i <= num; i++) {
//   let str = "*";
//   let space = " ";
//   console.log(space + str.repeat(i));
// }

//checking the occurance of string
let para = "i will be okay";
console.log(para);
let newvalue = para.split("");
let count = 0;
for (let i = 0; i <= newvalue.length; i++) {
  if (newvalue[i] == "l") {
    count++;
  }
}
console.log("occerence of l : ", count);

//123
// let para = "live without hesitation";
// let newvalue = para.split("");
// let count = 0;
// for (let i = 0; i <= newvalue.length; i++) {
//   if (newvalue[i] == "i") {
//     count++;
//   }
// }
// console.log("occurence of e : ", count);
