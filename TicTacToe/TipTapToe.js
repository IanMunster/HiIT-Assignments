"use strict"
// Initialize after page load
window.addEventListener("load", init);

/* And finally we add our event listeners to the restart button */
let RestartBtn;
//
let gameCell;
/*Here we declare some variables that we will use to track the game state throught the game. */
/*We will use gameActive to pause the game in case of an end scenario*/
let gameActive;
/* Current Active Player */
let currentPlayer;
/* Possible Winning Conditions */
const winningConditions = [ [0, 1, 2], [3, 4, 5], [6, 7, 8],
                            [0, 3, 6], [1, 4, 7], [2, 5, 8],
                            [0, 4, 8], [2, 4, 6] ];

/*We will store our current game state here, the form of empty strings in an array
 will allow us to easily track played cells and validate the game state later on*/
let gameState = ["", "", "", "", "", "", "", "", ""];

/*We store our game status element here to allow us to more easily 
use it later on */
let statusDisplay;
/*Here we have declared some messages we will display to the user during the game.
Since we have some dynamic factors in those messages, namely the current player,
we have declared them as functions, so that the actual message gets created with 
current data every time we need it.*/


const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
/*We set the inital message to let the players know whose turn it is*/
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;



/**
 * 
 */
function init() {
    RestartBtn = document.getElementById("restartButton").addEventListener('click', handleRestartGame);
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay = document.getElementById('playerTurn');
    statusDisplay.innerHTML = currentPlayerTurn();
    createBoard();
}


/** Create Game Board Function
 * 
 */
function createBoard() {
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
            // cell.innerHTML = "Row:" + rowIndex + " Cell:" + cellIndex;
            // Add Pickable Class
            cell.classList.add('pickable');
            // Attach a Click Event
            cell.addEventListener('click', handleCellClick);
        }
    }
    // Get all created gameCell
    gameCell = document.getElementsByTagName('td');
    // Give gameCell an ID
    for (let idIndex = 0; idIndex < gameCell.length; idIndex++) {
        gameCell[idIndex].id = idIndex;
    }
}


/**
 * 
 * @param clickedCellEvent 
 * @returns 
 */
function handleCellClick(clickedCellEvent) {
    /* We will save the clicked html element in a variable for easier further use */
    const clickedCell = clickedCellEvent.target;
    /* Here we will grab the 'data-cell-index' attribute from the clicked cell to identify where that cell is in our grid. 
    Please note that the getAttribute will return a string value. Since we need an actual number we will parse it to an 
    integer(number) */
    const clickedCellIndex = clickedCell.id;
    /* Next up we need to check whether the call has already been played, 
    or if the game is paused. If either of those is true we will simply ignore the click. */
    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }
    /* If everything if in order we will proceed with the game flow */
    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}


/**
 * 
 * @param clickedCell 
 * @param clickedCellIndex 
 */
function handleCellPlayed(clickedCell, clickedCellIndex) {
    /*We update our internal game state to reflect the played move, 
    as well as update the user interface to reflect the played move*/
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.classList.replace("pickable", currentPlayer);
    // clickedCell.classList.add(currentPlayer);
    // clickedCell.classList.remove("pickable")
    //clickedCell.innerHTML = currentPlayer;
}


/**
 * 
 * @returns 
 */
function handleResultValidation() {
    let roundWon = false;
    for (let winIndex = 0; winIndex <= winningConditions.length-1; winIndex++) {
        const winCondition = winningConditions[winIndex];
        let winPositions = [];
        for (let winPos = 0; winPos <= 3; winPos++ ) {
            winPositions[winPos] = gameState[winCondition[winPos]];
            if (winPositions[0] !== '' && winPositions[1] !== '' && winPositions[2] !== '' ) {
                if(winPositions[0] === winPositions [1] && winPositions[0] === winPositions[2]) {
                    console.log("WIN: "+winPositions);
                    // BLINK IMAGE CLASS
                    roundWon = true;
                    break;
                }
            }
        }

        


        // let winPos0 = gameState[winCondition[0]];
        // let winPos1 = gameState[winCondition[1]];
        // let winPos2 = gameState[winCondition[2]];
        // if (winPos0 === '' || winPos1 === '' || winPos2 === '') {
        //     continue;
        // }
        // if (winPos0 === winPos1 && winPos1 === winPos2) {

        //     roundWon = true;
        //     break
        // }
    }
    if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }
    /* We will check weather there are any values in our game state array 
    that are still not populated with a player sign */
    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }
    /* If we get to here we know that the no one won the game yet, 
    and that there are still moves to be played, so we continue by changing the current player. */
    handlePlayerChange();
}


/**
 * 
 */
function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}


/**
 * 
 */
function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    // For Each?
    for (let idIndex = 0; idIndex < gameCell.length; idIndex++) {
        gameCell[idIndex].classList.replace("X", "pickable");
        gameCell[idIndex].classList.replace("O", "pickable");
    }
    
}