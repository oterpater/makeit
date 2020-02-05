const Square = require("./cuadrado");

describe("Square function test", () => {
	const s1 = new Square(5);
		
	it("should set attribute side", () => {
		expect(s1.side).toBe(5);
	});

	it("should calculate perimeter correctly", () => {
		expect(s1.perimeter()).toBe(20);
	});
});