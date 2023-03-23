let todos = [];
let addBtnElement = document.getElementById("add-btn");
addBtnElement.addEventListener("click", addTodo);
let addTodoInputElement = document.getElementById("add-input");
let todosContainerElement = document.getElementById("todosContainer");

//Add Todo
function addTodo() {
  let newTodoText = addTodoInputElement.value;
  let isPresent = false;
  for (let index = 0; index < todos.length; index++) {
    const todoObject = todos[index];
    if (todoObject.text === newTodoText) {
      isPresent = true;
    }
  }
  if (newTodoText.length == 0 || isPresent) {
    return;
  }
  let nowDate = new Date();
  let todoObject = {
    id: todos.length,
    text: newTodoText,
    timestamp: nowDate.getTime(),
  };
  todos.push(todoObject);
  addTodoInputElement.value = "";
  displayTodos();

  console.log(todos);
  console.log("Added successfully");
}

function displayTodos() {
  //wipe out all the content of the todosContainer
  todosContainerElement.innerHTML = "";
  for (let index = 0; index < todos.length; index++) {
    const todo = todos[index];
    let todoElement = createTodoElement(todo);
    todosContainerElement.appendChild(todoElement);
  }
}

function createTodoElement(todo) {
  let todoDivElement = document.createElement("div");
  todoDivElement.classList.add("todo-container");
  let todoTextElement = document.createElement("span");
  todoTextElement.innerText =
    todo.text + "  |  " + dateFns.format(todo.timestamp, "DD, MMMM");
  todoTextElement.style.width = "80%";
  let todoDeleteElement = document.createElement("button");
  todoDeleteElement.style.width = "20%";
  todoDeleteElement.style.backgroundImage =
    "url('./Templates/delete-icon.png')";
  todoDeleteElement.style.height = "30px";
  todoDeleteElement.style.backgroundSize = "cover";
  todoDeleteElement.id = todo.id;
  todoDivElement.appendChild(todoTextElement);
  todoDivElement.appendChild(todoDeleteElement);

  return todoDivElement;
}

//Delete Todo
//the event argument is given to you by JS
//JS creates an event object(which contains infos for the event)
//And after it creats this object it passes it to your function
todosContainerElement.addEventListener("click", (event) => {
  deleteTodo(event);
});

function deleteTodo(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }
  console.log("Deleting...");
  let deleteButton = event.target;
  let id = +deleteButton.id;
  console.log(id);
  for (let index = 0; index < todos.length; index++) {
    const todoObject = todos[index];
    console.log(todoObject);
    if (todoObject.id === id) {
      todos.splice(index, 1);
      break;
    }
  }
  displayTodos();
}

//Clear All

let clearAllBtnElement = document.getElementById("clear-all-btn");
clearAllBtnElement.addEventListener("click", clearAll);

function clearAll() {
  // todos.splice(0,todos.length);
  todos = [];
  todosContainerElement.innerHTML = "";
}

//State
//UI
