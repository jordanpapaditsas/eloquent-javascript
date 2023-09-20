// Write a program that creates a string that represents an 8x8 grid, using new line characters to separate lines.
// At each position of the grid there is either a space or a '#' character. The characters should form a chessboard.
// Passing this string to console.log should show something like this .... ---> square of hash and spaces.

let space = '';
let grid = 8;

for (let i = 0; i < grid; i++) {
  for (let j = 0; j < grid; j++) {
    if ((i + j) % 2 === 0) {
      space += ' ';
    } else {
      space += '#';
    }
  }
  space += '\n';
}

console.log(space);