const questions = [
    {
      question: "What is the most visited tourist attraction in the world?",
      answers: [
        { text: "Eiffel Tower", correct: true },
        { text: "Taj Mahal", correct: false },
        { text: "Colosseum", correct: false },
        { text: "Statue Of Liberty", correct: false },
      ],
    },
    {
      question: "What is the only food that cannot go bad?",
      answers: [
        { text: "Dates", correct: false },
        { text: "Syrup", correct: false },
        { text: "Honey", correct: true },
        { text: "Sugar", correct: false },
      ],
    },
    {
      question: "What is the heaviest organ in the human body?",
      answers: [
        { text: "Heart", correct: false },
        { text: "Liver", correct: true },
        { text: "Brain", correct: false },
        { text: "Skin", correct: false },
      ],
    },
    {
      question: "Which of these EU countries does not use the euro as its currency?",
      answers: [
        { text: "Poland", correct: false },
        { text: "Denmark", correct: false },
        { text: "Sweden", correct: false },
        { text: "All of the above", correct: true },
      ],
    },
    {
      question: "What element does the chemical symbol Au stand for?",
      answers: [
        { text: "Silver", correct: false },
        { text: "Gold", correct: true },
        { text: "Magnesium", correct: false },
        { text: "Salt", correct: false },
      ],
    },
  ];
  
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  
    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButtons.appendChild(button);
  
      button.addEventListener("click", (e) => selectAnswer(e, answer));
    });
  }
  
  function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  
  function selectAnswer(e, answer) {
    const selectedBtn = e.target;
    const isCorrect = answer.correct;
  
    if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
    } else {
      selectedBtn.classList.add("incorrect");
    }
  
    Array.from(answerButtons.children).forEach((button) => {
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
      button.disabled = true;
    });
  
    nextButton.style.display = "block";
  }
  
  function showscore() {
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
  }
  
  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showscore();
    }
  }
  
  nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
      handleNextButton();
    } else {
      startQuiz();
    }
  }); 
  startQuiz();