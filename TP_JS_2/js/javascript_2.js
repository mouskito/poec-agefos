//format mail valide:
var mailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

//validation du formulaire :

function validation (){
  if (chpVide === true) {
    alert("L'étudiant a été ajouté !");
    addLine();
}

//verification champs vide :
function  chpVide (){
  if (nom === "" || prenom ==="" || mail === ""){
    alert("Vous devez renseigner tous les champs !");
    return false;
  }
}

// verification mail existant : push mail dans tableau
mails=["mo@mdo.com",]

function mailNew(){
  for (var i =0; i> mails.length; i++){
    if (mails[i] ==== mail){
      alert("L'adresse mail que vous avez saisie existe déjà !");
      chpMail.focus();
      errorSaisie(chpMail);
      return false;
    }
  }
}

//ajout de ligne dans tableau
function addLine(){
  	var ligne = tableau.insertRow(-1);

  	var colonne1 = ligne.insertCell(0);
  	colonne1.innerHTML += compteurLine()// function compteur de ligne

  	var colonne2 = ligne.insertCell(1);
  	colonne2.innerHTML += nom;

    var colonne3 = ligne.insertCell(2);
  	colonne3.innerHTML += prenom;

    var colonne4 = ligne.insertCell(3);
  	colonne4.innerHTML += mail;

    var colonne5 = ligne.insertCell(4);
  	colonne5.innerHTML += "-";

    var colonne6 = ligne.insertCell(5);
  	colonne6.innerHTML += "+";
}
//fc° compte nombre de ligne pour numéroter chq ligne :
function compteurLine(){
  var trTotal = document.querySelectorAll("tr").length;//2
  var numNewLine = trTotal- 1;
  return numNewLine;

}
