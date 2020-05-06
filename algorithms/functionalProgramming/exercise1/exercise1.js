
// Ejercicio 1


const arr = [1, 2, 3, 4, 5, 6];
    
// utilizar el método map de los arreglos para duplicar cada elemento
// [2, 4, 6, 8, 10, 12]

const arrDouble = arr.map(elem => elem * 2);
console.log(arrDouble);
    
// utilizar el método filter para filtrar los números pares de arr
// [2, 4, 6]

const arrEven = arr.filter(elem => elem%2 === 0);
console.log(arrEven);

// utilizar el método reduce para sumar todos los elementos
// 21

const arrSum = arr.reduce((acc,cur) => acc + cur);
console.log(arrSum);

