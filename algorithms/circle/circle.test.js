const Circle = require("./circle");

describe("El area y la circunferencia",()=>{


    it ("should calculate the area correctly",()=>{
        const circle = new Circle(5);
        expect(circle.area()).toBeCloseTo(78.539);
    });    

    it ("should calculate the circunferencia correctly",()=>{
        const circle = new Circle(5);
        expect(circle.circunferencia()).toBeCloseTo(31.415);
    });
  
});