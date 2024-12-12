// 1. Declare an empty array using JS literal notation to store student names in the future.

let studentNames = [];

// 2. Declare an empty array using JS object notation to store student names in the future.

let studentNamesObject = new Array();

// 3. Declare and initialize a strings array.

let stringArray = ["Apple", "Banana", "Cherry"];

// 4. Declare and initialize a numbers array.

let numbersArray = [1, 2, 3, 4, 5];

// 5. Declare and initialize a boolean array.

let booleanArray = [true, false, true];

// 6. Declare and initialize a mixed array.

let mixedArray = ["Hello", 42, true];

// 7. Declare and initialize an array to store available education qualifications in Pakistan.

// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
// document.write("<h2>Qualifications in Pakistan:</h2>");
// document.write("<ol>");
// document.write("<li>" + qualifications[0] + "</li>");
// document.write("<li>" + qualifications[1] + "</li>");
// document.write("<li>" + qualifications[2] + "</li>");
// document.write("<li>" + qualifications[3] + "</li>");
// document.write("<li>" + qualifications[4] + "</li>");
// document.write("<li>" + qualifications[5] + "</li>");
// document.write("<li>" + qualifications[6] + "</li>");
// document.write("<li>" + qualifications[7] + "</li>");
// document.write("</ol>");




// // 8. Store 3 student names and their scores, display scores and percentages.


// let students = ["RUQIA", "ZONIA", "ZARNISH"];
// let scores = [450, 380, 470];
// const totalMarks = 500;
// document.write("<h2>Student Scores and Percentages:</h2>");
//   let percentage = (scores[0] / totalMarks) * 100;
//   let percentages = (scores[1] / totalMarks) * 100;
//   let percentage1 = (scores[2] / totalMarks) * 100;
//   document.write(" Scored of " + students[0]  + " is "+ scores[ 0] +" ."+ "  percentage :" + " (" + percentage + "%)<br>");
//   document.write(" Scored of " + students[1]  + " is "+ scores[ 1] +" ."+ "  percentage :" + " (" + percentages + "%)<br>");
//   document.write(" Scored of " + students[2]  + " is "+ scores[ 2] +" ."+ "  percentage :" + " (" + percentage1 + "%)<br>");



// // 9. Initialize an array with color names and perform operations based on user inputs.

// let color = ["Red", "Green", "Blue"];
// document.write("<h2>Color Array:</h2>");
// document.write(color + "<br>");

// // a. Add color at the beginning.

// let colors = ["Red", "Green", "Blue"];
// let colorToAddBeginning = prompt("Enter color to add at the beginning:");
// colors.unshift(colorToAddBeginning);
// document.write("After adding color at beginning: " + colors+ "<br>");

// // b. Add color at the end.

// let colors1 = ["Red", "Green", "Blue"];
// let colorToAddEnd = prompt("Enter color to add at the end:");
// colors1.push(colorToAddEnd);
// document.write("After adding color at end: " + colors1 + "<br>");

// // c. Add two more colors at the beginning.

// let colors2 = ["Red", "Green", "Blue"];
// colors2.unshift("Pink", "Yellow");
// document.write("After adding two colors at the beginning: " + colors2 + "<br>");

// // d. Delete the first color.

// let colors3 = ["Red", "Green", "Blue"];
// colors3.shift();
// document.write("After deleting the first color: " + colors3+ "<br>");

// // e. Delete the last color.

// let colors4 = ["Red", "Green", "Blue"];
// colors4.pop();
// document.write("After deleting the last color: " + colors4 + "<br>");

// // f. Add color at a specific index.

// let colors5 = ["Red", "Green", "Blue"];
// let indexToAdd = prompt("Enter the index to add a color:");
// let colorNameToAdd = prompt("Enter the color name to add:");
// colors5.splice(indexToAdd, 0, colorNameToAdd);
// document.write("After adding color at index " + indexToAdd + ": " + colors5 + "<br>");

// // g. Delete colors from a specific index.

// let colors6 = ["Red", "Green", "Blue"];
// let indexToDelete = prompt("Enter the index to start deleting colors:");
// let countToDelete = prompt("Enter the number of colors to delete:");
// colors6.splice(indexToDelete, countToDelete);
// document.write("After deleting colors: " + colors6 + "<br>");

// // 10. Store and sort student scores.

// let studentScores = [320, 230, 480, 120];
// document.write(" Scores Of  Students: ",studentScores,"<br>");
// let orderScores=studentScores.sort((a, b) => a - b);
// document.write(" Ordered Scores Of  Students: ",orderScores + "<br>");

// // 11. Initialize an array with city names and copy selected elements.

// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// let selectedCities = cities.slice(1, 4);
// document.write("<h2> Cities List:</h2>");
// document.write(cities+ "<br>");
// document.write("<h2>Selected Cities:</h2>");
// document.write(selectedCities + "<br>");

// // 12. Create a single string from an array using join method.

// let arr = ["This", "is", "my", "cat"];
// let joinedString = arr.join(" ");
// document.write("<h2>Array:</h2>");
// document.write(arr + "<br>");
// document.write("<h2>Joined String:</h2>");
// document.write(joinedString + "<br>");



// // 13. FIFO Array (Queue).

// let queue = [];

// queue.push("Keyboard");
// queue.push("Motherboard");
// queue.push("Monitor");
// queue.push("Printer");

// document.write("<h2>FIFO Array (Queue):</h2> <br>")
// document.write("Devices :  ",queue,"<br>"); 
// let firstout = queue.shift(); 
// document.write("First Out :  " , queue,"<br>");
// let secondout = queue.shift(); 
// document.write("Second Out :  " , queue,"<br>"); 
// let thirdout = queue.shift(); 
// document.write("Third Out :  " , queue,"<br>"); 



// // 14. LIFO Array (Stack).

// let stack = [];

// stack.push("Keyboard");
// stack.push("Monitor");
// stack.push("Printer");
// stack.push("Mouse");
// document.write("<h2>LIFO Array (Stack):</h2>");
// document.write("Devices :   " , stack,"<br>");
// let lastIn = stack.pop(); 
// document.write("LastIn :   " , stack,"<br>");
// let secondLastIn = stack.pop(); 
// document.write("secondLastIn  :  " , stack,"<br>");
// let thirdLastIn = stack.pop(); 
// document.write("ThirdLastIn  :   " ,stack,"<br>"); 


// // 15. Store phone manufacturers in an array and display a dropdown menu.

let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<h2>Phone Manufacturers:</h2>");
document.write("<select>");
document.write("<option>" + phoneManufacturers[0] + "</option>");
document.write("<option>" + phoneManufacturers[1] + "</option>");
document.write("<option>" + phoneManufacturers[2] + "</option>");
document.write("<option>" + phoneManufacturers[3] + "</option>");
document.write("<option>" + phoneManufacturers[4] + "</option>");
document.write("<option>" + phoneManufacturers[5] + "</option>");
document.write("</select>");