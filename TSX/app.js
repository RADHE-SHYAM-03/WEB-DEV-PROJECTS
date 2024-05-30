//function that opens a sidebar menu 
function openSidebar(){
    const sidebar=document.querySelector('.navbar-sidebar');
    sidebar.style.display="flex";
}
//function that closes a sidebar menu 
function closeSidebar(){
    const sidebar=document.querySelector('.navbar-sidebar');
    sidebar.style.display="none";
}
//typewriter effect
const text = "Text To Speech Converter";
let index = 0;
let direction = 1;
const h1 = document.getElementById("typewriter-content");
function animateText() {
    h1.textContent = text.slice(0, index);
    index += direction;
    if (index === text.length || index === 0) {
        direction *= -1;
    }
    setTimeout(animateText,90);
}
animateText();
//function that plays the entered texts in textarea
function play(){
    let synth = window.speechSynthesis;
    let voice = new SpeechSynthesisUtterance(document.getElementById('textbox').value);
    synth.speak(voice);
}
//function that stops the entered texts in textarea
function stop(){
    let synth = window.speechSynthesis;
    let voice = new SpeechSynthesisUtterance(document.getElementById('textbox').value);
    synth.cancel();
}