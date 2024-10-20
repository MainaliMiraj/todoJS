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
let score = 0;

// Get necessary DOM elements
const questionContainer = document.querySelector(".question-container");
const optionsContainer = document.querySelector(".options-container");
const questionNo = document.querySelector(".question-no");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".previous");
const scoreDisplay = document.querySelector(".score"); // Score element
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
  currentQuestion.options.forEach((optionText) => {
    const optionElement = document.createElement("p");
    optionElement.classList.add("option");
    optionElement.textContent = optionText;
    optionElement.addEventListener("click", () =>
      checkAnswer(optionElement, currentQuestion.answer)
    );
    optionsContainer.appendChild(optionElement);
  });

  // Update score display
  updateScoreDisplay();
}

function checkAnswer(selectedOption, correctAnswer) {
  const options = document.querySelectorAll(".option");

  // Disable all options after one is selected
  options.forEach((option) => option.classList.add("disabled"));

  // Check if the selected option is correct
  if (selectedOption.textContent === correctAnswer) {
    selectedOption.classList.add("correct"); // Turn correct option green
    score++; // Update score
  } else {
    selectedOption.classList.add("incorrect"); // Turn incorrect option red
  }

  // Highlight the correct option
  options.forEach((option) => {
    if (option.textContent === correctAnswer) {
      option.classList.add("correct");
    } else if (!option.classList.contains("incorrect")) {
      option.classList.add("incorrect");
    }
  });

  // Update score display
  updateScoreDisplay();
}

// Function to move to the next question
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    renderQuestion();
    prevButton.disabled = false; // Re-enable "Previous" button after moving forward
  } else {
    nextButton.disabled = true; // Disable "Next" button at the end
    showModal(); // Show modal at the end of the quiz
  }
}

// Function to move to the previous question
function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
    nextButton.disabled = false; // Re-enable "Next" button when moving backward
  }

  // Disable "Previous" button when at the first question
  if (currentQuestionIndex === 0) {
    prevButton.disabled = true;
  }
}

// Function to update the score display
function updateScoreDisplay() {
  scoreDisplay.textContent = `Your score: ${score}`;
}

// Function to show the modal
function showModal() {
  modal.style.display = "block"; // Show the modal
  modal.querySelector(
    "p"
  ).textContent = `Congratulations! You've completed the quiz with a score of ${score}/${quizQuestions.length}.`;
}

// Function to close the modal
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// Function to restart the quiz
restartButton.addEventListener("click", () => {
  score = 0; // Reset score
  currentQuestionIndex = 0; // Reset question index
  updateScoreDisplay(); // Reset score display
  renderQuestion(); // Render the first question
  modal.style.display = "none"; // Close the modal
  nextButton.disabled = false; // Re-enable the Next button
  prevButton.disabled = true; // Disable Previous button initially
});

// Initial rendering of the first question
renderQuestion();

// Event listener for the "Next" button
nextButton.addEventListener("click", nextQuestion);
prevButton.addEventListener("click", prevQuestion);
