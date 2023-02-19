// Training JS #18: Methods of String object--concat() split() and its good friend join()
// Implement a function which accepts 2 arguments: string and separator.

// The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator,
// join all the resulting "words" back into a sentence with spaces.
function splitAndMerge(string, separator) {
  let arr = string.split(" ");
  let str = [];
  for (let i = 0; i < arr.length; i++) {
    str.push(arr[i].split("").join(separator));
  }
  return str.join(" ");
}
