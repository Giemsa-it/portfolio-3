const button = document.querySelector("#check-btn");
const input = document.querySelector("input");
const scoreElement = document.querySelector(".score")
const highScoreElement = document.querySelector(".highscore")
const againElement = document.querySelector("#btn-again")
const questionMark = document.querySelector(".number")
const guessesElement = document.querySelector("#guesses");
const body = document.querySelector("body");


function updateHighScore(){
    highScore = totalScore
    highScoreElement.textContent = highScore;
}

let randomNumber = Math.floor(Math.random() * 20) + 1;

    let totalScore = 0
scoreElement.textContent = totalScore

let highScore = null
highScoreElement.textContent = 0

let guesses = [];

const getNumber = () => {
    const userNumber = Number(input.value);

    if (userNumber < 1 || userNumber > 20 || isNaN(userNumber)) {
        alert("Please enter a number between 1 and 20")
        input.value = "";
        return false;
    }

    guesses.push(userNumber);
    guessesElement.textContent = guesses.join(", ");

    if (userNumber === randomNumber) {
        console.log("TRUE");
        questionMark.textContent = randomNumber

        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });

        body.classList.add("light-mode");

        if (highScore === null || totalScore < highScore) {
            updateHighScore()
        }

        randomNumber = Math.floor(Math.random() * 20) + 1;
        totalScore = 0;
        scoreElement.textContent = totalScore;
        input.value = "";
        guesses = [];
        guessesElement.textContent = "";

        return true;
    }
    else {
        console.log("Incorrect!")
        totalScore += 1
        scoreElement.textContent = totalScore;
        input.value = "";
        return false;
    }
}


const resetScore = () => {
    highScoreElement.textContent = 0
    scoreElement.textContent = 0
    totalScore = 0
    highScore = null
    guesses = [];
    guessesElement.textContent = "";
    questionMark.textContent = "?"
    randomNumber = Math.floor(Math.random() * 20) + 1;
    body.classList.remove("light-mode")
}


button.addEventListener("click", getNumber);
againElement.addEventListener("click", resetScore);




