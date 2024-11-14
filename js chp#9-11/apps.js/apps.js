// 1. City Welcome

// let city = prompt("Enter Your City Name!!");
// city=city.toLowerCase();
// if (city == "karachi") {
//     document.write("Welcome!! <br> to city of lights");
// }
// else{
//     document.write("Welcome!! <br> to Pakistan");
// }


// // 2. Gender Greeting

// let gender = prompt("Enter your gender:");
// gender=gender.toLowerCase();
// if (gender == "male") {
//     document.write("Good Morning!! <br> Sir.");
// } else if (gender == "female") {
//     document.write("Good Morning!! <br> Ma'am.");
// }
// else{
//     document.write("Plz Enter Your Gender First!!");
// }


// // 3. Traffic Signal Message

// let color = prompt("Enter traffic signal color:");
// color=color.toLowerCase();
// if (color == "red") {
//     document.write("Must Stop");
// } else if (color == "yellow") {
//     document.write("Ready to move");
// } else if (color == "green") {
//     document.write("Move now");
// }
// else{
//     document.write(" You must need follow the traffic Rules !!");
// }


// // 4. Fuel Check

// let fuel = parseFloat(prompt("Enter Remaining fuel in liters:"));
// if (fuel < 0.25) {
//     document.write("Please refill the fuel in your car!!");
// }
// else if (fuel > 0.25) {
//     document.write("You Have Fuel For Your Need!!");
    
// }
// else{
//     document.write("Plz Enter vaild Information!!");
// }

// // 5. Condition Alerts

// let a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");}

// let b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");}

// let c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");}

//     if (c === 13) {
//     alert("condition 2 is true");}

// if (++c < 14) {
//     alert("condition 3 is true");}

// if (c === 14){
//      alert("condition 4 is true");}

// let materialCost = 20000;
// let laborCost = 2000;
// let totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) 
// alert("The cost equals");

// if (true) {
//     alert("True");
// }
//  if (false) {
    
//     alert("False");
// }

// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }


// // 6. Marks and Grade Calculation

// let totalMarks =prompt("Enter total marks:");
// let marks1 = parseInt(prompt("Enter marks obtained in subject 1:"));
// let marks2 = parseInt(prompt("Enter marks obtained in subject 2:"));
// let marks3 =parseInt(prompt("Enter marks obtained in subject 3:"));

// let obtainedMarks = marks1 + marks2 + marks3;
// let percentage = (obtainedMarks / totalMarks) * 100;
// let grade, remarks;

// if (percentage >= 80) {
//     document.write(
//         "<h3>Marks Sheet</h3>",
//         "Total Marks:", totalMarks,"<br>",
//         "Marks Obtained:", obtainedMarks,"<br>",
//         "Percentage:", percentage,"%<br>",
//        " Grade:", "A","<br>",
//         "Remarks:" , "Excellent"
//       );
      
//  }
//  else if (percentage >= 70) {
//     document.write(
//         "<h3>Marks Sheet</h3>",
//         "Total Marks:", totalMarks,"<br>",
//         "Marks Obtained:", obtainedMarks,"<br>",
//         "Percentage:", percentage,"%<br>",
//        " Grade:", "A","<br>",
//         "Remarks:" , "Good"
//       );

// } 
// else if (percentage >= 60) {
//     document.write(
//         "<h3>Marks Sheet</h3>",
//         "Total Marks:", totalMarks,"<br>",
//         "Marks Obtained:", obtainedMarks,"<br>",
//         "Percentage:", percentage,"%<br>",
//        " Grade:", "B","<br>",
//         "Remarks:" , "You need to improve"
//       );
 
// } 
// else {
//     document.write(
//         "<h3>Marks Sheet</h3>",
//         "Total Marks:", totalMarks,"<br>",
//         "Marks Obtained:", obtainedMarks,"<br>",
//         "Percentage:", percentage,"%<br>",
//        " Grade:", "Fail","<br>",
//         "Remarks:" , "Sorry"
//       );
 

// }



// // 7. Guess Game

// let secretNumber = 7;
// let guess = parseInt(prompt("Guess the secret number (1-10):"));
// if (guess === secretNumber) {
//     document.write("Bingo! <br> Correct answer!!");
// } 
// else if (guess + 1 === secretNumber || guess - 1 === secretNumber) {
//     document.write("Close enough to the correct answer!!");
// }
// else{
//     document.write("Try Again!!")
// }


// // 8. Divisibility Check

// let number = prompt("Enter a number:");
// if (number % 3 === 0) {
//     document.write("The number is divisible by 3");
// }
// else{
//     document.write("The number is not divisible by 3");
// }


// // 9. Even or Odd

// let num = prompt("Enter a number:");
// if (num % 2 === 0) {
//     document.write("The number is even");
// }
//  else {
//     document.write("The number is odd");
// }


// // 10. Temperature Message

// let temp = prompt("Plz Enter Today's Temperature:");
// if (temp > 40) {
//       document.write("It is too hot outside.");
// } 
// else if (temp > 30) {
//     document.write("The Weather today is Normal.");
// }
//  else if (temp > 20) {
//     document.write("Today's Weather is Cool.");
// } else if (temp > 10) {
//     document.write("OMG! Today's weather is so Cool.");
// }
// else{
//     document.write("Plz enter vaild information!!");
// }

// // 11. Simple Calculator

let firstNum = parseInt(prompt("Enter first number:"));
let secondNum = parseInt(prompt("Enter second number:"));
let operation = prompt("Enter operation (+, -, *, /, %):");


if (operation === "+") {
   document.write( 'The result is = <br>', firstNum + secondNum);
} 
else if (operation === "-") {
  document.write( 'The result is  = <br>', firstNum - secondNum);
}
 else if (operation === "*") {
    document.write( 'The result is = <br>'. firstNum * secondNum);
}
 else if (operation === "/") {
   document.write( 'The result is = <br>',firstNum / secondNum);
} 
else if (operation === "%") {
   document.write ('The result is  = <br>',firstNum % secondNum);
} 
else {
    document.write("Invalid operation");
}

