// Training JS #19: Methods of String object--toUpperCase() toLowerCase() and replace()
// Coding in function alienLanguage, function accept 1 parameter:str. str is a sentence.

// We translate the sentence into an alien language according to the following rules:

// Each word in the sentence is separated by spaces. The last letter of each word in the sentence turns to lowercase,
// and the other letters are capitalized. Looks very strange? Because this is the form of alien language ;-)

function alienLanguage(str) {
  //coding here...
  let words = str.toUpperCase();
  words = words.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] =
      words[i].slice(0, -1) + words[i][words[i].length - 1].toLowerCase();
  }
  return words.join(" ");
}
//   second time - not solved
//  let words = str.toUpperCase()
//   words = words.split(' ')
//   for (let i=0; i<words.length; i++) {
//     words[i] = words[i].replace(words[i][words[i].length-1],words[i][words[i].length-1].toLowerCase())
//   }
//   return words
