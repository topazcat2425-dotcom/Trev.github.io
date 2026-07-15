let muted = false;

function playBuzzer() {
    if (!muted) {
        const audio = new Audio("AudioFiles/IMIN.m4a");
        audio.play();
    }
}

function mute() {
    muted = !muted
}