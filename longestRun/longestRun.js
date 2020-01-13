/*
Longest Run

Write a function that, given a string, finds the longest run of identical characters and
 returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs.

longestRun("abbbcc") // [ 1, 3 ]
longestRun("aabbc") // [ 0, 1 ]
longestRun("") // [ 0, 0 ]
longestRun("mississippi") // [ 2, 3 ]
longestRun("abcdefgh") // [ 0, 0 ]
longestRun("abccccccc") // [ 2, 8 ]
*/

var longestRun = function (string) {
    let result = [0,0];
    let longest = 1;
    let start = 0;
    let x = 1;
    let current;
    for (let i = 0; i < string.length; i++) {
      if (string[i] !== current) {
          x > longest ? (longest = x , result = [start, i - 1]): current = string[i], start = i , x = 1
      } else {
        x++
          if (i === string.length - 1) {
           x > longest ? result = [start, i]:null
        }
      }
    }
    return string.length > 0 ? result : null;
  };