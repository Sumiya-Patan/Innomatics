// DOM Elements
const moveCounter = document.getElementById("move-counter");
const timerDisplay = document.getElementById("timer");
const endGameBtn = document.getElementById("end-game");
const gameBoard = document.querySelector(".game-board");
const gameResult = document.getElementById("game-result");
const landingPage = document.querySelector(".landing-page");
const gameWrapper = document.querySelector(".game-wrapper");

let firstCard = null;
let secondCard = null;
let moves = 0;
let matchedPairs = 0;
let timeRemaining = 30;
let timer;

// Categories Data
const categories = {
    fruits: ["🍎", "🍌", "🍇", "🍉", "🍓", "🍍", "🥭", "🥑"],
    emoji: ["😀", "😂", "😎", "😍", "🥳", "😡", "😱", "🤯"],
    planets: ["🪐", "🌍", "🌕", "🌞", "🌑", "⭐", "💫", "🌠"],
    animals: ["🐶", "🐱", "🐭", "🐹", "🐰", "🐯", "🦁", "🐮"],
    flags: ["🇺🇸", "🇬🇧", "🇫🇷", "🇩🇪", "🇮🇳", "🇯🇵", "🇨🇳", "🇧🇷"]
};


function selectCategory(category) {
    landingPage.classList.add("hide");
    gameWrapper.classList.remove("hide");
    gameResult.classList.add("hide"); 
    startGame(category);
}


function startGame(category) {
    gameBoard.innerHTML = "";
    moves = 0;
    matchedPairs = 0;
    moveCounter.innerText = `Moves: 0`;
    clearInterval(timer);

    let icons = [...categories[category], ...categories[category]];
    icons.sort(() => Math.random() - 0.5);

    icons.forEach(icon => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.dataset.icon = icon;
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">?</div>
                <div class="card-back">${icon}</div>
            </div>
        `;
        card.addEventListener("click", handleCardClick);
        gameBoard.appendChild(card);
    });

    startTimer();
}


function handleCardClick() {
    if (this.classList.contains("flipped") || secondCard) return;

    this.classList.add("flipped");

    if (!firstCard) {
        firstCard = this;
    } else {
        secondCard = this;
        moves++;
        moveCounter.innerText = `Moves: ${moves}`;

        if (firstCard.dataset.icon === secondCard.dataset.icon) {
            firstCard = null;
            secondCard = null;
            matchedPairs++;

            if (matchedPairs === 8) { // Since each category has 8 pairs
                clearInterval(timer);
                showGameResult(true);
            }
        } else {
            setTimeout(() => {
                firstCard.classList.remove("flipped");
                secondCard.classList.remove("flipped");
                firstCard = null;
                secondCard = null;
            }, 1000);
        }
    }
}


function startTimer() {
    timeRemaining = 30;
    timerDisplay.innerText = `Time: ${timeRemaining}s`;
    timer = setInterval(() => {
        timeRemaining--;
        timerDisplay.innerText = `Time: ${timeRemaining}s`;
        if (timeRemaining === 0) {
            clearInterval(timer);
            showGameResult(false);
        }
    }, 1000);
}


function showGameResult(isWin) {
    let message = "";
    if (isWin) {
        if (moves <= 15) {
            message = `<h2>Congrats! You have a great memory! 🧠</h2>`;
        } else if (moves <= 25) {
            message = `<h2>Good Job! You're improving! 🎉</h2>`;
        } else {
            message = `<h2>You did it! Keep practicing! 💪</h2>`;
        }
        message += `<p>You completed the game in ${moves} moves.</p>`;
    } else {
        message = `<h2>Time's Up! Better luck next time! ⏳</h2>`;
    }

    gameResult.innerHTML = message;
    gameResult.classList.remove("hide");
    endGameBtn.classList.remove("hide");
}


document.querySelectorAll(".category").forEach(button => {
    button.addEventListener("click", function () {
        selectCategory(this.dataset.category);
    });
});


endGameBtn.addEventListener("click", function () {
    clearInterval(timer);
    gameWrapper.classList.add("hide");
    landingPage.classList.remove("hide");
    gameResult.classList.add("hide"); 
});
