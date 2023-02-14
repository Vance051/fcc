// Powers of 2
// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
function powersOfTwo(n){
    let m = []
    for (let i = n; i >= 0; i--) {
      m.push(i);
    }
    const array = m.reverse()
    return array.map(alem => 2**alem)
  }