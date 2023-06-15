"use strict"
// Initialize after page load
window.addEventListener("load", init);

/**
 * 
 */
function init () {
    createGrids ();
    createInputFields ();
    // Next Steps: createKeyFields();
}

/* Global Variables */

/**
 * 
 */
function createGrids () {
    const figure = document.getElementById('EnigmaMachine');
    // Create 3 Grids with 3 Rows and 3 Cells
    const maxSize = 3;
    // 
    for (let matrixIndex = 0; matrixIndex < maxSize; matrixIndex++) {
        const matrix = document.createElement('table');
            // Create maxSize number of Rows
        for (let rowIndex = 0; rowIndex < maxSize; rowIndex++) {
            // Add rows to the Gameboard
            var rows = matrix.insertRow(rowIndex);
            // Create maxSize number of cells
            for (let cellIndex = 0; cellIndex < maxSize; cellIndex++) {
                // Add cell to the rows, in the gameboard
                var cells = rows.insertCell(cellIndex);
                // Fill inner of HTML with # of Row and Cell
                cells.innerHTML = "Grid:"+ matrixIndex +" Row:" + rowIndex + " Cell:" + cellIndex;
                // Add Pickable Class
                cells.classList.add("cell");
                // Attach a Click Event
                cells.addEventListener('click', handleCellClick);
            }
        }
        figure.appendChild(matrix);
    }
    // Get all created matrixCells
    var matrixCells = document.getElementsByTagName('td');
    // Give matrixCells an ID
    for (let idIndex = 0; idIndex < gridCells.length; idIndex++) {
        matrixCells[idIndex].id = idIndex;
    }
}


/**
 * 
 */
function createInputFields () {
    //
    const inputField = document.getElementById('InputField');
    inputField.appendChild(createInput('Text'));
    inputField.appendChild(createInput('Submit'));
}


/**
 * 
 */
function createKeyFields () {
    //
    const keyField = document.getElementById('KeyField');
    keyField.appendChild(new Option("label1", "value1"));
    keyField.appendChild(new Option("label2", "value2"));
}


/**
 * 
 * @param {*} InputType 
 * @returns 
 */
function createInput (InputType) {
    var newInput = document.createElement('input');
    newInput.setAttribute('type', InputType);
    newInput.setAttribute('name', InputType+'Field');
    newInput.setAttribute('value', InputType);
    return newInput;
}





function handleCellClick () {

}

