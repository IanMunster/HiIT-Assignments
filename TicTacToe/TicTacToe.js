/** Tic Tac Toe Game
 * Script that add interactive Tic Tac Toe to a page.
 * Based on a TableGrid, each Table Cell has a Click Event
 * [0] [1] [2]
 * [3] [4] [5]
 * [6] [7] [9]
 * Players can Click one cell each turn, changing the cells content to either a X or an O.
 * A cell can only be filled with a X or O once per round
 * If a player can Connect three cells with their symbol, either straight or diagonally that player wins
 * If all cell are filled, but no three cell connect with the same symbol, the game ends with a tie.
 *  *  Win Conditions
 * Horizontal
 *  [1, 2, 3], [4, 5, 6], [7, 8 ,9],
 * Vertical
 *  [1, 4, 7], [2, 5, 8], [3, 6, 9],
 * Diagonal
 *  [1, 5, 9], [3, 5, 7]
 * 
  https://dev.to/bornasepic/pure-and-simple-tic-tac-toe-with-javascript-4pgn
  https://www.makeuseof.com/tic-tac-toe-game-javascript-html-css-create/
 */

"use strict"

// Initialize after page load
window.addEventListener("load", init);

// All Game Cells
var cells = [];
// Set Player 1
let isPlayer1 = true;
// Turn Counter
var turnCounter = 0;
// All Win Conditions
let winCondition = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
[0, 3, 6], [1, 4, 7], [2, 5, 8],
[0, 4, 8], [2, 4, 6]];

/** Initialize the Game
 * 
 */
function init() {
    // Reset the Turn Counter
    turnCounter = 0;
    // Get the Gameboard
    const gameboard = document.getElementById('gameCanvas');
    // Create the GameBoard 3x3 Cells
    const maxSize = 3;
    // Create maxSize number of Rows
    for (let rowIndex = 0; rowIndex < maxSize; rowIndex++) {
        // Add rows to the Gameboard
        var rows = gameboard.insertRow(rowIndex);
        // Create maxSize number of cells
        for (let cellIndex = 0; cellIndex < maxSize; cellIndex++) {
            // Add cell to the rows, in the gameboard
            var cell = rows.insertCell(cellIndex);
            // Fill inner of HTML with # of Row and Cell
            cell.innerHTML = "Row:" + rowIndex + " Cell:" + cellIndex;
            // Add Pickable Class
            cell.classList.add('pickable');
            // Attach a Click Event
            cell.addEventListener('click', checkCell);
        }
    }
    // Get all created Cells
    cells = document.getElementsByTagName('td');

}

/** Check Cell Function
 * 
 */
function checkCell() {
    // get the Clicked Cell
    let clickedCell = this;
    // If the cell is not Filled 
    if (clickedCell.id == "") {
        if (checkTurn()) {
            // Set the Image with CSS
            clickedCell.id = "O";
        } else {
            // Set the Image with CSS
            clickedCell.id = "X";
        }
        // Remove the Event Listener
        clickedCell.removeEventListener('click', checkCell);
        // Remove the Pickable class
        clickedCell.classList.remove('pickable');
    } else {
        // Event should've been removed, alert JIC.
        alert("Already filled!");
    }
    console.log("turn: "+turnCounter)
    // If less turns then 5 (i.e a Winning Situation Could've occured)
    if (turnCounter > 5 && turnCounter < 9) {
        // Check the Board for a Win
        checkBoard();
    } else {
        endGame('draw');
    }

}



/** Check who's turn it is
 * 
 * @returns {Boolean} isPlayer 1
 */
function checkTurn() {
    // If Player its Player 1' turn, set no longer Player 1' turn and vice versa
    isPlayer1 == true ? isPlayer1 = false : isPlayer1 = true;
    // Increase turnCounter
    turnCounter++;
    // Update the interface
    updateInterface(isPlayer1);
    // return if its Player 1' turn
    return isPlayer1
}


/**Update the page' interface
 * @argument {Boolean} turn
 */
// 
function updateInterface(turn) {
    // Get interface element
    const turnInterface = document.getElementById('playerTurn');
    // if it's player one' turn
    if (turn) {
        turnInterface.innerText = "Turn Player 1";
        // otherwise player two' turn
    } else {
        turnInterface.innerText = "Turn Player 2";
    }
}


/**
 * Win Conditions is an Array containing the number of Cell ID in a Array for a win. I.e. Horizontal Positions, Vertical Positions and Diagonal Positions
 */
function checkBoard() {
}

/**
 * Check Whole Board after 5 turns, 
 * Check if the X/O are on Wining Cell Positions, based on Winning Condition Array -> X/O Win State
 * cells[#].id #=winCondition[0,1,2]
 * Otherwise wait for turn Counter == 9 i.e. Board Filled -> Draw State
 */

function endGame() {

}