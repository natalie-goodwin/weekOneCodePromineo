//create a variable to hold the quantity of available plane seats left on a flight

let availablePlaneSeats = 1;
		
//create a variable to hold the cost of groceries at checkout

let costOfGroceries = 82.75;

//create a variable to hold a person's middle initial

let middleInitial = "M."; 

//create a variable to hold true if it's hot outside and false if it's cold outside

let isHotOutside = true;
let isColdOutside = false;


//create a variable to hold a customer's first name

let customersFirstName = "Matilda"; 

//create a variable to hold a street address

let streetAddress = "1427 Ardee Avenue"

//print all variables to the console

console.log(availablePlaneSeats);
console.log(costOfGroceries);
console.log(middleInitial);
console.log(isHotOutside);
console.log(isColdOutside);
console.log(customersFirstName);
console.log(streetAddress);


//a customer booked 2 plane seats, remove 2 seats from the available seats variable
availablePlaneSeats = availablePlaneSeats - 2;
console.log(availablePlaneSeats);

//impulse candy bar purchase, add 2.15 to the grocery total

costOfGroceries = costOfGroceries + 2.15;
console.log(costOfGroceries);

//birth certificate was printed incorrectly, change the middle initial to something else

MiddleInitial = "N.";
console.log (MiddleInitial);

//the season has changed, update the hot outside variable to be opposite of what it was

isHotOutside = !isHotOutside;  /* an exclamation point (!) followed by the operand designates that the variable is opposite what it was*/
console.log(isHotOutside);

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice

let fullName = customersFirstName + " " + middleInitial + " " + "Jones";
console.log(fullName);


//print a line to the console that introduces the customer and says they live at the address variable

console.log("Hi, my name is" + " " + fullName + "," + " " + "and I live at" + " " + streetAddress + ".");

const articlesOfClothing = 5
console.log(articlesOfClothing)