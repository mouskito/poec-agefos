// evenements lors saisie :
document.getElementById("studLastN").addEventListener("keypress", verifLastN);
function verifLastN()
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

document.getElementById("studFirstN").addEventListener("keypress", verifFirstN);
function verifFirstN()
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
var mails=["mo@mdo.com","aaa@aa.com","bbb@bb.com"]

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
  else if(validationMail () === true)
  {
    for (var i=0; i < mails.length; i++)
    {
      if (mails[i] === mail)
      {
        alert("L'adresse mail que vous avez saisie existe déjà !");
        console.log(mails[i]);
        //mails.push(mail);
        return false;
        i = mails.length;
      }

    }
  }
  else if (validationMail () === false)
  {
    alert("L'adresse mail que vous avez saisie est incorrect !")
    chpMail.focus();
    chpMail.style.backgroundColor="red";
    return false;
  }
  else
  {
  var totalLine = document.querySelectorAll("tr");
  var newLine = totalLine.length;//nombre ligne total:4
  var table = document.getElementsByTagName("tbody")[0];
  var row = table.insertRow(table.rows.length);
  var row1 = row.insertCell(0);
  var row2 = row.insertCell(1);
  var row3 = row.insertCell(2);
  var row4 = row.insertCell(3);
  row1.innerHTML += newLine// function compteur de row
  row2.innerHTML += nom;
  row3.innerHTML += prenom;
  row4.innerHTML += mail;
  mails.push(mail);
  console.log(mail);
  }
}
