// 1. Character Type Check (Number, Uppercase, or Lowercase)

// let char = prompt("Enter a character:");
// let asciiCode = char

// if (asciiCode >= 48 && asciiCode <= 57) {
//     document.write("The character is a number.");
// } 
// else if (asciiCode >= 65 && asciiCode <= 90) {
//     document.write ("The character is an uppercase letter.");
// } 
// else if (asciiCode >= 97 && asciiCode <= 122) {
//     document.write("The character is a lowercase letter.");
// } 
// else {
//     document.write("The character is not a number or letter.");
// }


// 2. Larger Integer or Equality Check

// let num1 = prompt("Enter the first integer:");
// let num2 = prompt("Enter the second integer:");

// if (num1 > num2) {
//     document.write('The larger number is ',num1);
// } 
// else if (num2 > num1) {
//     document.write('The larger number is', num2);
// } 
// else {
//     document.write("Both numbers are equal.");
// }


// 3. Number Sign Check (Positive, Negative, or Zero)

// let number = prompt("Enter a number:");

// if (number > 0) {
//     document.write("The number is positive.");
// }
//  else if (number < 0) {
//     document.write("The number is negative.");
// } 
// else {
//     document.write("The number is zero.");
// }


// 4. Vowel Check

let chars = prompt("Enter a Single Vowel Character:");
chars=chars.toLowerCase();
let vowel = (chars === "a" || chars === "e" || chars === "i" || chars === "o" || chars === "u");

document.write(vowel);


// 5. Password Validation

// let correctPassword = "12345";
// let inputPassword = prompt("Enter your password:");

// if (!inputPassword) {
//     document.write("Please enter your password.");
// }
//  else if (inputPassword === correctPassword) {
//     document.write("Correct! The password you entered matches the original password.");
// }
//  else {
//     document.write("Incorrect password.");
// }


// 6. Fix the Broken If/Else Statement

// let greeting;
// let hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// }
//  else {
//     greeting = "Good evening";
// }
// document.write(greeting);


// 7. Time of Day Message (24-Hour Clock Format)

// let time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900):"));

// if (time >= 0 && time < 1200) {
//     document.write("Good morning");
// } 
// else if (time >= 1200 && time < 1700) {
//     document.write("Good afternoon");
// }
//  else if (time >= 1700 && time < 2100) {
//     document.write("Good evening");
// } 
// else if (time >= 2100 && time <= 2359) {
//     document.write("Good night");
// }
//  else {
//     document.write("Invalid time format.");
// }

