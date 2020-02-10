// Print Numbers Backwards

// Write a function called printNumsBackwards that receives a number 
// and prints all the numbers from the number to 1. Print each number in a new line.



// Ciclo
function printNumsBackwards(num){
	for (let i = num; i >= 1; i--){
		console.log(i);
	};
};

Recursivo
function printNumsBackwards(num) {
	console.log(num);
	if (num > 1){
		return printNumsBackwards(num - 1);
	}
};

printNumsBackwards(10); // prints 10 to 1
printNumsBackwards(500); // prints 500 to 1


// Print Numbers

// Write a function called printNumbers that receives a number and prints 
// all the numbers from 1 to N. Print each number in a new line.


//Ciclo
function printNumbers(num){
	for(let i = 1; i <= num; i++){
		console.log(i);
	};
};

//Recursivo
function printNumbers(num){
	if (num >= 1){
		printNumbers(num - 1);
		console.log(num);
	}
};

printNumbers(10); // prints 1 to 10
printNumbers(500); // prints 1 to 500




















