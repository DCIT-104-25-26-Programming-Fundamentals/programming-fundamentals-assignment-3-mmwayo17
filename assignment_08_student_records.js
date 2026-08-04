// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 8
// =============================================================================
//
// TASK: Student Record Management System
//
// Build a console-based program that stores and manages student information.
// Each student is represented as a JavaScript object containing:
//
//   - name   : the student's full name  (string)
//   - id     : a unique student ID number (number, e.g. 20240001)
//   - scores : an array of scores from multiple assessments (e.g. [75, 88, 90])
//
// Example object:
//   { name: "Alice Mensah", id: 20240001, scores: [78, 85, 90] }
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_08_student_records.js
//
// -----------------------------------------------------------------------------
// FEATURES YOUR PROGRAM MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Add a Student
//      - Ask the user to enter the student's name and ID.
//      - Ask how many scores to enter, then collect each score one by one.
//      - Save the student object and confirm it was added.
//
//   2. Display All Students
//      - Print a formatted table showing every student's:
//          Name, ID, individual scores, and their average score.
//      - If no students have been added yet, print a message saying so.
//
//   3. Calculate Average Score for a Specific Student
//      - Ask the user to enter a student ID.
//      - Find the student and print their average score.
//      - If the ID is not found, print an error message.
//
//   4. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ================================
//      STUDENT RECORD SYSTEM MENU
//   ================================
//   1. Add student
//   2. Display all students
//   3. Calculate average score
//   4. Quit
//   Enter your choice (1-4):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Enter your choice (1-4): 1
//   Student name: Alice Mensah
//   Student ID: 20240001
//   How many scores? 3
//   Enter score 1: 78
//   Enter score 2: 85
//   Enter score 3: 90
//   Student "Alice Mensah" added successfully.
//
//   Enter your choice (1-4): 3
//   Enter student ID: 20240001
//   Alice Mensah's average score: 84.33
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Store all student records in an array of objects.
// - Average scores must be displayed to 2 decimal places (use .toFixed(2)).
// - Each feature MUST be in its own function (see scaffold below).
// - Handle invalid menu choices and missing student IDs gracefully.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================
import readlineSync from "readline-sync"

function add(students){
    let student = {};
    const name = readlineSync.question("Student Name: ");
    const id = readlineSync.questionInt("Student ID: ");
    const scores = [];
    const number = readlineSync.questionInt("How many scores? ")

    for(let i = 1; i < number + 1; i++){
        scores.push(readlineSync.questionInt(`Enter score ${i}: `))
    }

    student.name = name;
    student.id = id;
    student.scores = scores;

    students.push(student)
    console.log(`Student "${student.name}" added successfully.`)
}

function display(students){
    console.log("Student Records:");
    for(let i = 0; i < students.length; i++){
        console.log(`Name: ${students[i].name}`);
        console.log(`Id: ${students[i].id}`);
        console.log(`Scores: ${students[i].scores}`);
        console.log(`Average: ${average(students[i].scores)}`);
        console.log("---------------------------");
    }
}

function average(scores){
    let sum = 0;
    for(let i = 0; i < scores.length; i++){
        sum += scores[i]
    }

    return (sum/scores.length).toFixed(2);
}

function main(){
    let students = [];

    while(true){
        try{ 
            console.log("================================");
            console.log("   STUDENT RECORD SYSTEM MENU");
            console.log("================================");
            console.log("1. Add student");
            console.log("2. Display all students");
            console.log("3. Calculate average score");
            console.log("4. Quit");
            const choice = readlineSync.questionInt("Enter your choice (1-4): ");

            switch(choice){
                case 1:
                    add(students);
                    break;
                case 2:
                    display(students);
                    break;
                case 3:
                    const studentId = readlineSync.questionInt("Enter student ID: ")
                    for(let i = 0; i < students.length; i++){
                        if(students[i].id == studentId){
                            console.log(`${students[i].name} average score: ${average(students[i].scores)}`);
                            return;
                        }
                    }
                    
                    break;
                case 4:
                    console.log("Goodbye!")
                    return;
                    break;
                default:
                    console.log("Not an option. Choose from 1-4.")
            }
        }catch(error){
            console.error("Invalid Input");
        }
    }
}

main()