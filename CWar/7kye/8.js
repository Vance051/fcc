// Simple string characters
// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.
// More examples in the test cases.

// Good luck!
function solve(s){
    //..
     let coutUP = 0;
       let coutLow = 0;
   
       let coutNum = 0;
   
       let coutSpec = 0;
   for (let i=0; i<s.length; i++) {
     if (s[i].charCodeAt() >= 65 && s[i].charCodeAt()<=90) {
       coutUP++
     } else if (s[i].charCodeAt() >= 97 && s[i].charCodeAt()<=122) {
       coutLow++
     } else if (s[i].charCodeAt() >= 48 && s[i].charCodeAt()<=57) {
       coutNum++
     } else {coutSpec++}
     }
     return [coutUP, coutLow, coutNum, coutSpec]
   }
   