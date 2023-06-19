document.addEventListener("DOMContentLoaded", function () {

    const params = new URLSearchParams(window.location.search);
    document.getElementById("hello-area").innerHTML = params.get('yname');
    document.getElementById("level-area").innerHTML = params.get('level');
    document.getElementById("score-area").innerHTML = '0';

    let choice = params.get('level');

    runQuiz(choice);

});

function runQuiz(level) {

    easyQuestions();

}

function easyQuestions() {
    let easyQuest = [
        {
            question: "Which wonder of the world is in India?",
            answers: {
                a: 'Machu Picchu',
                b: 'The Colosseum',
                c: 'Taj Mahal',
                d: 'The Great Wall'
            },
            correctAnswer: 'c: Taj Mahal'
        },
    ];

    for (i = 0; i < easyQuest.length; i++) {
        displayQuestion(easyQuest[i]);
    }
}

function displayQuestion(quest) {
    document.getElementById("question").innerHTML = quest.question;

}