

		function ajouterLigne()
		{	console.log (document.getElementById('nom').value);
			console.log (document.getElementById('prenom').value);
			console.log (document.getElementById('mail').value);

			if (inscription.mail.value.indexOf("@",0)<0) 
				{
		      	alert("erreur mail .\nLe formulaire ne sera pas validé.")
		      	return ;
				}
			    else {
			        	 alert("formulaire valider.\nPour valider un formulaire : formulaire.submit()");

			        		 var tableau = document.getElementById('btableau');

							console.log (tableau);

							var ligne = tableau.tBodies[0].insertRow(-1);
							var colonne1 = ligne.insertCell(0);
							colonne1.innerHTML += document.getElementById('nom').value;
							var colonne2 = ligne.insertCell(1);
							colonne2.innerHTML += document.getElementById('prenom').value;
							var colonne3 = ligne.insertCell(2);
							colonne3.innerHTML += document.getElementById('mail').value;
			         
			     	 }
		  		 

		}
