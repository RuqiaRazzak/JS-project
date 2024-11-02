// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// let number = 5; 
// let add = number + 5;
// let subtract = number - 5;
// let multiply = number * 5;
// let divide = number / 5;
// document.write("Number:", number ,"<br>", "Addition:", add ,"<br>"," Subtraction:", subtract, 
//   "<br>"," Multiplication:", multiply, '<br>', 'Division:', divide);


// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;


let a = 2, b = 1;
let result = --a - --b + ++b + b--;
document.write('a =', a ,'<br>' ,'b =' , b, '<br>', 'result = ' ,result);
// Explanation:
// --a: pre-decrements 'a' (a becomes 1)
// --b: pre-decrements 'b' (b becomes 0)
// --a - --b: 1 - 0 = 1
// ++b: pre-increments 'b' (b becomes 1)
// b--: post-decrements 'b' after usage (b used as 1, then becomes 0)



// 3. Write a program that takes input a name from user & 
// greet the user.

// let userName = prompt("Enter your name:");
// document.write('Hello   ',userName);


// // 4.Write a program to take input a number from user & 
// display it’s multiplication table on your browser. If user 
// does not enter a new number, multiplication table of 5 
// should be displayed by default.


// let numbers = prompt("Enter a number for multiplication table:", "5") ;
// document.write(`<h3> Multiplication Table of ${numbers} </h3>`);
// for (let i = 1; i <= 10; i++) {
//   document.write (numbers ,' x ' ,i , ' =  '  , numbers * i, '<br>');
// }



// // 5. Subject Marks and Percentage Calculation


// let subject1 = prompt("Enter first subject name:");
// let subject2 = prompt("Enter second subject name:");
// let subject3 = prompt("Enter third subject name:");

// let totalMarks = 100;
// let obtained1 = parseInt(prompt(`Enter obtained marks for ${subject1}:`));
// let obtained2 = parseInt(prompt(`Enter obtained marks for ${subject2}:`));
// let obtained3 = parseInt(prompt(`Enter obtained marks for ${subject3}:`));

// let totalObtained = obtained1 + obtained2 + obtained3;
// let percentage = (totalObtained / totalMarks ) * 100;
// let  percentage1 = (obtained1 / totalMarks ) * 100;
// let  percentage2 = (obtained2 / totalMarks ) * 100;
// let  percentage3 = (obtained3 / totalMarks ) * 100;
// document.write(`
//   <table border="1">
//     <tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks </th><th>Percentage</th></tr>
//     <tr><td>${subject1}</td><td>${totalMarks}</td><td>${obtained1} </td><td>${percentage1}%</td></tr>
//     <tr><td>${subject2}</td><td>${totalMarks}</td><td>${obtained2} </td><td>${percentage2}%</td></tr>
//     <tr><td>${subject3}</td><td>${totalMarks}</td><td>${obtained3} </td><td>${percentage3}%</td></tr>
//     <tr><td><strong>Total</strong></td><td><strong>${totalMarks * 3}</strong></td><td><strong>${totalObtained}</strong></td><td><strong>${percentage.toFixed(2)}%</strong></td></tr>
//     </table>
// `);

