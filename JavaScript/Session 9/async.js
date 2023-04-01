// console.log("Starting");

// let seconds = 0;
// setTimeout(sayHelloAsync, 1000);
// let intervalId = setInterval(sayHelloAsyncInterval, 1);

// for (let index = 0; index < 999999; index++) {
//   console.log("Looping " + index);
// }

// function sayHelloAsync() {
//   console.log("Hello ASync Timeout");
// }
// function sayHelloAsyncInterval() {
//   seconds++;
//   if (seconds == 5) {
//     clearInterval(intervalId);
//   }
//   console.log("Hello ASync Interval" + seconds);
// }

// const request = new XMLHttpRequest();

// request.addEventListener("readystatechange", printIntoTheConsole);

// function printIntoTheConsole() {
//   if (request.readyState == 1) {
//     console.log("I am ready to go");
//   }
//   if (request.readyState == 4) {
//     console.log("Done");
//     console.log(request.response);
//   }
// }

// request.open("GET", "http://localhost:3000/posts");
// request.send();

// fetch("http://localhost:3000/posts?author.age=45")
//   .then(convertJson)
//   .catch(showError);

// function convertJson(response) {
//   response.json().then(displayData).catch(showError);
// }
// function displayData(data) {
//   console.log(data);
// }
// function showError(error) {
//   console.log(error);
// }

// fetch("http://localhost:3000/posts?author.age=45") //long OPP
//   .then((response) => {
//     return response.json(); //long OPP
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

let body = {
  //this will be created from the date that you took from the form
  title: "updated",
  author: "typicode12",
};

// fetch("http://localhost:3000/posts", {
//   method: "POST",
//   body: body,
//   headers: {
//     Accept: "application.json",
//     "Content-Type": "application.json",
//   },
// })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));

// fetch("http://localhost:3000/posts/2", {
//   method: "PUT",
//   body: JSON.stringify(body),
//   headers: {
//     Accept: "application.json",
//     "Content-Type": "application.json",
//   },
// })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));

// fetch("http://localhost:3000/posts/2", {
//   method: "DELETE",
// })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));
