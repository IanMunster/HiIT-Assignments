"use strict"

/** Calculate Function
 * Calculates Value A and Value B with a given Operator, Optionally only writes outcome to Console
 * @param {*} valueA - First value to calculate
 * @param {*} valueB - Second value to calculate
 * @param {*} operator - operator of calculation
 * @param {*} writeToConsole - should calculation result be written to Console
 * @returns calc Result - returns the value of the calculation
 */
function calculate(valueA, valueB, operator, writeToConsole) {
    // calculation Result
    let calcResult;
    // Switch between given Operators
    switch (operator) {
        case "+":
            calcResult = valueA + valueB;
            break;
        case "-":
            calcResult = valueA - valueB;
            break;
        case "*":
            calcResult = valueA * valueB;
            break;
        case "/":
                calcResult = valueA / valueB;
                break;
        default:
            //alert("No Operator found");
            break;
    }
    // If Optional Write to Console was given
    if (writeToConsole) {
        // Call WriteConsole Function with Result
        writeConsole(calcResult);
    } else {
        // Otherwise return the Calculation Result
        return calcResult;
    }
}


/** Concatenate Strings Function
 * Concatenates string 1 and string 2, with optional seperator symbol
 * @param {*} str1 - first string to add
 * @param {*} str2 - last string to add
 * @param {*} seperator - seperator symbol to be added between strings
 * @returns concatenated String - Complete string after concatenation
 */
function concatString (str1, str2, seperator) {
    // Empty the Concatenated String and Seperator Symbol
    let seperatorSymbol = "";
    let concatenatedString = "";
    // If given Seperator is a comma
    if (seperator === ",") {
        // Set seperator Symbol to comma with additional space
        seperatorSymbol = seperator + " ";
    } else {
        // otherwise the seperator symbol is the given seperator
        seperatorSymbol = seperator;
    }
    // Concatenate the first string, with the second string and add Seperator inbetween
    concatenatedString = str1 + seperatorSymbol + str2;
    // Return the concatenated String
    return concatenatedString;
}


/** Is Negative Value Funtion
 * Checks if given value is Negative or Positive
 * @param {*} value - value to validate
 * @returns boolean - true if Negative, false if Positive value
 */
function isNegativeValue (value) {
    return value < 0;
}


/** Write Console Message Function
 * Writes a given message to the Console Log
 * @param {*} message - message to write to console log
 */
function writeConsole (message) {
    console.log(message);
}


/** Output Result Function
 * Gets output elements in document, and outputs the Calculation string and result.
 * Optionally only outputs to Console.
 * Optionally outputs if Negative value.
 * @param {*} valA - First value of Calculation
 * @param {*} valB - Second value of Calculation
 * @param {*} oper - Operator of Calculation
 * @param {*} cons - Optional Only write to Console
 */
function outputResult (valA, valB, oper, cons) {
    // Set Sum Result and String empty
    let sumResult = 0;
    let sumString = "";
    // Get output elements
    let output = document.getElementById('calcOutput');
    let outputNeg = document.getElementById('isNegative');
    // Set output elements to empty
    output.textContent = "";
    outputNeg.textContent = "";

    // if Only Write to Console is given
    if (cons) {
        // Calculate the result in Calculate Function, with optional Console Argument
        sumResult = calculate(valA,valB,oper,cons);
    } else {
        // Otherwise, calculate the result of Sum in Calculate Function
        sumResult = calculate(valA,valB,oper);
        // Concat the Calculation String of Sum
        sumString =  concatString(valA,valB,oper);
        // Create the Sum Output, with Calculation and Result
        output.textContent = sumString+"= "+sumResult;
    }
    // If the Calculated result is negative
    if (isNegativeValue (sumResult)) {
        // Output negative value text
        outputNeg.textContent = "Negative Value";
    }
}

/** Output Name Function
 * Outputs the Full Name given,
 * either starts with First Name, followed by Last Name
 * or if comma separator is given, starts with Last Name, followed by First Name, seperated with a comma
 * @param {*} fName - First Name
 * @param {*} lName - Last Name
 * @param {*} sep - Optional Seperator symbol
 */
function outputName (fName, lName, sep) {
    // Get the Output Element from Document
    let outputName = document.getElementById('outputName');
    // Set Name string to empty
    let name = "";
    // If a comma-seperator was given
    if(sep === ','){
        // Set name to "LastName, FirstName" 
        name = concatString(lName, fName, sep);
    } else {
        // Otherwise set name to "FirstName LastName"
        name = concatString(fName, lName, sep);
    }
    // Output the Name text
    outputName.textContent = name;
}