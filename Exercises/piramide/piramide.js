// ## Pyramid

// Crea una función `pyramid` que reciba un número como 
// argumento. Imprime en consola una figura de una pirámide 
// de `N` niveles usando el carácter `#`. En cada nivel los 
// elementos deben estar centrados, se deben agregar espacios
//  en blanco a la derecha e izquierda de ser necesario.

// ```javascript
// pyramid(1);
// // ‘#’
// Pyramid(2);
// // ‘ # ‘
// // ‘###’
// pyramid(3);
// // ‘  #  ‘
// // ‘ ### ’
// // ‘#####’
// ```

// #
// ###
// #####
// #######
// #########

function pyramid(num){
    let block='#';
    for (let i = 1; i <= num; i++){
        space = " ";
        spaceFi = space.repeat(num - i)
        console.log(spaceFi + block + spaceFi);
        block += "##";
    };
};

// function pyramid(numPisos) {
//     for (let i = 0; i < numPisos; i++) {
//     	let piso = '';

//     	for (let j = 1; j < numPisos - i; j++) {
//         	piso = piso + " ";
//       	};  

//       	for (let j = -1; j < i * 2; j++) {
//         	piso = piso + '#';
//       	};

//     	for (let j = 1; j < numPisos - i; j++) {
//         	piso = piso + " ";
//       	}; 
//     };
//     return piso;
//   };
  
console.log(pyramid(5));

