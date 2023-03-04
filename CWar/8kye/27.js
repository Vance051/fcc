// Grasshopper - Summation -8k
// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
//
// For example (Input -> Output):
//
// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
let summation = function (num) {
    let count = 0
    let i = 1
    if (num === 1) {
        return 1
    }
    while (i <= num) {
        count += i
        i++
    }
    return count
}