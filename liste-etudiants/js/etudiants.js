var borderFirstName = $("#firstname");
var borderLastName = $("#lastname"); 
var borderEmail = $("#email"); 
var regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


borderFirstName.on( "blur", function() {
	if (this.value === "" || !isNaN (this.value))
		$( this ).css( "border", "1px solid red");
	else 
		$( this ).css( "border", "1px solid LightGreen");
});

borderLastName.on( "blur", function() {
	if (this.value === "" || !isNaN (this.value))
		$( this ).css( "border", "1px solid red");
	else 
		$( this ).css( "border", "1px solid LightGreen");
});

borderEmail.on( "blur", function() {
	if (this.value === "" || !regex.test(this.value))
		$( this ).css( "border", "1px solid red");
	else 
		$( this ).css( "border", "1px solid LightGreen");
});

function verifyForm () {
	var firstname = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;
	var email = document.getElementById("email").value;
	

	if ((firstname === "" || !isNaN(firstname)) || (lastname === "" || !isNaN(lastname)) || (email ==="" || !regex.test(email))) 
		return false;

	return true;
}
function verifEmail () {

	var tdAllMail = $("tbody tr td:nth-of-type(4)");
	var email = document.getElementById("email").value;

	for (var i = 0; i < tdAllMail.length; i++) {
		if (email === tdAllMail[i].innerHTML) {
			return false;
		}
	}
	return true;
}

function addtolist () {

	if (!verifyForm()) {
		alert ("Merci de renseigner correctement tous les champs.")
		return;
	
	}
	if (!verifEmail()) {
		alert ("Cette adresse email existe déjà.");
		return;
	}

	var listarray = document.getElementById("listarray");

	var count = listarray.tBodies[0].getElementsByTagName('tr').length;
	var row	= listarray.tBodies[0].insertRow(-1);

	var column1 = row.insertCell(0);
	var column2 = row.insertCell(1);
	var column3 = row.insertCell(2);
	var column4 = row.insertCell(3);

	column1.innerHTML += count +1;
	column2.innerHTML += document.getElementById("firstname").value;
	column3.innerHTML += document.getElementById("lastname").value;
	column4.innerHTML += document.getElementById("email").value;

	column2.style.textTransform = "capitalize";
	column3.style.textTransform = "uppercase";
}
