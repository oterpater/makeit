// ## La palabra más larga

// Escribe una funcón llamada `findLongestWordLength` que reciba como argumento una cadena de texto y retorne la longitud the la palabra más larga de la oración.

// ```javascript
// findLongestWordLength("hi world"); // 5
// findLongestWordLength("the vampire serie"); // 7
// findLongestWordLength("The quick brown fox jumped over the lazy dog"); // 6
// ```

function findLongestWordLength(str1){
    let words = str1.split(" ");
    let lengthWords = [];

    for (let i = 0; i < words.length; i++){
        let word = words[i];
        lengthWords.push(word.length);
    };
    

   return Math.max(...lengthWords); 


}; 

module.exports = findLongestWordLength;

console.log(findLongestWordLength(""));