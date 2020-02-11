// Count Chars

// Write a function called countAs that receives a string 
// and returns the number of A's in the string.

// Note: Use recursion to solve this exercise.

//Ciclo

function countAs(str){
	let result = 0;
	for(let i = 0; i < str.length; i++){
		if(str[i] === "a"){
			result++;
		}
	};
	return result;
};


//Recursivo

function countAs(str){	
	

};

console.log(countAs("aaabbb")); // 3
console.log(countAs("abc")); // 1
console.log(countAs("zxy")); // 0
console.log(countAs("ccaaabb")); // 3



