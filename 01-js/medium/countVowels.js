/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let vowelsCount = 0;

  str = str.toLowerCase();

  const hashArray = ["a", "e", "i", "o", "u"];

  for (let i of str) {
    if (hashArray.includes(i)) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

module.exports = countVowels;
