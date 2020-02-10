// Factorial

// Write a function called factorial that receives a number and returns 
// the factorial of the number. The factorial is the multiplication of every 
// positive number up to the number. For example, the factorial of 5 is 120 
// because 5 * 4 * 3 * 2 * 1 = 120.

// 5! = 5 * 4 * 3 * 2 * 1

//Ciclo
function factorial(num){
	let result = 1;
	for (let i = 1; i <= num; i++){
		result = result * i
	};
	return result;
};

//Recursivo
function factorial(num){
	if(num <= 1){
		return num;
	}
	return num * factorial(num - 1);
};

console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
console.log(factorial(6)); // 720
console.log(factorial(9)); // 362880