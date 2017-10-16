regExpPhone = /^[0-9]{10}$/;
regExpMail = /^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/;

function sendQuery() {

    var sexe = document.formulaire.title.value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("phone").value;
    var accept = document.querySelectorAll("input[type=checkbox]");
    var agree = accept[0].checked;
    var read = accept[1].checked;

    accept = agree && read;

    if (sexe && firstName && lastName && email && regExpPhone.test(tel) && regExpMail.test(email) && accept) {
        alert("Votre formulaire est prêt a être envoyé !");
        return true;
    } else {
        if (!sexe) {
            alert("Veuillez indiquer votre sexe !");
            document.formulaire.title1.focus();
            document.getElementById("testons").style.color = "red";
        } else if (!firstName) {
            alert("Veuillez indiquer votre prénom !");
            document.formulaire.firstName.focus();
        } else if (!lastName) {
            alert("Veuillez indiquer votre nom !");
            document.formulaire.lastName.focus();
        } else if (!regExpMail.test(email)) {
            alert("Veuillez indiquer un mail valide !");
            document.formulaire.email.focus();
        } else if (!regExpPhone.test(tel)) {
            alert("Veuillez indiquer un numéro de téléphone valide !");
            document.formulaire.phone.focus();
        } else {
            alert("Veuillez cocher les termes et conditions !");
            if (agree)
                document.formulaire.read.focus();
            else
                document.formulaire.agree.focus();
        }
    }
    return false;
}

function focusElem(elem) {
    elem.style.border = "3px solid black";
}

function blurElem(elem) {
    if (elem.value)
        elem.style.border = "3px solid green";
    else
        elem.style.border = "3px solid red";
}

function blurElemMail(elem) {
    if (regExpMail.test(elem.value))
        elem.style.border = "3px solid green";
    else
        elem.style.border = "3px solid red";
}

function blurElemTel(elem) {
    if (regExpPhone.test(elem.value))
        elem.style.border = "3px solid green";
    else
        elem.style.border = "3px solid red";
}
