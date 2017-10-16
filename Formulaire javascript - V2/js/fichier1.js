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

if((sexe === false && sexe2 === false) || (prenom === '') || (nom === '') || (!regex.test(email)) || (!nombre.test(telephone)) ) {


	if(sexe === false && sexe2 === false ) {
		document.getElementById("mr").parentNode.style.color = "red";
		document.getElementById("miss").parentNode.style.color = "red";	
	}
	if(prenom === '') {
		document.getElementById("prenom").style.backgroundColor = "red"; 
	}
	else {
		document.getElementById("prenom").style.backgroundColor = "white";
	}

	if(nom === '') {
		document.getElementById("nom").style.backgroundColor = "red"; 
	}
	else {
		document.getElementById("nom").style.backgroundColor = "white";
	}

	if(!regex.test(email)) {
		document.getElementById("email").style.backgroundColor = "red"; 
	}
	else {
		document.getElementById("email").style.backgroundColor = "white";
	}

	if(!nombre.test(telephone)) {
		document.formul.telephone.focus();
		document.getElementById("telephone").style.backgroundColor = "red"; 
	}
	else {
		document.getElementById("telephone").style.backgroundColor = "white";
	}

	erreur.innerHTML = '<p style="color:red">Veuillez remplir les champs suivants</p>';
	return false;

}
else {
	alert('Bravo ! Votre compte a bien été crée !');
}

}
