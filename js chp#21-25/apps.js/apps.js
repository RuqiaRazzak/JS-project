// 1. Take two user inputs for first and last name, merge and greet user.

// let firstName = prompt("Enter Your First Name!!");
// let lastName = prompt("Enter Your Last Name!!");
// let fullName = firstName + "   " + lastName;
// document.write("Hello!  ","<br>", fullName);


// 2. Take user input for favorite mobile model and display its length.

// let mobileModel = prompt("Enter Your Favorite Mobile Phone Model!!");
// document.write("My Favorite Mobile Phone Is !!"+" <br>"+ mobileModel +"<br>Length Of String  :" + mobileModel.length);


// 3. Find the index of letter "n" in the word "Pakistani".

// let country = "Pakistani";
// document.write("String : Pakistani <br> Index Of 'n': " + country.indexOf("n") + "<br>");


// 4. Find the last index of letter "l" in the word "Hello World".

// let lastIndex="Hello world";
// document.write("String : Hello World <br> Last Index Of 'l': " + lastIndex.lastIndexOf("l"));

// 5. Find the character at 3rd index in the word "Pakistani".

// let country = "Pakistani";
// document.write("String : Pakistani <br> Character at index 3: " + country.charAt(3));

// 6. Repeat Q1 using string concat() method.

// fullName = firstName.concat(" ", lastName);
// document.write("Hello, " + fullName);

// 7. Replace “Hyder” with “Islam” in the word “Hyderabad”.

// let city = "Hyderabad";
// let newCity = city.replace("Hyder", "Islam");
// document.write("City: " , city ,"<br>");
// document.write("City after replacement: " + newCity);

// 8. Replace all occurrences of “and” with “&” in a string.

// let message = "Ali and Sami are best friends. They play cricket and football together.";
// let updatedMessage = message.replace(/and/g, "&");
// document.write("Message:  " , message ,"<br>")
// document.write("Updated message:   "  ,  updatedMessage);

// 9. Convert a string “472” to a number and display both values and types.

// let strNumber = "472";
// document.write("Value: " + strNumber + " <br> Type String: "  + "<br>");
// document.write("Value: " + strNumber.toString() + " <br> Type Number: " +  "<br>");


// 10. Convert user input to uppercase.

// let userInput = prompt("Enter some text:");
// document.write("User Input:  " , userInput ,"<br>");
// document.write("Upper case:  " , userInput.toUpperCase());

// 11. Convert user input to title case.

// let userInput = prompt("Enter some text:");
// let firstchar=userInput.slice(0,1).toUpperCase();
// let result=firstchar+userInput.slice(1);
// document.write("User Input : ", userInput ,"<br>");
// document.write("Title Case : " , result ,"<br>");


// 12. Convert the variable num to string and remove the dot.

// num = 35.36;
// let numString = num.toString().replace(".", "");
// document.write("Number: " , num ,"<br>");
// document.write("Converted number: " , numString);

// 13. Check for invalid username characters [@ . , !].

// let username = prompt("Enter your username:");
// if (/[.@,!]/.test(username)) {
// document.write("Please enter a valid username without special characters [@ . , !]");
// } else {
//  document.write("Username is valid.");
// }

// 14. Enable search in an array (case insensitive).

// let items = ["cake", "apple pie", "cookie", "chips", "patties"];
// let searchItem = prompt("Welcome to Zunia's Bakrey.What do wnat to order sir/ma'am?");
// let found = items=searchItem.toLowerCase();
// if (found) {
//  document.write(searchItem ,"  is available in index ", items.length , "  in our Bakrey.");
// } else {
//  document.write("We are Sorry. ",searchItem,"   is not available in our Bakrey.");
// }

// // 15. Password validation.


let passwords =prompt("Enter Your Password");
if (isNaN(passwords.charAt(0))) {
    document.write("Password is valid.");
 
} else {
    document.write("Password must contain alphabets and numbers, not start with a number, and be at least 6 characters long.");
}

// 16. Convert the string to an array using split and display elements.

// let university = "University of Karachi";
// let universityArray = university.split("");
// document.write("University array:<br>" + universityArray.join("<br>"));



// 17. Display the last character of user input.

// let input = prompt("Enter some text:");
// document.write("User Input: " , input ,"<br>");
// document.write("Last character: " , input.charAt(input.length - 1));

// 18. Count occurrences of the word “the” in a given string.

// let text = "The quick brown fox jumps over the lazy dog";
// let String = text.toLowerCase();
// let findThe = String.split("the").length - 1;
// document.write("Text: " ,text , "<br>");
// document.write("There are " , findThe , " occurence(s) of the word 'the'");

