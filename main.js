const button = document.querySelector("#check-btn");
const input = document.querySelector("input");
const scoreElement = document.querySelector(".score")
const highScoreElement = document.querySelector(".highscore")

let randomNumber = Math.floor(Math.random() * 21);

let totalScore = 0
scoreElement.textContent = totalScore

let highScore = null
highScoreElement.textContent = 0


const getNumber = () => {
    const userNumber = Number(input.value);

    if (userNumber === randomNumber) {
        console.log("TRUE");

        if (highScore === null || totalScore < highScore) {
            highScore = totalScore
            highScoreElement.textContent = highScore;
        }

        randomNumber = Math.floor(Math.random() * 21);
        totalScore = 0;
        scoreElement.textContent = totalScore;
        input.value = "";

        return true;

    } else {
        console.log("Incorrect!")
        totalScore += 1
        scoreElement.textContent = totalScore;
        input.value = "";
        return false;
    }
}


button.addEventListener("click", getNumber);





