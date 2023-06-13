"use strict"
// Initialize after page load
window.addEventListener("load", init);

/** Global Variables
 * https://www.w3schools.com/js/js_htmldom_nodes.asp
 */
const inputSaveBtn =  document.getElementById('textInputSave')
      //inputSaveBtn.addEventListener('click', TextInputSave());
const textInput = document.getElementById('textInput');
const output = document.getElementById('Output');
const inputErrorMessage = "Please insert Text";

/** Initialize Page
 * Currently using "defer" on Script
 */
function init () {
    console.log ("page loaded");
}

/** On Click "Save Text"
 * Calls OutputSavedText function
 */
function TextInputSave () {
    // Save current Text from Input Value
    let currentText = textInput.value
    // Log Current Text to Console
    console.log(currentText);
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
        // Create paragraph Element
        let outputPara = document.createElement('p');
        // Add saved text to paragraph text content
        outputPara.textContent = text;
        /* Using Create Text Node Function (Does the same as TextContent)
        let outputText = document.createTextNode(text);
        outputPara.appendChild(outputText); 
        */
        // Add class for Styling
        outputPara.className = "textOutput";

        // Create Remove Button
        let outputRemoveBtn = document.createElement('button');
        // Set Type of Button to Input
        outputRemoveBtn.setAttribute('type', 'input');
        /* ! Does not work yet. Idea was to dynamically add a removeParent Event to created button. Currently immediatly fires on creation.
        //outputRemoveBtn.addEventListener('click', removeParent(outputPara), false);
        */
        // Add Button Text
        outputRemoveBtn.textContent = "Remove Item";
        // Add Button to Remove Button Class
        outputRemoveBtn.className = "textRemoveButtons";
        // Append the Output-Paragraph with output Remove Button
        outputPara.appendChild(outputRemoveBtn);

        // Append Output-Element with Output Paragraph Child
        output.appendChild(outputPara);

    } else {
        // If No text was input in TextInput field, show error message
        // TODO: Create Custom Alert Modal
        alert (inputErrorMessage);
    }
    
}

/**
 * 
 */
function textRemoverButtons () {
    // Go through all created remove Button Elements, using GetElementsByClass('textRemoveButtons')
    // Save this Array in btnArray[]

    // Create For-Loop to go through the btnArray
        // Give each Remove Button in btnArray an Unique ID, assigned by For-loop' index
        // example; btnArray[index].id = index
        // Add Click-Event Listener to each button 
        // example; btnArray[index].addEventListener('click', removeText);
}

/**
 * 
 */
function removeText () {
    // Go through all created paragraph elements, using GetElementsByClass('textOutput')
    // Save this Array in parArray[]
    
}


/* Doe not Work yet, see OutputRemoveButton.addEventListener
function removeParent(para) { 
    if (para !== null) {
        parent = para;
        console.log('Clicked Remove: ' + parent.textContent);
        parent.remove();
    }
    
}
*/