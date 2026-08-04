// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================
//
// TASK: Fibonacci Sequence Generator
//
// The Fibonacci sequence is a series of numbers where each number is the sum
// of the two numbers before it:
//
//   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//
// Write a JavaScript program with TWO parts, each implemented as a function.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_05_fibonacci_sequence.js
//
// -----------------------------------------------------------------------------
// PART A — Print the First N Terms
// -----------------------------------------------------------------------------
// - Ask the user how many terms (N) to display.
// - Print the first N numbers of the Fibonacci sequence on one line.
//
// Example:
//   How many terms? 7
//   Fibonacci sequence: 0 1 1 2 3 5 8
//
// -----------------------------------------------------------------------------
// PART B — Check if a Number Belongs to the Sequence
// -----------------------------------------------------------------------------
// - Ask the user to enter a number.
// - Determine whether that number is a Fibonacci number.
// - Print an appropriate message.
//
// Example:
//   Enter a number to check: 13
//   13 is a Fibonacci number.
//
//   Enter a number to check: 20
//   20 is NOT a Fibonacci number.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use a loop (not recursion) to generate the sequence in both parts.
// - N must be a positive integer. If it is not, print an error message.
// - Each part must be implemented in its own function (see scaffold below).
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================
import readlineSync from 'readline-sync'

function generate_fibonacci_sequence(number){
    let nums = [0, 1];
    let sequence = ""
    if(number == 2){
        return `${nums[0]} ${nums[1]}`;
    }
    else if(number == 1){
        return "0";
    }
    
    for(let i = 0; i < number - 2; i++){
        nums.push(nums[i] + nums[i + 1]);
    }

    for(let i = 0; i < nums.length; i++){
        sequence += nums[i] +' '
    }

    return sequence
}

function check_num(num){
    if(num == 1 || num == 0){
        return true;
    };

    let nums = [0, 1];
    for(let i = 0; i < num; i++){
        if(num == nums[i] || num == nums[i] + nums[i + 1]){
            return true;
        }
    }

    return false;
}

function main(){
    let length = readlineSync.questionInt("How many terms? ");
    if(length < 1){
        console.log("Input must be greater than 0.")
        return;
    }
    console.log(generate_fibonacci_sequence(length));

    let number = readlineSync.questionInt("Enter a number to check: ");
    if(number < 0){
        console.log("Input must be positive")
        return;
    }

    if(check_num(number)){
        console.log(`${number} is a Fibonacci number.`)
    }else{
        console.log(`${number} is NOT a Fibonacci number.`)
    }
    
}

main()