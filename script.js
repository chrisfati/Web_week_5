# PART 1: JAVASCRIPT BASICS
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

#PART 2: JAVASCRIPT CONTROL STRUCTURES 
  # If statement

// Ask the user for their age
let age = prompt("Please enter your age:");

// Convert the input to a number
age = Number(age);

// Get the HTML element to display the message
const messageDiv = document.getElementById("message");

// Check if the user is eligible to vote and display a message
if (age >= 18) {
    messageDiv.textContent = "You are eligible to vote!";
    messageDiv.style.color = "green"; // Optional styling
} else if (age > 0) {
    messageDiv.textContent = "You are not eligible to vote.";
    messageDiv.style.color = "red"; // Optional styling
} else {
    messageDiv.textContent = "Invalid age entered.";
    messageDiv.style.color = "orange"; // Optional styling
}

    # Loops.

// Get the <ol> element
const numberList = document.getElementById("numberList");

// Loop to display numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
// Create a new <li> element
const listItem = document.createElement("li");
// Set the text content of the <li> to the current number
listItem.textContent = i;
// Append the <li> to the <ol>
numberList.appendChild(listItem);
}

# PART 3: INTRODUCTION TO DOM
   # Creating HTML Structures

//JavaScript to add dynamic content
const dynamicDiv = document.getElementById("dynamic-content");

// Adding a message dynamically
const message = document.createElement("p");
message.textContent = "This content was added dynamically using JavaScript!";
dynamicDiv.appendChild(message);

   # Selecting and Modifying HTML Elements
// Change the text of the <h1> element
const heading = document.querySelector("h1");
heading.textContent = "JavaScript in Action!";

// Add a new <p> inside the dynamic-content <div>
const dynamicDiv = document.getElementById("dynamic-content");
const newParagraph = document.createElement("p");
newParagraph.textContent = "This content was added dynamically using JavaScript.";
dynamicDiv.appendChild(newParagraph);
