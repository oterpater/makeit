// Flatten Array

// Write a function called flatten that receives an 
// array of arrays and returns a flattened array.

//Ciclo
function flatten(arr){
	return arr.join(",").split(",").map(elem => parseFloat(elem));
};

//Recursivo
function flatten(arr){
	const [first,...rest] = arr;
	if(first === undefined) return [];
	if(Array.isArray(first)) return flatten([...first,...rest]);

	return [first].concat(flatten(rest));
};

console.log(flatten([[1, 2, 3], [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([[[1, [1.1]], 2, 3], [4, 5]])); // [1, 1.1, 2, 3, 4, 5]
