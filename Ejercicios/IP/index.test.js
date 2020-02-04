const defangIPaddr = require('./index');

it("should replace . with [.] correctly", () => {
	expect(defangIPaddr("1.1.1.1")).toBe("1[.]1[.]1[.]1");
});

it("should replace . with [.] correctly", () => {
	expect(defangIPaddr("255.100.50.0")).toBe("255[.]100[.]50[.]0");
});
