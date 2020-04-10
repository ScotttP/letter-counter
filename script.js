const letterCount = document.querySelector('#letterCount');
const clearCount = document.querySelector('#clearCount');

document.getElementById('letterCount').innerText = "Letter Count: " + `${finalLetterCount = 0}`;

clearCount.addEventListener('click', () => {
    clear();
})

function strCount (strChar) {
    stringLetters= strChar.replace(/[^a-zA-Z]/g, "");
    finalLetterCount = stringLetters.length
    document.getElementById('letterCount').innerText = "Letter Count: " + `${finalLetterCount}`;
}

function clear (){
    document.getElementById('inputBox').value = "";
    document.getElementById('letterCount').innerText = "Letter Count: " + `${finalLetterCount = 0 }`;
} 