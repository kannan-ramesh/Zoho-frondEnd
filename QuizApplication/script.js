const quizData = {
    "quizTitle": "Java Programming Quiz",
    "questions": [
      {
        "question": "1)What is a variable in Java?",
        "options": [
          "A) A storage location for data that can be changed during the execution of the program",
          "B) A fixed value in a program that does not change",
          "C) A reserved area of memory to store data temporarily",
          "D) None of the above"
        ],
        "answer": "A storage location for data that can be changed during the execution of the program"
      },
      {
        "question": "2)What is the correct way to declare a variable in Java?",
        "options": [
          "A) variableName = value",
          "B) int variableName = value",
          "C) variableName: value",
          "D) declare variableName = value"
        ],
        "answer": "int variableName = value"
      },
      {
        "question": "3)Which keyword is used to define the subclasses in Java?",
        "options": [
          "A)extends",
          "B)inherit",
          "C)superclass",
          "D)sub-class"
        ],
        "answer": "extends"
      },
      {
        "question": "4)What does JVM stand for in Java?",
        "options": [
          "A)Java Virtual Machine",
          "B)Java Virtual Method",
          "C)Java Variable Method",
          "D)Java Variable Machine"
        ],
        "answer": "Java Virtual Machine"
      },
      {
        "question": "5)What is the superclass of all classes in Java by default?",
        "options": [
          "A)Superclass",
          "B)Object",
          "C)ParentClass",
          "D)MainClass"
        ],
        "answer": "Object"
      },
      {
        "question": "6)Which access specifier in Java allows a class to be accessed from anywhere?",
        "options": [
          "A)private",
          "B)default",
          "C)public",
          "D)protected"
        ],
        "answer": "public"
      },
      {
        "question": "7)What is the output of the following code snippet?\n\n```java\nint x = 5;\nSystem.out.println(++x);\n```",
        "options": [
          "A)5",
          "B)6",
          "C)Compiler Error",
          "D)Runtime Error"
        ],
        "answer": "6"
      },
      {
        "question": "8)Which of the following is not a valid keyword in Java?",
        "options": [
          "A)interface",
          "B)string",
          "C)float",
          "D)double"
        ],
        "answer": "string"
      },
      {
        "question": "9)What does the 'final' keyword signify in Java?",
        "options": [
          "A)The variable cannot be changed once assigned",
          "B)The class cannot be inherited",
          "C)The method cannot be overridden",
          "D)All of the above"
        ],
        "answer": "All of the above"
      },
      {
        "question": "10)What is the main purpose of the 'break' statement in Java?",
        "options": [
          "A)To exit a loop or switch statement",
          "B)To skip the execution of code inside loops",
          "C)To forcefully terminate the program",
          "D)None of the above"
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
