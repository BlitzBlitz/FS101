// 1. Write a program to count the number of string in a set of strings given by the User
//      At the end of the set the user should enter the word "quit"
// let string;
// let stringAmount = 0;
// while (string !== "quit") {
//   string = prompt("Enter your word: ");
//   stringAmount++;
// }
// stringAmount--; //avoid counting "quit" as a word
// console.log(stringAmount);

// 2. Write a program to display the floors of a building and for each floor it should
//        display the app #. Take the number of floors and the number of app/floor as input
//
//Input:    take the number of floors and the number of app/floor
//Cal:
//         define a loop for the floors which will repeat for as many floors as we have
//                  for each floor define a loop which will repeat for as many app/floor as we have
//Output: display the number of the floor and the number of the app

// let appNumber = 1;
// let floors = +prompt("Enter the number of floors");
// let appsPerFloor = +prompt("Enter the number of apps/floors");

// for (let i = 0; i < floors; i++) {
//   console.log("Floor: " + (i + 1));
//   for (let j = 0; j < appsPerFloor; j++) {
//     console.log("App number: " + appNumber);
//     appNumber++;
//   }
// }

// 3. Write a program to count the number of vowels in a set of strings given by the User
//          At the end of the set the user should enter the word "quit"

//Input:      Take the word from the user
//Cal:        For each word count the vowels
//                Loop through all the char of the string .charAt
//Output:     The amount of vowels in the string set

// let word = "";
// let vowelCounter = 0;

// while (true) {
//   word = prompt("Enter a word: ");
//   if (word == "quit") {
//     break;
//   }
//   for (let i = 0; i < word.length; i++) {
//     let char = word.charAt(i).toLowerCase();
//     if (
//       char == "a" ||
//       char == "e" ||
//       char == "i" ||
//       char == "o" ||
//       char == "u"
//     ) {
//       vowelCounter++;
//     }
//   }
// }

// console.log(vowelCounter);

// 4. Write a program to count the average letter/word in a set of words a user enters
//                 At the end of the set the user should enter the word "quit"

//Input:      Take the set of words for the user using the flag approuch
//Cal:        Cal the amount of all the letters
//              For each word cal the amount of letters and added to the letterCounter
//            Cal the amount of words
//              For each word add one to the wordCounter
//Output:     Display letterCounter/wordCounter

// let letterCounter = 0;
// let wordCounter = 0;

// while (true) {
//   word = prompt("Enter a word: ");
//   if (word == "quit") {
//     break;
//   }
//   wordCounter++;
//   letterCounter = letterCounter + word.length;
// }

// console.log(letterCounter / wordCounter);

// 5. Write a program to print out all the prime numbers between 1 and 100 using nested loops.

//Input:      we don`t have any input
//Cal:        use a for loop to generate numers from 1 to 100
//            for each number check if it`s prime
//                loop throuh numbers 2-n and check if any number divdes n
//
//Output:

// for (let i = 1; i <= 100; i++) {
//   let isPrime = true;
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       isPrime = false;
//     }
//   }
//   if (isPrime) {
//     console.log(i);
//   }
// }
