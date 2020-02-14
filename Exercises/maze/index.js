// ## Maze

// Write a constructor function called `Maze` that receives a 
// number as an argument that represents the size of a board. 
// There will be a player that will be located at the top left 
// of the board and a prize that will be located at the bottom 
// right of the board.

// Write methods `moveRight`, `moveLeft`, `moveUp`, and `moveDown` 
// that will allow the player to move through the board to reach the
//  prize. They will return true if it is a valid move, false otherwise.

// Write a method called `getMyPosition` that returns an array with
//  two elements representing the position of the player in the 
//  maze using coordinates x and y.

// Write a method called `won` that returns true if the player 
// reached the prize.

// ```javascript
// var game = new Maze(4);
// game.moveRight(); // true
// game.won(); // false

// game.getMyPosition(); // [0, 1]
// game.moveUp(); // false

// game.moveRight(2); // true
// game.getMyPosition(); // [0, 3]
// game.won(); // false

// game.moveDown(3); // true
// game.won(); // true
// ```

// Add a method called drawBoard that draws the maze using `*` as
//  an empty space, `R` to denote my position and `P` to the note 
//  the prize.

// ```javascript
// game.drawBoard();
// // * * * *
// // * R * *
// // * * * *
// // * * * P
// ```

class Maze{
  constructor(num){
    this.num = num
    this.maze = []
    for (let i = 0; i < num; i++){
      let row = []
      for (let j = 0; j < num; j++){
        if (j === 0 && i === 0 ) {
          row.push('R')
        }
        else if(j === num-1 && i === num-1){
          row.push('P')
        }
        else{
          row.push("*")
        }       
      }
      this.maze.push(row)
    }
  }
  moveRight(){
    let row = 0;
    let pos = 0;
    for (let i = 0; i < this.num; i++){
      if (this.maze[i].indexOf('R') > -1 ){
        if(this.maze[i].indexOf('R') === this.num-1) return false
        row = i
        pos = this.maze[i].indexOf('R')
        break
      }
    }
    this.maze[row][pos] = '*'
    this.maze[row][pos+1] = 'R'
    return true
  }
  moveLeft(){
    let row = 0;
    let pos = 0;
    for (let i = 0; i < this.num; i++){
      if (this.maze[i].indexOf('R') > 0 ){
        if(this.maze[i].indexOf('R') === 0) return false
        row = i
        pos = this.maze[i].indexOf('R')
        break
      }
    }
    this.maze[row][pos] = '*'
    this.maze[row][pos-1] = 'R'
    return true
  }
  moveUp(){
    let row = 0;
    let pos = 0;
    for (let i = 0; i < this.num; i++){
      if (this.maze[i].indexOf('R') > -1 ){
        if( i === 0 ) return false
        row = i
        pos = this.maze[i].indexOf('R')
        break
      }
    }
    this.maze[row][pos] = '*'
    this.maze[row-1][pos] = 'R'
    return true
  }
  moveDown(){
    let row = 0;
    let pos = 0;
    for (let i = 0; i < this.num; i++){
      if (this.maze[i].indexOf('R') > -1 ){
        if( i === this.num-1 ) return false
        row = i
        pos = this.maze[i].indexOf('R')
        break
      }
    }
    this.maze[row][pos] = '*'
    this.maze[row+1][pos] = 'R'
    return true
  }
  won(){
    if(this.maze[this.num-1][this.num-1] === 'R') return true
    return false
  }
  getMyPosition(){
    let currentPosition = []
    for(let i = 0; i < this.num; i++){
      for(let j = 0; j < this.num; j++){
        if(this.maze[i][j] === "R"){
          currentPosition.push(j,i)
        }
      }
    }
    return currentPosition
  }
  drawBoard(){
    return this.maze
  }
}
const lab = new Maze(4)
lab.moveRight()
lab.moveRight()
lab.moveRight()
lab.moveRight()
lab.moveLeft()
lab.moveDown()
console.log(lab.won())
console.log(lab.moveDown())
lab.moveRight()
lab.moveDown()
console.log(lab)
console.log(lab.won())
lab.moveLeft()
console.log(lab.getMyPosition())
console.log(lab.drawBoard())





