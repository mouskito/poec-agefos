$("#signup").click(function (e) {

    var x_nom = document.getElementById("nom").value;
    var x_prenom = document.getElementById("prenom").value;
    var x_email = document.getElementById("email").value;
    $(".tbody").prepend("<tr><td></td></td><td>"+x_nom+"</td> <td>"+x_prenom+"</td> <td>"+x_email+"</td><td><input type=\"button\" class=\"bg-danger\"></td>\n" +
        "                    <td><input type=\"button\" class=\"btn-success\"></td></tr>");

    e.preventDefault()
});

function registration () {

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
}


// get the table by class
/*var rIndex,
    table = document.getElementsByClassName("table");*/

// create a new row and cells
// get value from input text
// set the values into row cell's

// Add row

function addRow() {

}































/*
$(document).ready(function () {
    $("#signup").click(function () {
        var nom = $("#nom").val();
        var prenom = $("#prenom").val();
        var email = $("#email").val();
        var add = "<tr><td><input type='checkbox' name='record'></td><td>" + nom + "</td><td>" + prenom + "</td><td>" + email +"</td></tr>";

        $("table tbody").append(add);
    });
    // Find and remove selected table rows
    $(".delete-row").click(function () {
        $("table tbody").find('input[name="record"]').each(function () {
            if ($(this).is(":checked")) {
                $(this).parents("tr").remove();
            }
        })
    });

});
*/