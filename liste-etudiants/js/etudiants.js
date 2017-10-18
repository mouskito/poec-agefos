function addtolist () {

var listarray = document.getElementById("listarray");

var row	= listarray.insertRow(1);

var column1 = row.insertCell(0);
column1.innerHTML += document.getElementById("firstname").value;

return column1;
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