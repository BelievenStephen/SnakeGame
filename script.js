// Game Constants & Variables
let inputDir = {x: 0, y: 0};
const foodSound = new Audio('music/food.wav');
const gameOverSound = new Audio('music/gameover.wav');
const moveSound = new Audio('music/move.mp3');
const gameMusic = new Audio('music/game.mp3');

gameMusic.loop = true;
gameMusic.volume = 0.2; 
moveSound.volume = 0.2;

let speed = 9;
let score = 0;
let lastPaintTime = 0;
let snakeArr = [{x: 13, y: 15}];
let food = {x: 6, y: 7};
let highscoreval = 0;

// Game Functions
function main(ctime) {
    window.requestAnimationFrame(main);
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

function isCollide(snake) {
    // If you bump into yourself
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
    }
    // If you bump into the wall
    if (snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y >= 18 || snake[0].y <= 0) {
        return true;
    }
    return false;
}

function gameEngine() {
    // Part 1: Updating the snake array and food
    if (isCollide(snakeArr)) {
        gameOverSound.cloneNode(true).play();
        inputDir = {x: 0, y: 0};

        // Delay the alert to ensure the game over sound plays
        setTimeout(() => {
            alert("Game Over. Press any key to play again!");
        }, 100);

        snakeArr = [{x: 13, y: 15}];
        score = 0;
        scoreBox.innerHTML = "Score: " + score;
        return;
    }

    // If you have eaten the food, increment the score and regenerate the food
    if (snakeArr[0].x === food.x && snakeArr[0].y === food.y) {
        foodSound.currentTime = 0;
        foodSound.play();
        score += 1;
        if (score > highscoreval) {
            highscoreval = score;
            localStorage.setItem("highscore", JSON.stringify(highscoreval));
            highscoreBox.innerHTML = "HighScore: " + highscoreval;
        }
        scoreBox.innerHTML = "Score: " + score;
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y});
        let a = 2;
        let b = 16;
        food = {x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random())};
    }

    // Moving the snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = {...snakeArr[i]};
    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    // Part 2: Display the snake and Food
    // Display the snake
    const board = document.getElementById('board');
    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;

        if (index === 0) {
            snakeElement.classList.add('head');
        } else {
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    });

    // Display the food
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);
}

// Main logic starts here
let highscore = localStorage.getItem("highscore");
if (highscore === null) {
    highscoreval = 0;
    localStorage.setItem("highscore", JSON.stringify(highscoreval));
} else {
    highscoreval = JSON.parse(highscore);
    highscoreBox.innerHTML = "HighScore: " + highscoreval;
}

// Start the background music
gameMusic.play();

window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    const previousInputDir = { ...inputDir }; // Store the previous direction

    inputDir = {x: 0, y: 1}; // Start the game
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;
    }

    // Play the move sound if the direction has changed
    if (previousInputDir.x !== inputDir.x || previousInputDir.y !== inputDir.y) {
        moveSound.cloneNode(true).play();
    }
});
