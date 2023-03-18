// console.log(document.getElementById("box-1"));

//Selecting
let box1Element = document.getElementById("box-1");
box1Element = document.querySelector("#box-1");
let boxesElement = document.getElementsByClassName("box");
boxesElement = document.querySelector(".box");

// console.log(typeof box1Element);

// console.log(typeof boxesElement);

// let mainTitleElement = document.querySelector("#main-title");
// console.log(mainTitleElement);
// mainTitleElement.innerText = "Changed By JS";
//Chaning inner HTML(Adding new HTML element to the HTML document)
//This will overwrite all the elements inside this box1Element
//Used primarly to delete/reset the elements inside an element
// box1Element.innerHTML = "<h1>New Element Added By Js</h1>";
//wipe out all the elements of the box1Element
// box1Element.innerHTML = "";
// let linkElement = document.querySelector("a");
// console.log(linkElement);
// linkElement.href = "https://www.twitter.com";

//Changing the CSS
// linkElement.style.textDecoration = "none"; //use the camelCase
// linkElement.style.backgroundColor = "lightgreen";
// linkElement.style.color = "white";
// linkElement.style.padding = "1em";
//We mostly change styles useing the switch class method
// linkElement.classList.add("light-button");
// linkElement.classList.remove("light-button");
// linkElement.classList.toggle("light-button");

// console.log(box1Element.children);

// console.log(linkElement.parentElement);

//Creating an HTML element(the proper way)
// let newButtonElement = document.createElement("button");
// newButtonElement.innerText = "Click Me";
// newButtonElement.classList.add("light-button");
//Attaching the HTML element(select the parent first)
// box1Element.appendChild(newButtonElement);

//Events
//We use events to change the HTML/CSS when the user inputs(click, keypress,...)
//Event parts:
//              1. Target             (the HTML element where the event happends)
//              2. Type of the event  ('click', 'dblclick', 'keydown')
//              3. Handler            (changeColor())

let changeBgColor = () => {
  box1Element.classList.add("bg-red");
};

let changeBorderColor = function () {
  box1Element.classList.add("border-green");
};

let changeBgButtonElement = document.getElementById("changeBgButton");
changeBgButtonElement.addEventListener("click", changeBgColor);
changeBgButtonElement.addEventListener("dblclick", changeBgColor);

let nameInputElement = document.getElementById("name");

let logContent = () => {
  console.log(nameInputElement.value);
  if (nameInputElement.value.length < 10) {
    nameInputElement.classList.add("red-border");
  } else {
    nameInputElement.classList.remove("red-border");
  }
};
nameInputElement.addEventListener("keyup", logContent);
