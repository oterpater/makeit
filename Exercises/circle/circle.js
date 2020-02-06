// ## Circle

// Escribe una función constructora llamada `Circle` que reciba un argumento llamado `radius` e inicialice un atributo con el mismo nombre.

// Agrega el método `circunferencia` que retorne la circunferencia del circulo.

// Agrega el método `area` que retorne el área del circulo.

// ```javascript
// var circle = new Circle(2);

// circle.circunference(); // 2 * r * Pi
// circle.area(); // Pi * r ^ 2
// ```

class Circle{
   constructor(radius){
       this.radius=radius;
   };

   area(){
    return Math.PI*Math.pow(this.radius,2);   
   };

   circunferencia(){
       return 2* this.radius*Math.PI;
   };
};
var circle = new Circle(5);

module.exports = Circle;

console.log(circle.area());
console.log(circle.circunferencia());