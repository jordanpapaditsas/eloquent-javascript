// You can get the Nth character, or letter, from a string by writing "string"[N].
// The returned value will be a string containing only one character (for example, "b").
// The first character has position 0, which causes the last one to be found at position string.length - 1.
// In other words, a two-character string has length 2, and its characters have position 0 and 1.
// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase "B" characters there are in string.
// Next write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character
// that is to be counted (rather than counting only uppercase "B" characters.) Rewrite countBs to make use of this new function.

// Solution

function countBs(string, char) {
  return countChar(string, char);
}

function countChar(string, char) {
  let counter = 0;
  let stringConverted = string.toLowerCase();
  let charConverted = char.toLowerCase();
// Looping for each character inside of the given string and if it finds the given char, counter adds up.
  for (let i = 0; i < string.length; i++) {
    if (stringConverted[i] === charConverted) {
      counter++;
    }
  }
  return counter;    // Returns the number of the given char which is inside the string.
}

console.log(countBs('jacobiBB', 'b'));
console.log(countBs('jacobiBB', 'B'));