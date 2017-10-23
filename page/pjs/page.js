function add(){
	var name = $("#name").val();
	var lastname = $("#lastname").val();
    var email = $("#email").val();
    var regex= /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    var selectemail= $ ("tbody tr th:nth-of-type(4)");
    console.log(selectemail);
         if (name ==="" && name !== isNaN) 
         {
         document.getElementById("name").style.backgroundColor='#CCFF33'; 
         console.log('you have to write ur name');
         }
         if(lastname ==="")
         {document.getElementById("lastname").style.backgroundColor='#CCFF33'; 
                console.log('you have to write ur Lastname'); 
            }
         if(email ==="")
         {document.getElementById("email").style.backgroundColor='#CCFF33'; 
                console.log('you have to write ur email');
         }else if(!regex.test(email))
         {   document.getElementById("email").style.backgroundColor='#CCFF33'; 
                console.log('your email has to be : xxxxxxxxx@xxxxx.xxx');	
         }else if(regex.test(email))
         {
            verif(selectemail,email);
            if((verif(selectemail,email))=== true)
            {
            	addline(name,lastname,email);
            }
          }
      }
function verif(selectemail,email)
{
	for (var i = 0; i < selectemail.length; i++) 
	{
		if(selectemail[i].innerHTML===email)
		{
	          document.getElementById("email").style.backgroundColor='#CCFF33'; 
                console.log('you have to choose another email adresse');
                 return false;
		}
	
}
  console.log('valid');
    return true;
}

function addline(name,lastname,email)
{ 
	var selectemail= $ ("tbody tr th:nth-of-type(4)");
	var tableau = document.getElementById("tableau");
	var ligne = tableau.insertRow(-1);
    var colonne1 = ligne.insertCell(0);
	colonne1.innerHTML += name;
    var colonne2 = ligne.insertCell(1);
	colonne2.innerHTML +=lastname;
	var colonne3 = ligne.insertCell(2);
	colonne3.innerHTML +=email;
    }
    function forgot(email)
    {
    	
    	  $("#div1").fadeIn();
    	 
    	}
   var nbMax=20; 
function longueur() {
  var txt=document.formulaire.message.value;
  if (txt.length>nbMax) {
    document.formulaire.message.value=txt.substring (0,nbMax);
    txt=document.formulaire.message.value;
  }
  document.formulaire.carac.value=nbMax-txt.length;
  setTimeout("longueur()", 10);
  console.log("pay attention");
}










