var formValid = document.getElementById("envoyer");

var madame = document.getElementById("mme").checked;
var mademoiselle = document.getElementById("mlle").checked;
var monsieur= document.getElementById("mr").checked;
var aideGender = document.getElementById("aideGender");

formValid.addEventListener("click", genderVerify);
function genderVerify(){
	if(madame===false && mademoiselle===false && monsieur===false){
		event.preventDefault();
        aideGender.textContent="\*Renseignez votre civilité";
        aideGender.style.color="#fff700";
        return false;
    }else {
    	aideGender.textContent="";
    }
}

var nom = document.getElementById("nom");
var aideNom= document.getElementById("aideNom");

formValid.addEventListener("click", nomVerify);
function nomVerify() {
	if(nom.validity.valueMissing){
		event.preventDefault();
		aideNom.textContent="\*Renseignez votre nom";
		aideNom.style.color="#fff700";
		nom.style.backgroundColor="red";
		return false;
	}
}
	

var prenom = document.getElementById("prenom");
var aidePrenom= document.getElementById("aidePrenom");

formValid.addEventListener("click", prenomVerify);
function prenomVerify() {
	if(prenom.validity.valueMissing){
		event.preventDefault();
		aidePrenom.textContent="\*Renseignez votre prénom";
		aidePrenom.style.color="#fff700";
		prenom.style.backgroundColor="red";
		return false;
	}
}

var birth = document.getElementById("birth");
var aideBirth = document.getElementById("aideBirth");


formValid.addEventListener("click", birthVerify);
function birthVerify() {
	if(birth.validity.valueMissing){
		event.preventDefault();
		aideBirth.textContent="\*Renseignez votre date de naissance";
		aideBirth.style.color="#fff700";
		birth.style.backgroundColor="red";
		return false;
	}
}


var adresse = document.getElementById("adresse");
var aideAdresse= document.getElementById("aideAdresse");


formValid.addEventListener("click", adresseVerify);
function adresseVerify() {
	if(adresse.validity.valueMissing){
		event.preventDefault();
		aideAdresse.textContent="\*Renseignez votre adresse";
		aideAdresse.style.color="#fff700";
		adresse.style.backgroundColor="red";
		return false;
	}
}


var cp = document.getElementById("cp");
var aideCp= document.getElementById("aideCp");


formValid.addEventListener("click", cpVerify);
function cpVerify() {
	if(cp.validity.valueMissing){
		event.preventDefault();
		aideCp.textContent="\*Renseignez votre code postal";
		aideCp.style.color="#fff700";
		cp.style.backgroundColor="red";
		return false;
	}
}


var ville = document.getElementById("ville");
var aideVille= document.getElementById("aideVille");

formValid.addEventListener("click", villeVerify);
function villeVerify() {
	if(ville.validity.valueMissing){
		event.preventDefault();
		aideVille.textContent="\*Renseignez une ville";
		aideVille.style.color="#fff700";
		ville.style.backgroundColor="red";
		return false;
	}
}


var mail = document.getElementById("mail");
var aideMail= document.getElementById("aideMail");
var mailValid = /.+@.+\..+/;

formValid.addEventListener("click", mailVerify);
function mailVerify() {
	if(mail.validity.valueMissing){
		event.preventDefault();
		aideMail.textContent="\ *Renseignez votre mail";
		aideMail.style.color="#fff700";
		mail.style.backgroundColor="red";
		return false;
	}else if(mailValid.test(mail.test) == false){
		event.preventDefault();
		alert(" \*Mail non valide (ex:utilisateur@mail.com)");
		aideMail.style.color="#fff700";
		mail.style.backgroundColor="#fff700";
	}else{

	}
}

var phone = document.getElementById("phone");
var aidePhone= document.getElementById("aidePhone");
var phoneValid = /(0|\+33\s?)[6|7](\s?\d{2}){4}/;

formValid.addEventListener("click", phoneVerify);
function phoneVerify() {
	if(phone.validity.valueMissing){
		event.preventDefault();
		aidePhone.textContent="\*Renseignez votre téléphone";
		aidePhone.style.color="#fff700";
		phone.style.backgroundColor="red";
		return false;
	}else if(phoneValid.test(phone.test) == false){
		event.preventDefault();
		aidePhone.textContent=" \*format non valide (ex: 0648932745)";
		aidePhone.style.color="#fff700";
		phone.style.backgroundColor="#fff700";
	}else{

	}
}

var pseudo = document.getElementById("pseudo");
var aidePseudo= document.getElementById("aidePseudo");

formValid.addEventListener("click", pseudoVerify);
function pseudoVerify() {
	if(pseudo.validity.valueMissing){
		event.preventDefault();
		aidePseudo.textContent="\*Entrez un pseudonyme";
		aidePseudo.style.color="#fff700";
		pseudo.style.backgroundColor="red";
		return false;
	}
}

var mdp = document.getElementById("mdp");
var aideMdp= document.getElementById("aideMdp");

formValid.addEventListener("click", mdpVerify);
function mdpVerify() {
	if(mdp.validity.valueMissing){
		event.preventDefault();
		aideMdp.textContent="\*Entrez un mot de passe";
		aideMdp.style.color="#fff700";
		mdp.style.backgroundColor="red";
		return false;
	}
}
