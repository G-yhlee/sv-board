// i have 3*3 matrix , i want to get only diagonal line , show me js code with use map function

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
  
//   const diagonal = matrix.map((row, i) => row[i]);
//   const secondaryDiagonal = matrix.reverse().map((row, i) => row[i]);

  export const getDiagonals = (matrix) => 
    [matrix.map((row, i) => row[i]),matrix.reverse().map((row, i) => row[i])]
  