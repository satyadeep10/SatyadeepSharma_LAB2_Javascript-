function Quiz(questions){
  this.score=0;
  this.questions=questions;
  this.questionIndex=0;
}

Quiz.prototype.getQuestionByindex= function(){

    return this.questions[this.questionIndex];
}

//Question
//text 
//choice
//answer

Quiz.prototype.checkOptionWithAnswer=function(answer) {

    if(this.getQuestionByindex().isCorrectAnswer(answer)) {
      this.score++;
    }
    this.questionIndex++;
}

Quiz.prototype.isEnded=function(){
 return this.questionIndex === this.questions.length;

}

function Question(text,choices,answer){
    this.text=text;
    this.choices=choices;
    this.answer=answer;
    }

Question.prototype.isCorrectAnswer = function(choice){
    return this.answer===choice;
}

//Questions

var questions = [
    new Question ("JavaScript Supports",["Function","CSS","HTML","XML"],"Function"),
    new Question ("Language used for styling webpage",["HTML","Jquery","CSS","XML"],"CSS"),
    new Question ("Which is not JS Framework",["Python","Jquery","Django","XML"],"Django"),
    new Question ("Which is used to connect with Database",["PHP","HTML","JS","All"],"PHP"),
    new Question ("JavaScript is a ",["Language","Programming Language","Development","All"],"Programming Language"),
];

function loadQuestions(){
if(quiz.isEnded()){
    showScores();
} else {

    //get question by index
    let question = quiz.getQuestionByindex();
    var element = document.getElementById("question");
    element.innerHTML=question.text;
    //question.choices

    var choices= question.choices;
    for(var i=0;i< choices.length; i++){
       var element = document.getElementById("choice"+ i);
       element.innerHTML=choices[i];
       handleOptionButton("btn"+i ,choices[i]);
    }

    showProgressBar();

}
   function showScores(){
        let scoreHtml = "<h1>Result</h1>";
        scoreHtml += "<h2 id='score'>Your scores:"+quiz.score+ " </h2>"
        let quizElement = document.getElementById("quiz");
        quizElement.innerHTML = scoreHtml;
      }
      
      function showProgressBar(){
        let currentQuestionNumber = quiz.questionIndex + 1;
        let progressElement = document.getElementById("progress");
        progressElement.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
      }


}

function handleOptionButton(id,choice){
let button = document.getElementById(id);
button.onclick = function(){
quiz.checkOptionWithAnswer(choice);
loadQuestions();
}
}

let quiz = new Quiz(questions);
loadQuestions();