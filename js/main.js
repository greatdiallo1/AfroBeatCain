

function register() {
    location.href='register.html';
}


$(".maker").click(function(){window.location.href = "profil_other.html";});
$("#inputsearch").focus(function(){
    document.addEventListener('keyup', (event) => {
        $("main").hide();
        $("#search").show();
        if(document.querySelector("#inputsearch").value==""){
            $("main").show();
            $("#search").hide();
        }
    })


});

//array home
var names = ["Le bon beat","Le retour du bon beat","un autre beat","Le beat","nom du beat","c'est un beat","un son ou un beat?","beat or not to beat","beat"]
$("table:first-child td").click(function(){
    if(this.id == 1){
        $("table:nth-child(2) td:nth-child(2)").removeClass('hidden');
        $("table:nth-child(2) td:nth-child(3)").addClass('hidden');
    }
    else if(this.id == 2){
        $("table:nth-child(2) td:nth-child(3)").removeClass('hidden');
        $("table:nth-child(2) td:nth-child(2)").addClass('hidden');
    }
    else{
        $("table:nth-child(2) td:nth-child(3)").addClass('hidden');
        $("table:nth-child(2) td:nth-child(2)").addClass('hidden');
    }
    $("table:first-child td").removeClass('mainback');
    $(this).addClass('mainback');
});