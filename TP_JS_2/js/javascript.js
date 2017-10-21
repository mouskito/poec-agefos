// evenements lors saisie :
document.getElementById("studLastN").addEventListener("keypress", errorLastN);
function errorLastN()
{
  var nom = document.getElementById("studLastN").value;
  var chpNom = document.getElementById("studLastN");

  if (!isNaN(nom))
  {
    chpNom.style.border = "3px solid red";
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
  } else {
    chpPrenom.style.border = "3px solid green";
  }
}

document.getElementById("studMail").addEventListener("keypress", errorMail);
function errorMail()
{
  var mail = document.getElementById("studMail").value;
  var chpMail = document.getElementById("studMail");
  var mailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!mailValid.test(mail))
  {
    chpMail.style.border = "3px solid red";
  } else {
    chpMail.style.border = "3px solid green";
  }
}
