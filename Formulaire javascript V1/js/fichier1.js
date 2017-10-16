function Validation() {

var sexe = document.getElementById('mr').checked;
var sexe2 = document.getElementById('miss').checked;
var prenom = document.getElementById('prenom').value;
var nom = document.getElementById('nom').value;
var email = document.getElementById('email').value;
var regex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,3}$/;
var telephone = document.getElementById('telephone').value;
var nombre = /^(06|07)[0-9]{8}$/;
var erreur = document.getElementById('erreur');


	if(sexe === false && sexe2 === false ) {
		erreur.innerHTML = '<p style="color:red">Veuillez choisir votre sexe</p>';
		document.formul.mr.focus();
		return false;
	}
	if(prenom === '') {
		erreur.innerHTML = '<p style="color:red">Veuillez entrer votre prénom</p>';
		document.formul.prenom.focus();
		document.getElementById("prenom").style.backgroundColor = "red"; 
		return false;
	}
	if(nom === '') {
		erreur.innerHTML = '<p style="color:red">Veuillez entrer votre nom</p>';
		document.formul.nom.focus();
		document.getElementById("prenom").style.backgroundColor = "white";
		document.getElementById("nom").style.backgroundColor = "red"; 
		return false;
	}
	if(!regex.test(email)) {
		erreur.innerHTML = '<p style="color:red">Veuillez entrer votre un mail valide</p>';
		document.getElementById("nom").style.backgroundColor = "white"; 
		document.getElementById("email").style.backgroundColor = "red"; 
		return false;
	}
	if(!nombre.test(telephone)) {
		erreur.innerHTML = '<p style="color:red">Veuillez entrer un numero valide au format : XXXXXXXXXX</p>';
		document.getElementById("email").style.backgroundColor = "white"; 
		document.getElementById("telephone").style.backgroundColor = "red"; 
		return false;
	}
	alert('Bravo ! Votre compte a bien été crée !');

}
