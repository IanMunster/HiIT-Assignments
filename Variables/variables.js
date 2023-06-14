"use strict";

/* Assignment:
1. declareer 3 variabelen
2. Schrijf de variabelen naar de console met console.log
3. Tel getal1 op bij getal2 
4. Schrijf de uitkomst van de optelling naar de console
5. Geef de variabele getal2 de waarde 100 en schrijf naar de console
6. Voeg variabele msgTekst toe
7. Tel getal2 op bij msgTekst
8. Declareer nieuwe testVariable
9. Declareer testArray
10. For-statement voor het doorlopen van de string msgTekst
11. Referentie naar een HTML-Element
*/

var variable = 100;
let itBe = 15;
const constant = 5;

var var3;
let msgTekst = "This is a piece of String";
let msgSample = "SampleText";

for ( let i = 0; i < msgSample.length; i++)
{
    console.log(msgSample[i]);
}

console.log(itBe = variable + constant);
console.log(var3 = itBe + msgTekst);

let testVar = false;
if (testVar) {
    console.log("Testvar is True");
}

const testArray = [];
testArray[0] = "geel";
testArray[1] = "blauw";
testArray[2] = "zwart";
testArray[3] = "paars";
let arrayLengte = testArray.length;
console.log(arrayLengte);
for (let index = 0; index < testArray.length; index++) {
    console.log(testArray[index]);
    
}

let elementRef = document.getElementById("myHeader");
console.log(elementRef.textContent);
elementRef.textContent = "Changed Header Text";
elementRef.style.color = "red";
elementRef.style.borderBottom = "1px dotted green";
elementRef.style.marginLeft = "10px";
elementRef.style.padding = "25px";
elementRef.style.backgroundColor = "lightgray";