





















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
