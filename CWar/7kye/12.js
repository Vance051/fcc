//Shortest Word
//     Simple, given a string of words, return the length of the shortest word(s).
//     String will never be empty and you do not need to account for different data types.

function findShort(s) {
    let word = s.split(' ')
    let sum = word[0].length
    for (let i = 0; i < word.length; i++) {
        if (sum > word[i].length) {
            sum = word[i].length
        }
    }
    return sum
}