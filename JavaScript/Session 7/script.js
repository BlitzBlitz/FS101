let array = [1, 2, 45, -11, -1, 50, -456, 78];
let studentNames = ["Anna", "Muhsin", "Ron", "Klement"];

// let compareTwoElements = function compareTwoElements(element1, element2) {
//   if (element1 < element2) {
//     return 1;
//   }
//   if (element1 > element2) {
//     return -1;
//   }
//   return 0;
// };

// array.sort(compareTwoElements); //sort is destructive -> it will change the original array
// studentNames.sort(compareTwoElements);
// console.log(array); //[-1,1,2,11,45,...]
// console.log(studentNames);

// let conditionOfFiltering = (element) => {
//   if (element > 0) {
//     return true;
//   }
//   return false;
// };

// let filteredArray = array.filter(conditionOfFiltering); //filter is not destructive -> it will not change the original array

// console.log(filteredArray);

// let printDouble = (element) => {
//   element = element * 2;
//   console.log(element);
// };
// array.forEach(print); //forEach is not destructive -> it will not change the original array
// console.log(array);

// let doubleTheValues = (element) => {
//   return element * 2;
// };
// let doubleArray = array.map(doubleTheValues); //map is not destructive -> it will not change the original array
// console.log(array);
// console.log(doubleArray);

// let add = (element1, element2) => {
//   return element1 + element2;
// };
// let sum = studentNames.reduce(add);
// console.log(studentNames);
// console.log(sum);

// Salaries [1000, 200, 500, 6700, 8900, 9000]
//         Tax all the worker having the a salary over 5000$ by 20% and find the sum of the taxes

// let salaries = [1000, 200, 500, 6700, 8900, 9000];

// let isSalaryOver5000 = (salary) => {
//   if (salary > 5000) {
//     return true;
//   }
//   return false;
// };

// let getTaxValue = (salary) => {
//   return salary * 0.2;
// };

// //We can chain the methods becase the pervious method returns an array
// salaries.filter(isSalaryOver5000).map(getTaxValue).reduce(add);

// console.log(salaries.filter(isSalaryOver5000).map(getTaxValue).reduce(add));
