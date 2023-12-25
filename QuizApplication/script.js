const quizData = {
    "quizTitle": "Java Programming Quiz",
    "questions": [
      {
        "question": "1)What is a variable in Java?",
        "options": [
          "A storage location for data that can be changed during the execution of the program",
          "A fixed value in a program that does not change",
          "A reserved area of memory to store data temporarily",
          "None of the above"
        ],
        "answer": "A storage location for data that can be changed during the execution of the program"
      },
      {
        "question": "2)What is the correct way to declare a variable in Java?",
        "options": [
          "variableName = value",
          "int variableName = value",
          "variableName: value",
          "declare variableName = value"
        ],
        "answer": "int variableName = value"
      },
      {
        "question": "3)Which keyword is used to define the subclasses in Java?",
        "options": [
          "extends",
          "inherit",
          "superclass",
          "sub-class"
        ],
        "answer": "extends"
      },
      {
        "question": "4)What does JVM stand for in Java?",
        "options": [
          "Java Virtual Machine",
          "Java Virtual Method",
          "Java Variable Method",
          "Java Variable Machine"
        ],
        "answer": "Java Virtual Machine"
      },
      {
        "question": "5)What is the superclass of all classes in Java by default?",
        "options": [
          "Superclass",
          "Object",
          "ParentClass",
          "MainClass"
        ],
        "answer": "Object"
      },
      {
        "question": "6)Which access specifier in Java allows a class to be accessed from anywhere?",
        "options": [
          "private",
          "default",
          "public",
          "protected"
        ],
        "answer": "public"
      },
      {
        "question": "7)What is the output of the following code snippet?\n\n```java\nint x = 5;\nSystem.out.println(++x);\n```",
        "options": [
          "5",
          "6",
          "Compiler Error",
          "Runtime Error"
        ],
        "answer": "6"
      },
      {
        "question": "8)Which of the following is not a valid keyword in Java?",
        "options": [
          "interface",
          "string",
          "float",
          "double"
        ],
        "answer": "string"
      },
      {
        "question": "9)What does the 'final' keyword signify in Java?",
        "options": [
          "The variable cannot be changed once assigned",
          "The class cannot be inherited",
          "The method cannot be overridden",
          "All of the above"
        ],
        "answer": "All of the above"
      },
      {
        "question": "10)What is the main purpose of the 'break' statement in Java?",
        "options": [
          "To exit a loop or switch statement",
          "To skip the execution of code inside loops",
          "To forcefully terminate the program",
          "None of the above"
        ],
        "answer": "To exit a loop or switch statement"
      }
    ]
  };  


const quizTitle = document.querySelector('.quiz-title');
const questionText = document.querySelector('.question');
const optionsContainer = document.querySelector('.options');
const nextButton = document.querySelector('.next-btn');
const questioncontainer=document.querySelector('.question-container');
const scores=document.querySelector('.score');
let currentQuestionIndex = 0;
let score=0;

function loadQuestion() {
  const currentQuestion = quizData.questions[currentQuestionIndex];
  quizTitle.innerText = quizData.quizTitle;
  questionText.innerText = currentQuestion.question;

  optionsContainer.innerHTML = '';
  currentQuestion.options.forEach(option => {
    const newDiv = document.createElement('div');
    newDiv.innerText = option;
    newDiv.classList.add('option-btn');
    optionsContainer.appendChild(newDiv);
    newDiv.addEventListener('click', checkAnswer);
  });
}

function checkAnswer(event) {
  const selectedOption = event.target;
  const correctAnswer = quizData.questions[currentQuestionIndex].answer;
  
  if (selectedOption.innerText === correctAnswer) {
    selectedOption.classList.add('correct');
    score++;
  } else {
    selectedOption.classList.add('wrong');
    console.log('Wrong answer!');
  }
  const options = optionsContainer.querySelectorAll('.option-btn');
  options.forEach(option => {
    option.removeEventListener('click', checkAnswer); 
  });

  currentQuestionIndex++;
  if (currentQuestionIndex === quizData.questions.length) {
    displayScore();
  }
}
function displayScore() {
    const finalScore = "Quiz is Completed. Your Score is " + score + " out of " + quizData.questions.length;
    questioncontainer.style.display = 'none';
    scores.innerHTML = '<img src="score.jpg" alt="Score Image">';
    alert(finalScore);
    nextButton.style.display = 'none'; 
  }

nextButton.addEventListener('click', loadQuestion);

loadQuestion();
