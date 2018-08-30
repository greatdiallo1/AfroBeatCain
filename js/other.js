var buttons = document.querySelectorAll(".profmen")
var compteurMen = true
var countFollow = true
var nbfollow
for ( i=0; i<buttons.length; i++){
    buttons[i].onclick = function(){
        if(this.className != "profmen ProfSelect"){
            for (let j=0; j<buttons.length; j++){
                buttons[j].classList.remove ("ProfSelect");
            }
            if(compteurMen){
                document.querySelector(".details").style.display = 'none';
                document.querySelector(".productions").style.display = 'block';
                compteurMen = false
            }
            else{
                document.querySelector(".details").style.display = 'block';
                document.querySelector(".productions").style.display = 'none';
                compteurMen = true
            }
            this.classList.add ("ProfSelect")
        }
    }
}

document.querySelector(".follow").onclick = function () {
    this.classList.toggle("follow")
    this.classList.toggle("following")
    if(countFollow){
        this.innerText = "Unfollow"
        countFollow = false
    }
    else{
        this.innerText = "Follow"
        countFollow = true
    }
}