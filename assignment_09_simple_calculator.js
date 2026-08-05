// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================
//
// TASK: Console-Based Simple Calculator
//
// Build a calculator program that runs in the console and performs basic
// arithmetic operations based on the user's input.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_09_simple_calculator.js
//
// -----------------------------------------------------------------------------
// OPERATIONS YOUR CALCULATOR MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Addition          ( + )    e.g.  10 + 3  =  13
//   2. Subtraction       ( - )    e.g.  10 - 3  =  7
//   3. Multiplication    ( * )    e.g.  10 * 3  =  30
//   4. Division          ( / )    e.g.  10 / 3  =  3.33
//   5. Modulus           ( % )    e.g.  10 % 3  =  1  (remainder)
//   6. Exponentiation    ( ** )   e.g.  2 ** 8  =  256
//   7. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ============================
//        SIMPLE CALCULATOR
//   ============================
//   1. Addition
//   2. Subtraction
//   3. Multiplication
//   4. Division
//   5. Modulus
//   6. Exponentiation
//   7. Quit
//   Select an operation (1-7):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Select an operation (1-7): 4
//   Enter first number : 10
//   Enter second number: 3
//   Result: 10 / 3 = 3.33
//
//   Select an operation (1-7): 4
//   Enter first number : 5
//   Enter second number: 0
//   Error: Cannot divide by zero.
//
//   Select an operation (1-7): 7
//   Goodbye!
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Each arithmetic operation MUST be written as its own function.
// - Use a loop so the calculator keeps running until the user selects Quit.
// - Division by zero must be caught and handled with a clear error message
//   (do NOT let the program crash).
// - Display results to 2 decimal places using .toFixed(2).
// - Handle invalid menu choices gracefully.
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

import readlineSync from 'readline-sync';

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, numm2){
    return (num1 * num2).toFixed(2);
}

function division(num1, num2){
    if(num2 === 0){
        return null;
    }
    return (num1/num2).toFixed(2);
}

function modulus(num1, num2){
    if(num2 === 0){
        return null;
    }
    return (num1%num2).toFixed(2);
}

function exponent(num1, num2){
    return (num1 ** num2);
}

function main(){
    while(true){
        try{
            console.log("============================")
            console.log("     SIMPLE CALCULATOR")
            console.log("============================")
            console.log("1. Addition")
            console.log("2. Subtraction")
            console.log("3. Multiplication")
            console.log("4. Division")
            console.log("5. Modulus")
            console.log("6. Exponentiation")
            console.log("7. Quit")

            const choice = readlineSync.questionInt("Select an operation (1-7): ");

            if(choice == 7){
                console.log("Goodbye!");
                return;
            }

            const num1 = readlineSync.questionInt("Enter number 1: ")
            const num2 = readlineSync.questionInt("Enter number 2: ")

            switch(choice){
                case 1:
                    console.log(`${num1} + ${num2} = ${add(num1, num2)}`);
                    break;

                case 2:
                    console.log(`${num1} - ${num2} = ${subtract(num1, num2)}`);
                    break;

                case 3:
                    console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);
                    break;

                case 4:
                    const result = division(num1, num2);
                    if(result === null){
                        console.log("Error: Cannot divide by zero.");
                    }else{
                        console.log(`${num1} / ${num2} = ${result}`);
                    }
                    break;

                case 5:
                    const result2 = modulus(num1, num2);
                    if(result2){
                        console.log(`${num1} % ${num2} = ${result2}`);
                    }else{
                        console.log("Error: Cannot divide by zero.");
                    }
                    break;

                case 6:
                    console.log(`${num1} ^ ${num2} = ${exponent(num1, num2)}`);
                    break;

                default:
                    console.log("Invalid choice. Must be between 1-4")
            }

        }catch(error){
            console.log("Invalid Input")
        }
    }
}

main();
