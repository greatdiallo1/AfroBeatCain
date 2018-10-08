//Html elements and song info
var audioTrack = document.querySelector("#audiotrack"),
    playButton = document.querySelector("#play"),
    volumeIcon = document.querySelector(".volumeIcon");
    volume = document.querySelector("#volume"),
    progressBar = document.querySelector("#progressBar");
var songList = ["Starboy.mp3","Fais_moi_Confiance.mp3","Fall.mp3"]
var nameList = [["Starboy","Wizkid","cover9.jpg"],["Fais moi Confiance","Sidiki Diabaté","cover10.jpg"],["Fall","Davido","cover11.jpg"]]
var IsPlaying = false;
var currentSong = 0;
var close = false;

// --------listeners --------------
playButton.addEventListener("click", player);
volumeIcon.addEventListener("click", function(){
    volume.classList.toggle ("hidden")
    setTimeout(function(){
        volume.classList.add ("volopen");
    },3000)
});
volume.addEventListener("input", function(){ 
	audioTrack.volume = volume.value;
});
$(".BigPlayer #buttonup").click(function(){openplayer()});
$("#audioplayer #texte").click(function(){openplayer()});


//player opening
function openplayer(){
    if (close){
        $(".BigPlayer").removeClass('open');
        $(".BigPlayer #buttonup").text("▲");
        close = false
    }
    else{
        $(".BigPlayer").addClass('open');
        $(".BigPlayer #buttonup").text("▼");
        close = true
    }
}
//Play or pause the song and change button
function player() {
  if (audioTrack.paused) {
    playButton.innerHTML = `<i class="fas fa-pause"></i>`
    audioTrack.play();
    IsPlaying = true;
    playing();
  } 
  else {
    playButton.innerHTML = `<i class="fas fa-play"></i>`
    audioTrack.pause();
    IsPlaying = false;
  }
}
//Change progress bar
function playing(){
    if(IsPlaying){
        setTimeout(function(){
            progressBar.style.width =(audioTrack.currentTime*100)/audioTrack.duration+"%"
            playing();
        },1000)
        if(audioTrack.ended){
            next();
        }
    }
    else{
        return
    }
}
//Change current song
function changerSrc(song){
    audioTrack.src = "audio/"+songList[song]
    document.querySelector("#texte h1").innerText = nameList[song][1];
    document.querySelector("#texte h2").innerText = nameList[song][0];
    document.querySelector(".changing").innerHTML = `
        <img id="playerimg" src="img/song/${nameList[song][2]}">
        <div>
            <h3>${nameList[song][1]}</h5>
            <h4>${nameList[song][0]}</h4>
            <p>Licence : copyright</p>
            <p>Label : Azaryel Rds</p>
            <p>Prix : 40€</p>
            <h3>Playlist :</h3>
            <div class="playerplaylist">
                <p>Track 1</p>
                <p>Track 2</p>
                <p>Track 3</p>
                <p>Track 4</p>
                <p>Track 5</p>
                <p>Track 6</p>
                <p>Track 7</p>
                <p>Track 8</p>
            </div>
            <div class="playerlink">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fas fa-heart"></i>
            </div>
        </div>

        ` ;
    if(song==2){
        document.querySelector(".changing").style.color ="white";
    }
    else{
        document.querySelector(".changing").style.color ="black";

    }
    player();
}
// Remove the big player when search is activated
$("#inputsearch").focus(function(){
    document.addEventListener('keyup', (event) => {
        $(".BigPlayer").removeClass('open');
        $(".BigPlayer #buttonup").text("▲");
        close = false
    })
});

// Play clicked song and opens the big player
$(".musique").click(function(){
    next();
    openplayer();
});



//Previous song
document.querySelector("#next").onclick = next;
function next(){
    currentSong++;
    if (currentSong > songList.length-1) {
        changerSrc(0)
        currentSong=0;
        return
    }
    changerSrc(currentSong) 
}
//Next song
document.querySelector("#prev").onclick = prev;
function prev(){
    currentSong--;
    if (currentSong < 0) {
        changerSrc(songList.length-1)
        currentSong=songList.length-1
        return
    }
    changerSrc(currentSong) 
}