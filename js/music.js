// music.js
const musicControl = document.getElementById('music_control');
const backgroundMusic = document.getElementById('background-music');

let isPlaying = false;

musicControl.addEventListener('click', () => {
    if (isPlaying) {
        backgroundMusic.pause();
        musicControl.innerHTML = '<i class="fa-solid fa-play"></i>';
    } else {
        backgroundMusic.play();
        musicControl.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }
    isPlaying = !isPlaying;
});