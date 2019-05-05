var currentQuestion = 0;
var score = 0;
var totalQuestion = questions.length;

var quizContainer = document.querySelector("#quizContainer")
var theQuestion = document.querySelector("#question");
var opt1 = document.querySelector("#opt1");
var opt2 = document.querySelector("#opt2");
var opt3 = document.querySelector("#opt3");
var opt4 = document.querySelector("#opt4");
var nextbtn = document.querySelector("#nextbtn");
var resultContainer = document.querySelector("#result");

function loadQuestion(questionIndex){
  var q = questions[questionIndex];
  theQuestion.innerHTML = `${questionIndex + 1}. ${q.question}`
  opt1.innerHTML = q.options[0];
  opt2.innerHTML = q.options[1];
  opt3.innerHTML = q.options[2];
  opt4.innerHTML = q.options[3];
};
loadQuestion(currentQuestion)




nextbtn.onclick = function(){
  currentQuestion+=1
  loadQuestion(currentQuestion);
  if (currentQuestion == (totalQuestion - 1)){
    nextbtn.innerHTML = `Finish`
  }
}

































// const questionHeader = document.querySelector("#questionHeader");
// const theQuestion = document.querySelector("#theQuestion");
// const theOptions = document.querySelector("#theOptions");

// const btn = document.querySelector(".btn")

// count = 0;
// const options = questions[count].options;
// const question = questions[count].question;
// const answer = questions[count].answer;

// questionHeader.innerHTML = `QUESTION ${count + 1}`;
// theQuestion.innerHTML = question;

// //to display options

// options.forEach(function(el,index) {
//   let option = document.createElement("input");
//   option.type = "radio";
//   option.value = el;
//   option.name = 'optionName';


//   let list = document.createElement('li')

//   list.innerHTML = el;
  
//   theOptions.appendChild(list);
//   list.appendChild(option)
// });

// btn.onclick = function(){
//   options[answer]
//   document.getE
// }
