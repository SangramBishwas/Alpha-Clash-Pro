function continueGame() {
    //get a random alphabet through calling the function
    const alphabet = getARandomAlphabet();
    //show this alphabet on the display
    const getAlphabetById = document.getElementById('current-alphabet')
    //Set a background color on the keyboard
    getAlphabetById.innerHTML = alphabet;
    setBackgroundById(alphabet);

}
function play() {
    addHiddenByid('home-screen');
    removeHiddenById('play-ground');
    continueGame();
}
