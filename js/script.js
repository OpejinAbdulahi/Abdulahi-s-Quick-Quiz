const options = document.querySelector('.options').children;
const answersTrackerContainer = document.querySelector('.answers-tracker');
const questionCountSpan = document.querySelector('.question-count-value');
const totalQuestionSpan = document.querySelector('.total-question');
const correctAnswerSpan = document.querySelector('.correct-answers');
const totalQuestionSpan2 = document.querySelector('.total-question2');
const percentage = document.querySelector('.percentage');
const question = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
let questionIndex;
let index = 0;
let myArray = [];
let myArr = [];
let score = 0;



//Array of Objects that holds questions, options and answers 
const questions = [
    {
        questione: "What is the name of Aeroplane Inventor?",
        options:["Samson and Samuel Wright", "Peter and Samuel Flyson's", "Wilbur and Orville Wright", "Benjamie and Hopkin Brad"],
        answer: 2
    },
    {
        questione: "What does Shark-Child called?",
        options:["shark-pups","sharklin", "little-shark","shark-lil"],
        answer:0
        },

    {
        questione: "What is the name of Computer Inventor?",
        options:["Charles Diof", "Franklin Bradoster","Babbage Johnson", "Charles Babbage"],
        answer: 3
    },
    {
        questione: "What is the name of television Inventor?",
        options:["Philip Augustine Logie", "Franklin VisionDon", "John Logie Baird", "Brad John teleisman"],
        answer: 2
    },
    {
        questione: "Who invented Python Programming Language?",
        options:["greennie van Rossie", "Guido van Rossum", "Rossum Daniel Martins", "Martins Van John"],
        answer: 1
    }
] 


//Dynamically formating of Questions, Options and Question count

totalQuestionSpan.innerHTML=questions.length;
function load() {
    questionCountSpan.innerHTML = index+1;
    question.innerHTML = questions[questionIndex].questione;
    option1.innerHTML = questions[questionIndex].options[0];
    option2.innerHTML = questions[questionIndex].options[1];
    option3.innerHTML = questions[questionIndex].options[2];
    option4.innerHTML = questions[questionIndex].options[3];
    index++;
}

function check(element) {
    if(element.id == questions[questionIndex].answer) {
        element.classList.add('correct');
        updateAnswerTracker('correct')
        score++;
        console.log("score:" +score)
    }
    else {
        element.classList.add('wrong');
        updateAnswerTracker('wrong')
    }
    disabledOptions()
}

function disabledOptions() {
    for(let i = 0; i < options.length; i++) {
        options[i].classList.add('disabled');
        if(options[i].id == questions[questionIndex].answer) {
            options[i].classList.add('correct');
        }
    }
} 

function enableOptions() {
    for(let i = 0; i < options.length; i++) {
        options[i].classList.remove('disabled', 'correct', 'wrong');        
    }
} 

//lets check if user select any option, if not system yell at him/her "please select one option"
function validate() {
    if(!options[0].classList.contains('disabled')) {
        alert('Hey!!! Select your answer')
    }
    else {
        enableOptions();
        randomQuestion();
    }
}

function next() {
    validate();
}

function randomQuestion() {
    let randomNumber = Math.floor(Math.random()*questions.length);
    let hitDuplicate = 0;
        if(index == questions.length) {
            quizOver();
        }
        else {
            if(myArray.length>0){
                for(let i = 0; i < myArray.length; i++){
                    if(myArray[i] == randomNumber) {
                        hitDuplicate = 1;
                        break;
                    }
                }
                if(hitDuplicate == 1) {
                    randomQuestion();
                }
                else {
                    questionIndex = randomNumber;
                    load();
                    myArr.push(questionIndex);
                }
            }
            if(myArray.length==0){
                questionIndex = randomNumber;
                load();
                myArr.push(questionIndex);
            }

        myArray.push(randomNumber);
        
        }        
}


function answersTracker() {
    for(let i = 0; i < questions.length; i++) {
        const div = document.createElement('div')
            answersTrackerContainer.appendChild(div);        ;
    }
}

function updateAnswerTracker(classNam) {
    answersTrackerContainer.children[index-1].classList.add(classNam);
}

//calculate for scores in percentage
function quizOver() {
    document.querySelector('.quiz-over').classList.add("show");
    correctAnswerSpan.innerHTML = score;
    totalQuestionSpan2.innerHTML = questions.length;
    percentage.innerHTML = (score/questions.length)*100 + "%";
}

function tryAgain() {
    window.location.reload();
}

window.onload = function() {
    randomQuestion();
    answersTracker();
}



