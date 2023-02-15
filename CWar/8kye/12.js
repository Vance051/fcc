// // Training JS #5: Basic data types--Object --8
// Task
// Give you a function animal, accept 1 parameter:obj like this:

// {name:"dog",legs:4,color:"white"}

function animal(obj){
    let animalWho = {
    name: obj.name,
    legs: obj.legs,
    color: obj.color
  };
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}

