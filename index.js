var currentQuestion = 0;
var score = 0;
var totalQuestion = questions.length;

var quizContainer = document.querySelector("#quizContainer");
var questionArea = document.querySelector("#questionArea")
var theQuestion = document.querySelector("#question");
var opt1 = document.querySelector("#opt1");
var opt2 = document.querySelector("#opt2");
var opt3 = document.querySelector("#opt3");
var opt4 = document.querySelector("#opt4");
var nextbtn = document.querySelector("#nextbtn");
var finalbtn = document.querySelector("#finalbtn");
var resultContainer = document.querySelector("#result");

function loadQuestion(questionIndex) {
  var q = questions[questionIndex];
  theQuestion.innerHTML = `${questionIndex + 1}. ${q.question}`;
  opt1.innerHTML = q.options[0];
  opt2.innerHTML = q.options[1];
  opt3.innerHTML = q.options[2];
  opt4.innerHTML = q.options[3];
}
loadQuestion(currentQuestion);

function loadNextQuestion() {
  let radios = document.querySelectorAll("input[name='option']");
  let correctAnswer = questions[currentQuestion].answer;

  for (var i = 0, radioLength = radios.length; i < radioLength; i++) {
    if (radios[i].checked) {
     
      console.log(radios[i].value);
      console.log(correctAnswer);

      if (correctAnswer === i) {
        console.log("correct answer");
        score += 1;
      }
      radios[i].checked = false;
      currentQuestion += 1;
      loadQuestion(currentQuestion);
    }
  }
}

function loadResult() {
  questionArea.style.display = "none";
  resultContainer.style.display = "block";
 
  if (score <= 0.6*totalQuestion){
    resultContainer.innerHTML = `Your score is ${score} / ${totalQuestion} </br>
    <bold>This is not impressive</bold>`;
  };
  if (score > 0.6*totalQuestion){
    resultContainer.innerHTML = `Your score is ${score} / ${totalQuestion} </br>
    <bold>Awesome</bold>`;
  };
  console.log(score);
}

nextbtn.onclick = function() {
  if (currentQuestion < totalQuestion - 1) {
    loadNextQuestion();
  }

  if (currentQuestion == totalQuestion - 1) {
    nextbtn.style.display = "none";
    finalbtn.style.display = "";
  }

  
};
finalbtn.onclick = loadResult;