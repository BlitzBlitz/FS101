let addTwoNumberFunction = function addTwoNumber(number1, number2) {
  return number1 + number2;
};

let addTwoNumberArrowFunction = (number1, number2) => {
  return number1 + number2;
};

let addTwoNumberShortArrowFunction = (number1, number2) => number1 + number2;

function getInputAndCalculateWithCallback(calculate) {
  let number1 = +prompt("Enter a number: ");
  let number2 = +prompt("Enter a number: ");

  console.log(calculate(number1, number2));
}

addTwoNumberArrowFunction(1, 2);
addTwoNumberShortArrowFunction(2, 3);

// getInputAndCalculateWithCallback(addTwoNumberFunction);
// getInputAndCalculateWithCallback(addTwoNumberArrowFunction);

// getInputAndCalculateWithCallback((number1, number2) => number1 + number2);           //anonymus function
