function register() {
    location.href='register.html';
}
// redirects to maker's profil
$(".maker").click(function(){window.location.href = "profil_other.html";});


/* -------- Search bar listeners -------- */
// open the nav bar
$(".searchicon").click(function(){
    $("#inputsearch").addClass("inputclicked")
    $("#inputsearch").focus();
})
// close the nav bar
$("#inputsearch").focusout(function(){
    if($("#search").css('display') == 'none')
    $("#inputsearch").removeClass("inputclicked")
})
// close the nav bar and delete input content
$(".quitsearch").click(function(){
    document.querySelector("#inputsearch").value="";
    seeSearch()
    $("#inputsearch").removeClass("inputclicked")
});
// detect input typing
$("#inputsearch").focus(function(){
    document.addEventListener('keyup', (event) => {
        seeSearch()
    })
});

// search visibility's swap
function seeSearch (){
    $("main").hide();
        $(".logo").hide();
        $("#search").show();
        $(".quitsearch").show();
    if(document.querySelector("#inputsearch").value==""){
        $("main").show();
        $(".logo").show();
        $("#search").hide();
        $(".quitsearch").hide();
    }
}
//like buttons in player
var liked = false 
$(".playerlink .fa-heart").click(function(){
    if (!liked){
        $(".fa-heart").addClass('red');
        liked = true 
    }
    else{
        $(".fa-heart").removeClass('red');
        liked = false 
    }
    
})


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