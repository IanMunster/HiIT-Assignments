"use strict";

// wanneer de pagina in zijn geheel is geladen dan
// zal de functie opdracht_1 worden uitgevoerd
window.addEventListener("load", init);

function init() {
    opdracht_1();
    opdracht_2();
    opdracht_3();
    opdracht_4();
    opdracht_5();
    opdracht_6();
    opdracht_7();
}

function opdracht_1() {
    // lijst van kleurnamen
    const colourArray = ["red", "grey", "white", "green", "blue", "black", "orange", "purple"];

    for (let i = 0; i < colourArray.length; i++) {
        if (i % 2 == 0) {
            //  console.log(colourArray[i]);
            toonElementen(colourArray[i], "Element " + i, true);
        }

    }
}

function opdracht_2() {
    // lijst van priemgetallen
    const primeArray = [2, 3, 5, 7, 11, 13, 17, 19];
    let sum = 0;
    for (let i = 0; i < primeArray.length; i++) {
        // console.log(primeArray[i]);
        toonElementen(primeArray[i], "Element " + i, false, true);
        sum += primeArray[i];

    }
    // console.log(sum);
    toonElementen(sum, "Sum Total", false, true);
}

function opdracht_3() {
    const mobielArray = [
        { merk: "Samsung", type: "Galaxy S21" },
        { merk: "Apple", type: "iPhone SE" },
        { merk: "Motorola", type: "Moto e32" },
        { merk: "Alcatel", type: "1 ( 2021 )" },
        { merk: "Emporia", type: "Smart 4" },
        { merk: "Samsung", type: "Galaxy Note 8" },
        { merk: "Xiaomi", type: "Redmi Note 10 Pro" },
        { merk: "TCL", type: "205" }
    ];

    for (let i = 0; i < mobielArray.length; i++) {
        // console.log(mobielArray[i]);
        if (mobielArray[i].merk.includes("a")) {
            toonElementen(mobielArray[i].type, mobielArray[i].merk, false);
        }
    }
}

function opdracht_4() {
    const mobielArray = [
        { merk: "Samsung", type: "Galaxy S21" },
        { merk: "Apple", type: "iPhone SE" },
        { merk: "Motorola", type: "Moto e32" },
        { merk: "Alcatel", type: "1 ( 2021 )" },
        { merk: "Emporia", type: "Smart 4" },
        { merk: "Samsung", type: "Galaxy Note 8" },
        { merk: "Xiaomi", type: "Redmi Note 10 Pro" },
        { merk: "TCL", type: "205" }
    ];

    for (let i = 0; i < mobielArray.length; i++) {
        if (mobielArray[i].type.includes("Galaxy")) {
            let GalaxyID = i;
            mobielArray.splice(GalaxyID, 1);
        }
        toonElementen(mobielArray[i].type, mobielArray[i].merk, false, true);
    }
}

function opdracht_5() {
    const mobielArray = [
        { merk: "Samsung", type: "Galaxy S21" },
        { merk: "Apple", type: "iPhone SE" },
        { merk: "Motorola", type: "Moto e32" },
        { merk: "Alcatel", type: "1 ( 2021 )" },
        { merk: "Emporia", type: "Smart 4" },
        { merk: "Samsung", type: "Galaxy Note 8" },
        { merk: "Xiaomi", type: "Redmi Note 10 Pro" },
        { merk: "TCL", type: "205" }
    ];

    mobielArray.forEach((mobieltje, index) => {
       // console.log(mobieltje);
        if (mobieltje.type.includes("S")) {
            toonElementen(mobieltje.type,mobieltje.merk, false);
        }
    });
}

function opdracht_6() {
    const tijdObject = {
        currentDay: 1,
        currentMonth: 2,
        currentYear: 2022,
        months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"]
    };

    tijdObject.months.forEach((currentMonth, index) => {
        let newIndex = index + 1;
        // console.log(currentMonth +" "+ newIndex);
        toonElementen(currentMonth, newIndex, false, true);
    });

}

function opdracht_7() {
    const cast1 = ["Tom Cruise", "Capt. Pete 'Maverick' Mitchell"];
    const cast2 = ["Miles Teller", "Lt. Bradley 'Rooster' Bradshaw"];
    const cast3 = ["Jennifer Connelly", "Penny Benjamin"];
    const cast4 = ["Jon Hamm", "Adm. Beau 'Cyclone' Simpson"];
    const cast5 = ["Glen Powell", "Lt. Jake 'Hangman' Seresin"];
    const cast6 = ["Val Kilmer", "Adm. Tom 'Iceman' Kazansky"];

    const castArray = [cast1, cast2, cast3, cast4, cast5, cast6];
    toonElementen("Name", "Index", false);

    castArray.forEach((castList, castIndex) => {
        for (let index = 0; index < castList.length; index++) {
            toonElementen(castList[index], castIndex);
        }
    });
}

/*
    Functie die dynamisch paragrafen op het scherm toont
    color = De achtergrondkleur die de 2e paragraaf krijgt
    text = De tekst die getoond wordt in de 1e paragraaf    
*/
function toonElementen(param, text, showColor, newDiv) {
    const sectionElem = document.getElementById("loop");
    const divElem = document.createElement("div");
    const textElem = document.createElement("p");
    const colorElem = document.createElement("p");
    divElem.className = "div";
    textElem.textContent = text;
    textElem.className = "elementen";
    colorElem.className = "elementen";
    showColor ? colorElem.style.backgroundColor = param : colorElem.textContent = param;
    if (newDiv) {
        const newDivElem = document.createElement("div");
        newDivElem.className = "newDiv";
        sectionElem.appendChild(newDivElem);
        newDivElem.appendChild(textElem);
        newDivElem.appendChild(colorElem);
    } else {
        sectionElem.appendChild(divElem);
        divElem.appendChild(textElem);
        divElem.appendChild(colorElem);
    }
}