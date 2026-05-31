let str = "hello morning";

function countvouwels(sentences) {
  let arr = sentences.split("");
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (vowels.includes(arr[i])) {
      count++;
    }
  }
  return count;
}
let op = countvouwels(str);
console.log("number of vowels : ", op);
