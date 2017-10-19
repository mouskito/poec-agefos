function verifyForm () {
	var firstname = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;
	var email = document.getElementById("email").value;

	if (firstname === "") {
		return false;
	}
	if (lastname === "") {
		return false;
	}

	if (email === "") {
		return false
	}
	return true;
}

function addtolist () {

	if (!verifyForm ()) {
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

}
/*


{
	if(document.studentform.lastname.value == "") {
		alert ("Merci de renseigner correctement le nom");
		return false;
	}
	else if(document.studentform.firstname.value == "") {
		alert ("Merci de renseigner correctement le prénom");
		return false;
	}
	if(document.studentform.email.value == "") {
		alert ("Merci de renseigner correctement le prénom");
		return false;
	}
}*/