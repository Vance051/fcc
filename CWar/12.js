// // Cats and shelves
// An infinite number of shelves are arranged one above the other in a staggered fashion.
// The cat can jump either one or three shelves at a time: from shelf i to shelf i+1 or i+3
// (the cat cannot climb on the shelf directly above its head), according to the illustration:
// Task
// Find the minimum number of jumps to go from start to finish

function solution(start, finish) {
  let def = finish - start;
  if (def % 3 === 0) {
    return def / 3;
  } else if (def % 3 === 2) {
    return (def - 2) / 3 + 2;
  } else if (def % 3 === 1) {
    return (def - 1) / 3 + 1;
  }
}
