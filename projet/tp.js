function myFunction() {
    var i;
    

	//var nom=document.getElementById("nom");
	
	var prenom=document.getElementById("prenom").value;
	
	var email=document.getElementById("email").value;
	
	var verif = document.querySelectorAll(".verifi");

	for(i=0;i<verif.length;i++){
        

		if((verif[i].innerText)!=email){

           //console.log(verif[i].innerText);
           //document.getElementById("ajout").innerHTML = '<li class=col-md-2>'+nom.value+'</li><li class=col-md-2>'+document.getElementById("nom").value+'</li><li class=col-md-2>'+document.getElementById("nom").value+'</li><li class=col-md-2>'+document.getElementById("nom").value+'</li>';
             $( "#ajout" ).prepend( '<li class=col-md-3>1</li><li class=col-md-3>'+document.getElementById("nom").value+'</li><li class=col-md-3>'+document.getElementById("prenom").value+'</li><li class=verifi>'+document.getElementById("email").value+'</li>' );
           //var verif = document.querySelectorAll(".verifi");
	          //console.log(verif);
             
	       
           //alert(verif[0].innerText);
        }
        else
        {
       	   alert("cette utilisateur existe deja");
       	   document.getElementById("nom").focus();
       	   
         
        }
    }

    return false;

}