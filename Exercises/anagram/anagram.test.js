const anagram = require("./anagram");

describe("Anagrama", () => {

	it("should return false when str1 is Hola and str2 is Sara", () => {
		expect(anagram("Hola","Sara")).toBeFalsy();
	});

	it("should return false when str1 is Hola and str2 is Mundo", () => {
		expect(anagram("Hola","Mundo")).toBeFalsy();
	});

	it("should return true when str1 is anagram and str2 is nagaram",() => {
		expect(anagram("anagram","nagaram")).toBeTruthy();
	});
});