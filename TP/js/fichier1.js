function ajouter() {

  var prenom = document.getElementById('prenom').value;
  var nom = document.getElementById('nom').value;
  var email = document.getElementById('email').value;
  var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,3}$/; 
              
    
  if((prenom === "") || (nom === "") || (!regex.test(email)) ) {

    if(prenom === '') {
    document.getElementById("prenom").style.backgroundColor = "red"; 
    }
    else {
      document.getElementById("prenom").style.backgroundColor = "white";
    }

    if(nom === '') {
    document.getElementById("nom").style.backgroundColor = "red"; 
    }
    else {
      document.getElementById("nom").style.backgroundColor = "white";
    }
    if(!regex.test(email)) {

    document.getElementById("email").style.backgroundColor = "red"; 
    }
    else {
      document.getElementById("email").style.backgroundColor = "white";
    }

    erreur.innerHTML = '<p style="color:red">Veuillez remplir les champs suivants</p>';
    return false;
  }          
  else {                

    document.getElementById("prenom").style.backgroundColor = "white";
    document.getElementById("nom").style.backgroundColor = "white";
    document.getElementById("email").style.backgroundColor = "white";
    erreur.innerHTML = '';
    
                 
    if(verifmail(email) === true) {

      erreur.innerHTML = '<p style="color:red">Le mail est deja utiliser</p>';

      

    }
    else {

      cree(prenom, nom , email);

    } 

  }
}
function verifmail(e) {
    var table = document.getElementsByTagName('table')[0];
    var nbligne = table.rows.length-1;
      for(i=1; i <= nbligne; i++) {
        valeur = table.getElementsByTagName('tr')[i].cells[3].innerHTML;
        if(e === valeur) {
          return true; 
        }

      }
}
function cree(a , b , c) {

    var table = document.getElementsByTagName('table')[0];
    var nouvelleL = table.insertRow(table.length);
    var nbligne = table.rows.length-1;

    var L1 = nouvelleL.insertCell(0);
    var L2 = nouvelleL.insertCell(1);
    var L3 = nouvelleL.insertCell(2);
    var L4 = nouvelleL.insertCell(3);
    var L5 = nouvelleL.insertCell(4);

    L1.innerHTML = nbligne;
    L2.innerHTML = a;
    L3.innerHTML = b;
    L4.innerHTML = c;
    L5.innerHTML = "<i class='fa fa-ban' aria-hidden='true' id='"+nbligne+"' onclick='supprimer(this)'></i>";
}
function supprimer(e) {

    
  id = e.id;
  document.getElementById("table").deleteRow(id);

  var table = document.getElementsByTagName('table')[0];
  var nbligne = table.rows.length;
  
  id2 = parseInt(id)+1;

  for(i=id2; i <= nbligne; i++) {
    console.log(i);
    valeur = document.querySelectorAll('th')[0].innerHTML;
    console.log(valeur[1]);
    console.log(valeur[2]);
    console.log(valeur[3]);
    console.log(valeur[4]);
    console.log(valeur[0]);
    
  }

}



  