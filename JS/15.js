// function

function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();

//   Params
function functionWithArgs(a, b) {
  console.log(+a + +b);
}
functionWithArgs(4, 5);

// return
function timesFive(num) {
    return num*5
    }
    
// scopes------------------------------------------
    // Declare the myGlobal variable below this line
const myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal here
oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}