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
            if (p.hasOwnProperty(keyCode)) {
                p[keyCode].currentTime = 0;
                p[keyCode].play();
                $("#" + keyCode).addClass("playing");
            }
        });
    });

    $(window).bind('keyup', function(e) {
        let keyCode = e.keyCode;
        arrayOfKeyCodes.forEach(function(p) {
            if (p.hasOwnProperty(keyCode)) {
                $("#" + keyCode).removeClass("playing");
            }
        });
    });

});
