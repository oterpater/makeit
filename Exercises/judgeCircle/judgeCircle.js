// There is a robot starting at position (0, 0), the origin, on a 2D plane. 
// Given a sequence of its moves, judge if this robot ends up at (0, 0) after 
// it completes its moves.

// The move sequence is represented by a string, and the character moves[i] 
// represents its ith move. Valid moves are R (right), L (left), U (up), and D (down). 
// If the robot returns to the origin after it finishes all of its moves, return true. 
// Otherwise, return false.

// Note: The way that the robot is "facing" is irrelevant. "R" will always make the 
// robot move to the right once, "L" will always make it move left, etc. Also, assume 
// that the magnitude of the robot's movement is the same for each move.

// Example 1:

// Input: "UD"
// Output: true 
// Explanation: The robot moves up once, and then down once. All moves 
// have the same magnitude, so it ended up at the origin where it started. 
// Therefore, we return true.
 

// Example 2:

// Input: "LL"
// Output: false
// Explanation: The robot moves left twice. It ends up two "moves" to the left 
// of the origin. We return false because it is not at the origin at the end of its moves.

// Input: Los movimientos del robot en un string de R, L, U y D.
// Output: true/false

// Quiero saber si el robot terminó o no en el origen.

function judgeCircle(moves){

// 1. Describir los movimientos entre movimientos en y y movimientos en x: 
// 	R,L son movimiento en x. U,D son movimientos en y.
// 2. Dar valor a los movimientos: R=1,L=-1,U=1,D=-1.
// 3. Separar el movimiento recibido: "UD" -> "U" y "D".
	const arrMoves = moves.split(""); // ["U","D"].
// 4. Agrupar movientos entre movimientos en x y movientos en y.
	const x = arrMoves.filter(elem => (elem === "R") || (elem === "L")); // []; -> [0]
	const y = arrMoves.filter(elem => (elem === "U") || (elem === "D")); // ["U","D"]; -> [1,-1]
// 5. Les asignaría los valores del paso 2.
	if(x.length === 0){
		x.push(0);
	} else {
		for(let i = 0; i < x.length; i++){
			if(x[i] === "R"){
				x[i] = 1;
			} else {
				x[i] = -1;
			};
		};
	};

	if(y.length === 0){
		y.push(0);
	} else {
		for(let i = 0; i < y.length; i++){
			if(y[i] === "U"){
				y[i] = 1;
			} else {
				y[i] = -1;
			};
		};
	};
// 6. Sumaría los movientos de cada eje.
	const movesX = x.reduce((acc,cur) => acc + cur);
	const movesY = y.reduce((acc,cur) => acc + cur);
// 7. Si la sumas me dan 0. Retorno true
	if(movesX === 0 && movesY === 0){
		return true;
	}
// 8. Si alguna de las sumas no es 0. Retorno false.
	return false;
};


console.log(judgeCircle("UD"));
console.log(judgeCircle("LL"));









