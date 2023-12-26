const songs=[
    {
      name: "Chennai Sentamizh - M. Kumaran S/O Mahalakshmi",
      artist: "Harish Raghavendra",
      image: "song1.jpg",
      path: "songs/Chennai-Sentamizh-MassTamilan.so.mp3"
    },
    {
      name: "Ennai Vittu-Love Today",
      artist: "Yuvan Shankar Raja",
      image: "loveToday.jpg",
      path: "songs/Ennai-Vittu-MassTamilan.dev.mp3"
    },
    {
      name: "Kanave Kanave-David-2013",
      artist: "Anirudh Ravichander",
      image: "david.jpg",
      path: "songs/Kanave-Kanave-MassTamilan.com.mp3",
    },
    {
        name: "songs/Neeye Neeye-M. Kumaran S/O Mahalakshmi",
        artist: "Srikanth Deva",
        image: "song1.jpg",
        path: "/songs/Neeye-Neeye-MassTamilan.so.mp3",
    },
    {
        name: "Sakka Podu Pottane-Daas",
        artist: "Yuvan Shankar Raja",
        image: "music.jpg",
        path: "/songs/Sakka-Podu-Pottane.mp3",
    },
];

let currentSongIndex = 0;

const music = document.getElementsByClassName('music')[0];
const image=document.getElementById('img');
const songName = document.getElementsByClassName('song-name')[0];
const artist = document.getElementsByClassName('artist')[0];
const audio = document.getElementById('myAudio');
const playBtn = document.getElementById('play');
const forwardBtn = document.getElementById('forward');
const backBtn = document.getElementById('back');
const slider = document.getElementById('slider');

function loadSong(song) {
    songName.innerText = song.name;
    artist.innerText = song.artist;
    audio.src = song.path;
    image.src=song.image;

    audio.onloadedmetadata = () => {
        slider.max = audio.duration;
        audio.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    };
    audio.ontimeupdate = () => {
        const currentTime = audio.currentTime;
        const duration = audio.duration;
        const progress = (currentTime / duration) * 100;
        slider.style.background = `linear-gradient(to right, black ${progress}%, #ddd ${progress}%)`;
    };
    audio.onended = () => {
        playNextSong();
    };
}

function togglePlay() {
    if (audio.paused) {
        audio.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        audio.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}
function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    audio.play();
}
function playPreviousSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    audio.play();
}
audio.addEventListener('timeupdate', () => {
    slider.value = audio.currentTime;
});

slider.addEventListener('input', () => {
    audio.currentTime = slider.value;
});
loadSong(songs[currentSongIndex]);
playBtn.addEventListener('click', togglePlay);
forwardBtn.addEventListener('click', playNextSong);
backBtn.addEventListener('click', playPreviousSong);