//printing pattern *
// let num = 4;
// for (let i = 1; i <= num; i++) {
//   let str = "*";
//   console.log(str.repeat(i));
// }
// let n = 4;
// for (let i = n - 1; i >= 1; i--) {
//   let str = "*";
//   console.log(str.repeat(i));
// }

//printing pyramid patter
let num = 4;

for (i = 1; i <= num; i++) {
  let str = "*";
  let space = " ";
  console.log(space.repeat(num - 1) + str.repeat(i));
}
