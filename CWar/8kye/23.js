// Training JS #16: Methods of String object--slice(), substring() and substr()
// Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.
// The first mission: Traversing arr, find the shortest string length.
// he second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0).
//  you can use one of slice() substring() or substr() do it. return the result after finished the work.

function cutIt(arr) {
  let shortStr = Infinity;
  for (let short of arr) {
    if (short.length < shortStr) {
      shortStr = short.length;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].slice(0, shortStr);
  }
  return arr;
}
