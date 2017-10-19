
function add()
{
	var name= $('#name').val();
	var lastname= $('#lastname').val();
	var email= $('#email').val();
	var regex= /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
	var selectemail= $ ("tbody tr td:nth-of-type(3)");

	 if(name ==="" ) 
	 {
          alert('please entre your name');
      }

      
    if(lastname ==="")
    {
      	alert('please enter your lastname');

    }
    if(email ===""){
    	alert('please enter your email adresse');
    }else if( !regex.test(email))
    {
     alert("please choose an email type: xxxxxxxxx@xxx.xxx");
    }else if(regex.test(email))
    {
     verif(selectemail,email);
    }
    }
function verif(selectemail,email)
{
   for (var i =0; i < selectemail.length; i++)
    {
    if (selectemail[i].innerHTML===email) 
    {
         console.log('invalid');
         alert('please choose another adresse email');
         return false;
    }
    else{
    	addline();
    }

}

  console.log('valid');
    return true;
}

function delet(){
	$("#l").remove();
	$("#r").remove();
	$("#n").remove();
	console.log('you`ll loose the data');

}
function delet1(){
	$(".Layal").remove();
	$(".issa").remove();
	$(".emi").remove();
	console.log('you`ll loose the data');

}
function delet2(){
		$(".lal1").remove();
		$(".lal2").remove();
		$(".lal3").remove();
console.log('you`ll loose the data');

}
function delet3(){
		$(".la1").remove();
	    $(".la2").remove();
		$(".la3").remove();
console.log('you`ll loose the data');

}
function delet4(){
		$(".r1").remove();
		$(".r2").remove();
		$(".r3").remove();
console.log('you`ll loose the data');

}
function addline()
{
	var tableau = document.getElementById("tableau");

	var ligne = tableau.insertRow(-1);

	var colonne1 = ligne.insertCell(0);
	colonne1.innerHTML = document.getElementById("new");

	var colonne2 = ligne.insertCell(1);
	colonne2.innerHTML = document.getElementById("name").value;

	var colonne3 = ligne.insertCell(2);
	colonne3.innerHTML = document.getElementById("lastname").value;

    var colonne4 = ligne.insertCell(3);
	colonne4.innerHTML = document.getElementById("email").value;


	
}



function myFunction() {
	var name= $('#name').val();
	var lastname= $('#lastname').val();
    var str = document.getElementById("name");
    var str = document.getElementById("lastname");
    var res = str.toUpperCase();
    document.getElementById("lastname").innerHTML = res;
    document.getElementById("name").innerHTML = res;
} else{
    	myFunction();
    }