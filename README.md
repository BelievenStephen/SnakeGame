# Snake Game

A classic Snake game built using HTML, CSS, and JavaScript. Enjoy the nostalgic game where you control a snake to eat food and grow longer, avoiding collisions with the walls and yourself.

## Table of Contents

- [Gameplay](#gameplay)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Files](#files)
- [Contributing](#contributing)
- [License](#license)

## Gameplay

Use the arrow keys to control the snake. The objective is to eat the food that appears on the board. Each time the snake eats the food, it grows longer, and your score increases. Be careful not to run into the walls or yourself, or it's game over!

## Features

- Classic Snake game mechanics
- Real-time score tracking
- High score tracking stored in the browser's local storage
- Background music and sound effects for food, movement, and game over events

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd SnakeGame
    ```

3. Ensure you have a web server to serve the files, such as [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for Visual Studio Code.

## Usage

1. Open the project directory in your code editor.
2. Serve the `index.html` file using your preferred web server or by opening it directly in your browser.
3. Use the arrow keys to start the game and control the snake.

## Files

- `index.html`: The main HTML file containing the game structure.
- `style.css`: The CSS file for styling the game.
- `script.js`: The JavaScript file containing the game logic.
- `music/`: Directory containing sound files used in the game.
  - `food.wav`: Sound played when the snake eats food.
  - `gameover.wav`: Sound played when the game is over.
  - `move.mp3`: Sound played when the snake changes direction.
  - `game.mp3`: Background music played during the game.
