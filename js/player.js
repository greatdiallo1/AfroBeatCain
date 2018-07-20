var songs = ["song/c.mp3", "song/drake.mp3", "song2.mp3", "song3.mp3", "song4.mp3", "song/a.ogg"]
var poster = ["img/p.png", "img2/p.png", "img3/p.png"]

var songtitle = document.getElementById("songTitle");
var fillBar = document.getElementById("fill");
// var handle = document.getElementById("handle");

var currentTime = document.getElementById("currenTime");

var song = new Audio();
var currentSong = 0;
window.onload = playSong;

function playSong() {
    song.src = songs[currentSong];
    songTitle.textContent = songs[currentSong];

    song.play();

}
var btn = document.getElementById("play");
function playorOrPauseSong() {
    if (song.paused) {
        song.play();
        btn.classList.toggle('.changebutton');
        //  $("#play img").attr("src","");

    }
    else {
        song.pause();
        //  $("#play img").attr("src","");
    }
}

song.addEventListener('timeupdate', function () {
    var position = song.currentTime / song.duration;
    fillBar.style.width = position * 100 + '%';

    couverTime(Math.round(song.currentTime));

    if (song.ended) {
        next();
    }
});

function couverTime(seconds) {
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    currentTime.textContent = min + ":" + sec;

    totalTime(Math.round(song.duration));
}

function totalTime(seconds) {
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    currentTime.textContent += "/" + min + ":" + sec;
}

function next() {
    currentSong++;
    if (currentSong > songs.length) {
        currentSong = 0;
    }
    playSong();
}
function pre() {
    currentSong--;
    if (currentSong < 0) {
        currentSong = songs.length;
    }
    playSong();
    $("#play img").attr("src", "pause.png");
    $("#image img").attr("src", poster[currentSong]);
    $("#bg img").attr("src", poster[currentSong]);
}
// var taille = 19
function decreaseVolume() {
    song.volume -= 0.1;

    //   console.log("coucou")
    //  document.querySelector("#volume").style.width=taille+"vw"

}


function increaseVolume() {
    song.volume += 0.1;
}

// document.querySelector("#v").onclick = function(){
//     document.querySelector("#volume").style.width ="19vw";
//     setTimeout(function(){
//         document.querySelector("#volume").style.width ="0vw";
//      }, 5000);
//  }

function setText(el,text) {
	el.innerHTML = text;
}


// muteButton.addEventListener("click", muter);
// function muter() {
//   if (audioTrack.volume == 0) {
//   setText(this,"Mute");
//   audioTrack.volume = 1;
//   } else {
//   setText(this,"Unmute");
//   audioTrack.volume = 0;
//   } 
// }