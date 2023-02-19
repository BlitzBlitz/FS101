// 1. Write a program that asks the user to enter two numbers, obtains them from
//  the user and prints their sum, product, difference, quotient and remainder.

//Input:            declare 2 var, get the input from the user and save it into these var
//Calculations:     calculate sum, product, difference, quotient and remainder using math operators
//Output:           display the results of step 2 into the screen

// //input
// let number1;
// let number2;

// number1 = +prompt("Enter the first number ");
// number2 = +prompt("Enter the second number");

// console.log(typeof number1);
// console.log(typeof number2);
// //calculation
// let sum = number1 + number2;
// let diff = number1 - number2;
// let product = number1 * number2;
// let quotient = number1 / number2;
// let remainder = number1 % number2;

// //output

// console.log(sum, diff, product, quotient, remainder);

// 2. Write a program that reads in the radius of a circle
//  and prints the circle’s diameter, circumference and area.
//  Use the constant value 3.14159 for π.

//Input:    declare 1 var, take the radius from user, save it into the var
//Cal:      declare a const for pi, cal the diameter, circumference and area.
//Output:   display the result into the screen

// //Input
// let radius = +prompt("Enter the radius of the circle");

// //Cal
// const PI = 3.12159;
// let diameter = radius * 2;
// let circumference = (2 * PI * radius).toFixed(2);
// let area = (PI * radius * radius).toFixed(2);

// //Output
// console.log(diameter);
// console.log(circumference);
// console.log(area);

// 3.Write a program to swap the values of two varaibles

//Input:    decalre 2 var, take 2 numbers from user
//Cal:
//          Declare a temp var
//          Save the value of second var into the temp var
//          copy the value from the first var to second var
//                      (the value of second var will be overwirtten)
//          copy the value of the temp var into the second var
//Out:
//          print the var into the screen

// //input
// let number1 = prompt("Enter first number ");
// let number2 = prompt("Enter second number ");

// //cal
// let temp = number2;
// number2 = number1;
// number1 = temp;

// console.log(number1);
// console.log(number2);

// 4. Write a program that inputs one five-digit number,
//      separates the number into its individual digits and prints
//          the digits separated from one another by three spaces each.

//Input:        Declare a var, get the number from user
//Cal:
//              65743    % , /
//              65743 % 10 = 3
//              65743 / 10 = 6574
//              1. module the number by 10 and save the result
//              2. delete the last digit by dividing by 10
//              3. repeat 1,2 five times
//Output:
//              print all the digits

// let number1 = prompt("Enter a five-digit number ");

// let digit1 = number1 % 10;
// number1 = Math.floor(number1 / 10);
// let digit2 = number1 % 10;
// number1 = Math.floor(number1 / 10);
// let digit3 = number1 % 10;
// number1 = Math.floor(number1 / 10);
// let digit4 = number1 % 10;
// number1 = Math.floor(number1 / 10);
// let digit5 = number1 % 10;
// number1 = Math.floor(number1 / 10);

// console.log(digit5, digit4, digit3, digit2, digit1);
