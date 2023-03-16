// i have 3*3 board , i want to switch x and y position , show me js code in functional way
const board = [
    ['X', '', 'O'],
    ['', 'O', 'X'],
    ['O', '', 'X']
];
    
    
export const transpose = matrix => matrix[0].map((_, i) => matrix.map(row => row[i]));
// const reverseRows = matrix => matrix.reverse();

// const switchPositions = matrix => transpose(matrix);

// console.log(transpose(board));