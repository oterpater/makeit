// Character Exists?

// Write a function called charExists that receives two arguments: 
// a string and a character. It returns true if the character exists in 
// the string, false otherwise.

// Note: Use recursion to solve this exercise.


//Ciclo
// function charExists(str,char){
// 	let result = [];
// 	for(let i = 0; i < str.length; i++){
// 		console.log(str[i]);
// 		if(str[i] === char){
// 			return true;
// 		} 
// 	};
// 	return false;
// };

function charExists(str,char){
	let strArr = str.split("");
	for(let i = 0; i < strArr.length; i++){
		if(strArr.indexOf(char) >= 0){
			return true;
		}
	};
	return false;
};



//Recursivo

function charExists(str,char){
	if(str.length <= 0){
		return false;
	}

	if(str[str.length - 1] === char){
		return true;
	} 

	str = str.substring(0,str.length - 1);
	return charExists(str,char);
};

console.log(charExists("hello", "l")); // true
console.log(charExists("world", "n")); // false





