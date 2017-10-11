function verif()
{
    var male = document.getElementById('mr').checked;
    var female = document.getElementById('miss').checked;
    console.log(male)
    if (!male && !female)  {
   
      alert("vous devez selectionné votre civilité");
      document.formul.mr.focus();
      document.formul.mr.style.backgroundColor = "#f2dede";
      return false;
    }

   if(document.formul.firstname.value == "" )  {
     alert("Attention un des champs doit etre rempli \n\n - Nom \n   ");
     document.formul.firstname.focus();
     document.formul.firstname.style.backgroundColor = "#f2dede";
     //document.formulaire.password.style.backgroundColor = "#f2dede";
     
     return false;
    }
 
   if(document.getElementById('lastname').value == "" )  {

     alert("Attention un des champs doit etre rempli \n\n - Prenom \n   ");
     document.formul.lastname.focus();
     document.formul.lastname.style.backgroundColor = "#f2dede";
     
     return false;
    }

    // var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;
    // if (regex.test(document.getElementById('email').value))  
    // {  
    //   return true;
    // }
    // else{
    //   alert("Entrez email valide!");
    //   document.formul.email.focus();
    //   document.formul.email.style.backgroundColor = "#f2dede";
    //   return false;
    // }

    var mobile = /^(01|02|03|04|05|06|08|0033|\+33)[0-9]{8}/;
    //var mobile = /(0|\+33\s?)[6|7](\s?\d{2}){4}/;

    if (mobile.test(document.getElementById('tel').value))
    {
      return true;
    }else{
        alert(" Entrez un numero de téléphone valide ");
       document.formul.tel.focus();
       document.formul.tel.style.backgroundColor = "#f2dede";
        return false;
      
    }

    var checked = document.getElementById('tnc').checked;
    if (!checked )  {
   
      alert("vous devez accepté les mentions légales !");
      document.formul.tnc.focus();
      document.formul.tnc.style.backgroundColor = "#f2dede";
      return false;
    }
}
