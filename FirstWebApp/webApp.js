/**
 * Small Game Application
 * The program selects a random Colour Value and gives three selectable options
 * One of the Options is the correct Colour, matching the Colour-Value
 * Points are given based on the Number of correct guesses
 */

"use strict"

// Variable Declaration
var colourDisplay;

/** Load page
 * Initialize when page is loaded
 * Get the Coloud Display Element
 * Add Click Event to Game Button to Start the Game
 * Start the first round of the Game
 */
window.onload = function () {
    // Get the Colour Display Element
    colourDisplay = document.getElementById('randomColourDisplay');
    // Add "start Game" Click event to Game Button
    let gameBtn = document.getElementById('gameBtn').addEventListener('click', startGame, false);
    // Start first round
    startGame();
}

/** Random RGB
 * Get a random Color Value
 * Randomize a value between 0 and 255 for Red, Green and Blue
 * @returns {number} colour RGB value
 */
function getRandomColour() {
    // Assign random RGB Values
    let red = randomIntFromInterval(0, 255);
    let green = randomIntFromInterval(0, 255);
    let blue = randomIntFromInterval(0, 255);
    // Concatenate Values to a Colour Value
    let colour = "rgb( " + red + ", " + green + ", " + blue + " )";
    // return random Colour Value
    return colour;
}

/** Random INT
 * Get a random number between the given Min-value and Max-value.
 * Rounds number down to nearest integer
 * and returns this Integer
 * @param {number} min 
 * @param {number} max 
 * @returns {number} returnValue
 */
function randomIntFromInterval(min, max) {
    // return value
    let returnValue;
    // random() returns a random number between 0 an 1
    // and floor() returns a rounded down integer
    returnValue = Math.floor(Math.random() * (max - min + 1) + min);
    // return the value
    return returnValue;
}

/** start Game
 * Initialize the Colour Selection Options
 */
function startGame() {
    // Initialize the Choice Options
    initColourSelection();
}

/** Initialize Options Choice
 * Get all Pickalbe Choices
 * Get a random INT based on max Options
 * Give all Choices a random Background Colour
 * Add a click Event to the Options
 * Display the Colour text, based on one of the Options
 */
function initColourSelection() {
    // Get all Pickable Option Elements
    const colourChoices = document.getElementsByClassName('pickColour');

    // get a Random INT between 0-5 (I.e. for all Six Colour Choices)
    let randomIndexInt = randomIntFromInterval(0, colourChoices.length - 1);
    // Go through all Choices
    for (let choiceI = 0; choiceI < colourChoices.length; choiceI++) {
        // Randomly set background Colours of each Choice
        colourChoices[choiceI].style.backgroundColor = getRandomColour();
        // Add the Pickable Class
        colourChoices[choiceI].classList.add('pickable');
        // Add Click event
        colourChoices[choiceI].addEventListener('click', checkPickedColour, false);
    }

    // Display the Random Colour RGB (based on one of the options) as Text
    colourDisplay.textContent = colourChoices[randomIndexInt].style.backgroundColor;
}

/** Check the Clicked Colour
 * Check the RGB of clicked Choice against the Displayed RGB
 * If Colour RGB matches: Display Victory Message and ask to play again
 * If Colour RGB Does NOT match: Display Alert, Make Option Unclickable and remove unique Background Colour
 */
function checkPickedColour() {
    // Get the background colour of the clicked option
    let pickedChoice = this.style.backgroundColor;
    // check if picked option matches the Display value
    if (pickedChoice == colourDisplay.textContent) {
        // On Correct choice, display Play Again question
        let tryAgain = confirm("You chose CORRECT! \n Try Again?");
        if (tryAgain) {
            // On Confirm, play Again
            startGame();
        }
    } else {
        // if colour did NOT match, show alert
        alert ("Alas, this was not the correct Color \n Try another!");
        // Remove Option' unique background colour
        this.style.backgroundColor = 'inherit';
        // Remove Pickable class
        this.classList.remove('pickable');
        // Remove Click Event
        this.removeEventListener('click', checkPickedColour);
    }
}