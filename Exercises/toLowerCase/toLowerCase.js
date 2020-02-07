// Implement function ToLowerCase() that has a string parameter str, and
// returns the same string in lowercase.

// Example 1:

// Input: "Hello"
// Output: "hello"
// Example 2:

// Input: "here"
// Output: "here"
// Example 3:

// Input: "LOVELY"
// Output: "lovely"


function toLowerCase(str){
	const letters = str.split("");
	for(let i = 0; i < letters.length; i++){
		for(let j = 65; j < 91; j++){
			if( letters[i] === String.fromCharCode(j)){
				letters[i] = String.fromCharCode(j + 32);
			}
		}
	}

	return letters.join("");
};

// console.log(String.fromCharCode(70));
console.log(toLowerCase("Hello"));
console.log(toLowerCase("LOVELY"));