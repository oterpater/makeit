// // Hotel

// // 1. Escribe una función constructora llamada `Room` 
// que recibe un número e inicializa un atributo llamado 
// `number`. También debería inicializar un atributo llamada 
// `available` con el valor de `true` y el atributo `guests` 
// con el valor `0`.

// // ```javascript
// // var r1 = new Room(101);
// // r1.number; // 101
// // r1.available; // true
// // r1.guests; // 0

function Room(num){
	this.num = num;
	this.available = true;
	this.guests = 0;
};

var r1 = new Room(101);
console.log(r1.num);
console.log(r1.available);
console.log(r1.guests);
