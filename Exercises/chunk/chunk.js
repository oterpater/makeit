// ## Chunk

// Crea una función `chunk` que reciba un arreglo y una número 
// como argumentos. Divide el arreglo original en varios sub arreglos 
// del tamaño especificado.

// ```javascript
// chunk([1, 2, 3, 4], 2); // [ [1, 2], [3, 4] ]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3); // [ [ 1, 2, 3], [4, 5, 6], [7, 8] ]
// chunk([1, 2, 3, 4, 5], 10); // [ [ 1, 2, 3, 4, 5] ]
// ```

function chunk(arr,num){
	let result = [];
	if ((arr.length/num) < 1){
		result.push(arr);		
	} else {
		let arrNum = Math.round(arr.length/num);
		let posIn = 0;
		let posFi = num;
		for(let i = 0; i < arrNum; i++){
			result.push(arr.slice(posIn,posFi));
			posIn = posIn + num;
			posFi = posFi + num;
		};
	}
	return result;
};

// function chunk(array, num){
//     let newArray=[]
//     for(let i=0;i<array.length;i+=num){        
//         newArray.push(array.slice(i,i+num));
//     };

//     return newArray;
// } 

console.log(chunk([1,2,3,4],2));
console.log(chunk([1, 2, 3, 4, 5], 10));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
