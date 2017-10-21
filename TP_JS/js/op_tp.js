//stock les données saisies :
var nom = $("#nom").val();
var prenom = $("#prenom").val();
var mail = $("#mail").val();
var regex =	/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var msgError = $("#erreur");

//event: pendant que j'écris il vérifie :
//NOM
$("#nom").keyup(upNom);
$("#nom").keydown(downNom);
function upNom() {
    if (!isNaN(nom)){
      $("#nom").css("border-color", "red");
      $("#nom").css("background-color","#eed2ff");
    }
}
function downNom() {
    $("#nom").css("border-color", "green");
}

//PRENOM
$("#prenom").keyup(upPrenom);
$("#prenom").keydown(downPrenom);
function upPrenom() {
    if (!isNaN(prenom)){
      $("#prenom").css("border-color", "red");
      $("#prenom").css("background-color","#eed2ff");
    }
}
function downPrenom() {
    $("#prenom").css("");
}

//MAIL
$("#mail").keyup(upMail);
$("#mail").keydown(mail);
function upMail() {
  if (!regex.test(mail)){
    $("#mail").css("border-color", "red");
    $("#mail").css("background-color","#eed2ff");
  }
}
function downMail() {
    $("#mail").css("");
}


function ajoutLigne(nom,prenom,mail){
  nom = $("#nom").val();
  prenom = $("#prenom").val();
  mail = $("#mail").val();
var tableau = $("#tab_eleve");
var ligne = tableau.insertRow(-1);
var colonne1 = ligne.insertCell(0);
colonne1.innerHTML += "2";
var colonne2 = ligne.insertCell(1);
colonne2.innerHTML += nom;
var colonne3 = ligne.insertCell(2);
colonne3.innerHTML += prenom;
var colonne4 = ligne.insertCell(3);
colonne4.innerHTML += mail;
}
/*
msgError.html("\*Vous devez renseigner correctement les champs !");
msgError.css("background-color","#ff5f57");*/
