function playAudio() {
    const audio = document.getElementById("podcastAudio");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}