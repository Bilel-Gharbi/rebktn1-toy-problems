
//     A friend of mine takes a sequence of numbers from 1 to n (where n > 0).
//     Within that sequence, he chooses two numbers, a and b.
//     He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
//     Given a number n, could you tell me the numbers he excluded from the sequence?

// The function takes the parameter: n (n is always strictly greater than 0) and returns an array or a string (depending on the language)
 //of the form:

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]

// with all (a, b) which are the possible removed numbers in the sequence 1 to n.

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ...will be sorted in increasing order of the "a".

// It happens that there are several possible (a, b). The function returns an empty array (or an empty string) 
//if no possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return nil).
//
//
// Example:
// removNb(26) should return [ {15, 21}, {21, 15} ]

function cheaterFriend (n){
	var result = []
	var bucket = []
	var sum = 0 ;
	for (var i = 1; i <= n ; i++){
		sum += i
	}
	//var sumExcept = sum - a - b
	//var a = (sum - a)/ b - 1
	//var b = (sum - b)/ a - 1

	//var product = a * b

	findB(sum,findA)
	if(product === sumExcept){
		bucket.push(a)
		bucket.push(b)
	}

	console.log(sum)


	return result 
}

function findA(arr){
	for(var i = 1 ; i<=n ; i++){
		
	}
}
function findB(sum,a){
	for(var i = 1 ; i <=n ; i++){
		if((i * a)  === sum -a - i){
			return i
		}
	}
}