// 1. Code a program to diplay for n times:
//             1 3 5 7 9 11 ...
//             ... 11 9 7 5 3 1

//  Input:          take n as input from the user
//  Cal:
//                  How many reps do you want?  => n = 12   reps = 6        reps = n/2
//                      starting-point:     n
//                      ending-point:       1
//                      step:               -2
//  Output:
//                  Have another variable that goes from 1 - n with the step +2

// let n = prompt("Enter an integer: ");

// let number = 1;
// for (let counter = 0; counter < n / 2; counter++) {
//   console.log(number);
//   number += 2; // number = number + 2;
// }

// for (let counter = 1; counter <= n; counter += 2) {
//   console.log(counter);
// }

// if (n % 2 == 0) {
//   n--;
// }
// for (let counter = n; counter >= 1; counter -= 2) {
//   console.log(counter);
// }
// _________________________________________________________________________________
// 2. Code a program to get the number of vowels in a string
//  Input:          take a string from the user
//  Cal:
//                  How many reps do you want?  => string.length reps
//                      starting-point:     0
//                      ending-point:       string.length
//                      step:               +1
//                  visit each char of the string
//                  convert char to lowercase
//                  check if the char is a vowel
//                  if true vowelCounter++
//
//  Output:
//                  print the vowelCounter

// let string = prompt("Enter a word: ");
// let vowelCounter = 0;
// for (let counter = 0; counter < string.length; counter++) {
//   let char = string.charAt(counter).toLowerCase();
//   if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
//     vowelCounter++;
//   }
// }
// console.log(vowelCounter);
// _________________________________________________________________________________
// 4. Code a program to get a number n and return the number
//                 123456789...

//  Input:          take a number n from the user
//  Cal:
// resultNumber = 0;

// step 1: counter = 1         resultNumber = 0 * 10 + counter;     resultNumber = 1
// step 2: counter = 2         resultNumber = 1 * 10 + counter;     resultNumber = 12
// step 3: counter = 3         resultNumber = 12 * 10 + counter;     resultNumber = 123

// resultNumber = '';
// step 1: counter = 1         resultNumber = '' + 1;     resultNumber = '1'
// step 2: counter = 2         resultNumber = '1' + 2;     resultNumber = '12'
// step 3: counter = 3         resultNumber = '12' + 3;     resultNumber = '123'
// ...
// Convert the number
//
//  Output:
//                  print theresultNumber

// let n = prompt("Give me a number please: ");
// resultNumber = 0;
// for (let counter = 1; counter < n; counter++) {
//   resultNumber = resultNumber * 10 + counter;
// }
// console.log(typeof resultNumber);

// resultNumber = "";

// for (let counter = 1; counter < n; counter++) {
//   resultNumber = resultNumber + counter;
// }

// console.log(typeof +resultNumber);
// _________________________________________________________________________________

// 5. (Average a Sequence of Integers) Write a program that calculates and prints the average of
//      several integers. Assume the last value read with prompt is the sentinel -1. A typical input
//      sequence might be
//
//Input:    the numbers of the sequence
//Cal:      cal the sum of the numbers
//              each time we take a number we added to the sum var
//              at the end of the loop divide the sum by the amount of number
//          cal the amount of the numbers
//              each time we take a number we add one to the amount, amount++
//Output:
//          log(sum/amount)

// let userNumber = 0;
// let amount = 0;
// let sum = 0;

// for (;;) {
//   userNumber = +prompt("Enter a number");
//   if (userNumber === -1) {
//     break;
//   }
//   amount++;
//   sum = sum + userNumber;
// }

// console.log(sum / amount);
// _________________________________________________________________________________

//  7. Write a program that cal the factorial of a number n given by the user

//Input:    take the number n from the user
//Cal:      declare a factorial starting at 1
//          multiply this factioral n times
//          increment the number that you multiply the factor with
//Output:
//          log(factioral)

// let n = +prompt("Enter a number: ");
// let factioral = 1;
// for (let counter = 1; counter <= n; counter++) {
//   factioral = factioral * counter;
// }
// console.log(factioral);
// _________________________________________________________________________________

//  8.(Calculating the Value of π) Calculate the value of π from the infinite series  4- 4/3 + 4/5 - 4/7 + 4/9
// Print a table that shows the value of π approximated by one term of this series, by two terms, by
// three terms, and so on. How many terms of this series do you have to use before you first get 3.14?
// 3.141? 3.1415? 3.14159?

// let n = +prompt("Enter a number: ");
// let pi = 4;
// let lowerDivder = 3;
// for (let counter = 0; counter < n; counter++) {
//   if (counter % 2 == 0) {
//     pi = pi - 4 / lowerDivder;
//   }
//   if (counter % 2 == 1) {
//     pi = pi + 4 / lowerDivder;
//   }
//   lowerDivder += 2;
// }
// console.log(pi);
