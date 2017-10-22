






function registration() {

    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var email = document.getElementById('email').value;

    var email_regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;

    if (nom === "") {
        alert("Entrez votre nom!");
        document.form.nom.focus();
        document.form.nom.style.backgroundColor = "#f2786a";
        return false;
    }
    if (prenom === "") {
        alert("Entrez votre prenom!");
        document.form.prenom.focus();
        document.form.prenom.style.backgroundColor = "#f2786a";
        return false;
    }
    if (!email_regex.test(email)) {
        alert("Entrez votre email!");
        document.form.email.focus();
        document.form.email.style.backgroundColor = "#f2786a";
        return false;
    }
    if (((nom === "")===false) && ((prenom === "")===false) && ((!email_regex.test(email))===false)) {
        addRow(nom, prenom, email);
    }
}
function addRow(a, b, c) {

    var table = document.getElementById("table");

    var number_of_row = table.tBodies[0].getElementsByTagName("tr").length;
    var row = number_of_row.tBodies[0].insertRow(-1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML += count +1;
    cell2.innerHTML += a;
    cell3.innerHTML += b;
    cell4.innerHTML += c;

}
