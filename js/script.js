
const startButton= document.getElementById("start-button");
startButton.addEventListener("click", runGame);
const nextQuestion = document.getElementById("next-button");
nextQuestion.addEventListener("click", runNextQuestion);


const userResult = document.getElementById("user-result")


const buttonA = document.getElementById("a-button");
buttonA.addEventListener("click", aButtonClick);
const buttonB = document.getElementById("b-button");
buttonB.addEventListener("click", bButtonClick);
const buttonC = document.getElementById("c-button");
buttonC.addEventListener("click", cButtonClick);
const buttonD = document.getElementById("d-button");
buttonD.addEventListener("click", dButtonClick);
 
const questionContainer= document.getElementById("question-container");
const answerContainer= document.getElementById("answer-flex");
const nextButtonContainer= document.getElementById("next-button-container");
const infoContainer = document.getElementById("info-container")

let questionBox = document.getElementById("question-box");
let questionIndex = 0;
let userScore=0

const questions = [
    { 
    question: "(1) Who the only team to have gone a full season without losing a match in the Premier League?",
    answer: ["Arsenal", "Chelsea", "West Ham", "Fulham"],
    },
    { 
    question: "(2) Who is the all-time Premier League top goalscorer, with 260 goals?",
    answer: ["Harry Kane", "Wayne Rooney", "Alan Shearer", "Eric Cantona"],
    },
    { 
    question: "(3) Who were the first club to win the Premier League title in 1992/93?",
    answer: ["Manchester United", "Wolves", "Blackburn", "Tottenham"],
    },
    {
    question: "(4) Who holds the record for the most Premier League appearances?",
    answer: ["Peter Schmeichel", "Roy Keane", "Joe Hart", "Gareth Barry"],
    },
    {
    question: "(5) Who was the manager of Blackburn Rovers when they won the Premier League title in 1995?",
    answer: ["David Moyes ", "Kenny Dalglish", "Alex Ferguson", "Gareth Southgate"], 
    },
    {
    question: "6) Who scored the 30,000th Premier League goal, in August 2021?",
    answer: ["Chris Wood", "Robert Firmino", "Marcus Rashford", "Robbie Keane"] 
    },   
    {
    question: "(7) Which goalkeeper has kept the most clean sheets in Premier League history?",
    answer: ["David de Gea", "Petr Cech", "Pepe Reina", "Shay Given"], 
    },
    {
    question: "(8) Who has scored the fastest PL goal, netting just 7.69 seconds after kick-off against Watford?",
    answer: ["Robin Van Persie", "Gabriel Jesus", "Shane Long", "Raheem Sterling"], 
    },
    {
    question: "(9)Who holds the PL record for goals in consecutive matches, netting in 11 straight appearances in 2015/16?",
    answer: ["Callum Wilson", "Sergio Aguero", "Cristiano Ronaldo", "Jamie Vardy"],
    },
    {
    question: "(10) Who is the oldest player to score a PL goal, aged 40 years 268 days against Portsmouth in 2006/07?",
    answer: ["Dwight Yorke", "Andy Cole", "Edison Cavani", "Teddy Sheringham"],
    }
        
 
]

//A function for running the game
function runGame() {
    startButton.classList.add("hide");
    questionContainer.classList.remove("hide");
    answerContainer.classList.remove("hide");
    nextButtonContainer.classList.remove("hide");
    infoContainer.classList.add("hide")

    questionBox.textContent = questions[questionIndex].question;
    buttonA.textContent = questions[questionIndex].answer[0];
    buttonB.textContent = questions[questionIndex].answer[1];
    buttonC.textContent = questions[questionIndex].answer[2];
    buttonD.textContent = questions[questionIndex].answer[3];
}



function runNextQuestion() {
    questionIndex++
    if (questionIndex<10) {
        
        buttonA.classList.remove("wrong")
        buttonA.classList.remove("correct")
        buttonB.classList.remove("wrong")
        buttonB.classList.remove("correct")
        buttonC.classList.remove("correct")
        buttonC.classList.remove("wrong")
        buttonD.classList.remove("wrong")
        buttonD.classList.remove("correct")
        
        
        runGame();
    }
   
    else {
        //add submit button
        window.open("end.html", "_self")  

            
    }
}

function aButtonClick() {
    
    if (questionIndex === 0) {
        correctAnswerA(); 
        setTimeout(runNextQuestion, 500);
         
    }
    else if (questionIndex === 2) {
        correctAnswerA();
        setTimeout(runNextQuestion, 500);
        
    }
    else if (questionIndex === 5) {
        correctAnswerA();
        setTimeout(runNextQuestion, 500);
    }
    else {
          wrongAnswerA();
          setTimeout(runNextQuestion, 500);
    }
} 

function bButtonClick() {
    if (questionIndex === 4) {
        correctAnswerB();
        setTimeout(runNextQuestion, 500);
       
    }
    else if (questionIndex === 6) {
        correctAnswerB();
        setTimeout(runNextQuestion, 500);
    }
    else {
        wrongAnswerB();
        setTimeout(runNextQuestion, 500);
    }


} 
function cButtonClick() {
    if (questionIndex === 1) {
        correctAnswerC()
        setTimeout(runNextQuestion, 500);
       
    }
    else if (questionIndex === 7) {
        correctAnswerC()
        setTimeout(runNextQuestion, 500);
        
    }
    else {
          
          wrongAnswerC()  
          setTimeout(runNextQuestion, 500);
    }
} 
function dButtonClick() {
    if (questionIndex === 3) {
        correctAnswerD()
        setTimeout(runNextQuestion, 500);
    }
    else if (questionIndex === 8) {
        correctAnswerD()
        setTimeout(runNextQuestion, 500); 
    }
    else if (questionIndex === 9) {
        correctAnswerD()
        setTimeout(runNextQuestion, 500);
    }
    else {

        wrongAnswerD()
        setTimeout(runNextQuestion, 500);
    }
   
} 

function correctAnswerA() {
   buttonA.classList.add("correct")
   userScore++

}
function wrongAnswerA() {
    buttonA.classList.add("wrong")

}

function correctAnswerB() {
    buttonB.classList.add("correct")
    userScore++ 
 
 }
 function wrongAnswerB() {
     buttonB.classList.add("wrong")
 }

 function correctAnswerC() {
    buttonC.classList.add("correct")
    userScore++
 
 }
 function wrongAnswerC() {
     buttonC.classList.add("wrong")
 }

 function correctAnswerD() {
    buttonD.classList.add("correct")
    userScore++
 
 }
 function wrongAnswerD() {
     buttonD.classList.add("wrong")
 }
 
 
