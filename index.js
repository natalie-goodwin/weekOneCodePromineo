/* GUI - Graphical User Interface: the visual representation of data 
that users interact with via keyboard and mouse; when you open a 
window or app and there are buttons and text boxes, that is GUI; 
data is displayed in a user friendly manner*/

/*CLI - Command Line Interfaces; text-based tools that allow users
 to interact with the computer and data; instead of visual elements, 
 everything in a CLI is represented via plain text; users type in 
 commands reducing the need for a mouse and the time spent performing 
 certain operations. Many programs used in software development only come 
 as a CLI tool and don't have a GUI*/
 
 /* 2 main CLIs: Command Prompt (Windows) and Terminal (Mac and Linux)


/*JavaScript is the core language that provides functionality to all 
websites and web applications on the internet, While JS is 
traditionally a front end language - meaning it runs on the user's c
omputer instead of a server - in 2009 Node.js enabled JS to run 
outside of the browser, making it usables with back end 
programming. JavaScript adds functionality to a website or 
application */

/*JavaScript is a computer programmming language. Programming is writing
instructions for a computer, that tell it how to move, manipulate, 
and display data in an automated fashion.*/

/*Variables are used to keep track of data and must have a label or 
number assigned to it. Javascript infers the datatype based on the data. 
Var declares a variable; a name should be descriptive of what the 
variable identifies; camelCase: first word lowercase, next word 
capitalized*/

/*Operations: An operation consists of one or more pieces of data, known 
as operands, and an operator performs a calculation or action on the 
operands thus resulting in a new value. 
Below, "var bankAccountBalance" and "52.10" are operands and "=" 
is the operator*/ 

var bankAccountBalance = 52.10;

/*strings can use single or double quotes depending on preference 
of developers*/

var firstName = "Tom"; 

var lastName = 'Sawyer';

/*javascript knows a number is a value because there are no quotes*/

var numberOfFriends = 5;

/*boolean data is true/false, no quotes*/

var isHotOutside = false;

var isHappy = true;

/*Dynamic typing: data type is determined implicitly based on the 
data assigned to the variable. Most important thing to understand 
is how to declare variable types, and javascript infers the 
datatypes based on the assigned data*/

/*Equality operator uses == signs and determines if two values are 
equal: boolean value*/

console.log("Hello World!");
console.log(5 + 3);
console.log(4 - 3);
console.log(6 * 7);
console.log(8 / 2);
console.log (bankAccountBalance - 30);
console.log (bankAccountBalance * numberOfFriends);
console.log (5 == 5);
console.log (5 == 6);
console.log(bankAccountBalance == numberOfFriends);
console.log(bankAccountBalance == 52.10);














var firstName = "Natalie";
var lastName = "Goodwin";
var fullName = firstName + " " + lastName;

console.log(firstName);
console.log(lastName);
console.log(fullName);