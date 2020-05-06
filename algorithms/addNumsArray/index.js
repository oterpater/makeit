// # More Algorithms

// ## Add Numbers of Array

// Write a function addNumsArray that receives an array of numbers and 
// returns the sum of all the numbers.

// Note: Use recursion to solve this exercise.

addNumsArray([1, 2, 3, 4]); // 10
addNumsArray([15, 3, 2]); // 20

function addNumsArray(list){
	if (list[0]===undefined) {
		return [];
	}
	return parseInt(list[0]+(addNumsArray(list.slice(1))));  
};

console.log(addNumsArray([1, 2, 3, 4]))