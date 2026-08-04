// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// =============================================================================
//
// TASK: Array Statistics Calculator
//
// Write a JavaScript program that reads a collection of numbers from the user
// and computes key statistical values using separate functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_03_array_statistics.js
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT / OUTPUT EXAMPLE
// -----------------------------------------------------------------------------
//
//   How many numbers? 5
//   Enter number 1: 4
//   Enter number 2: 7
//   Enter number 3: 2
//   Enter number 4: 9
//   Enter number 5: 1
//
//   Results:
//   Sum:     23
//   Average: 4.6
//   Maximum: 9
//   Minimum: 1
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - You MUST implement each calculation in its own function (see scaffold).
// - You may NOT use JavaScript's built-in array methods like reduce(),
//   Math.max(), or Math.min(). Implement the logic yourself using loops.
// - N must be a positive integer. If the user enters 0 or a negative number,
//   print an error message and stop.
//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================
import readlineSync from 'readline-sync'

function sum(nums){
    let sum = 0;

    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
    }
    return sum;
}

function average(nums){
    let avg = 0;

    for(let i = 0; i < nums.length; i++){
        avg += nums[i];
    }
    return avg/nums.length;
}

function maximum(nums){
    let max = 0;

    for(let i =0; i < nums.length; i++){
        if(nums[i] > max){
            max = nums[i];
        }
    }
    return max;
}

function minimun(nums){
    let mini = nums[0];

    for(let i =0; i < nums.length; i++){
        if(nums[i] < mini){
            mini = nums[i];
        }
    }
    return mini;
}


function main(){
    let numbers = [];
    const amount = readlineSync.questionInt("How many numbers? ");

    if(amount < 1){
        console.log("Invalid number.");
        return;
    }
    
    for(let i =0; i < amount; i++){
        numbers.push(readlineSync.questionInt(`Enter number ${i + 1}: `))
    }

    console.log("Results: ");
    console.log(`Sum:     ${sum(numbers)}`);
    console.log(`Average: ${average(numbers)}`);
    console.log(`Maximum: ${maximum(numbers)}`);
    console.log(`Minimum: ${minimun(numbers)}`);
}

main()