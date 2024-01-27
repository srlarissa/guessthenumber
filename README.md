# Guess the Number

##Sumary
A mobile game where the player selects a number between 1 and 99, and the phone (opponent) attempts to guess it.

##Project Structure
.
├── .expo/
├── .gitignore
├── App.js
├── README.md
├── app.json
├── assets/
│   └── image/
│       └── animation/
│           ├── dicesplash.json
│           ├── loadingsplash.json
│           └── victory.json
├── babel.config.js
├── components/
│   ├── UI/
│   │   ├── InstructionBox.js
│   │   ├── PrimaryButton.js
│   │   └── PrimaryTitle.js
│   └── game/
│       ├── Card.js
│       ├── GuessLog.js
│       ├── InstructionTxt.js
│       └── NumberContainer.js
├── constants/
│   └── Colors.js
├── package.json
├── routes/
│   └── index.js
└── screens/
    ├── GameOverScreen.js
    ├── GameScreen.js
    ├── Splash.js
    └── StartGameScreen.js

##How to install

1. Clone the repository on your PC
2. Use **npm i** to install all dependencies locally on your computer
3. Use **npx expo start** on the root folder to initiate the project

##Screens

1. **Splash.js:** Animated splash screen right before the first game screen.
2. **StartGameScreen.js:** The first game screen of the project. On this screen you can insert a number between 1 and 99.
3. **GameScreen.js:** Here the opponent's guesses will be shown and the log of the guesses will be presented on the 
4. **GameOverScreen.js:** After correct guess, the game will end and the game over screen will show the match info like the number guessed and how many rounds were necessary to the opponent discover the correct number.


