const fizzBuzz = require('./index');

it("should return fizzbuzz when n is 15", () => {
    expect(fizzBuzz(15)).toBe("fizzbuzz");
});

it("should return fizz when n is 9", () => {
    expect(fizzBuzz(9)).toBe("fizz");
});

it("should return buzz when n is 20", () => {
    expect(fizzBuzz(20)).toBe("buzz");
});

it("should return 8 when n is 8", () => {
    expect(fizzBuzz(8)).toBe(8);
});
