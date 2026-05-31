//var learning
var name = "david";
var name = "john";
console.log(name);
// // it can be redeclared
// // it can be reinitilialized

//let learning
let city = "banglore";
city = "mysore";
console.log(city);
// //it cannot be redeclared
// //it can be reinitilialize

//const learning
const area = "Bhaysam Circle";
area = "Rajajinagar";
console.log(area);
// //const cannot be redeclared
// //const cannot be reinitilialized

{
  let month = "may";
  console.log("inside", month);
}
console.log("outside", month);
//it cannot be redeclared
//it can be reinitiliazed
//block

{
  const month = "may";
  console.log("inside", month);
}
console.log("outside", month);
//it cannot be redeclared and reinitliazed
//block

{
  var month = "may";
  console.log("inside", month);
}
console.log("outside", month);
//it can be redeclared and reinitialized
//functional
