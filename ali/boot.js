document.getElementById('ernom').style.display='none';
document.getElementById('ercivil').style.display='none';


function fon(){
   
   var nom=document.getElementById("nom").value;

   var mr=document.getElementById("mr").checked;
   var miss=document.getElementById("miss").checked;
   
   if(!mr && !miss){
   	
   	document.getElementById('mr').focus();
   	document.getElementById('ercivil').style.display='block';

    return false;

   	
   }
   
   if(!nom){
   	


       //document.getElementById('tex').innerHTML = 'salut';
       document.getElementById('nom').focus();
       document.getElementById('ernom').style.display="block";
       return false;
       
   	
   }

   
}