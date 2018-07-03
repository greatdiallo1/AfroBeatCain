
/* var user 
$.getJSON("json/donnees.json",function(données){
    user = données[localStorage.getItem("user")];
    profil(user)
});



 */
var user = JSON.parse(localStorage.getItem("user"))
$('#profilpic').attr("src", user.img);
css({"background": "url('"+user.img+"') no-repeat" , "background-size": "cover"});