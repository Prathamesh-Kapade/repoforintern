let randomnumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const user = document.querySelector("#guessField");
const guessslot = document.querySelector(".guesses");
const lastresult = document.querySelector(".lastresult");
const loworhi = document.querySelector(".lowOrHi");
const resultparas = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(user.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number greater than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than or equal to 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 6) {
      displayGuess(guess);
      displayMessage(`Game Over . Random number was ${randomnumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomnumber) {
    displayMessage(" You guessed it right!");
    endGame();
  } else if (guess < randomnumber) {
    displayMessage(" Please guess higher");
  } else if (guess > randomnumber) {
    displayMessage(" Please guess lower");
  }
}

function displayGuess(guess) {
  user.value = "";
  guessslot.innerHTML += `${guess} `;
  numGuess++;
  lastresult.innerHTML = `${6 - numGuess + 1}`;
}

function displayMessage(message) {
  loworhi.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
  user.value = "";
  user.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h3 id="newGame">Start New Game</h3>`;
  resultparas.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function () {
    randomnumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessslot.innerHTML = "";
    lastresult.innerHTML = `${6 - numGuess + 1}`;
    user.removeAttribute("disabled");
    resultparas.removeChild(p);
    playGame = true;
  });
}
