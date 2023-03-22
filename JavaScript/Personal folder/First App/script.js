let div = document.getElementById("box-1")
let body = document.body
let newSpan = document.createElement ("span");
let getButtonRed = document.getElementById("red")
let getButtonGreen = document.getElementById("green")
let getButtonBlue = document.getElementById("blue")
let getButtonlight = document.getElementById("light-theme")
let getButtondark = document.getElementById("dark-theme")
let nowDate = new Date();
newSpan.innerText = "Today's date is : " + nowDate;
newSpan.style.color=("white")
newSpan.style.fontFamily=("monospace")
newSpan.style.fontWeight=("700")
newSpan.style.margin=("2em")
newSpan.style.textAlign=("center")
div.append(newSpan);
div.classList.add("turn-red")
getButtonRed.addEventListener("click", e => div.style.backgroundColor="red");
getButtonGreen.addEventListener("click", e => div.style.backgroundColor="green");
getButtonBlue.addEventListener("click", e => div.style.backgroundColor="blue");
getButtonlight.addEventListener("click", e => body.style.backgroundColor="white");
getButtondark.addEventListener("click", e => body.style.backgroundColor="#202124");
console.log(nowDate)





