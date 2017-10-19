//verifier les données saisies :
var msgError = $("#erreur");

function verif(nom,prenom,mail){
  nom = $("#nom").val();
  prenom = $("#prenom").val();
  mail = $("#mail").val();
// si vide :
  if (nom === ""){
      msgError.html("\*Vous devez renseigner correctement les champs !");
      msgError.css("background-color","#ff5f57");
      $("#nom").focus();
      $("#nom").css("background-color","#f2dede");
      return false;
    }
  else if (prenom === ""){
      msgError.html("\*Vous devez renseigner correctement les champs  !");
      msgError.css("background-color","#ff5f57");
      $("#prenom").focus();
      $("#prenom").css("background-color","#f2dede");
      return false;
    }
  else if (mail === ""){
      msgError.html("\*Vous devez renseigner correctement les champs ! !");
      msgError.css("background-color","#ff5f57");
      $("#mail").focus();
      $("#mail").css("background-color","#f2dede");
      return false;
    }
  else{// si tout bon rajouter ligne :
    console.log(nom,prenom,mail);
    insertEleve();
  }
}

function insertEleve(nom,prenom,mail){
  nom = $("#nom").val();
  prenom = $("#prenom").val();
  mail = $("#mail").val();
$('tabl_eleve').find('tbody').append([
        '<tr>',
            '<td>'+2+'</td>',
            '<td>'+nom+'</td>',
            '<td>'+prenom+'</td>',
            '<td>'+mail+'</td>',
        '</tr>'
        ].join(''));
}
