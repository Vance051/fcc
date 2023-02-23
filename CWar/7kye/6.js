// // Reverse words
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
function reverseWords(str) {
  let arr = str.split(" ");
  let wordR = [];
  for (let i = 0; i < arr.length; i++) {
    wordR.push(arr[i].split("").reverse().join(""));
  }
  return wordR.join(" ");
}
