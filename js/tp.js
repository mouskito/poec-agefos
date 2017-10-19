

function verif() {
    var prenom = document.getElementById('inputPrenom').value;
    console.log(prenom);
    var nom = document.getElementById('inputNom').value;
    console.log(nom);
    var email = document.getElementById('inputEmail').value;
    console.log(email);
}

/*function verifMail(mail) {
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if(regex.test(mail))
   {
           return true;
        }
   else
   {
       alert("Attention, le champ mail doit être rempli ");
       return false;
   }*/
}

function verifNom() {
   var nom = document.getElementById('inputNom').value;
  if (nom == "") {
        alert("Attention, le champ nom doit être rempli ");
        document.formul.lastname.focus();
        return false;
    }
}


/*var row4 = document.getElementById("row4");
var nouveauNom = row4.querySelector('th td');
alert(nouveauNom);

var tableau = document.getElementsByClassName('table')[0];
var nouvelleLigne = tableau.insertRow(tableau.length);*/

var Etudiant = {
    // initialise l'étudiant
    init: function (compteur,prenom, nom, email) {
        this.compteur=compteur;
        this.prenom = prenom;
        this.nom = nom;
        this.email = email;
    },
    
    // renvoie la description de l'étudiant
    decrire: function() {
               var description = "Compteur : " + this.compteur +"/ Prénom : " + this.prenom + " / Nom : " + this.nom +  " / email : " + this.email;
        return description;
    },

    // ajoute une ligne au tableau
    addRow: function () {
       /* var tr = document.createElement('tr');
        tableau.append('tr');
        var th = document.createElement('th');
        tr.appendChild(th);
        var tdPrenom = document.createElement('td');
        tr.appendChild(tdPrenom);
        var textPrenom = document.createTextNode(this.prenom);
        td.appendChild(textPrenom);*/
        var ajouterLigne = $('table').prepend(`
            <tbody>
                <tr id = "row1">
                  <td>`+this.compteur+`</td>
                  <td>`+this.prenom+`</td>
                  <td>`+this.nom+`</td>
                  <td>`+this.email+`</td>
                </tr>
            </tbody>
            `);
        return ajouterLigne;
    }

};

var etudiant1 = Object.create(Etudiant);
etudiant1.init(0,"Mark", "Otto", "@mdo");
var etudiant2 = Object.create(Etudiant);
etudiant2.init(1,"Jacob", "Thornton", "@fat");

// création du tableau  
var etudiants = [];
etudiants.push(etudiant1);
etudiants.push(etudiant2);


function listeEtudiants() {
    console.log("Voici la liste de tous les étudiants");
    etudiants.forEach(function(etudiant) {
        console.log(etudiant.decrire());
        }); 
    console.log("\r");

}

listeEtudiants();

function ajouterEtudiant() {
    
    var nouveauEtudiant = Object.create(Etudiant);
    var compteurEtudiant = 3;
    var prenomEtudiant = document.getElementById('inputPrenom').value;
    var nomEtudiant = document.getElementById('inputNom').value;
    var emailEtudiant = document.getElementById('inputEmail').value;

   // verifMail(emailEtudiant);

    nouveauEtudiant.init( compteurEtudiant, nomEtudiant, prenomEtudiant,emailEtudiant);
    etudiants.push(nouveauEtudiant);
    nouveauEtudiant.addRow();
    listeEtudiants();


    return false;
}



