// Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()
// Coding in function howManySmaller, function accept 2 parameter:arr and n. arr is a decimal array. n is a decimal.
// The first mission: let all elements in the array keep two decimal places(No need to convert number n).
// The second mission: Traversal arr, count the number of the element which smaller than n and return it.

function howManySmaller(arr, n) {
  let count = 0;
  for (let k of arr) {
    if (k.toFixed(2) < n) {
      count++;
    }
  }
  return count;
}
