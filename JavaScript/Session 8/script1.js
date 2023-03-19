let box1Element = document.getElementById("box-1");
let h1Elements = document.getElementsByClassName("main-title");
h1Elements = [...h1Elements];
let firstH1Element = h1Elements[0];
console.log(firstH1Element);

box1Element.addEventListener("click", (event) => {
  console.log("Firing from the container Listener");
  console.log(event.target);
});
firstH1Element.addEventListener("click", (event) => {
  console.log("Firing from the first h1 Listener");
  console.log(event.target);
});
