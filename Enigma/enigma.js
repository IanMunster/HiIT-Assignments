"use strict"
// Initialize after page load
window.addEventListener("load", init);

/** Initialize after Page Load Function
 * Call Create Matrix (grid) Elements
 * Call Creat Input Elements
 * NEXT: Call Create Dropdown Element
 */
function init () {
    createMatrices ();
    createInputFields ();
    createAlphabetArray ();
    fillCells ();
    // Next Steps: createKeyFields();
}



/* Global Variables */
var alphabetArray = [];
var matrixCellsArray = [];
/**
 * 
 */
function createMatrices () {
    const figure = document.getElementById('EnigmaMachine');
    // Create 3 Grids with 3 Rows and 3 Cells
    const maxSize = 3;
    // Create maxSize number of Matrices (I.e. Grid)
    for (let matrixIndex = 0; matrixIndex < maxSize; matrixIndex++) {
        const matrix = document.createElement('table');
            // Create maxSize number of Rows
        for (let rowIndex = 0; rowIndex < maxSize; rowIndex++) {
            // Add rows to the Gameboard
            let rows = matrix.insertRow(rowIndex);
            // Create maxSize number of cells
            for (let cellIndex = 0; cellIndex < maxSize; cellIndex++) {
                // Add cell to the rows, in the gameboard
                let cells = rows.insertCell(cellIndex);
                // Add Pickable Class
                cells.classList.add("cell");
            }
        }
        figure.appendChild(matrix);
    }
}

/** 
 * 
 */
function fillCells () {
    // Get all created matrixCellsArray
    matrixCellsArray = document.getElementsByTagName('td');
    // Give matrixCellsArray an ID
    for (let idIndex = 0; idIndex < matrixCellsArray.length; idIndex++) {
        matrixCellsArray[idIndex].id = idIndex;
        matrixCellsArray[idIndex].innerText = alphabetArray[idIndex];
        if (alphabetArray[idIndex] == undefined) {
            matrixCellsArray[idIndex].innerText = "";
        }
    }
}


/** Create Input Field Funtion
 * Get the Element in HTML for Inputfield,
 * Creates both an Text and SubmitButton Input
 */
function createInputFields () {
    // Get Empty Element to fill with Input Fields
    const inputField = document.getElementById('InputField');
    // Create a Text Input
    let textInput = inputField.appendChild(createInput('Text'));
    // Create a Submit Button
    let submitBtn = inputField.appendChild(createInput('Submit'));
    submitBtn.addEventListener('click', submitInput);

    // ERROR!! Only Default Value ATM
    submitBtn.textParameter = textInput.value;
}


/** Create DropDown Options Input
 * Get the Element in HTML for keyfield,
 * Creates new Options within the Dropdown
 */
function createKeyFields () {
    // Get Empty Element to fill with Dropdown Options Field
    const keyField = document.getElementById('KeyField');
    keyField.appendChild(new Option("label1", "value1"));
    keyField.appendChild(new Option("label2", "value2"));
}


/** Create New Input Function
 * Create a new Input based on Given Argument
 * @param {*} inputType - The Type of Input to create, Also used as Name and Value Attribus
 * @returns NewInput - Returns the newly create Input
 */
function createInput (inputType) {
    // New Input to Create
    const newInput = document.createElement('input');
    // Set Type Attribute, with given Parameter
    newInput.setAttribute('type', inputType);
    // Set Name Attribute with given Paramater + "Field"
    newInput.setAttribute('name', inputType+"Field");
    // Set Value Attribute with given Parameter
    if (inputType == 'button' || inputType == 'submit') {
        newInput.setAttribute('value', inputType);
    } else {
        newInput.setAttribute('value', "SampleText");
    }

    // Return the newly created Input Field
    return newInput;
}


function createAlphabetArray () {
    // Array.from(): Returns an Array from any Object with a given Length
    // Array.map(): Creates a new Arrat form calling a function for each element
    // Map I + 65 for UTF-8 Characters ("A" = "65")
    const alphabetMap = Array.from(Array(26)).map((callBackFunction, index) => index + 65);
    alphabetArray = alphabetMap.map((x) => String.fromCharCode(x));
}


/**
 * 
 * @param {*} event - The Click Event on the SubmitButton
 */
function submitInput (event) {

    let textToEncryptArray = Array.from(event.currentTarget.textParameter);

    textToEncryptArray.forEach(char => {
        let index = alphabetArray.indexOf(char.toUpperCase(), 0);
        let foundCharStyle = window.getComputedStyle(matrixCellsArray[index]);

        let borderStyle = foundCharStyle.getPropertyValue('border-Width');
        console.log(matrixCellsArray[index].innerText+": "+borderStyle);
        displayResult(borderStyle);

        // let borderStyle = foundCharStyle.getPropertyValue('border');
        // console.log(matrixCellsArray[index].innerText+": "+borderStyle);
        // displayResult(borderStyle);

        // let borderTopStyle = foundCharStyle.getPropertyValue('border-top');
        // let borderRightStyle = foundCharStyle.getPropertyValue('border-right');
        // let borderBottomStyle = foundCharStyle.getPropertyValue('border-bottom');
        // let borderLeftStyle = foundCharStyle.getPropertyValue('border-left');
        // // console.log(borderTopStyle+" "+borderRightStyle+" "+borderBottomStyle+" "+borderLeftStyle+" "+matrixCellsArray[index].innerText);
        // displayResult(borderTopStyle, borderRightStyle, borderBottomStyle, borderLeftStyle);
    });
    
}


function displayResult (borderW) {
    const output = document.getElementById('OutputField');
    let outputDiv = document.createElement('div');
    outputDiv.classList.add("outputDiv");

    // outputDiv.style.setProperty('borderwidth', borderW, true);
    outputDiv.style.setProperty('border-width', borderW);
    // outputDiv.style.borderwidth = borderW;
    // console.log(borderW);
    output.appendChild(outputDiv);
}

// function displayResult (borderT, borderR, borderB, borderL) {
//     const output = document.getElementById('OutputField');
//     let outputDiv = document.createElement('div');
//     outputDiv.classList.add("outputDiv");
//     //outputDiv.style.border = newStyle;
//     outputDiv.style.borderTop = borderT;
//     outputDiv.style.borderRight = borderR;
//     outputDiv.style.borderBottom = borderB;
//     outputDiv.style.borderLeft = borderL;
//     output.appendChild(outputDiv);
// }
