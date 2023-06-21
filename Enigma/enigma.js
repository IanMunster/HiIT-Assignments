"use strict"
// Initialize after page load
window.addEventListener("load", init);

/** Initialize after Page Load Function
 * Call Create Matrix (grid) Elements
 * Call Creat Input Elements
 * Call Create Dropdown Element
 */
function init() {
    // Create 3 Grids with 3 Rows and 3 Cells
    const matrixSize = 3;
    const cellSize = 9;

    const alphabetLength = 26;
    const charIndex = 65;
    // Functions
    createMatrices(matrixSize);
    createInputFields();
    createAlphabetArray(alphabetLength, charIndex);
    fillCells();
    createKeyFields("matrix", matrixSize);
    createKeyFields("cell", cellSize);
}


/* Global Variables */
var alphabetArray = [];
var matrixCellsArray = [];
var matrixArray = [{ matrix: 0, row: 0, cell: 0, id: 0 }]

/** Create the Enigma Matrices
 * 
 */
function createMatrices(size) {
    const figure = document.getElementById('EnigmaMachine');
    // Create maxSize number of Matrices (I.e. Grid)
    for (let matrixIndex = 0; matrixIndex < size; matrixIndex++) {
        const matrix = document.createElement('table');
        matrix.id = "matrix" + matrixIndex;
        // Create maxSize number of Rows
        for (let rowIndex = 0; rowIndex < size; rowIndex++) {
            // Add rows to the Gameboard
            let rows = matrix.insertRow(rowIndex);
            // Create maxSize number of cells
            for (let cellIndex = 0; cellIndex < size; cellIndex++) {
                // Add cell to the rows, in the gameboard
                let cells = rows.insertCell(cellIndex);
                // Add Pickable Class
                cells.classList.add("cell");
            }
        }
        // Create the Matrices
        figure.appendChild(matrix);
    }
}


/** Fill Matrix Cells
 * 
 * @param {*} offset 
 */
function fillCells(offset) {
    // Get all created matrixCellsArray
    matrixCellsArray = document.getElementsByTagName('td');
    // Go through all found TD Elements (i.e. Matrix Cells)
    for (let idIndex = 0; idIndex < matrixCellsArray.length; idIndex++) {
        // Give matrixCellsArray an ID
        matrixCellsArray[idIndex].id = idIndex;
        // Set the Text of Cell to the Character in Alphabet Array on same index
        let newoffsetPos = idIndex + offset;
        if (newoffsetPos < 0) {
            console.log("offset smaller than 0");
        }
        if (newoffsetPos > matrixCellsArray.length) {
            console.log("offset larger than array length");
        }

        matrixCellsArray[idIndex].innerText = alphabetArray[idIndex];
        // If there is no Char on Index
        if (alphabetArray[idIndex] == undefined) {
            // Set Text of Cell to empty Space
            matrixCellsArray[idIndex].innerText = String.fromCharCode(32);
        }
    }
}


/** Create Input Field Funtion
 * Get the Element in HTML for Inputfield,
 * Creates both an Text and SubmitButton Input
 */
function createInputFields() {
    // Get Empty Element to fill with Input Fields
    const inputField = document.getElementById('InputField');
    // Create a Text Input
    let textInput = inputField.appendChild(createInput('Text'));
    // Create a Submit Button
    let submitBtn = inputField.appendChild(createInput('Submit'));
    // Add a Click Event Listener to the button
    submitBtn.addEventListener('click', submitTextInput);
}


/** Create DropDown Options Input
 * Get the Element in HTML for keyfield,
 * Creates new Options within the Dropdown
 * @param {*} name - Name of the Select Field
 * @param {*} size - Size of the Select Field
 */
