/*
Even Occurrence
Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence 
items and return the first one. Return null if there are no even-occurrence items.

evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]) // 2
evenOccurrence([ "cat", "dog", "dig", "cat" ]) // "cat"
evenOccurrence([[1,2,3], [1,2], [1,2,3]]) // [1,2,3]
evenOccurrence([{a: 1, b: 2}, {a:1, b:3}, {a:1, b:2}]) // {a:1, b:2}
*/

var evenOccurrence = (input) => {
    let obj = {}
    //debugger;
    if (input.length === 0) {
        return null
    }

    for (let i = 0; i < input.length; i++){
        if (obj.hasOwnProperty(input[i])) {
            obj[input[i]] ++
        } else {
            obj[input[i]] = 1
        }
    }
   // console.log(obj)
    for (let key in obj) {
        if (isNaN(key)) {
          if (obj[key] % 2 === 0) {
            return key;
          }
        }
      }
      for (let val in obj) {
        if (obj[val] % 2 === 0) {
          if (typeof val === 'string' &&  !isNaN(parseInt(val))) {
            return parseInt(val);
          }
        }
    }
    return null 

}
