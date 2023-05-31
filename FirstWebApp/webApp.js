"use strict"

/**
 * Small Game Application
 * The program selects a random Colour Value and gives three selectable options
 * One of the Options is the correct Colour, matching the Colour-Value
 * Points are given based on the Number of correct guesses
 */

/**
 * Get a random Color Value
 * Randomize a value between 0 and 255 for Red, Green and Blue
 * @returns {number} colour RGB value
 */
function getRandomColour () {
    // Assign random RGB Values
    let red = randomIntFromInterval (0, 255);
    let green = randomIntFromInterval (0, 255);
    let blue = randomIntFromInterval (0, 255);
    // Append Values to a Colour Value
    let colour = "rgb(" + red + "," + green + "," + blue + ")";
    // return random Colour Value
    return colour;
}

/**
 * Get a random number between the given Min-value and Max-value.
 * Rounds number down to nearest integer
 * and returns this Integer
 * @param {number} min 
 * @param {number} max 
 * @returns {number} returnValue
 */
function randomIntFromInterval (min, max) {
    // return value
    let returnValue;
    // random() returns a random number between 0 an 1
    // and floor() returns a rounded down integer
    returnValue = Math.floor( Math.random() * (max - min + 1) + min );
    // return the value
    return returnValue;
}