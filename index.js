function isPalindrome(word) {
  // Write your algorithm here
}

/* 
  Add your pseudocode here
*/

function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
  // Compare the cleaned string with its reversed version
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Test cases
console.log(isPalindrome('abba'));      // true
console.log(isPalindrome('racecar'));   // true
console.log(isPalindrome('a'));         // true
console.log(isPalindrome('robot'));     // false
console.log(isPalindrome('ab'));        // false
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
