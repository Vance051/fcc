// Generate Random Fractions with JavaScript
// Change randomFraction to return a random number instead of returning 0.
function randomFraction() {

    // Only change code below this line
  
    return Math.random();
  
  }


  // ==============Generate Random Whole Numbers with JavaScript


  function randomWholeNum() {

    // Only change code below this line
  
    return Math.floor(Math.random() * 10);
  ;
    }

    // ===========================Generate Random Whole Numbers within a Range



    function randomRange(myMin, myMax) {
      // Only change code below this line
      let random = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
      return random;
      // Only change code above this line
    }