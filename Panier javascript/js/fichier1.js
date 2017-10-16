var prix1 = document.getElementById('prix1');
prix1.value = '150';
var prix2 = document.getElementById('prix2');
prix2.value = '40';
var prix3 = document.getElementById('prix3');
prix3.value = '10';
var prix4 = document.getElementById('prix4');
prix4.value = '5';
mtotal5 = document.getElementById('mtotal5');
mtotal5.value = 0;


function calcul() {


	for(i=1 ; i <= 4 ; i++) {

		quantite = document.getElementById('quantite'+i).value;
		prix = document.getElementById('prix'+i).value;
		mtotal = document.getElementById('mtotal'+i);
		mtotal.value = '0';
		
		if(quantite != "" && !isNaN(quantite)) {
			mtotal.value = parseInt(quantite) * parseInt(prix);
		}
	}
	mtotal1 = document.getElementById('mtotal1').value;
	mtotal2 = document.getElementById('mtotal2').value;
	mtotal3 = document.getElementById('mtotal3').value;
	mtotal4 = document.getElementById('mtotal4').value;
	mtotal5.value = parseInt(mtotal1) + parseInt(mtotal2) + parseInt(mtotal3) + parseInt(mtotal4);

}

function changer1() {
	var id = prompt("Veuillez saisir votre ID : ");
	if (id === "moussa") {
		var mdp = prompt("Veuillez saisir votre mdp : ");
		if(mdp==="moussa"){
			var nvprix = prompt('Veuillez saisir le nouveau prix');
			alert(nvprix);
			prix1 = document.getElementById('prix1');
			prix1.value = nvprix;
		}
		else {
			alert('mot de passe incorect !')
		}
	}
	else {
		alert('identifiant incorrect !')
	}
}