// 1. Write a program that displays current date and time in 
// your browser.

// let newDate = new Date();
// document.write(newDate,"<br>");

// 2. Write a program that alerts the current month in words. 
// For example December.

// let monthName = ["January" ," February "," March" ,"April" ,"May ","June", "July", "August", "September" ,"October", "November",  "December"];
// let newDate = new Date();
// let getMonth = newDate.getMonth();
// document.write("Current Month : " ,monthName[getMonth] ,"<br>");

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show 
// Sun.


// let dayName =["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
// let newDate = new Date();
// let getDay = newDate.getDay();
// document.write("Today Day Is : ",dayName[getDay],"<br>");


// 4. Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today.

// const today = new Date().getDay();
// if (today === 0 || today === 6) {
//    document.write("It's Fun day");
// }
//    else{
//     document.write("It's Work day");
// }

// 5. Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”.

// const todayDate =new Date().getDate()
// if (todayDate < 16) {
//   document.write("First fifteen days of the month");
// } else {
//     document.write("Last days of the month");
// }


// 6. Write a program that determines the minutes since 
// midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object.

// let newDate= new Date();
// document.write("Current Date : ",newDate ,"<br>");
// let miliionSecond =newDate.getTime();
// document.write("elapsed millionseconds since midnight, Jan. 1,1970  : ",miliionSecond ,"<br>");
// let minutes =miliionSecond/60000; //We then divide the milliseconds by 60,000 (because there are 60,000 milliseconds in one minute) to convert the time into minutes.
// document.write(" elapsed millionseconds since midnight, Jan. 1,1970 : ",minutes ,"<br>");

// 7. Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”.

// let newDate =new Date();
// let hours = newDate.setHours();
// if (hours>11.59) {
//     document.write("its AM"); 
// }
// else{
//     document.write("its PM");
// }

// 8. Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named 
// laterDate.

// let previousDate=new Date("december 31, 2030");
// document.write("Previous Date : ",previousDate,"<br>");
// let laterDate=new Date("december 31, 2030");
// document.write("Later Date : ",laterDate,"<br>");

// 9. Create a date object of the starting date of this Ramadan 
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015.

// var firstRamdan = new Date("1 march 2025");
// var today = new Date();
// var diff = firstRamdan.getTime()-today.getTime();
// var days =diff/(1000*60*60*24);
// document.write(Math.round(days),"  Days have passed since 1st Ramdan, 2025 ","<br>");


// 10. Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the 
// beginning of 2015.


// let currentDate = new Date();
// let startOf2024 = new Date("December 3,2024  13:25:00");
// let millisecondsElapsed = startOf2024 - currentDate;
// let secondsElapsed = millisecondsElapsed / 1000;
// document.write(currentDate,"<br>")
// document.write  ("Seconds had passed since beginning of 2024 :  " , secondsElapsed);

// 11. Create a Date object for the current date and time. 
// Extract the hours, reset the date object an hour ahead and 
// finally display the date object in your browser.

// let currentDate = new Date();
// let newDate = new Date();
// let currentHours =newDate.getHours();
// newDate.setHours(currentHours-1);
// document.write("Current Date : ", currentDate ,"<br>");
// document.write("1 Hour ago , it was : " ,newDate,"<br>");

// 12. Write a program that creates a date object and show the 
// date in an alert box that is reset to 100 years back?

// let currentDate = new Date ();
// document.write("Current Date : ", currentDate ,"<br>");
// let yearsAgo= new Date ("january 1 ,1925  23:58:00");
// alert("100 Years Back it's was : ",yearsAgo);
// document.write("100 Years Back it's was : ",yearsAgo);

// 13. Write a program to ask the user about his age. Calculate 
// and show his birth year in your browser.

// let userInput = prompt("Enter Your Age!!");
// let currentYear = new Date().getFullYear();
// let yourYears = currentYear-userInput;
// document.write("Your Age Is : " ,userInput , "<br>");
// document.write("Your Birth Year Is : " , yourYears , "<br>");

// 14. Generate K-Electric bill

function generateBill() {
    const customerName = document.getElementById('customerName').value;
    const numUnits = parseFloat(document.getElementById('numUnits').value);
    const chargePerUnit = parseFloat(document.getElementById('chargePerUnit').value);

    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });

    const netAmount = numUnits * chargePerUnit;
    const latePaymentSurcharge = 0.02 * netAmount; 
    const grossAmount = netAmount + latePaymentSurcharge;

    const roundedNetAmount = netAmount.toFixed(2);
    const roundedLatePaymentSurcharge = latePaymentSurcharge.toFixed(2);
    const roundedGrossAmount = grossAmount.toFixed(2);
    
    const billDetails = `
    //     <p><strong>Customer Name:</strong> ${customerName}</p>
    //     <p><strong>Current Month:</strong> ${currentMonth}</p>
    //     <p><strong>Number of Units:</strong> ${numUnits}</p>
    //     <p><strong>Charges per Unit:</strong> Rs. ${chargePerUnit.toFixed(2)}</p>
    //     <p><strong>Net Amount Payable (within Due Date):</strong> Rs. ${roundedNetAmount}</p>
    //     <p><strong>Late Payment Surcharge:</strong> Rs. ${roundedLatePaymentSurcharge}</p>
    //     <p><strong>Gross Amount Payable (after Due Date):</strong> Rs. ${roundedGrossAmount}</p>
    // `;
   document.getElementById('billDetails').innerHTML = billDetails;
}
