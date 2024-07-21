let passwordField = document.getElementById("password");

function genPassword() {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()";
    
    let chars = "";
    if (document.getElementById("uppercase").checked) {
        chars += uppercaseChars;
    }
    if (document.getElementById("lowercase").checked) {
        chars += lowercaseChars;
    }
    if (document.getElementById("numbers").checked) {
        chars += numberChars;
    }
    if (document.getElementById("special").checked) {
        chars += specialChars;
    }

    if (chars === "") {
        alert("Please select at least one character type.");
        return;
    }

    const passwordLength = parseInt(document.getElementById("passwordLength").value);
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.charAt(randomNumber);
    }
    passwordField.value = password;
}

function copyPassword() {
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
    alert("Password copied to clipboard");
}

function updateLengthLabel(value) {
    document.getElementById("lengthLabel").innerText = value;
}