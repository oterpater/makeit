// # TicTacToe

// Write a function called `tictactoe` that receives a matrix and
//  returns true if it's winning for `X`, `O`, `tie`.

// ```javascript
// console.log(tictactoe([
//   ['X', '', 'O'],
//   ['', 'X', 'O'],
//   ['O', '', 'X']
// ])); // X

// console.log(tictactoe([
//   ['O', 'X', 'O'],
//   ['O', 'X', 'O'],
//   ['O', '', 'X']
// ])); // O

// console.log(tictactoe([
//   ['O', 'X', 'O'],
//   ['X', 'X', 'O'],
//   ['O', 'O', 'X']
// ])); // tie
// ```


function tictactoe(mat){

  let diagonal = []
  let diagonal2 =[mat[2][0], mat[1][1], mat[2][0]]; 
  if((diagonal2.filter(elem => elem === "X").length) === 3 )return 'X'
  else if((diagonal2.filter(elem => elem === "0").length) ===3 )return '0'

  for(let i = 0; i < mat.length; i++) {
    
    let column = [];
    
    if((mat[i].filter(elem => elem === "X").length) ===3 )return 'X'
    else if((mat[i].filter(elem => elem === "O").length) ===3 )return 'O'
    else {
      for(let j = 0; j < mat.length; j++){
        column.push(mat[j][i])
        if(j === i){
          diagonal.push(mat[j][i])
        }
      }
      if((column.filter(elem => elem === "X").length) === 3 )return 'X'
      else if((column.filter(elem => elem === "O").length) === 3 )return 'O'
      else if((diagonal.filter(elem => elem === "X").length) === 3 )return 'X'
      else if((diagonal.filter(elem => elem === "0").length) ===3 )return '0'

    }
  }
  return 'tie'
}













