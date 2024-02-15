function continueGame() {
    //get a random alphabet through calling the function
    const alphabet = getARandomAlphabet();
    //show this alphabet on the display
    const getAlphabetById = document.getElementById('current-alphabet')
    //Set a background color on the keyboard
    getAlphabetById.innerHTML = alphabet;
    setBackgroundById(alphabet);
}

function handleKeyboardKeyup(event) {
    //get expected press key
    const playerPressed = event.key;
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    //Don't need to use for this Element.innerHTML
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet)
    if (playerPressed === expectedAlphabet) {
        const currentScore = getElementValueById('current-score')
        const newScore = currentScore + 1;
        setElementValueById('current-score', newScore)
        //update score:
        //1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        //2. increase the score by one
        //const newscore = currentScore + 1;
        //3. Show the new score in display
        //currentScoreElement.innerText = newscore;

        continueGame();
        removeBackgroundById(playerPressed);
    } else {
        const lifeCount = getElementValueById('life-count');
        const newLlifeCount = lifeCount - 1;
        setElementValueById('life-count', newLlifeCount);
        //Update Life:
        //1. get the current life count
        //const currentLifeElement = document.getElementById('life-count')
        //const currentLifeText = currentLifeElement.innerText;
        //const currentLifeCount = parseInt(currentLifeText);
        //2. Reduce the life count
        //const newLifeCount = currentLifeCount - 1;
        //3. Show the new life count
        //currentLifeElement.innerText = newLifeCount;
    }
}
document.addEventListener('keyup', handleKeyboardKeyup)

function play() {
    addHiddenByid('home-screen');
    removeHiddenById('play-ground');
    continueGame();
}
