// 2. Make a function that accept an array and returns the min and max
//Input     take as args an array
//Cal       Compare all the numbers to find the min one
//              1. supose that the first element is the min one and the max one
//              2. go through each element and compare it to the min
//              3. if the number is lower than the min => change min
//              4. if the number is higher than the max => change max
//Output    return the min

// function minAndMax(array) {
//   //OxB[0]
//   let min = array[0];
//   let max = array[0];
//   for (let index = 1; index < array.length; index++) {
//     const element = array[index];
//     if (element < min) {
//       min = element;
//     }
//     if (element > max) {
//       max = element;
//     }
//   }
//   let result = [min, max];
//   //result = [];
//   //result.push(min);
//   //result.push(max);
//   return result;
// }

// console.log(minAndMax([1, 5, -10, 999, 10, 1000, -65]));

// 3. Make a function that accept an array and returns true if the number are in ASC order

//Input         take an array as arg
//Cal           supose that the array is sorted
//              go through each element of the array and check
//                  check if its right neighbor is greater than it
//                  if the right neighbor is lower isSorted is false
//Output        return isSorted

// function isSortedASC(array) {
//   let isSorted = true; //supose that the array is sorted
//   for (let index = 0; index < array.length - 1; index++) {
//     let currentElement = array[index];
//     let nextElement = array[index + 1];
//     if (currentElement > nextElement) {
//       //the order is broken
//       isSorted = false;
//       break;
//     }
//   }
//   return isSorted;
// }

// console.log(isSortedASC([1, 2, 4, -1, 10, 100]));

// 4. Make a function that accept an array and returns true if all the elements are of same type
//Input         take an array as arg
//Cal           supose that the array is of same type
//              go through each element of the array and check
//                  check if its right neighbor is of same type
//                  if the right neighbor is of diffrent type isOfSameType turns false
//Output        return isOfSameType

// function isOfSameType(array) {
//   let isOfSameType = true; //supose that the array is sorted
//   for (let index = 0; index < array.length - 1; index++) {
//     let currentElement = array[index];
//     let nextElement = array[index + 1];
//     if (typeof currentElement != typeof nextElement) {
//       //the order is broken
//       isOfSameType = false;
//       break;
//     }
//   }
//   return isOfSameType;
// }
// console.log(isOfSameType([1, 2, 4, true, 10, 100]));

// 5. Write a function that takes an array of strings as an argument and returns
//                 a new array of all the unique strings.
//Input         take an array as arg
//Cal           decalre a result array to return more than one value
//              copy every element of the original array to the result array
//                  before copying it check if the element is present in the result array
//                  copy only if the element is not present at the result array
//
//
//Output        return the result array

// function getUniqueElements(array) {
//   let result = [];
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     if (result.indexOf(element) == -1) {
//       result.push(element);
//     }
//   }
//   return result;
// }
// console.log(getUniqueElements([1, 2, 2, true, 10, true, 100, -87]));
