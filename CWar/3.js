// The 'if' function ---8
function _if(bool, func1, func2) {
    func1  => { return console.log('True')}
  func2  => {return console.log('False')}
    bool ? func1() : func2();
    // ...
  }