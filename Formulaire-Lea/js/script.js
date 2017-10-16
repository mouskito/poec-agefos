
function veriform() {
		var isMale = document.getElementById("monsieur").checked;
		var isFemale = document.getElementById("madame").checked;
		console.log(isMale);

	if (!isMale && !isFemale) {

		alert("Vous devez renseigner votre civilité");
		return false;
	}

	if(document.formulaire.nom.value == "") {
		alert("Merci de renseigner le champs \n\n - Nom \n ");
		return false;
	}

	else 
		if (document.formulaire.prenom.value == "") {
		alert("Merci de renseigner le champs \n\n - prénom \n ");
		return false;
	}

	if(document.formulaire.adresse.value == "") {
		alert("Merci de renseigner le champs \n\n - adresse \n ");
		return false;
	}

	if(document.formulaire.codepostal.value == "") {
		alert("Merci de renseigner le champs \n\n - code postal \n ");
		return false;
	}

	if(document.formulaire.commune.value == "") {
		alert("Merci de renseigner le champs \n\n - commune \n ");
		return false;
	}

	if(document.formulaire.ademail.value == "") {
		alert("Merci de renseigner le champs \n\n - adresse e-mail \n ");
		return false;
	}

	if(document.formulaire.numero.value == "") {
		alert("Merci de renseigner le champs \n\n - numéro de téléphone \n ");
		return false;
	}
	
	if(document.formulaire.comment.value == "") {
		alert("Merci de nous indiquer comment vous nous avez connus");
		return false;
	}
}