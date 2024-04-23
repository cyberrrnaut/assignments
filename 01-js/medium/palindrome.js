/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Convert the string to lowercase
  str = str.toLowerCase();

  // Remove non-alphanumeric characters
  str = str.replace(/[^a-z0-9]/g, '');

  // Check if the reversed string is equal to the original string
  return str === str.split('').reverse().join('');
}

module.exports = isPalindrome;
