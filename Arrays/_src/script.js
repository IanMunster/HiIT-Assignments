"use strict";

// wanneer de pagina in zijn geheel is geladen dan
// zal de functie opdracht_1 worden uitgevoerd
window.addEventListener("load", opdracht_1);


function opdracht_1()
{
    // lijst van kleurnamen
    const testArray = [ "red", "grey", "white", "green", "blue", "black", "orange", "purple" ];

    for ( let i = 0 ; i < testArray.length ; i ++ )
    {
        console.log(testArray[i]);             
        toonElementen(testArray[i], "Element " + i, true);
    }
}

function opdracht_2()
{
    // lijst van priemgetallen
    const testArray = [ 2, 3, 5, 7, 11, 13, 17, 19 ];

    for ( let i = 0 ; i < testArray.length ; i ++ )
    {
        console.log(testArray[i]);             
        toonElementen(testArray[i], "Element " + i, false);
    }
}

function opdracht_3()
{
    const mobielArray = [
        { merk : "Samsung", type : "Galaxy S21" },
        { merk : "Apple", type : "iPhone SE" },
        { merk : "Motorola", type : "Moto e32" },
        { merk : "Alcatel", type : "1 ( 2021 )" },
        { merk : "Emporia", type : "Smart 4" },
        { merk : "Samsung", type : "Galaxy Note 8" },
        { merk : "Xiaomi", type : "Redmi Note 10 Pro" },
        { merk : "TCL", type : "205" }
    ];

    for ( let i = 0 ; i < mobielArray.length ; i ++ )
    {
        console.log(mobielArray[i]);
        toonElementen(mobielArray[i], "Element " + i, false);
    }
}

function opdracht_4()
{
    const mobielArray = [
        { merk : "Samsung", type : "Galaxy S21" },
        { merk : "Apple", type : "iPhone SE" },
        { merk : "Motorola", type : "Moto e32" },
        { merk : "Alcatel", type : "1 ( 2021 )" },
        { merk : "Emporia", type : "Smart 4" },
        { merk : "Samsung", type : "Galaxy Note 8" },
        { merk : "Xiaomi", type : "Redmi Note 10 Pro" },
        { merk : "TCL", type : "205" }
    ];

    // Your code here
}

function opdracht_5()
{
    const mobielArray = [
        { merk : "Samsung", type : "Galaxy S21" },
        { merk : "Apple", type : "iPhone SE" },
        { merk : "Motorola", type : "Moto e32" },
        { merk : "Alcatel", type : "1 ( 2021 )" },
        { merk : "Emporia", type : "Smart 4" },
        { merk : "Samsung", type : "Galaxy Note 8" },
        { merk : "Xiaomi", type : "Redmi Note 10 Pro" },
        { merk : "TCL", type : "205" }
    ];

    mobielArray.forEach( (mobieltje, index) => {            
                console.log(mobieltje);
                toonElementen(mobieltje.merk, "Element " + index, false);
            });
}

function opdracht_6()
{
    const tijdObject = {
        currentDay: 1,
        currentMonth : 2,
        currentYear : 2022,
        months: [ "januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"]
    }

    // Your code here

}

function opdracht_7()
{
    const cast1 = [ "Tom Cruise", "Capt. Pete 'Maverick' Mitchell"];
    const cast2 = [ "Miles Teller", "Lt. Bradley 'Rooster' Bradshaw"];
    const cast3 = [ "Jennifer Connelly", "Penny Benjamin"];
    const cast4 = [ "Jon Hamm", "Adm. Beau 'Cyclone' Simpson"];
    const cast5 = [ "Glen Powell", "Lt. Jake 'Hangman' Seresin"];
    const cast6 = [ "Val Kilmer", "Adm. Tom 'Iceman' Kazansky"];

    const castArray = [ cast1, cast2, cast3, cast4, cast5, cast6 ];
    toonElementen("Name", "Index", false);

    // Your code here

}

/*
    Functie die dynamisch paragrafen op het scherm toont
    color = De achtergrondkleur die de 2e paragraaf krijgt
    text = De tekst die getoond wordt in de 1e paragraaf    
*/
function toonElementen(param, text, showColor )
{
    const sectionElem = document.getElementById("lus");
    const divElem = document.createElement("div");
    const textElem = document.createElement("p");
    const colorElem = document.createElement("p");
    
    textElem.textContent = text;
    textElem.className = "elementen";
    divElem.appendChild(textElem);

    colorElem.className = "elementen";    
    showColor ? colorElem.style.backgroundColor = param : colorElem.textContent = param;
    divElem.appendChild(colorElem);

    sectionElem.appendChild(divElem);
}

