const quizQuestions = [
  {
    question: "What is JavaScript?",
    options: [
      "A programming language",
      "A type of coffee",
      "A database",
      "A markup language",
    ],
    answer: "A programming language",
  },
  {
    question: "How do you declare a variable in JavaScript?",
    options: ["var x = 5;", "declare x = 5;", "variable x = 5;", "let x := 5;"],
    answer: "var x = 5;",
  },
  {
    question: "What are the different data types in JavaScript?",
    options: [
      "String, Number, Boolean",
      "String, Integer, Float",
      "Text, Number, Boolean",
      "Char, String, Float",
    ],
    answer: "String, Number, Boolean",
  },
  {
    question: "How do you create a function in JavaScript?",
    options: [
      "function myFunction() {}",
      "create function myFunction() {}",
      "function:myFunction() {}",
      "myFunction() {}",
    ],
    answer: "function myFunction() {}",
  },
  {
    question: "What is the difference between let, const, and var?",
    options: [
      "let is block-scoped; const cannot be re-assigned; var is function-scoped.",
      "const is block-scoped; let cannot be re-assigned; var is globally scoped.",
      "All are the same.",
      "var is block-scoped; let is function-scoped; const is globally scoped.",
    ],
    answer:
      "let is block-scoped; const cannot be re-assigned; var is function-scoped.",
  },
  {
    question: "How do you add comments in JavaScript?",
    options: [
      "// this is a comment",
      "/* this is a comment */",
      "// comment",
      "Both options 1 and 2",
    ],
    answer: "Both options 1 and 2",
  },
  {
    question: "What is an array in JavaScript?",
    options: [
      "A collection of items",
      "A single item",
      "A type of function",
      "An object with properties",
    ],
    answer: "A collection of items",
  },
  {
    question: "How do you loop through an array?",
    options: [
      "for (let i of array)",
      "for (let i = 0; i < array.length; i++)",
      "array.forEach()",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question: "What is an object in JavaScript?",
    options: [
      "A collection of key-value pairs",
      "A single value",
      "A function",
      "A type of array",
    ],
    answer: "A collection of key-value pairs",
  },
  {
    question: "How do you access object properties?",
    options: [
      "object.property",
      "object[property]",
      "Both options 1 and 2",
      "object->property",
    ],
    answer: "Both options 1 and 2",
  },
  {
    question: "What is a string in JavaScript?",
    options: [
      "A sequence of characters",
      "A type of number",
      "A collection of arrays",
      "A boolean value",
    ],
    answer: "A sequence of characters",
  },
  {
    question: "How do you concatenate strings?",
    options: [
      "string1 + string2",
      "string1.concat(string2)",
      "Both options 1 and 2",
      "string1 & string2",
    ],
    answer: "Both options 1 and 2",
  },
];

let currentQuestionIndex = 0;

// Get necessary DOM elements
const questionContainer = document.querySelector(".question-container");
const optionsContainer = document.querySelector(".options-container");
const questionNo = document.querySelector(".question-no");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".previous");

const modal = document.getElementById("quiz-modal");
const closeButton = document.querySelector(".close-button");
const restartButton = document.getElementById("restart-quiz");

// Function to render a question and its options
function renderQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];

  // Render question text
  questionContainer.innerHTML = `${currentQuestion.question}`;

  // Render question number
  questionNo.textContent = `Question ${currentQuestionIndex + 1}`;

  // Clear previous options
  optionsContainer.innerHTML = "";

  // Render options
  currentQuestion.options.forEach((option, index) => {
    const optionElement = document.createElement("p");
    optionElement.classList.add("option");
    optionElement.textContent = option;
    optionsContainer.appendChild(optionElement);
  });
}

// Function to move to the next question
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    renderQuestion();
    prevButton.disabled = false; // Re-enable "Previous" button after moving forward
  } else {
    nextButton.disabled = true;
    showModal();
  }
}

function showModal() {
  modal.style.display = "block";
}

function hideModal() {
  modal.style.display = "none";
}

function restartQuiz() {
  currentQuestionIndex = 0;
  renderQuestion();
  modal.style.display = "none";
  nextButton.disabled = false; // Re-enable the next button for a new quiz
  prevButton.disabled = true; // Disable previous as we're back to the start
}

closeButton.addEventListener("click", hideModal);
restartButton.addEventListener("click", restartQuiz);

// Close the modal if user clicks outside of it
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    hideModal();
  }
});

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--; // Move back one question
    renderQuestion();
    nextButton.disabled = false; // Re-enable "Next" button when moving backward
  }

  // Disable "Previous" button when at the first question
  if (currentQuestionIndex === 0) {
    prevButton.disabled = true;
    prevButton.classList.add("disabled");
  }
}

// Initial rendering of the first question
renderQuestion();

// Event listener for the "Next" button
nextButton.addEventListener("click", nextQuestion);
prevButton.addEventListener("click", prevQuestion);
