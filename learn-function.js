//syntax
// function function name{
// }
// function name()

//normal function
// function sayhello() {
//   console.log("say hi");
// }
// sayhello();

//function with an arguement
// function sum(a, b) {
//   console.log("sum", a + b);
// }
// sum(5, 10);

//function with return value
// function sum(a, b) {
//   return a + b;
// }
// let sumvalue = sum(5, 10);
// console.log(sumvalue);

// function sum(a, b) {
//   return a + b;
// }
// let sumvalue = sum(5, 10);
// console.log("sum is", sum(5, 10));
//function declaration

//function expression
// let sayhello = function () {
//   console.log("sayhi");
// };
// sayhello();

//function expression with argument
// let add = function (a, b) {
//   console.log("sum is", a + b);
// };
// add(4, 3);

//function expression with return value
let addvalue = function (a, b) {
  return a + b;
};
let addition = addvalue(5, 10);
console.log("added value is", addition);
