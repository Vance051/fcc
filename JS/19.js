// Boolean

function trueOrFalse(wasThatTrue) {
    // Only change code below this line
  if (wasThatTrue) {
    return 'Yes, that was true'
  }
  return 'No, that was false'
  
    // Only change code above this line
  
  }

//   Comparison with the Equality Operator
  // Setup
function testEqual(val) {
    if (val == 12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);


//   Comparison with the Inequality Operator !=
// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);


//   >>>>>>>>>
function testGreaterThan(val) {
    if (val > 100) {  // Change this line
      return "Over 100";
    }
  
    if (val > 10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);



//    >= <= && ||
function testLogicalOr(val) {
    // Only change code below this line
  
    if (val >20 || val <10) {
      return "Outside";
    }
  
  
    return "Inside";
  }
  
  testLogicalOr(15);


//   Logical Order in If Else Statements
function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }
  
  orderMyLogic(7);