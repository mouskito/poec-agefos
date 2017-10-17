console.log(this);

var eleve = "nom";
console.log(this.eleve);


var change = document.querySelector("p");
change.addEventListener('mouseover', function() {
  change.classList.add("newColorMouse")
});

var change2 = document.querySelector("p");
change2.addEventListener('mouseout', function() {
  change.classList.remove("newColorMouse")
});


var tel = document.querySelector("#tel");
tel.addEventListener('keypress', function(e) {
    if  (isNaN(tel.value) ) {
        document.getElementById('error').innerHTML = '<p style = "color:red">Vous devez saisir un nombre</p>';
        e.preventDefault();
    } else {
       document.getElementById('error').innerHTML = '';
    } 
});


function verif() {

    var keyup = document.querySelector("#firstname");
    keyup.addEventListener('keyup', function() {
       if (keyup.value.length > 0) {
           keyup.style.backgroundColor = "white";
        } else {
            keyup.style.backgroundColor = "red";
        }
     } );
    
    var male = document.getElementById('mr').checked;
    var female = document.getElementById('miss').checked;

    console.log(male);

    if (!male && !female) {
        alert("Vous devez sélectionner votre civilité");
        document.formul.mr.focus();
        document.formul.mr.style.backgroundColor = "#f2dede";
        return false;
    }

     
    
    var firstname = document.getElementById('firstname').value;
    console.log(firstname);

    if (document.formul.firstname.value == "") {
        alert("Attention, le champ prénom doit être rempli ");
        document.formul.firstname.focus();
        document.formul.firstname.style.backgroundColor = "red";
        return false;
    }

    var lastname = document.getElementById('lastname').value;
    console.log(lastname);

    if (document.formul.lastname.value == "") {
        alert("Attention, le champ nom doit être rempli ");
        document.formul.lastname.focus();
        document.formul.lastname.style.backgroundColor = "red";
        return false;
    }

    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;
    if (regex.test(document.getElementById('email').value))   {
        return true;
    } else {
        alert("Entrez email valide!");
        document.formul.email.focus();
        document.formul.email.style.backgroundColor = "#f2dede";
        return false;
    }

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

    var message = document.getElementById('message').value;
    console.log(message);

    if (document.formul.message.value == "") {
        alert("Attention, le champ message doit être rempli ");
        document.formul.message.focus();
        document.formul.message.style.backgroundColor = "red";
        return false;
    }

    var checked = document.getElementById('tnc').checked;
    if (!checked) {

        alert("vous devez accepté les mentions légales !");
        document.formul.tnc.focus();
        document.formul.tnc.style.backgroundColor = "#f2dede";
        return false;
    }
    
        
}
