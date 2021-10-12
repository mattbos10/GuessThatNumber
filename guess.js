// GUESS THAT NUMBER
// Message to be used throughout the file/project
const enterNumText = `Please enter a number greater than zero`;

// Variable that can change/ For restarting the game
let restartGame = true;

// For storing the range of the number to be guessed
let rangeNum;

// For storing the actual number guessed
let randomNum;

// For storing the number of attempts remaining
let attempts;

// For storing the user's guess
let guess;

// For storing the users response to play again or NOT play again
let playAgain;

// Starting alert message
alert(`Welcome to "GUESS THAT NUMBER!" Please click "OK" to start the game.`)

// Game restarts as long as restartGame has a value of TRUE
while (restartGame) {
    // Asks a user to enter a # to set the upper bound for the random # that will be created (AKA # to be guessed)
    rangeNum = prompt(`Please enter a maximum number for the range:`);

    // Using parseInt to attempt to convert the user's response to a # value (NOTE: The value returned from a prompt is a string value. Also, if the value cannot be converted then the value returned will be NaN [Not a Number])
    rangeNum = parseInt(rangeNum);

    // Verifying that the users entry for the rangeNum is a number greater than 0 (Note: NaN has a default boolean value of false. Also, all numbers, positive and negative, has a default boolean value of true except for zero, which is false)
    while (!rangeNum || rangeNum < 1) {
        rangeNum = prompt (enterNumText);
        rangeNum = parseInt(rangeNum);
    }

    // Creates the random number (AKA the # to be guessed by the user) using the range number entered by the user
    randomNum = Math.floor(Math.random() * rangeNum) + 1;

    // Prompts user to enter the # of attempts allowed (How many guesses). Also attempting to convert their response into a # 
    attempts =parseInt(prompt(`Please enter a number of attempts allowed:`));

    // Verifying that the users entry for # of attempts allowed is a # greater than 0
    while (!attempts || attempts < 1) {
        attempts = parseInt(prompt(enterNumText));
    }

    // Asks user to enter a guess and tells them how many guesses left, if wrong
    guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) left:`)

    // Continues looping until correct # is guessed or they run out of attempts (NOTE: Loops until a BREAK keyword is run)
    while(true) {
        // attempts to convert the users guess into a # 
        guess = parseInt(guess);

        // Verifies the users guess is a # > 0 as well as a # within the range set by the user previously
        while (!guess || guess <1 || guess > rangeNum) {
            guess = parseInt(prompt(`Please enter a number from 1 to ${rangeNum}.`));
        }

        // Removes an attempt
        attempts--;

        // checks if the user guesses correctly. If so, the game ends (NOTE: break the loop)
        if (guess === randomNum) {
            alert(`CONGARTULATIONS YOU GUESSED THE CORRECT NUMBER: ${randomNum}`);
            break;
        }

        // Check to see if they have any attempts left
        else if (attempts === 0) {
            alert(`Sorry, but you have run out of attempts :(. The number was ${randomNum}!)`);
            break;

            // Lets the user know if their guess was lower than the correct #
        } else if (guess < randomNum) {
            guess = prompt(`Too low. You have ${attempts} attempt(s) left`);
        }
        //  Lets the user know if their guess was higher than the correct # (doesn't need to be else if since if its not lower it has to be higher or correct/process of elimination)
        else {
            guess = prompt(`Too high. You have ${attempts} attempt(s) left`);
        }
    }

    // Prompts user with option to play again
    playAgain = prompt(`Would you like to play again? Y for yes. N for no.`)

    // Loop continues until user submits a valid response
    while(true) {
        // Checks if user does not want to play again (AKA: N or n)
        if (playAgain === "N" || playAgain === "n") {
            //  Alerts the user that the game/loop does NOT restart
            alert(`Thanks for playing!`);  
            restartGame = false;   
            break;

            // checks if the user response is yes (AKA: Y or y)
        } else if (playAgain === "Y" || playAgain === "n") {
            // game restarts if user says Y or y
            break;
        }
    }
}