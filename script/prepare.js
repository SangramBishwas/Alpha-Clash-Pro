function addHiddenByid(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function removeHiddenById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getARandomAlphabet() {
    //creat or get an alphabet array
    const alphbetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphbetString.split('');
    // get a random index between 0-25
    const RandomNumber = Math.random() * 25;
    const index = Math.round(RandomNumber);
    // console.log(index);
    const alphabet = alphabets[index];//.toUpperCase();
    //alphabet.toUpperCase();
    return alphabet;
}
function setBackgroundById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-warning');
}

function removeBackgroundById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-warning');
}

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementTextValue = element.innerText;
    const elementValue = parseInt(elementTextValue)
    return elementValue;
}
function setElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}