function createKeyFields(name, size) {
    // Get Empty Element to fill with Dropdown Options Field
    const keyField = document.getElementById('KeyField');
    let selectField = document.createElement('select');
    for (let sizeIndex = 0; sizeIndex < size; sizeIndex++) {
        selectField.appendChild(new Option(name + ": " + (sizeIndex + 1), (sizeIndex + 1)));
    }
    let selectOption = keyField.appendChild(selectField);
    selectField.id = name;
    selectField.addEventListener('change', submitOptionSelect);
}


/** Create New Input Function
 * Create a new Input based on Given Argument
 * @param {*} inputType - The Type of Input to create, Also used as Name and Value Attribus
 * @returns NewInput - Returns the newly create Input
 */
function createInput(inputType) {
    // New Input to Create
    const newInput = document.createElement('input');
    // Set Type Attribute, with given Parameter
    newInput.setAttribute('type', inputType);
    // Set Name Attribute with given Paramater + "Field"
    newInput.setAttribute('name', inputType + "Field");
    // Set Value Attribute with given Parameter
    newInput.setAttribute('value', inputType);
    // Add an ID based on the Input type
    newInput.id = inputType + "Input";
    // Return the newly created Input Field
    return newInput;
}


/** Create Alphabet Array Function
 * Array.from(): Returns an Array from any Object with a given Length
 * Array.map(): Creates a new Arrat form calling a function for each element
 * Map I + 65 for UTF-8 Characters ("A" = "65")
 */
function createAlphabetArray(arrayLength, charStart) {
    const alphabetMap = Array.from(Array(arrayLength)).map((callBackFunction, index) => index + charStart);
    alphabetArray = alphabetMap.map((char) => String.fromCharCode(char));
}


/** Sumbit Input Function
 * 
 * @param {*} event - The Click Event on the SubmitButton
 */
function submitTextInput(/*event*/) {
    clearDisplay();
    // let textToEncryptArray = Array.from(event.currentTarget.textParameter);
    let textToEncryptArray = Array.from(document.getElementById('TextInput').value);
    // Do the following for eacht of the Character in TextToEncryptArray
    textToEncryptArray.forEach(char => {
        // Get the Index of the Characters in the Alphabet Array
        let index = alphabetArray.indexOf(char.toUpperCase(), 0);
        //
        let idIndex;
        if(matrixCellsArray[index].id != undefined) {
           idIndex = matrixCellsArray[index].id;
        } else {
            idIndex = 26;
        }
        // Get the Computed Style from StyleSheet on the Matrix
        let foundCharStyle = window.getComputedStyle(matrixCellsArray[index]);
        // Get the Borderwidth of the found Characters
        let borderStyle = foundCharStyle.getPropertyValue('border-Width');
        // Display the Resulting Borders
        displayResult(borderStyle, idIndex);
    });
}


/** Submit Option Select
 * Should create offset for CellFill
 * IF Option ID = select3: Different Matrices; value1 = +9 value2 = +18
 * @param {*} event 
 */
function submitOptionSelect(event) {
    let optionID = event.currentTarget.id;
    let optionValue = event.currentTarget.value;
    console.log("Changed: " + optionID + " Value: " + optionValue);

    let newOffset = 0;
}


/** Clear old Output Display
 * 
 */
function clearDisplay() {
    const output = document.getElementById('OutputField');
    // Remove old output
    let child = output.lastElementChild;
    while (output.hasChildNodes()) {
        output.removeChild(child);
        child = output.lastElementChild;
    }
}


/** Display Text Result
 * !!! NEEDS Matrix ID in InnerText
 * @param {*} borderW 
 */
function displayResult(borderW, id) {
    const output = document.getElementById('OutputField');
    let outputDiv = document.createElement('div');
    outputDiv.classList.add("outputDiv");
    outputDiv.style.setProperty('border-width', borderW);
    if (id <= 8) {
        outputDiv.innerText = 1;
    } else if (id <= 17) {
        outputDiv.innerText = 2;
    } else {
        outputDiv.innerText = 3;
    }
    // outputDiv.innerText = id;
    output.appendChild(outputDiv);
}
