let str = "BANGLORE";
console.log(str);
console.log(str.length);
console.log(str.toLowerCase());
console.log(str.toLocaleUpperCase());
console.log(str.charAt(0));
console.log(str.repeat(3));

//concatination
let city1 = "Dharwad ";
let city2 = "Hubli";
console.log(city1 + city2);
console.log(city1.concat(" ", city2));

let para = "i  live in Banglore";
console.log(para.includes("live"));
console.log(para.indexOf("live"));
console.log(para.indexOf("in"));

console.log(para.split(""));
console.log(para.split("").join(""));
console.log(para.split("  ").join("  "));
