# PART 1
   # Variables and Datatypes

// Declare variables
let name = "John Doe";          // String
let age = 25;                   // Number
let isStudent = true;           // Boolean

// Output the information in the desired format
console.log(`Name: ` + name);
console.log(`Age: ` + age);
console.log(`Is student: ` + isStudent);
  

   # Operators
function calculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Invalid input. Please enter valid numbers.");
        return;
    }

    let operation = prompt("Choose an operation (+, -, *, /):");

    if (operation === '+') {
        console.log("Result:", num1 + num2);
    } else if (operation === '-') {
        console.log("Result:", num1 - num2);
    } else if (operation === '*') {
        console.log("Result:", num1 * num2);
    } else if (operation === '/') {
        if (num2 === 0) {
            console.log("Cannot divide by zero.");
        } else {
            console.log("Result:", num1 / num2);
        }
    } else {
        console.log("Invalid operation. Please choose a valid operation.");
    }
}
calculator();



  # Functions

function greetUser(name) {
            return `Hello, ${name}! Welcome to our website.`;
        }

        const userName = "John"; 
        const greetingMessage = greetUser(userName);
        document.getElementById("greeting").textContent = greetingMessage;
