//List trivia questions....... 
var questions = [
    {
      question: "What is the name of capital of Illinois?",
      option1: "Chicago",
      option2: "Peoria",
      option3: "Sprintfield",
      option4: "Rockford",
      answer: "3"
    },
    {
      question: "What is the name of capital of Missouri?",
      option1: "Jefferson City",
      option2: "Springfield",
      option3: "St. Louis",
      option4: "Kansas City",
      answer: "1"
    },
    {
      question: "What is the name of capital of Minnesota?",
      option1: "Minneapolis",
      option2: "Bloomington",
      option3: "Saint Paul",
      option4: "Minnetonka",
      answer: "3"
    }
  ];

let currentQuestion = 0
let score = 0
let totalQuestion = questions.length

let container = document.getElementById('triviaContainer')
let questionEL = document.getElementById('question')
let opt1 = document.getElementById('opt1')
let opt2 = document.getElementById('opt2')
let opt3 = document.getElementById('opt3')
let opt4 = document.getElementById('opt4')
let nextButton = document.getElementById('nextButton')
let startButton = document.getElementById('startButton')
let resultCont = document.getElementById('result')
let playAgainCont = document.getElementById('playAgain')
let resetButton = document.getElementById('resetBtn')
//console.log(resetBtn)
//------Time Variable--------
//Function to load the first question........
function loadQuestion(questionIndex){
    seconds = 10
    let q = questions[questionIndex]
    questionEL.textContent = (questionIndex + 1) + '. ' + q.question
    opt1.textContent = q.option1
    opt2.textContent = q.option2
    opt3.textContent = q.option3
    opt4.textContent = q.option4
}
// Function to load next question............

function loadNextQuestion () {
    let selectedOption = document.querySelector('input[type=radio]:checked')
    if (!selectedOption){
        alert("Please select your answer!")
        return
    }
    let answer = selectedOption.value 
    //console.log(answer)
    if(questions[currentQuestion].answer == answer){
        score += 10
    }
    //console.log(questions[currentQuestion].answer)
    selectedOption.checked = false
    currentQuestion++
    if (currentQuestion == totalQuestion - 1){
        nextButton.textContent = 'Finish'
    }
    if (currentQuestion == totalQuestion){
        container.style.display = 'none'
        resultCont.style.display = ""
        resultCont.textContent = 'Your Score: ' + score
        resetButton.style.display = ""
        return
    }
    loadQuestion(currentQuestion)
}
//loadQuestion(currentQuestion)
//-------- Time function-------------
function timer001(){
    seconds = seconds - 1
    if (seconds < 10){
        document.getElementById('time001').innerHTML = seconds
    }
    if (seconds < 1){
        window.clearInterval(update)
        container.style.display = 'none'
        resultCont.style.display = ""
        resultCont.textContent = 'Your Score: ' + score
        resetButton.style.display = ""
        return
    }
}
update = setInterval("timer001()", 1000)

