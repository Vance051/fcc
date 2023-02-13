// Roman Numerals Decoder

// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

function solution (roman) {
    // complete the solution by transforming the 
    // string roman numeral into an integer
    let result = 0;
    for (let i = 0; i<roman.length; i++) {
      if (  (roman[i] === 'I' && roman[i+1] === 'V') || (roman[i] === 'I' && roman[i+1] === 'X')) {
        result-=2}
      if ((roman[i] === 'X' && roman[i+1] === 'L') ||(roman[i] === 'X' && roman[i+1] === 'C') ) {result-=20}
      if ((roman[i] === 'C' && roman[i+1] === 'D') || (roman[i] === 'C' && roman[i+1] === 'M')) {result-=200}
      switch (roman[i]) {
          case 'I' : result +=1;
          break;
          case 'V' : result +=5;
          break;
          case 'X' : result +=10;
          
          break;
          case 'L' : result +=50;
          break;
          case 'C' : result +=100;
          break;
          case 'D' : result +=500;
          break;
          case 'M' : result +=1000;
          break;
         
      }
    }
      return result;
  }