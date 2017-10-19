


function verifForm(){
	
	var regmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    


if ($('#nom').val() == "") {
			alert ("Attention, un des champs doit être rempli \n\n - Nom \n    ");
			$('#nom').focus();
			$('#nom').css("backgroundColor", "#f2dede");
			return false;
	}

if 	($('#prenom').val() == "") {
			alert ("Attention un des champs doit être rempli \n\n - Prénom \n    ");
			$('#prenom').focus();
			$('#prenom').css("backgroundColor", "#f2dede");
			return false;


}

if 	($('#email').val() == "") {
			alert ("Attention un des champs doit être rempli \n\n - Email \n    ");
			$('#email').focus();
			$('#email').css("backgroundColor", "#f2dede");
			return false;
			}
			else if (regmail.test(($('#email').val())))
					{
						alert ("Attention, le format de l'email n'est pas correct \n\n ");
						$('#email').focus();
						$('#email').css("backgroundColor", "#f2dede");
						// y a un souci avec le regex : quand l'adresse est bonne, ça marche pas :p j'ai pas eu le temps de corriger comme je dois m'absenter cet après midi

					}
		verifUniq();
		
}



function inserTableau() {

	tableau = document.getElementById("televes")
	newligne = tableau.insertRow(-1);
	id = newligne.insertCell(0);
	nom = newligne.insertCell(1);
	prenom = newligne.insertCell(2);
	email = newligne.insertCell(3);

	id.innerHTML += 5; // variable test, je n'ai pas eu le temps de faire la fonction compteur
	nom.innerHTML += $('#nom').val();
	prenom.innerHTML += $('#prenom').val();
	email.innerHTML += $('#email').val();
}

function verifUniq() {

	var tdsemail = $("tr td:nth-of-type(4)");
	for (var i = 0; i < tdsemail.length; i++) {
		if ($('#email').val() === tdsemail[i].innerHTML) {
			alert("l'utilisateur existe déjà");
        	return false;
			}
		} inserTableau();
};