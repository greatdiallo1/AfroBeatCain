function register() {
    location.href='register.html';
}


//link to the song player
function lecteur(){
	window.location.href = "lecteur.html";
}
$(".musique").click(function(){
    lecteur()
});
function gomaker(){
	window.location.href = "profil_other.html";
}
$(".maker").click(function(){
    gomaker()
});


//array home
var names = ["Le bon beat","Le retour du bon beat","un autre beat","Le beat","nom du beat","c'est un beat","un son ou un beat?","beat or not to beat","beat"]
$("table:first-child td").click(function(){
    console.log(this.id)
    if(this.id == 1){
        $("table:nth-child(2) td:nth-child(2)").removeClass('nop');
        $("table:nth-child(2) td:nth-child(3)").addClass('nop');
    }
    else if(this.id == 2){
        $("table:nth-child(2) td:nth-child(3)").removeClass('nop');
        $("table:nth-child(2) td:nth-child(2)").addClass('nop');
    }
    else{
        $("table:nth-child(2) td:nth-child(3)").addClass('nop');
        $("table:nth-child(2) td:nth-child(2)").addClass('nop');
    }
    $("table:first-child td").removeClass('orange');

    $(this).addClass('orange');
});