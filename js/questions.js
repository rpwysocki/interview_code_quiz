var startButton = document.getElementById("startButton");
var quizContainer = document.getElementById("quizContainer");
var questionElement = document.getElementById("question");
var choicesElement = document.getElementById("choices");
var submitButton = document.getElementById("submitButton");

var currentQuestionIndex = 0;
var score = 0;

var questions = [
  {
    question: "Question 1: What is the capital of France?",
    choices: ["Paris", "London", "Madrid", "Rome"],
    correctAnswer: 0
  },
  {
    question: "Question 2: Which planet is known as the Red Planet?",
    choices: ["Mars", "Venus", "Jupiter", "Mercury"],
    correctAnswer: 0
  },
  // Add more questions here...
];

function showQuestion() {
  var question = questions[currentQuestionIndex];
  questionElement.textContent = question.question;

  choicesElement.innerHTML = "";
  for (var i = 0; i < question.choices.length; i++) {
    var choice = question.choices[i];
    var li = document.createElement("li");
    li.textContent = choice;
    choicesElement.appendChild(li);
  }
}

function checkAnswer() {
  var selectedChoice = choicesElement.querySelector("li.selected");
  if (selectedChoice) {
    var selectedAnswer = Array.from(choicesElement.children).indexOf(selectedChoice);
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      score++;
    }
    selectedChoice.classList.remove("selected");
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
      endQuiz();
    } else {
      showQuestion();
    }
  }
}

function endQuiz() {
  quizContainer.innerHTML = "<h2>Quiz Completed!</h2>" +
    "<p>Your score: " + score + " out of " + questions.length + "</p>";
}

startButton.addEventListener("click", function() {
  startButton.style.display = "none";
  quizContainer.style.display = "block";
  showQuestion();
});

choicesElement.addEventListener("click", function(event) {
  if (event.target.nodeName === "LI") {
    event.target.classList.toggle("selected");
  }
});

submitButton.addEventListener("click", checkAnswer);














// Questions supplied from Chat GPT

// Which of the following is NOT a programming language used for web development?
// a) HTML
// b) CSS
// c) JavaScript
// d) SQL
// e) All of the above are programming languages used in web development

// What does CSS stand for?
// a) Creative Style Sheets
// b) Cascading Style Sheets
// c) Computer Style Sheets
// d) Colorful Style Sheets

// What does the "DOCTYPE" declaration do in HTML?
// a) Defines the character encoding for the HTML document
// b) Specifies the version of HTML in use
// c) Indicates the beginning of the HTML document
// d) Provides instructions for the web browser on how to render the page

// What is the purpose of a CSS reset?
// a) To clear the browser cache
// b) To undo browser default styles and provide a consistent starting point
// c) To reset the server-side cache
// d) To reset the HTML structure of the page

// Which of the following is NOT a commonly used version control system?
// a) Git
// b) Subversion (SVN)
// c) Mercurial
// d) Bitbucket

// What does the "this" keyword refer to in JavaScript?
// a) The current web page
// b) The previous element in the DOM
// c) The global object
// d) The object that called the function

// What is the purpose of AJAX in web development?
// a) To create animated effects on the web page
// b) To enable asynchronous communication between the web browser and server
// c) To enhance search engine optimization (SEO)
// d) To optimize web page loading speed

// What is a responsive web design?
// a) A design that includes vibrant colors and eye-catching visuals
// b) A design that adapts and adjusts to different screen sizes and devices
// c) A design that uses JavaScript extensively for interactivity
// d) A design that follows modern design trends

// What is the purpose of media queries in CSS?
// a) To apply different styles based on the user's media consumption habits
// b) To target specific HTML elements for styling
// c) To conditionally apply styles based on the characteristics of the device or browser
// d) To embed media files directly into the web page

// What is the purpose of a favicon in web development?
// a) To display the website's logo in the browser's address bar
// b) To improve website security
// c) To provide visual cues for the user during interactions
// d) To store user preferences and settings