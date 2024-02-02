const display = document.querySelector('.displayPassword');
const generateButton =  document.querySelector('.generateButton');
const passwordLengthSelect = document.getElementById('passwordLengthSelect');

// const passwordLength = 10;
const passwordCharsSet =
'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?';

function generateRandomPass() {
    const passwordLength = parseInt(passwordLengthSelect.value, 10);
    let password = '';

    for(let i=0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * passwordCharsSet.length);
        password += passwordCharsSet.charAt(randomIndex);
    }

    display.value = password;
}

generateButton.addEventListener('click', generateRandomPass);

// passwordLengthSelect.addEventListener('change', generateRandomPass);

