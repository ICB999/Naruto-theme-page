const audioBtn = document.querySelector(".audio-btn");
const audioIcon = document.querySelector(".icon");
const audio = document.querySelector(".audio");
let isPaused = false;
audioBtn.addEventListener("click", function() {
    // click listener for audio button
    if (!isPaused) {
        audioIcon.src = "./resources/img/icons8-play-30.png";
        isPaused = true;
        audio.pause();
    } else {
        audioIcon.src = "./resources/img/icons8-pause-30.png";
        isPaused = false;
        audio.play();
    }
});