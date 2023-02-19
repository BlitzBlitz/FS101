// 1.   A company pays its workers in the following conditions:
//            a. The worker gets 5$/h if he works for 200h
//            b. Every extra hours over 200h is payed double
//      Given the amount of hours the worker works calculate his wage.

//Input:    declate a var for hours, take the working hours from the user
//Cal:
//          if numberOfHours <= 200     =>  wage = hours * 5
//          else                        =>  calculate extra hours,
//                                                cal the wage for the extra hours
//                                                cal the wage for the base hours(200)
//Output:
//              display the wage

// let hours = prompt("Enter the working hours");

// let salary;
// if (hours <= 200) {
//   salary = hours * 5;
// } else {
//   let extraHours = hours - 200;
//   salary = extraHours * 10 + 200 * 5;
// }
// console.log("Your salary is: " + salary);

// 2. Make a program that generates a random number and asks the user to guess it.

//Input:        decalre a var, get the number from the user
//Cal:
//              generate a random number
//              compare the user number with the random number
//
//Output:
//                  if(userNumber is equal to randomNumber) => display "You Won"
//                  if(userNumber is not equal to randomNumber) => display "Try Again"

// let userNumber = +prompt("Guess the number(1-10)");

// let randomNumber = Math.floor(Math.random() * 10 + 1);
// console.log(randomNumber);
// if (userNumber === randomNumber) {
//   console.log("You Won");
// } else {
//   console.log("Try again");
// }

// 3.
// (Gas Mileage) Drivers are concerned with the mileage obtained by their
// automobiles. One driver has kept track of several tankfuls of gasoline
//  by recording miles driven and gallons used for each tankful.
// Develop a program that will input the miles driven and gallons used
// for each tankful. The program should calculate and display the miles
// per gallon obtained for each tankful. After processing all input
// information, the program should calculate and print the combined miles
// per gallon obtained for all tankfuls. Here is a sample input/output dialog:
// EX:
//                 Enter the gallons used (-1 to end): 12.8
//                 Enter the miles driven: 287
//                 The miles/gallon for this tank was 22.421875
//                 Enter the gallons used (-1 to end): 10.3
//                 Enter the miles driven: 200
//                 The miles/gallon for this tank was 19.417475
//                 Enter the gallons used (-1 to end): 5
//                 Enter the miles driven: 120
//                 The miles/gallon for this tank was 24.000000

//                 Enter the gallons used (-1 to end): -1
//                 The overall average miles/gallon was 21.601423

//Input:            declare 6 var, take the measurments(amount in gallon, milage) 3 times
//Cal:              cal the sum of amounts in galon and the sum of milage
//Output:           Display the avg of miles/gallon

// let gallons1 = +prompt("Enter the amount in gallons");
// let milage1 = +prompt("Enter the milage");
// let gallons2 = +prompt("Enter the amount in gallons");
// let milage2 = +prompt("Enter the milage");
// let gallons3 = +prompt("Enter the amount in gallons");
// let milage3 = +prompt("Enter the milage");

// let gallonsSum = gallons1 + gallons2 + gallons3;
// let milageSum = milage1 + milage2 + milage3;

// console.log("The avg miles/gallon is: " + (milageSum / gallonsSum).toFixed(2));

// C.  (Sales Commission Calculator) One large chemical company pays its salespeople on a commission basis.
//     The salespeople receive $200 per week plus 9% of their gross sales for that week. For
//     example, a salesperson who sells $5000 worth of chemicals in a week receives $200 plus 9% of
//     $5000, or a total of $650. Develop a program that will input each salesperson’s gross sales for last
//     week and will calculate and display that salesperson’s earnings. Process one salesperson's figures at a
//     time. Here is a sample input/output dialog:

//             EX:
//                 Enter sales in dollars (-1 to end): 5000.00
//                 Salary is: $650.00
//                 Enter sales in dollars (-1 to end): 1234.56
//                 Salary is: $311.11
//                 Enter sales in dollars (-1 to end): -1

//Input:        declare a var, get the user sales
//Cal:
//              if(sales is grater of equale to 5000) => get the bonus 9%
//Output:       display the wage

// let sales = +prompt("Enter the sales");

// let salary = 200;
// if (sales >= 5000) {
//   salary = salary + sales * 0.09;
//   //   salary += sales * 0.09;
// }

// console.log(salary);
