let mssg = document.querySelector(".mssg");
const choice = document.querySelectorAll(".image");
let cScore = document.querySelector("#comp-score");
let uScore = document.querySelector("#user-score");
let userScore = 0;
let compScore = 0;
let userChoice;

choice.forEach((image) => {
    console.log(image);
    image.addEventListener("click", () => {
        userChoice = image.getAttribute("id");
        userPlay(userChoice);
    });
});

const userPlay = (userChoice) => {
    const compChoice = genCompChoice();
    if (compChoice === userChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //paper , scissors
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

const showWinner = (userWin) => {
    if (userWin === true) {
        userScore++;
        mssg.innerText = " Hurrah! You Won the Game 😀";
        uScore.innerText = userScore;
        mssg.style.backgroundColor = "green ";
    } else {
        compScore++;
        mssg.innerText = "Oops! You lose the Game 😥";
        cScore.innerText = compScore;
        mssg.style.backgroundColor = "red ";
    }
};

const drawGame = () => {
    mssg.innerText = "The game was draw!! Play Again.";
    mssg.style.backgroundColor = "purple";
};

const genCompChoice = () => {
    const chances = ["rock", "paper", "scissor"];
    const randIndx = Math.floor(Math.random() * 3);
    return chances[randIndx];
};
