//*********************Variables*************************
// let age; //renting a piece of memory
// age = 10; // using it to store values

// let name = "John";
// console.log(age);

// // alert("If you reload the data may not be saved!");

// let username;
// username = prompt("Enter you name: ");

// console.log(username);

// let number1;
// let number2;

// number1 = +prompt("Enter second number");
// number2 = +prompt("Enter second number");

// let sum = number1 + number2;
// console.log(sum);

//*************************Type conversion*************************

// let string1 = "10.12";
// let number = +string1; // string->number
// console.log(typeof number);
// console.log(number);

// let string = number + ""; //number->string
// console.log(typeof string);
// console.log(string);

//*************************Operators*************************
//Arithmetic (+, -, *, /, %, **, ++, --)  they produce a value of type number
// console.log(5 ** 2);

//Comparision(< , >, <=, >=, ===, !==) they produce a value of type boolean(true/false)
// console.log(5 !== 2);

// let powerOfTwo = Math.pow(5, 2);
// let root = Math.sqrt(25);
let randomNumber = Math.random() * 1000; //0-1000
randomNumber = Math.floor(randomNumber); //overwritting the first number

let price = 12.22344;
console.log(price.toFixed(2));
