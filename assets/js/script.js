const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const startQuiz = document.getElementById('startquiz');
let currentQuestionIndex = 0;
let score = 0;
let correctAnswer = 0;
let choice;


let easyQuest = [
    {
        question: "Which wonder of the world is in India?",
        opt_a: 'Machu Picchu',
        opt_b: 'The Colosseum',
        opt_c: 'Taj Mahal',
        opt_d: 'The Great Wall',
        rightAnswer: "opt_c"
    },
    {
        question: "What is the Capital of India?",
        opt_a: 'New Delhi',
        opt_b: 'Mumbai',
        opt_c: 'Chandigarh',
        opt_d: 'Bengaluru',
        rightAnswer: "opt_a"
    },
];

let mediumQuest = [
    {
        question: "Which is the national animal of India?",
        opt_a: 'Loin',
        opt_b: 'Elephant',
        opt_c: 'Deer',
        opt_d: 'Tiger',
        rightAnswer: 'opt_d'
    },
    {
        question: "Name the national bird of India?",
        opt_a: 'Eagle',
        opt_b: 'Peacock',
        opt_c: 'sparrow',
        opt_d: 'Pigeon',
        rightAnswer: 'opt_b'
    },
];

document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    document.getElementById("hello-area").innerHTML = params.get('yname');
    document.getElementById("level-area").innerHTML = params.get('level');
    document.getElementById("score-area").innerHTML = score;
    choice = params.get('level');
    runQuiz(choice);
});

function runQuiz(level) {
    if (level === 'easy') {
        let easyQuestion = easyQuest[currentQuestionIndex];
        displayQuestion(easyQuestion);
    } else if (level === 'medium') {
        let mediumQuestion = mediumQuest[currentQuestionIndex];
        displayQuestion(mediumQuestion);
    } else {
        alert("You have not selected any difficulty level.");
    }
}

function displayQuestion(currentQuestion) {
    unselectAnswers();
    questionEl.innerText = currentQuestion.question;
    a_text.innerText = currentQuestion.opt_a;
    b_text.innerText = currentQuestion.opt_b;
    c_text.innerText = currentQuestion.opt_c;
    d_text.innerText = currentQuestion.opt_d;
}

function unselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function checkCorrectAnswer() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

startQuiz.addEventListener('click', function () {
    const answer = checkCorrectAnswer();
    console.log(answer);
    if (answer) {
        let questionLevel;
        if (choice === 'easy') {
            questionLevel = easyQuest;
        } else if (choice === 'medium') {
            questionLevel = mediumQuest;
        }
        if (answer === questionLevel[currentQuestionIndex].rightAnswer) {
            score++;
            correctAnswer++;
        } else {
            score = score - 1;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questionLevel.length) {
            runQuiz(choice);
        } else {
            quiz.innerHTML = `
                <h2>You answered ${correctAnswer}/${questionLevel.length} questions correctly</h2>
                <p>Your total score is ${score}.</p>
                <br>
                <button onclick="location.reload()" class="btn">Want to try again!</button>
                <a href="index.html" class="btn">Choose another level</a>
            `;
        }
    }
    document.getElementById("score-area").innerHTML = score;
});