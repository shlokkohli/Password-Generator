const characterAmountRange = document.querySelector("#characterAmountRange");
const passwordLength = document.querySelector("#characterAmountNumber");
const upperCaseCheckBox = document.querySelector("#includeUppercase");
const lowerCaseCheckBox = document.querySelector("#includeLowercase");
const numbersCheckBox = document.querySelector("#includeNumbers");
const symbolsCheckBox = document.querySelector("#includeSymbols");
const output = document.querySelector(".password-display");
const button = document.querySelector(".btn");

passwordLength.addEventListener("input", syncCharacterAmount);
characterAmountRange.addEventListener("input", syncCharacterAmount);

displayPassword();

function syncCharacterAmount(event) {
    const value = event.target.value;
    passwordLength.value = value;
    characterAmountRange.value = value;
    displayPassword();
}

upperCaseCheckBox.addEventListener("change", displayPassword);
lowerCaseCheckBox.addEventListener("change", displayPassword);
numbersCheckBox.addEventListener("change", displayPassword);
symbolsCheckBox.addEventListener("change", displayPassword);


function generatePassword(length, lower, upper, number, symbols) {
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbolChars = "!@#$%^&*()_+{}[]<>?";

    let allowedChars = "";
    let password = "";

    if (upper) {
        allowedChars += upperCaseChars;
    }

    if (lower) {
        allowedChars += lowerCaseChars;
    }

    if (number) {
        allowedChars += numbers;
    }

    if (symbols) {
        allowedChars += symbolChars;
    }

    if (allowedChars === "") {
        return "Please select at least one option.";
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

function displayPassword (event){

    const length = passwordLength.value;
    const lower = lowerCaseCheckBox.checked;
    const upper = upperCaseCheckBox.checked;
    const number = numbersCheckBox.checked;
    const symbols = symbolsCheckBox.checked;

    const password = generatePassword(length, lower, upper, number, symbols);
    output.textContent = password;
}