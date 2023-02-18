// ============================Training JS #13: Number object and its properties================================
// Coding in function whatNumberIsIt. function accept 1 parameter:n. it's a number.

// To judge the number n. If n is one of the above five constants, return one of these string:

// "Input number is Number.MAX_VALUE"
// "Input number is Number.MIN_VALUE"
// "Input number is Number.NaN"
// "Input number is Number.NEGATIVE_INFINITY"
// "Input number is Number.POSITIVE_INFINITY"
// Other values should return "Input number is xxx". xxx means this number.
function whatNumberIsIt(n) {
  //coding here
  switch (n) {
    case Number.MAX_VALUE:
      return "Input number is Number.MAX_VALUE";
      break;
    case Number.MIN_VALUE:
      return "Input number is Number.MIN_VALUE";
      break;
    //        case Number.NaN: "Input number is Number.NaN";
    //       break;
    case Number.NEGATIVE_INFINITY:
      return "Input number is Number.NEGATIVE_INFINITY";
      break;
    case Number.POSITIVE_INFINITY:
      return "Input number is Number.POSITIVE_INFINITY";
      break;
    case n:
      return `Input number is ${n}`;
      break;
    default:
      return "Input number is Number.NaN";
  }
}
