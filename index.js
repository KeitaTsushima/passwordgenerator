"use strict"

const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const lettersAndNumbers = letters.concat(numbers)
const allLetters = lettersAndNumbers.concat(symbols)

const digitsEl = document.getElementById("digits-el")
const kindsEl = document.getElementsByClassName("kinds-el")
const kinds0El = document.getElementById("kinds0-el")
const kinds1El = document.getElementById("kinds1-el")
const kinds2El = document.getElementById("kinds2-el")
const generatePassEl = document.getElementById("generatePass-el")
const pass1El = document.getElementById("pass1-el")
const pass2El = document.getElementById("pass2-el")

let characters = ""
let pass1 = ""
let pass2 = ""

kinds0El.addEventListener("click", unlock)
kinds1El.addEventListener("click", unlock)
kinds2El.addEventListener("click", unlock)
generatePassEl.addEventListener("click", displayPass)
pass1El.addEventListener("click", copy1ToClipboard)
pass2El.addEventListener("click", copy2ToClipboard)

function unlock() {
    generatePassEl.classList.remove("inactive")
}

function displayPass() {
    setCharacters()

    const digits = digitsEl.value
    pass1 = generatePass(digits)
    pass2 = generatePass(digits)
    pass1El.textContent = pass1
    pass2El.textContent = pass2
}

function generatePass(digits) {
    let char = ""
    let chars = ""
    for (let i = 0; i < digits; i++) {
        let random = Math.floor(Math.random() * characters.length)
        char = characters[random]
        chars += char
    }
    return chars
}

function checkKinds() {
    let kinds =[]
    for (let i = 0; i < kindsEl.length; i++) {
        if(kindsEl[i].checked === true) {
            kinds = kindsEl[i].value
            return kinds
        }
    }
}

function setCharacters() {
    const kinds = checkKinds()
    if (kinds === "letters") {
        characters = letters
    } else if (kinds === "numbers") {
        characters = lettersAndNumbers
    } else if (kinds === "symbols") {
        characters = allLetters
    }
    return characters
}

function copy1ToClipboard() {
    setTimeout(() => navigator.clipboard.writeText(pass1), 500);
    alert("コピーできました！ : " + pass1)
}

function copy2ToClipboard() {
    setTimeout(() => navigator.clipboard.writeText(pass2), 500);
    alert("コピーできました！ : " + pass2)
}


