// Fibonacci

// Write a function called fibonacci that receives a number and returns the 
// n number of the fibonacci sequence.

// 1 1 2 3 5 8 13 21 34 55 89

//Ciclo
function fibonacci(num){
	let a = 1;
	let b = 0;

  	while (num >= 0){
    	let temp = a;
    	a = a + b;
    	b = temp;
    	num--;
  	}

 	return b;
};

// Recursivo
function fibonacci(num){
	if (num <= 1){
		return 1;
	}
	return fibonacci(num - 1) + fibonacci(num - 2);
};

console.log(fibonacci(0)); // 1
console.log(fibonacci(1)); // 1
console.log(fibonacci(4)); // 5
console.log(fibonacci(5)); // 8



















