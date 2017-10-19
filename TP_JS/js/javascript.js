//verifier les données saisies :
var msgError = $("#erreur");

function verif(nom,prenom,mail){
  nom = $("#nom").val();
  prenom = $("#prenom").val();
  mail = $("#mail").val();
  var regex =	/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (nom === "" || !isNaN(nom)){
      msgError.html("\*Vous devez renseigner correctement les champs !");
      msgError.css("background-color","#ff5f57");
      $("#nom").focus();
      $("#nom").css("background-color","#f2dede");
      return false;
    }
    if (prenom === "" || !isNaN(prenom)){
        msgError.html("\*Vous devez renseigner correctement les champs  !");
        msgError.css("background-color","#ff5f57");
        $("#prenom").focus();
        $("#prenom").css("background-color","#f2dede");
        return false;
      }

    if (mail === ""){
          msgError.html("\*Vous devez renseigner correctement les champs ! !");
          msgError.css("border-color","red");
          $("#mail").focus();
          $("#mail").css("background-color","#f2dede");
          return false;
    }else if (!regex.test(mail)){
        msgError.html("\*Mail incorrect ! (ex: utilisateur@mail.com)");
        msgError.css("background-color","#be57ff");
        $("#mail").css("background-color","#eed2ff");
        return false;
    }else {// si tout bon rajouter ligne :
    ajoutLigne(nom,prenom,mail);
  }
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
