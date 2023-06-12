
// Text Input Field
const TextInput = document.getElementById('textInput');
// Text Input Save Button
const TextInputSaveButton = document.getElementById("textInputSave");
  //  TextInputSaveButton.addEventListener('click', TextInputSave);

// Dynamically Create the Output Form
// const inputForm = document.getElementById('InputForm');

// var inputTextField = document.createElement('INPUT');
//     inputTextField.id = "textInput";
//     inputTextField.setAttribute('type', 'text');
//     inputTextField.setAttribute('name', 'textInput');
//     inputTextField.setAttribute('value', 'Type your Text here..');
//     inputTextField.autofocus;

// var inputTextFieldLabel = document.createElement('LABEL');
//     inputTextFieldLabel.id = "textLabel";
//     inputTextFieldLabel.setAttribute('for', 'textInput');
//     inputTextFieldLabel.innerHTML = "Enter your Text:";

// var inputSaveButton = document.createElement('BUTTON');
//     inputSaveButton.id = "textInputSave";
//     inputSaveButton.classList.add("headButtons");
//     inputSaveButton.setAttribute('type', 'input');
//     inputSaveButton.innerHTML = "Save Text";
    

//     inputForm.appendChild(inputTextFieldLabel);
//     inputForm.appendChild(inputTextField);
//     inputForm.appendChild(inputSaveButton);

//     inputSaveButton.addEventListener('click', TextInputSave);

/** Save Text Input Field value on Text Input Save Click
 * 
 */
function TextInputSave() {
    console.log(TextInput.value);
}