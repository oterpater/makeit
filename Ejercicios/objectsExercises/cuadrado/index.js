// Cuadrado

// 1. Escribe una función constructora llamada `Square` que reciba un argumento llamada `side` e inicializa un atributo con el mismo nombre.
// 2. Agrega un método `perimeter` que calcule el perímetro del cuadrado.
// 3. Agrega un método `area` que calcule el área del cuadrado.


function Square(side){
	this.side = side;
};

Square.prototype.perimeter = function(){
	return this.side * 4;
};

Square.prototype.area = function(){
	return this.side * this.side;
};

var s1 = new Square(5);
console.log(s1);
console.log(s1.perimeter()); // 20
console.log(s1.area()); // 25

 