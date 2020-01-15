// Arrayception

// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.
//

// Examples
//  Input 	Output
//  array:
//  [ [ 5 ], [ [ ] ] ] ==>	2
//  array:
//  [ 10, 20, 30, 40 ] ==>	1
//  array:
//  [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ] ==>	4
//  array:
//  [ ] ==>	0
//  array:
//  [ [ [ ] ] ] ==>	0

//to finish
function Arrayception(array) {
  let counter;
  debugger;
  function inner() {
    counter++;
    for (let index = 0; index < array.length; index++) {
      if (Array.isArray(array[index])) {
        inner();
      }
    }
  }
  inner();
}
