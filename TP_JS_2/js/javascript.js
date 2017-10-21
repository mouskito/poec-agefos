// evenements lors saisie :
document.getElementById("studLastN").addEventListener("keypress", errorLastN);
function errorLastN()
{
  var nom = document.getElementById("studLastN").value;
  var chpNom = document.getElementById("studLastN");

  if (!isNaN(nom))
  {
    chpNom.style.border = "3px solid red";
    return false;
  } else {
    chpNom.style.border = "3px solid green";
  }
}

document.getElementById("studFirstN").addEventListener("keypress", errorFirstN);
function errorFirstN()
{
  var prenom = document.getElementById("studFirstN").value;
  var chpPrenom = document.getElementById("studFirstN");

  if (!isNaN(prenom))
  {
    chpPrenom.style.border = "3px solid red";
    return false;
  } else {
    chpPrenom.style.border = "3px solid green";
  }
}

document.getElementById("studMail").addEventListener("keypress", validationMail);
function validationMail()
{
  var mail = document.getElementById("studMail").value;
  var chpMail = document.getElementById("studMail");
  var mailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!mailValid.test(mail))
  {
    chpMail.style.border = "3px solid red";
    return false;
  } else {
    chpMail.style.border = "3px solid green";
    return true;
  }
}

//---TABLEAU MAILS---//
var mails=["mo@mdo.com",]

//verifier les champs :
function  verify()
{
  var nom = document.getElementById("studLastN").value;
  var chpNom = document.getElementById("studLastN");
  var prenom = document.getElementById("studFirstN").value;
  var chpPrenom = document.getElementById("studFirstN");
  var mail = document.getElementById("studMail").value;
  var chpMail = document.getElementById("studMail");

  if (nom === "" || prenom ==="" || mail === "")
  {
    alert("Vous devez renseigner tous les champs !");
    return false;
  }

  if(validationMail () === true)
  {
    for (var i=0; i < mails.length; i++)
    {
      if (mails[i] === mail)
      {
        i = mails.length;
        alert("L'adresse mail que vous avez saisie existe déjà !");
        chpMail.focus();
        chpMail.style.border = "3px solid red";
        return false;
      } else {
        mails.push(mail);
        
      }
    }
  }
}
