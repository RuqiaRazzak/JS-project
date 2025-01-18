// 1. Display details of a positive integer

// let number = parseFloat(prompt("Enter a positive integer:"));
// document.write("Number: " + number + "<br>");
// document.write("Round off value: " + Math.round(number) + "<br>");
// document.write("Floor value: " + Math.floor(number) + "<br>");
// document.write("Ceil value: " + Math.ceil(number) + "<br>");

// 2. Display details of a negative floating-point number

// let negativeNumber = parseFloat(prompt("Enter a negative floating-point number:"));
// document.write("Number: " + negativeNumber + "<br>");
// document.write("Round off value: " + Math.round(negativeNumber) + "<br>");
// document.write("Floor value: " + Math.floor(negativeNumber) + "<br>");
// document.write("Ceil value: " + Math.ceil(negativeNumber) + "<br>");

// 3. Display the absolute value of a number

// let num = parseFloat(prompt("Enter a number to find its absolute value:"));
// document.write("Absolute value of " + num + " is " + Math.abs(num) + "<br>");

// 4. Simulate a dice roll

// let diceValue = Math.round(Math.random() * 5) + 1;
// document.write("Dice value: " + diceValue + "<br>");

// 5. Simulate a coin toss

// let coinToss = Math.random() < 0.5 ? "Heads" : "Tails";
// document.write("Coin toss result: " + coinToss + "<br>");

// 6. Show a random number between 1 and 100

// let randomNumber = Math.floor(Math.random() * 100) + 1;
// document.write("Random number between 1 and 100:<br>  "  + randomNumber );

// 7. Parse user input for weight

// let weight = prompt("Enter your weight:");
// let parsedWeight = parseFloat(weight);
// document.write("Your weight is: <br> " + parsedWeight + " kilograms<br>");

// 8. Secret number guessing game javascript Copy code

let secretNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = parseInt(prompt("Guess a number between 1 and 10:"));
if (userGuess === secretNumber) {
    document.write("Congratulations! You guessed the secret number " + secretNumber + " correctly!<br>");
}
 else {
    document.write("Sorry, the secret number was " + secretNumber + ". Try again!<br>");
}
