const findLongestWordLength = require("./laPalabraMasLarga");

describe("La palabra mas larga", () => {

    it ("should give 0 when str1 is empty",()=>{
        expect(findLongestWordLength("")).toBe(0);
    });

    it ("should give one number when str1 have two words with the longestlength",()=>{
        expect(findLongestWordLength("Hola Nat y Sara")).toBe(4);
    });

    it ("should give str1.length when str1 have only one word",()=>{
        expect(findLongestWordLength("Hola")).toBe(4);
    });

});