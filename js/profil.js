var user = JSON.parse(localStorage.getItem("user"))
var deploi = true
$('#profilpic').attr("src", user.img);

function scroll(){
    if(deploi){
        document.querySelector(".profil").classList.add ("up");
        document.querySelector("#profilpic").classList.add ("up");
        document.querySelector("section").classList.add ("upsong");
        deploi = false;
    }
    else{
        document.querySelector(".profil").classList.remove ("up");
        document.querySelector("#profilpic").classList.remove ("up");
        document.querySelector("section").classList.remove ("upsong");
        deploi = true;
    }
}


document.querySelectorAll(".profilinfo")[1].onclick = function (){
    scroll()
}

document.addEventListener("scroll", function(){
    if (window.scrollY<15){
        deploi = false;
    }
    else{
        deploi = true;
    }
    scroll()
});

document.querySelectorAll(".profil div")[2].onclick = function (){
    this.classList.toggle('like')
    this.classList.toggle('liked')
}