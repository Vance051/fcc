// Use the Conditional (Ternary) Operator
// Use the conditional operator in the checkEqual function to check if two numbers are equal or not. 
// The function should return either the string Equal or the string Not Equal.



function checkEqual(a, b) {
    return a === b ? 'Equal' : 'Not Equal'
   }
   
   checkEqual(1, 2);


//    Use Multiple Conditional (Ternary) Operators=========
function checkSign(num) {
    return num === 0 ? 'zero' :
          num > 0 ? 'positive' : 'negative'
    }
    
    checkSign(10);