/** Tic Tac Toe Game
 * Script that add interactive Tic Tac Toe to a page.
 * Based on a TableGrid, each Table Cell has a Click Event
 * Players can Click one cell each turn, changing the cells content to either a X or an O.
 * A cell can only be filled with a X or O once per round
 * If a player can Connect three cells with their symbol, either straight or diagonally that player wins
 * If all cell are filled, but no three cell connect with the same symbol, the game ends with a tie.
 */
"use strict"

// Initialize after page load
window.addEventListener("load", init);

// Initialize the Game
function init () {
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
            // Add cells to the rows, in the gameboard
            var cells = rows.insertCell(cellIndex);
            // Fill inner of HTML with # of Row and Cell
            //cells.innerHTML = "Row:" + rowIndex +" Cell:"+cellIndex;
            // Add Pickable Class
            cells.classList.add('pickable');
            // Attach a Click Event
            cells.addEventListener('click', checkCell);
        }
    }
}

// Check Cell Function
function checkCell () {
    // get the Background Image of Clicked Cell
    let clickedCell = this;
    // If the Image is empty
    if (clickedCell.style.backgroundImage == "") {
        if (checkTurn()) {
           // Set the Image
            clickedCell.style.backgroundImage  = "url(img/o-transparant.png)";
        } else {
            // Set the Image
            clickedCell.style.backgroundImage  = "url(img/x-transparant.png)"; 
        }
        // Remove the Event Listener
        clickedCell.removeEventListener('click', checkCell);
        // Remove the Pickable class
        clickedCell.classList.remove('pickable');
    } else {
        // Event should've been removed, alert JIC.
        alert ("Already filled!");
    }
}

// Set Player 1
let isPlayer1 = true;

function checkTurn () {
    isPlayer1 == true ? isPlayer1 = false : isPlayer1 = true;
    updateInterface(isPlayer1);
    return isPlayer1
}

function updateInterface(turn) {
    const turnInterface = document.getElementById('playerTurn');
    if (turn) {
        turnInterface.innerText = "Turn Player 1";
    } else {
        turnInterface.innerText = "Turn Player 2";
    }
}