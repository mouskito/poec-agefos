

// Form Validation

function registration () {

    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var email = document.getElementById('email').value;

    var email_regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;


    if (nom === "" ) {
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


// Add Rows

$("#signup").click(function (e) {

    var x_nom = document.getElementById("nom").value;
    var x_prenom = document.getElementById("prenom").value;
    var x_email = document.getElementById("email").value;

    var remove = '<input type="button" id="delete" class="btn-danger" value="Delete">';
    var edit ='<input type="button" id="edit" class="btn-success" value="Edit">';
    $(".tbody").prepend("<tr><td>"+x_nom+"</td> <td>"+x_prenom+"</td> <td>"+x_email+"</td><td>"+remove+"</td><td>"+edit+"</td></tr>");


    e.preventDefault();

});


// Delete Rows

$('table tbody').on('click', '#delete', function () {

    $(this).closest('tr').remove();
});

