"use strict"
/** On Click "Save Text"
 * Get current Text Input fields value
 * Call OutputSavedText function
 * Empty Text Input Field
 */
function TextInputSave () {
    // Get Text Input Field element
    const textInput = document.getElementById('textInput');
    // Save current Text from Input Value
    let currentText = textInput.value
    // Log Current Text to Console
   // console.log(currentText);
    // Create Output for Current Text
    OutputSavedText(currentText);
    // Empty Text Input field
    textInput.value = "";
}

/** Create output for Save Text
 * Creates Paragraph for saved Text Input
 * Creates Remove button to remove saved text input
 * Adds these to the Output element
 * @param {string} text - saved Text Input
 */
function OutputSavedText (text) {
    if(text !== ""){
        // Get Output DIV element
        const output = document.getElementById('Output');
        // Create paragraph Element
        let outputPara = document.createElement('p');
        // Add saved text to paragraph text content
        outputPara.textContent = text;
        // Add class for Styling
        outputPara.className = "textOutput";
        // Create Remove Button
        let outputRemoveBtn = document.createElement('button');
        // Set Type of Button to Input
        outputRemoveBtn.setAttribute('type', 'input');
        // Add Button Text
        outputRemoveBtn.textContent = "Remove Item";
        // Add Button to Remove Button Class
        outputRemoveBtn.className = "textRemoveButtons";
        // Append the Output-Paragraph with output Remove Button
        outputPara.appendChild(outputRemoveBtn);
        // Append Output-Element with Output Paragraph Child
        output.appendChild(outputPara);
        // Call Text remover Buttons Function
        textRemoverButtons();

    } else {
        // If No text was input in TextInput field, show error message
        // TODO: Create Custom Alert Modal
        alert ("Please insert Text");
    }
    
}

/** Text Remover Buttons
 * Get all existing Remove Buttons, save in BtnArray
 * Add ID based on buttons Array Index
 * Add Click-Event Listener to Remove Text
 */
function textRemoverButtons () {
    // Go through all created remove Button Elements, using GetElementsByClass('textRemoveButtons')
    let btnArray = document.getElementsByClassName('textRemoveButtons');
    // Create For-Loop to go through the btnArray
    for (let btnIndex = 0; btnIndex < btnArray.length; btnIndex++) {
        const button = btnArray[btnIndex];
        // Give each Remove Button in btnArray an Unique ID, assigned by For-loop' index
        button.id = btnIndex;
        // Add Click-Event Listener to each button 
        button.addEventListener('click', removeText);
    }
}

/** Remove Text
 * Get all existing Paragraphs
 * Get clicked remove-button ID
 * Remove paragraph on removeButton ID Index
 * Rebuild Remove Button Array
 */
function removeText () {
    // Go through all created paragraph elements, using GetElementsByClass('textOutput')
    let parArray = document.getElementsByClassName('textOutput');
    // Save Clicked "remove text"-Buttons ID
    let btnID = this.id;
    // Remove paragraph on removeButton ID Index
    parArray[btnID].remove();
    // Rebuild Remove Button Array
    textRemoverButtons();
}