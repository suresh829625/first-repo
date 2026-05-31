//number of occurences of letter

let para = "live peacefully without hesitation";
// console.log(para.split());
// console.log(para.length);
let newValue = para.split("");
let count = 0;
for (let i = 0; i <= newValue.length; i++) {
  if (newValue[i] == "e") {
    count++;
  }
}
console.log("E occurance is : ", count);
