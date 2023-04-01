let questions = [
  {
    title: "Question 1",
    options: ["Option1", "Option2", "Option3", "Option4"],
    answer: 0,
  },
  {
    title: "Question 2",
    options: ["Option1", "Option2", "Option3", "Option4"],
    answer: 3,
  },
  {
    title: "Question 3",
    options: ["Option1", "Option2", "Option3", "Option4"],
    answer: 2,
  },
  {
    title: "Question 4",
    options: ["Option1", "Option2", "Option3", "Option4"],
    answer: 2,
  },
];
let currentQuestion = 0;
let score = 0;

let nextBtn = document.getElementById("next-btn");

nextBtn.setAttribute("disabled", "disabled");
nextBtn.parentElement;
let quizQuestionContainer = document.getElementById("quiz-question");
quizQuestionContainer.addEventListener("click", (event) => {
  let targetElement = event.target;
  let optionId = targetElement.id;
  if (
    optionId == "option1" ||
    optionId == "option2" ||
    optionId == "option3" ||
    optionId == "option4"
  ) {
    checkAnswer(optionId);
  }
});

function checkAnswer(optionId) {
  optionId = optionId[optionId.length - 1] - 1;
  console.log(optionId);
  if (questions[currentQuestion].answer == optionId) {
    score++;

    //Update UI
    // add the currect mark at the option div(.appendChild)
    // make the next button available
  } else {
    //Update UI
    // add the uncurrect mark at the option div
    // make the next button available
    // update the question-nav-label
  }
}
//TODO
//Add a listenet to the next btn which will increment currentQuestion + display next question

displayQuestion(questions[currentQuestion]);

function displayQuestion(question) {
  let questionLabelElement = document.getElementById("question-label");
  questionLabelElement.innerText = question.title;
  //   let option1Element = document.getElementById("option1");
  //   option1Element.innerText = question.options[0];
  //   let option2Element = document.getElementById("option2");
  //   option1Element.innerText = question.options[1];
  //   let option3Element = document.getElementById("option3");
  //   option1Element.innerText = question.options[2];
  //   let option4Element = document.getElementById("option4");
  //   option1Element.innerText = question.options[3];

  //   Get all the options` divs as an HTMLCollection

  let optionsElements = document.getElementsByClassName("option");
  //Convert the HTMLCollection to an array
  optionsElements = [...optionsElements];

  //Modify each option`s span to the question answer
  for (let index = 0; index < question.options.length; index++) {
    const optionLabel = optionsElements[index].firstElementChild;
    optionLabel.innerText = question.options[index];
  }
  //Update the UI
  quizQuestionContainer.replaceChildren(...optionsElements);
  let quizNavLabel = document.getElementById("quiz-nav-label");
  //   quizNavLabel.innerText =
  //     currentQuestion + 1 + " of " + questions.length + " Questions";

  quizNavLabel.innerText = `${currentQuestion + 1} of ${
    questions.length
  } Question`;
}
