function validationDuFormulaire() {
		var prenom = document.getElementById("prenom");
		var nom = document.getElementById("nom");
		var email = document.querySelector("#email");
		var regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/


		if (prenom.value === "" && nom.value === "" && email.value === "" ) {
			alert("Vous devez renseigner les champs.");
		}
		else if ((prenom.value === "") || !isNaN(prenom.value)){
			document.formulaire.prenom.focus();
			prenom.style.borderColor="red";
		}
		else if ((nom.value === "") || (!isNaN(nom.value))){
			document.formulaire.nom.focus();
			nom.style.borderColor="red";
		}
		else if (!regexEmail.test(email.value) || (email.value === "")) {
			document.formulaire.email.focus();
			email.style.borderColor="red";
		}
		else {
			ajouterUneLigne()
		}

function ajouterUneLigne() {
		var prenom = document.getElementById("prenom").value;
		var nom = document.getElementById("nom").value;
		var email = document.getElementById("email").value;

		var tableau = document.getElementById("tableau-etudiants");
		var numeroEtudiant = tableau.tBodies[0].querySelectorAll('tr').length;
		var nouvelleLigne = tableau.insertRow(-1);

		var colonne1 = nouvelleLigne.insertCell(0);
		var colonne2 = nouvelleLigne.insertCell(1);
		var colonne3 = nouvelleLigne.insertCell(2);
		var colonne4 = nouvelleLigne.insertCell(3);
		var colonne5 = nouvelleLigne.insertCell(4);

		colonne1.innerHTML += numeroEtudiant +1;
		colonne2.innerHTML += prenom;
		colonne3.innerHTML += nom;
		colonne4.innerHTML += email;
		
		colonne2.style.textTransform = "capitalize";
		colonne3.style.textTransform = "uppercase";
		return true;

}}
