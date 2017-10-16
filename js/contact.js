
function verif() {


var male = document.getElementById('mr').checked;
var female = document.getElementById('miss').checked;
    
console.log(male);

 if (!male && !female) {
        alert ("Vous devez sélectionner votre civilité");
        document.formul.mr.focus();
        document.formul.mr.style.backgroundColor = "#f2dede";
        return false;
    }
    
var firstname  = document.getElementById('firstname').value;
console.log(firstname);    
    
if   (document.formul.firstname.value == "") {
    alert("Attention, le champ prénom doit être rempli ");
    document.formul.firstname.focus();
    document.formul.firstname.style.backgroundColor = "red";
   return false; 
    } 
    
var lastname  = document.getElementById('lastname').value;
console.log(lastname);    
    
if   (document.formul.lastname.value == "") {
    alert("Attention, le champ nom doit être rempli ");
    document.formul.lastname.focus();
    document.formul.lastname.style.backgroundColor = "red";
   return false;   
    } 

var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;
if (regex.test(document.getElementById('email').value))  
    {  
    return true;
     } else{
     alert("Entrez email valide!");
    document.formul.email.focus();
    document.formul.email.style.backgroundColor = "#f2dede";
    return false;
    }


/*var email  = document.getElementById('email').value;
console.log(email);    
    
if   (document.formul.email.value == "") {
    alert("Attention, le champ email doit être rempli ");
    document.formul.email.focus();
    document.formul.email.style.backgroundColor = "red";
   return false;    
    } 
*/
var tel  = document.getElementById('tel').value;
console.log(tel);    
    
if   (document.formul.tel.value == "") {
    alert("Attention, le champ tel doit être rempli ");
    document.formul.tel.focus();
    document.formul.tel.style.backgroundColor = "red";
   return false;    
    } 
    
var message  = document.getElementById('message').value;
console.log(message);    

if   (document.formul.message.value == "") {
    alert("Attention, le champ message doit être rempli ");
    document.formul.message.focus();
    document.formul.message.style.backgroundColor = "red";
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

