let googleButton = document.querySelector('#googleSearch');
let randomText = document.querySelector('#randomizeButton');
randomText.innerText = randomizeText();
console.log(randomText)
//'I'm feeling + arrayOfWords



function getRandomColor(){
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++){
        color+= letters[Math.floor(Math.random() * 16)];
    }
        return color;
}


getRandomColor();

function randomizeText(){
    let defaultText = "I'm feeling ";
    let arrayOfWords = ['happy','glad','creative','encouraged','motivated','productive','outstanding','accomplished'];
    let number = Math.floor(Math.random() * arrayOfWords.length);
        return defaultText.concat(arrayOfWords[number]);
}

randomizeText();

googleButton.addEventListener('click', () => googleButton.style.backgroundColor = getRandomColor());


randomText.addEventListener('click', () => randomText.innerText = randomizeText());