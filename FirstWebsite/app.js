function displayMenu () {
    var menuDisplay = document.getElementById('mainMenu');
    menuDisplay.style.display == 'block' ? menuDisplay.style.display = 'none' : menuDisplay.style.display = 'block';
}

function darkMode () {
    document.body.className = 'darkTheme'; 
}

function lightMode () {
    document.body.className = 'lightTheme'; 
}