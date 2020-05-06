// // ## Anagram

// // Escribe una función llamada `anagram` que reciba como argumento
//  dos cadenas de texto y retorne `true` si las
//   cadenas son anagramas, de lo contrario retorna 
//   `false`. Dos palabras son anagramas si ambas palabras
//    tienen los mismos carácteres.

// // ```javascript
// // anagram("anagram", "nagaram"); // true
// // anagram("hello", "world"); // false
// // ```

function anagram(str1,str2){
	let word1 = str1.split("");
	let word2 = str2.split("");

	let result = word1.filter(
		function(e) {
      		return this.indexOf(e) >= 0;
    	},
        word2
	);

	if(result.length === word2.length){
		return true;
	} else {
		return false;
	};
	
};

module.exports = anagram;

console.log(anagram("anagram", "nagaram"));
console.log(anagram("hello", "world"));



// function isAnagram(s, t) {
//     if (s.split("").sort().join("") === t.split("").sort().join("")){
// 		return true;
// 	} else {
// 		return false;
// 	}
// };






































