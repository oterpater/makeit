// Binary Search

// Write a function called binarySearch that receives
 // two arguments: an array of ordered numbers and an number. 
 // The function returns true if the second argument is on the array, false otherwise.

// Implement the algorithm described here.

// What is the complexity of this algorithm?

binarySearch([1, 2, 3, 4, 5, 6], 5); // true
binarySearch([1, 2, 3, 4, 5, 6], 8); // false

// BinarySearch(lista, elem)
//   Retorne BinarySearchRecursive(lista, elem, 0, lista.length)

// BinarySearchRecursive(lista, elem, inicio, fin)
//   Si inicio es mayor a fin
//     Retorne -1

//   mitad = mitad entre inicio y fin
//   Si el valor en la posición mitad es igual a elem
//     Retorne mitad
//   Si el valor en la posición mitad es menor a elem
//     Retorne BinarySearchRecursive(lista, elem, mitad + 1, fin)
//   Si el valor en la posición mitad es mayor a elem
//     Retorne BinarySearchRecursive(lista, elem, inicio, mitad - 1)