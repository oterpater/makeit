// // # Hotel

// // Crear una función constructora llamada `Hotel` que recibe un número
//  como argumento y crea el mismo número de habitaciones 
//  (usando la función constructora `Room`) en un arreglo 
//  llamado `rooms`. Cada habitación debe tener su propio número 
//  iniciando desde 1.

// // Agregar un método llamado `checkin` que reciba como argumento 
// el número de una habitación y un número de invitados. Si la habitación 
// existe y está disponible cambia los atributos  `available` a `false` u 
// `guests` al número de invitados y retorna `true`. De lo contrario 
// (la habitación no existe o no está disponible) retorne `false`.

// // Agregar un método llamado `checkout` que recibe como argumento 
// el número de una habitación. Si la habitación no está disponible 
// cambia los atributos `availlable` a `true` y `guests` a `0`, y retorna
//  `true`. De lo contrario (la habitación no existe o no está ocupada) 
//  retorna `false`.

// // Agrega 2 métodos `getAvailableRooms` y `getOccupiedRooms` 
// que retornen un arreglo con las habitaciones disponibles y 
// habitaciones ocupadas respectivamente.

// // ```javascript
// // var hotel = new Hotel(2);
// // hotel.getAvailableRooms(); // an array with two rooms.
// // hotel.getOccupliedRooms(); // []

// // hotel.checkin(1, 3); // true
// // hotel.checkin(1, 8); // false (the room 1 is occupied)
// // hotel.checkin(4, 8); // false (the room 4 doesn’t exists)

// // hotel.getAvailableRooms(); // an array with one element: room 2
// // hotel.getOccupliedRooms(); // an array with one element: room 1

// // hotel.checkout(1); // true
// // hotel.checkout(1); // false, (room 1 is available)
// // hotel.checkout(4); // false, (room 2 is available)
// // ```

class Room{
	constructor(number){
		this.number = number;
		this.available = true;
		this.guests = 0;
	}
};

// function Hotel(hotelRooms){
// 	this.hotelRooms = hotelRooms;
// 	this.rooms = [];
// };

// Hotel.prototype.createRooms = function (){
// 	for(let i = 1; i <= this.hotelRooms; i++){
// 		this.rooms.push(new Room(i));
// 	};
// };


// Hotel.prototype.checkin = function (number,guestsNum){
// 	if(number >= 1 && number <= this.hotelRooms){
// 		if(this.rooms[number-1].available === true){
// 			this.rooms[number-1].available = false;
// 			this.rooms[number-1].guests = guestsNum;
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	} else {
// 		return false;
// 	}
// };

// Hotel.prototype.checkout = function (number){
// 	if(number >= 1 && number <= this.hotelRooms){
// 		if(this.rooms[number-1].available === false){
// 			this.rooms[number-1].available = true;
// 			this.rooms[number-1].guests = 0;
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	} else {
// 		return false;
// 	}
// };

// Hotel.prototype.getAvailableRooms = function(){
// 	return this.rooms.filter(elem => elem.available === true);
// };

// Hotel.prototype.getOccupiedRooms = function(){
// 	return this.rooms.filter(elem => elem.available === false);
// };

class Hotel{
	constructor(hotelRooms){
		this.hotelRooms = hotelRooms;
		this.rooms = [];
		for(let i = 1; i <= this.hotelRooms; i++){
			this.rooms.push(new Room(i));
		};
	}

	checkin(number,guestsNum = 1){
		if(number > 0 && number <= this.hotelRooms){
			if (this.rooms[number-1].available === true){
				this.rooms[number-1].available = false;
				this.rooms[number-1].guests = guestsNum;
				return true;
			} else {
				return false;
			}; 
		} else {
			return false;
		};
	};

	checkout(number){
		if(number > 0 && number <= this.hotelRooms){
			if (this.rooms[number-1].available === false){
				this.rooms[number-1].available = true;
				this.rooms[number-1].guests = 0;
				return true;
			} else {
				return false;
			};
		} else {
			return false;
		};
	};

	getAvailableRooms(){
		return this.rooms.filter(elem => elem.available === true);
	};

	getOccupiedRooms(){
		return this.rooms.filter(elem => elem.available === false);
	};

};

module.exports = {Room, Hotel};

const myHotel = new Hotel(2);
console.log(myHotel.rooms)
console.log(myHotel.checkin(1,3))
console.log(myHotel.rooms)
console.log(myHotel.checkout(1))
console.log(myHotel.rooms)
console.log(myHotel.checkin(2,3))
console.log(myHotel.rooms)
console.log("Disponibles")
console.log(myHotel.getAvailableRooms())
console.log("Ocupados")
console.log(myHotel.getOccupiedRooms())


















