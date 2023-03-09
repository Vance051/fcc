// is it a palindrome?
//     Write a function that checks if a given string (case insensitive) is a palindrome.
function isPalindrome(x) {
    let y = x.toLowerCase().split('').reverse().join('')
    return x.toLowerCase() === y
}