// FUNCTIES AANROEPEN
// ---------------------------------

// 1. Maak hier de variabele uitkomst aan die de functie bereken aanroept


// 2. Roep hier de functie concatenateStringWaarden aan



// 6. Laat deze conditie controleren of de uitkomst negatief is

if ( isWaardeNegatief() )
{
    schrijfNaarConsole("De uitkomst is negatief");
}

// FUNCTIES
// --------------------------------

// Onderstaande functie telt waardeA op bij waardeB als
// de parameter optellen gelijk is aan true
// anders zal de functie waardeB aftrekken van waardeA

function bereken( waardeA, waardeB, optellen, toConsole )
{
    let uitkomstWaarde = null;
    if ( optellen == true )
    {
        uitkomstWaarde = waardeA + waardeB;
    }
    else
    {
        uitkomstWaarde = waardeA - waardeB;
    }    
    if ( toConsole )
    {              
        // 3. Vervang hier de console.log voor een functie
        console.log(uitkomstWaarde);
    }
    else
    {
        document.write(uitkomstWaarde);
    }

    // 5. Laat hier een waarde retourneren
}

// 4. Onderstaande functie schrijft naar de console

function schrijfNaarConsole(valueX)
{
    console.log(valueX);
}


// Onderstaande functie geeft een negatieve waarde terug

function isWaardeNegatief(waarde)
{
     return waarde < 0;
}

// Onderstaande functie heeft geeft de laatste parameter een default waarde

function concatenateStringWaarden( stringwaarde1, stringwaarde2, seperator = true)
{
    let seperatorString = "";
    if ( seperator )
        seperatorString = ", ";
    

    let newString = stringwaarde1 + seperatorString + stringwaarde2;
    schrijfNaarConsole(newString);
}


// 7a. Maak hier een nieuwe functie vermenigvuldig



// 7b. Maak hier een nieuwe functie toonNaam
