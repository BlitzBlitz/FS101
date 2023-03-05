//Creating the array
// let array = [70, 80, 45, 67];
// console.log(array[2]);

//Reading vlaues from the array
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

//Searching for an element
// if (array.indexOf(400) === -1) {
//   console.log("The element 400 is missing");
// } else {
//   console.log("The element 400 is present in the array");
// }

//Updating the array

// array.push(40); //adds an element at the end of the array
// console.log(array);
//splice(index to add the element at, elements to be deleted, the element to be added)
// array.splice(1, 0, 100);
// console.log(array);

//Delete element from the array

// array.pop(); //removes the last element from the array
// console.log(array);
//splice(index to remove the element at, amount of elements to be deleted)
// array.splice(2, 1);
// console.log(array);

//Saving by Value VS Saving by Reference

let age = 10;
let ageCopy = age;

let studentsGrades = [10, 50, 60, 64, 93];
let studentsGradesCopy = studentsGrades; //shallow copy
let studentsGradesDeepCopy = studentsGrades.slice(0, studentsGrades.length); //deep copy

console.log("Before");
console.log(studentsGrades);
console.log(studentsGradesDeepCopy);

studentsGradesDeepCopy[2] = -999;

console.log("After");
console.log(studentsGrades);
console.log(studentsGradesDeepCopy);

// console.log("Before Changing: ");
// console.log("Original: " + studentsGrades.toString());
// console.log("Shallow Copy: " + studentsGradesCopy.toString());
// console.log("Original: " + age);
// console.log("Shallow Copy: " + ageCopy);

// studentsGradesCopy[2] = -20;
// ageCopy = -20;

// console.log("After Changing: ");
// console.log("Original: " + studentsGrades.toString());
// console.log("Shallow Copy: " + studentsGradesCopy.toString());
// console.log("Original: " + age);
// console.log("Shallow Copy: " + ageCopy);

function changeAge(age) {
  age = 58;
  return age;
}

function deleteMiddleElement(array) {
  let middleIndex = Math.floor(array.length / 2);
  array.splice(middleIndex, 1);
}

// console.log("Before");
// console.log(studentsGrades.toString());
// console.log(age);

// deleteMiddleElement(studentsGrades);
// age = changeAge(age);

// console.log("After");
// console.log(studentsGrades.toString());
// console.log(age);
