$(document).ready(function() {
    
var accordion_head = $('#accordeon li img.ti');
var accordion_body = $('#accordeon p.contenu');
var accordion_bod = $('#accordeon div.content');
/* accordion_head.first().addClass('active').parent().next().slideDown('normal'); */
accordion_head.on('click', function(event) {

	event.preventDefault();

	if ($(this).attr('class') != 'arrow ti active'){

		// On ferme par effet de slide tous les li qui contiennent la classe .contenu
		accordion_body.slideUp('normal');
		accordion_bod.slideUp('normal');
		// On ouvre celui qui suit directement le lien (.titre) sur lequel on a cliqué
		$(this).parent().next().stop(true,true).slideToggle('normal');

		// On enlève la classe .active de tous les liens
		accordion_head.removeClass('active');

		// On rajoute la classe .active au lien sur lequel on a cliqué
		$(this).addClass('active');
    }
    else{
		accordion_body.slideUp('normal');
		accordion_bod.slideUp('normal');
		accordion_head.removeClass('active');
    }
});
})

function showPage(page=".favorites"){
	$("section").hide();
	$(page).show();
}
function showPages(page=".playlists"){
	$("section").hide();
	$(page).show();
}
function showPag(page=".beatmaker"){
	$("section").hide();
	$(page).show();
}
function showPa(page=".upload"){
	$("section").hide();
	$(page).show();
}
/* accordion_head.on('click', function(event) {
    $(this).parent().next().stop(true,true).slideToggle('normal');
}); */
/* var lc = document.querySelectorAll('.content').lastChild;
console.log(lc);
lc.style.borderBottom = '1px solid #ff8800'; */
