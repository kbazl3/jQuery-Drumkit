$(document).ready(function() {

    const arrayOfKeyCodes = [
        {65: new Audio('sounds/clap.wav')},
        {83: new Audio('sounds/hihat.wav')},
        {68: new Audio('sounds/kick.wav')},
        {70: new Audio('sounds/openhat.wav')},
        {71: new Audio('sounds/boom.wav')},
        {72: new Audio('sounds/ride.wav')},
        {74: new Audio('sounds/snare.wav')},
        {75: new Audio('sounds/tom.wav')},
        {76: new Audio('sounds/tink.wav')}
    ]



    $(window).bind('keydown', function(e) {
        let keyCode = e.keyCode;
        arrayOfKeyCodes.forEach(function(p) {
            console.log(p);
            if (p.hasOwnProperty(keyCode)) {
                p[keyCode].currentTime = 0;
                p[keyCode].play();
                $("#" + keyCode).addClass("playing");

            }

        });
    });

});





//
//
//
//
// function playSound(e) {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);  //what are template literals?  What is hte ${} all about?
//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//     if (!audio) { //if there is not an audio element's data-key matching the key hit
//         return
//     }
//     audio.currentTime = 0; //set the audio back to 0.00
//     audio.play();
//     key.classList.add('playing');
// }
//
// function removeTransition(e) {
//     if (e.propertyName !== 'transform') {
//         return;
//     }
//     this.classList.remove('playing');
// }
//
//
// const keys = document.querySelectorAll(".key");
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// window.addEventListener("keydown", playSound);
