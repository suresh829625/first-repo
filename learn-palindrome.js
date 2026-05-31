//check for palindrome
//please write js function
let text = "surya";

function isPalindrome(str) {
  let rev = str.split("").reverse().join("");
  console.log("rev value", rev);

  return rev == text;
}
console.log("output", isPalindrome(text));
