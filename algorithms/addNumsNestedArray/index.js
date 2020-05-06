
// ## Add Numbers Of Nested Array

// Write a function addNumsNestedArray that receives an array of numbers 
// and arrays, and returns the sum of all the numbers (including those in the nested arrays).

// Note: Use recursion to solve this exercise.

// addNumsNestedArray([1, [2, 3], 4]); // 10
// addNumsNestedArray([1, [1, 1], [1, [1, 1]], 1]); // 7


function addNumsNestedArray(list){
	const[first,...rest]=list;
	if (first===undefined){
		return [];
	} else if (Array.isArray(first)){
		return addNumsNestedArray([...first,...rest]);
	}
	return parseInt(list[0]+addNumsNestedArray(list.slice(1)))
};

console.log(addNumsNestedArray([1, [1, 1], [1, [1, 1]], 1]))