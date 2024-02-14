function addHiddenByid(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function removeHiddenById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
function play(){
    addHiddenByid('home-screen');
    removeHiddenById('play-ground');
}
