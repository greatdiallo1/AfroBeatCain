var donnees = [];
var donneestring;
var user = "";
function executerRequete(fonction_A_requete) {
    // on vérifie si le catalogue a déjà été chargé pour n'exécuter la requête AJAX qu'une seule fois
    if (donnees.length === 0) {
        // on récupère un objet XMLHttpRequest
        var xhr = getXMLHttpRequest();
        // on réagit à l'événement onreadystatechange
        xhr.onreadystatechange = function() {
            // test du statut de retour de la requête AJAX
            if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
                // on sauvegarde le catalogue dans une variable
                donnees = JSON.parse(xhr.responseText);
                // on lance la fonction de fonction_A_requete avec le catalogue récupéré
                fonction_A_requete();
            }
        }
        // la requête AJAX : lecture de fromages.json
        xhr.open("GET", "json/donnees.json", true);
        xhr.send();
    } else {
        // on lance la fonction de fonction_A_requete avec le catalogue déjà récupéré précédemment
        fonction_A_requete();
    }
}




function connexion(){
    for (let i = 0; i<donnees.length; i++){
        if(donnees[i].login==document.querySelector("#login").value && donnees[i].mdp == document.querySelector("#mdp").value){
            //user = donnees[i];
            donneestring = JSON.stringify(donnees[i]);
            //console.log(donneestring)
            localStorage.setItem("user", donneestring);
            location.href='profil.html';
            //console.log(donneestring)
            return
        }
    }
    alert("authentification failed")
    document.querySelector("#mdp").value = "" ;   
}
document.querySelector("#connect").addEventListener("click", function(){
    executerRequete(connexion)
} );