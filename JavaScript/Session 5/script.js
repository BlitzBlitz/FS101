// function printTheSumOfTwoNumber(number1, number2) {
//   console.log(number1 + number2);
// }
// printTheSumOfTwoNumber("Hello", 2);

function printBuilding(floors, appsPerFloor) {
  let appNumber = 1;

  for (let i = 0; i < floors; i++) {
    console.log("Floor: " + (i + 1));
    for (let j = 0; j < appsPerFloor; j++) {
      console.log("App number: " + appNumber);
      appNumber++;
    }
  }
}

// let floorsOfTheBuilding = +prompt("Enter the number of floors");
// let apps = +prompt("Enter the number of apps/floors");
// printBuilding(floorsOfTheBuilding, apps);

function addTwoNumber(number1, number2) {
  return number1 + number2;
}

let sum = addTwoNumber(1, 2);
console.log(addTwoNumber(1, 2));
