const questionHeader = document.querySelector("#questionHeader");
const theQuestion = document.querySelector("#theQuestion");
const theOptions = document.querySelector("#theOptions");

const btn = document.querySelector(".btn")

count = 0;
const options = questions[count].options;
const question = questions[count].question;
const answer = questions[count].answer;

questionHeader.innerHTML = `QUESTION ${count + 1}`;
theQuestion.innerHTML = question;

//to display options

options.forEach(function(el,index) {
  let option = document.createElement("input");
  option.type = "radio";
  option.value = el;
  option.name = el;


  let list = document.createElement('li')

  list.innerHTML = el;
  
  theOptions.appendChild(list);
  list.appendChild(option)
});

btn.onclick = function(){
  options[answer]
  document.get
}
