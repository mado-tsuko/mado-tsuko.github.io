var myAudio = document.getElementById("audio");
var playIcon = document.getElementById("playicon");
var pauseIcon = document.getElementById("pauseicon");
var isPlaying = false;

function togglePlay() {
    isPlaying ? myAudio.pause() : myAudio.play();
    if(!isPlaying) {
        playIcon.classList.add("hidden");
        pauseIcon.classList.remove("hidden");
    } else {
        pauseIcon.classList.add("hidden");
        playIcon.classList.remove("hidden");
    }
};

myAudio.onplaying = function() {
    isPlaying = true;
};
myAudio.onpause = function() {
    isPlaying = false;
};