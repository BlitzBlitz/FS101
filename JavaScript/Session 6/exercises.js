// 1. Make a function that accepts an array an returns the avarage

//Input         take all the numbers using an array
//Cal           cal sum
//                  iterate the array and add each element to the sum
//              cal sum / count
//Output        return the avg

// function getAvg(arrayOfNumbers) {
//   let sum = 0;
//   for (let i = 0; i < arrayOfNumbers.length; i++) {
//     sum = sum + arrayOfNumbers[i];
//   }
//   let avg = sum / arrayOfNumbers.length;
//   return avg;
// }
// let myArray = [1, 2, 10, 7];
// let avg = getAvg(myArray);
// console.log(avg);

let userNumbers = [];

// for (let i = 0; i < 5; i++) {
//   let number = +prompt("Enter your number(remaining:" + (5 - i) + "):");
//   userNumbers.push(number);
// }

while (true) {
  let number = +prompt("Enter your number(press -1 to end):");
  if (number == -1) {
    break;
  }
  userNumbers.push(number);
}

console.log(userNumbers);
