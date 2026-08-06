// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

function createMatirx(matrix, row, column){
    for(let i = 0; i < row; i++){
        const values = readlineSync.question(`Enter row ${i +  1}: `).split(" ");
        matrix.push([]);
        for(let j =0; j < column; j++){
            matrix[i].push(Number(values[j]));
        }
    }

    return matrix;
}

function print_matrix(matrix){
    stringMatrix = "";
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            stringMatrix += `${matrix[i][j]}   `;
        }
        console.log(stringMatrix);
        stringMatrix = "";
    }
    console.log("------------");
}

function transposeMatrix(matrix){
    let transposedMatrix = [];

    for(let i = 0; i < matrix[0].length; i++){
        transposedMatrix.push([]);
    }

    for(let i = 0; i < matrix.length; i++){  
        for(let j = 0; j < matrix[i].length; j++){
            transposedMatrix[j].push(matrix[i][j]);
        }
    }

    return transposedMatrix;
}

function addMatrix(matrix1, matrix2){
    let addedMatrix = []
    if (matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length){
        console.log("Can't add matrices of uneven size.")
        return;
    }

    for(let i = 0; i < matrix1.length; i++){
        addedMatrix.push([])
    }

    for(let i = 0; i < matrix1.length; i++){
        for(let j = 0; j < matrix1[0].length; j++){
            addedMatrix[i].push(matrix1[i][j] + matrix2[i][j]);
        }
    }

    return addedMatrix;
}

function multiplyMatrix(matrix1, matrix2){
    let multipliedMatrix = [];
    if(matrix1[0].length !== matrix2.length){
        console.log("Cannot multiply matrices");
        return;
    }

    for(let i = 0; i < matrix1.length; i++){
        multipliedMatrix.push([])
    }

    for(let i = 0; i < matrix1.length; i++){
        for(let j = 0; j < matrix1.length; j++){
            let sum = 0;
            for(let k = 0; k < matrix1.length; k++){
                sum += matrix1[i][k] * matrix2[k][j]
            }
            multipliedMatrix[i].push(sum)
        }
    }

    return multipliedMatrix;
}

function main(){
    let matrix = [];

    const rows = readlineSync.questionInt("Enter number of rows: ");
    const columns = readlineSync.questionInt("Enter number of columns: ");

    matrix = createMatirx(matrix, rows, columns);
    const transposed = transposeMatrix(matrix);
    const added = addMatrix(matrix, matrix);
    const multiplied = multiplyMatrix(matrix, matrix);

    console.log("Original Matrix:");
    print_matrix(matrix);

    console.log("Transposed Matrix:");
    print_matrix(transposed);

    console.log("Added matrix:");
    print_matrix(added);

    console.log("Multiplied Matrix:");
    print_matrix(multiplied);
}

//Note, I used the same matrix when performing the addition and multiplication to keep the program simple.
main()