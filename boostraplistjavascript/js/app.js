/*var button = $("#loginall");


 });*/

/*
	var close = $("#pop-alert");
 	close.click(function(){
 		var close = document.getElementById("pop-alert");
		close.nextElementSibling.remove(close);
		console.log(buttonclose);
	});
		$(document).ready(function(){
	 		$(".alert").click(function(){
	 		$(this).fadeOut()
	 		})
 		});*/



function verification() {
	var name = $("#nom").val();
	var firstname = $("#prenom").val();
	var email = $("#email").val();
	var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,3}$/;

	if (name == "" || !isNaN(name))
	{
 		console.log("verifier ton champs");
 		return false;
 	}
		console.log(name);
		console.log(firstname);
		console.log(email);

	if ( prenom == "" || !isNaN(prenom)){
		console.log("verifier ton champs");
		return false;
	} 

	if ( email == "" || regex.test(email)){
		console.log("verifier ton champs");
		return false;
	}

}

	var close = $("#pop-alert");
 	close.click(function(){
 		var close = document.getElementById("pop-alert");
		close.nextElementSibling.remove(close);
		console.log(buttonclose);
	});
		$(document).ready(function(){
	 		$(".alert").click(function(){
	 		$(this).fadeOut()
	 		})
 		});


function addLine() {
	var tableau = document.getElementById("tab-eleve");

	var ligne = tableau.insertRow(-1);//on a ajouté une ligne

	var colonne1 = ligne.insertCell(0);//on a une ajouté une cellule
	colonne1.innerHTML += "0";//on y met le contenu de titre

	var colonne2 = ligne.insertCell(1);//on ajoute la seconde cellule
	colonne2.innerHTML += document.getElementById("nom").value;
	var colonne3 = ligne.insertCell(2);//on ajoute la seconde cellule
	colonne3.innerHTML += document.getElementById("prenom").value;
	var colonne4 = ligne.insertCell(3);//on ajoute la seconde cellule
	colonne4.innerHTML += document.getElementById("email").value;
}


	/*else (regex.test(email)) 
	{
		console.log(email);
	}*/



