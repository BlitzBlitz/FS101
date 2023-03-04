// function printTheSumOfTwoNumber(number1, number2) {
//   console.log(number1 + number2);
// }
// printTheSumOfTwoNumber("Hello", 2);

// function printBuilding(floors, appsPerFloor) {
//   let appNumber = 1;

//   for (let i = 0; i < floors; i++) {
//     console.log("Floor: " + (i + 1));
//     for (let j = 0; j < appsPerFloor; j++) {
//       console.log("App number: " + appNumber);
//       appNumber++;
//     }
//   }
// }

// let floorsOfTheBuilding = +prompt("Enter the number of floors");
// let apps = +prompt("Enter the number of apps/floors");
// printBuilding(floorsOfTheBuilding, apps);

// function addTwoNumber(number1, number2) {
//   return number1 + number2;
// }

// let sum = addTwoNumber(1, 2);
// console.log(addTwoNumber(1, 2));

// let addTwoNumber = function add(number1, number2) {
//   return number1 + number2;
// };

// console.log(addTwoNumber(1, 2));

function addTwoNumber(number1, number2) {
  console.log(number1 + number2);
}

function getInputAndCalculate() {
  let number1 = +prompt("Enter a number: ");
  let number2 = +prompt("Enter a number: ");
  console.log(number1 * number2);
}

// getInputAndCalculate();

// function calculate(number1, number2, operation) {
//   if (operation == "+") {
//     return number1 + number2;
//   } else if (operation == "-") {
//     return number1 - number2;
//   } else if (operation == "*") {
//     return number1 * number2;
//   }
//   return 0;
// }

// function getInputAndCalculateWithCallback(calculate, operation) {
//   let number1 = +prompt("Enter a number: ");
//   let number2 = +prompt("Enter a number: ");

//   console.log(calculate(number1, number2, operation));
// }

let add = function add(number1, number2) {
  return number1 + number2;
};

let substruct = function substruct(number1, number2) {
  return number1 - number2;
};
let multipy = function multiply(number1, number2) {
  return number1 * number2;
};
let power = function power(base, power) {
  let powerOfBase = 1;
  for (let i = 0; i < power; i++) {
    powerOfBase = powerOfBase * base;
  }
  return powerOfBase;
};
function getInputAndCalculateWithCallback(calculate) {
  let number1 = +prompt("Enter a number: ");
  let number2 = +prompt("Enter a number: ");

  console.log(calculate(number1, number2));
}

// getInputAndCalculateWithCallback(add); //cal sum
// getInputAndCalculateWithCallback(substruct); //cal diff
// getInputAndCalculateWithCallback(multipy); //cal product
// getInputAndCalculateWithCallback(power); //cal product

//If the value/s inside the fx change(between different calls) we take variables as args
//If the instructions inside the fx change(between diffrent calls) we take functions as args

//Exercises
//1. Write a function that takes a number as an argument and returns true if the number is prime, false otherwise.

// Input          the number to be tested                   ARGUMENTS (instead of prompt)
// Cal            1 and youself   [2,yourself-1]
// Output         return true/false                         RETURN    (instead of log)

function isPrime(number) {
  10;
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

//2. Write a function that takes a string as an argument and returns the string in reverse order.
// Input          take a string                             ARGUMENTS (instead of prompt)
// Cal            visit each char of string starting from the end
//                copy the chars to a new string
// Output         return newReversedString                         RETURN    (instead of log)

// function reverseString(string) {
//   let reversedString = "";
//   for (let i = string.length - 1; i >= 0; i--) {
//     let charOfString = string.charAt(i);
//     reversedString = reversedString + charOfString;
//   }
//   return reversedString;
// }
// console.log(reverseString("Hello"));

// 3. Write a function that takes the time as three integer arguments (hours, minutes, and seconds)
//       and returns the number of seconds

// Input          3 args: hours, minutes, seconds                          ARGUMENTS (instead of prompt)
// Cal            hours * 60 * 60 + minutes * 60 + seconds
// Output         return seconds                                           RETURN    (instead of log)

// function convertToSeconds(hours, minutes, seconds) {
//   let convertedSeconds = hours * 60 * 60 + minutes * 60 + seconds;
//   return convertedSeconds;
// }

// console.log(convertToSeconds(10, 4, 34) + "s");

// 4. Write a function to print all the factors of a number example
//                 10 -> 2, 5  40 -> 2, 2, 5     25  -> 5, 5     7 -> 7

// Input          number to get the factors for                          ARGUMENTS (instead of prompt)
// Cal            loop through the numbers [2,number]
//                  check if the number is divisible by the generated numbers
//                    if true divide the number and print the factor
//                    if false move on to the next number
// Output         print factors everytime you find one

// 10 % 2 == 0       -> 2    | number = 10 / 2
// 5 % 2 == 0        -> X    | factor = 3
// 5 % 3 == 0        -> X    | factor = 4
// 5 % 4 == 0        -> X    | factor = 5
// 5 % 5 == 0        -> 1    | number = 5/5

// function getFactorsOf(number) {
//   let factor = 2;
//   while (number != 1) {
//     if (number % factor == 0) {
//       console.log(factor);
//       number = number / factor;
//     } else {
//       factor++;
//     }
//   }
// }

// 5. Write a C program that plays the game of “guess the number” as follows: Your program chooses
//       the number to be guessed by selecting an integer at random in the range
//          1 to 1000. The program then types:

// Input          get the userNumber
// Cal            Generate a random number
//                Loop 10 times and prompt the user to guess a number
//                  if the guess is correct break out
//                  if not contniue the loop
// Output         print the number and the message "WIN" if number is guessed correctly
//                print the remaining number of guesses
// let randomNumber = Math.floor(Math.random() * 1000 + 1); //[1,1000]
// let userGuess = +prompt("Guess a number(remaining guesses: " + 10 + "):");
// for (let i = 0; i < 10; i++) {
//   if (randomNumber == userGuess) {
//     console.log("You WON");
//     console.log(randomNumber);
//     break;
//   } else if (userGuess < randomNumber) {
//     userGuess = +prompt(
//       "Number is too low guess again(remaining guesses: " + (10 - i - 1) + "):"
//     );
//   } else if (userGuess > randomNumber) {
//     userGuess = +prompt(
//       "Number is too high guess again(remaining guesses: " + (10 - i - 1) + "):"
//     );
//   }
// }
