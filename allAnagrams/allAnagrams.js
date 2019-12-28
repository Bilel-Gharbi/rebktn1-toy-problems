/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  // Your code here.
  let chars = string.split('')
  let nbOfCombination = (string.length - 1) * string.length;

  for (let i = 0; i < chars.length; i++){
    Math.floor(Math.random()
  }
  let start = string[0];//start 

  let rest = string.slice(1) //rest 
  console.log(rest)
  console.log(char)

  return nbOfCombination
};
