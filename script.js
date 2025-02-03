let userScore = 0;
let compScore = 0;
let userCount = document.querySelector("#user-score");
let compCount = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  let op = Math.floor(Math.random() * 3);
  return options[op];
};

const drawGame = () => {
  console.log("Game was Draw");
  msg.innerText = "Draw!";
  msg.style.backgroundColor = "blue";
};

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    console.log("User won!");
    userCount.innerText = userScore;
    msg.style.backgroundColor = "green";
    msg.innerText = "You Win!";
  } else {
    compScore++;
    console.log("Computer won");
    compCount.innerText = compScore;
    msg.style.backgroundColor = "crimson";
    msg.innerText = "You Lose!";
  }
};
const playGame = (userChoice) => {
  let compChoice = genCompChoice();
  if (userChoice == compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice == "rock") {
      userWin = compChoice == "paper" ? false : true;
    } else if (userChoice == "paper") {
      userWin = compChoice == "scissors" ? false : true;
    } else if (userChoice == "scissors") {
      userWin = compChoice == "rock" ? false : true;
    }

    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("clicked", userChoice);
    playGame(userChoice);
  });
});
