var currentQuestion =0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var previousButton = document.getElementById('previousButton');
var resultCont = document.getElementById('result');

function loadQuestion (questionIndex) {
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) +' .' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
} ;
function loadNextQuestion () {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if (!selectedOption){
        alert('Please select your answer!');
        return;
    }
    var answer =selectedOption.value;
    if(questions[currentQuestion].answer == answer){
        score += 10;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions - 1){
        nextButton.textContent = 'finish';
        
    } 
    if(currentQuestion == totQuestions){
        container.style.display = 'none ';
        resultCont.style.display ='';
        resultCont.textContent = 'You Scored : ' + (score) +'%' ;
       ;
        
       
        if (score < 40){
            console.log("Grade:F");
        }
        else if (score < 50 ){
            console.log("Grade: D");
        }
        else if (score < 60 ){
            console.log("Grade: C");
        }
        else if (score < 70 ){
            console.log("Grade: B");
        }
        else if (score < 80 ){
            console.log("Grade: A");
        }
        else if (score < 100 ){
            console.log("Grade: A");
        
        return;
    }
    
}
    loadQuestion(currentQuestion);


}

loadQuestion(currentQuestion);