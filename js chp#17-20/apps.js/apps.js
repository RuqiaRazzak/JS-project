// 1. Declare and initialize an empty multidimensional array (Array of arrays).
let multiArray = [[], [], []];

// 2. Declare and initialize a multidimensional array representing a 2D matrix.
let matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
];
document.write("<h2> Matrix:</h2>")
document.write(matrix[0],"<br>");
document.write(matrix[1],"<br>");
document.write(matrix[2],"<br>");


// 3. Program to print numeric counting from 1 to 10.

// document.write("Counting from 1 to 10: <br>");
// for (let i = 1; i <= 10; i++) {
//   document.write(i ,"<br>");
// }

// // 4. Program to print multiplication table of any number (user inputs number and length).

// let tableNumber = prompt("Enter a number for the multiplication table:");
// let tableLength = prompt("Enter the length of the multiplication table:");
// document.write("Multiplication Table of : ", tableNumber,"<br>","Lenght : ",tableLength ,"<br>");
// for (let i = 1; i <= tableLength; i++) {
//   document.write(tableNumber + " X " + i + " = " + tableNumber*i +"<br>");
// }

// // 5. Program to print items of the following array using for loop.

// let fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];
// document.write("<h2>Fruits:</h2>");
// document.write("Element at Index 0 is  : ",fruits[0] ,"<br>");
// document.write("Element at Index 1 is  : ",fruits[1] ,"<br>");
// document.write("Element at Index 2 is  : ",fruits[2] ,"<br>");
// document.write("Element at Index 3 is  : ",fruits[3] ,"<br>");
// document.write("Element at Index 4 is  : ",fruits[4] ,"<br>");


// // 6. Generate the following series in your browser.

// a. Counting: 1 to 15
// document.write("Counting: " + Array.from({ length: 15 }, (_, i) => i + 1),"<br>");

// // // b. Reverse counting: 10 to 1
// document.write("Reverse Counting: " + Array.from({ length: 10 }, (_, i) => 10 - i),"<br>");

// // // c. Even numbers: 0 to 20
// document.write("Even: " + Array.from({ length: 11 }, (_, i) => i * 2),"<br>");

// // // d. Odd numbers: 1 to 19
// document.write("Odd: " + Array.from({ length: 10 }, (_, i) => i * 2 + 1),"<br>");

// // e. Series: 2k to 20k
// document.write("Series: " + Array.from({ length: 10 }, (_, i) => (i + 1) * 2 + "k"),"<br>");

// // 7. Program to enable "search by user input" in an array.

// let items = ["cake", "apple pie", "cookie", "chips", "patties"];
// let searchItem = prompt("Welcome to Zunia's Bakrey.What do wnat to order sir/ma'am?");
// let found = items=searchItem.toLowerCase();
// if (found) {
//  document.write(searchItem ,"  is available in index ", items.length , "  in our Bakrey.");
// } else {
//  document.write("We are Sorry. ",searchItem,"   is not available in our Bakrey.");
// }

// // 8. Program to identify the largest number in the given array.

// let numbers = [24, 53, 78, 91, 12];
// let largest = Math.max(...numbers);
// document.write("The largest number is:", largest);

// // 9. Program to identify the smallest number in the given array.

// let smallest = Math.min(...numbers);
// document.write("The smallest number is:", smallest);

// // 10. Program to print multiples of 5 ranging from 1 to 100.

// document.write("Multiples of 5 from 1 to 100: <br>");
// document.write(Array.from({ length: 20 }, (_, i) => (i + 1) * 5));
