$(document).ready(function() {

    const keyCodes65 = new Audio('sounds/clap.wav');
    const keyCodes83 = new Audio('sounds/hihat.wav');
    const keyCodes68 = new Audio('sounds/kick.wav');
    const keyCodes70 = new Audio('sounds/openhat.wav');
    const keyCodes71 = new Audio('sounds/boom.wav');
    const keyCodes72 = new Audio('sounds/ride.wav');
    const keyCodes74 = new Audio('sounds/snare.wav');
    const keyCodes75 = new Audio('sounds/tom.wav');
    const keyCodes76 = new Audio('sounds/tink.wav');


    $(window).bind('keydown', function(e) {
        let j = e.keyCode
        var x = $("audio");
        console.log(x);

    });

    $(window).on("keydown", function() {
        console.log(this);

    })
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
