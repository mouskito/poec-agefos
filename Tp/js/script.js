var surname = $("#surname");
var firstname = $("#firstname");
var email = $("#email");
var form = $("#form");
var spans = $("span");
var regExpMail = /^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/;
var boolSurname = false;
var boolFirstname = false;
var boolEmail = false;
var listDel = "";
var idStorage = 0;
var tdsFirstname = "";
var tdsSurname = "";
var tdsMail = "";

surname.focus();

surname.keyup(function (e) {
    if (this.value.length > 32 || (!isNaN(this.value) && this.value)) {
        surname.removeClass("great-info");
        surname.addClass("bad-info");
        this.value = this.value.slice(0, (this.value.length - 1));
        boolSurname = false;
    } else {
        surname.removeClass("bad-info");
        surname.addClass("great-info");
        boolSurname = true;
    }
    spans[0].innerHTML = this.value.length;
});

firstname.keyup(function (e) {
    if (this.value.length > 32 || (!isNaN(this.value) && this.value)) {
        this.value = this.value.slice(0, (this.value.length - 1));
        firstname.removeClass("great-info");
        firstname.addClass("bad-info");
        boolFirstname = false;
    } else {
        firstname.removeClass("bad-info");
        firstname.addClass("great-info");
        boolFirstname = true;
    }
    spans[1].innerHTML = this.value.length;
});

email.blur(function (e) {
    if (!regExpMail.test(email[0].value)) {
        email.removeClass("great-info");
        email.addClass("bad-info");
        boolEmail = false;
    } else {
        email.removeClass("bad-info");
        email.addClass("great-info");
        boolEmail = true;
    }
});

surname.blur(function (e) {
    if (this.value.length > 32 || !this.value) {
        surname.removeClass("great-info");
        surname.addClass("bad-info");
        boolSurname = false;
    } else {
        surname.removeClass("bad-info");
        surname.addClass("great-info");
        boolSurname = true;
    }
});

firstname.blur(function (e) {
    if (this.value.length > 32 || !this.value) {
        firstname.removeClass("great-info");
        firstname.addClass("bad-info");
        boolFirstname = false;
    } else {
        firstname.removeClass("bad-info");
        firstname.addClass("great-info");
        boolFirstname = true;
    }
});

form.submit(function (e) {
    e.preventDefault();
    if (boolSurname && boolFirstname && boolEmail) {
        if (!isAlreadyPresent(email[0].value)) {
            addStudent(surname[0].value, firstname[0].value, email[0].value);
        } else {
            alert("Cet élève est déjà enregistré dans la liste !");
        }
    } else {
        if (!boolSurname) {
            surname.focus();
        } else if (!boolFirstname) {
            firstname.focus();
        } else {
            email.focus();
        }
    }
});

function addStudent(surnameStudent, firstnameStudent, emailStudent) {
    var index = parseInt(localStorage.getItem("id"));
    var newTr = $("<tr id=\"tr_" + index + "\">");
    var strTr = "";

    strTr = "<td>" + index + "</td><td>" + firstnameStudent + "</td><td>" + surnameStudent + "</td><td>" + emailStudent + "</td><td id=\"del_" + index + "\">del</td>";
    newTr.html(strTr);
    newTr.appendTo("tbody");
    localStorage.setItem("key_" + index, strTr);
    localStorage.setItem("id", (index + 1));
    listDel = $("td[id*=del_]");
}

function isAlreadyPresent(newStudent) {
    var studentPresent = $("tbody tr td:nth-of-type(4)");

    for (var i = 0; i < studentPresent.length; i++) {
        if (newStudent === studentPresent[i].innerHTML)
            return true;
    }
    return false;
}

function insertStorage() {
    var index = $("tr").length;
    console.log(localStorage);
    if (localStorage.length - 1 > 0) {
        for (var i = 0; i < localStorage.length - 1; i++) {
            var newTr = $("<tr id=\"tr_" + (index + i) + "\">");
            newTr.html(localStorage.getItem("key_" + (index + i)));
            newTr.appendTo("tbody");
        }
    }
    listDel = $("td[id*=del_]");
    localStorage.setItem("id", listDel.length + 1);
    modifyId();
}
insertStorage();

tdsFirstname = $("tbody tr td:nth-of-type(2)");
tdsSurname = $("tbody tr td:nth-of-type(3)");
tdsMail = $("tbody tr td:nth-of-type(4)");


listDel.click(function (e) {
    var id = e.target.id.slice(4);
    console.log(id);
    var trCancel = $("#tr_" + id);

    trCancel.hide("slow", function () {
        trCancel.remove();
        localStorage.removeItem("key_" + id);
        organizeStorage(parseInt(id) + 1);
        modifyId();
    });
});

tdsFirstname.click(function (e) {
    var prenom = prompt("Veuillez indiquer le nouveau prénom : ");

    if (prenom !== "" && prenom !== null && prenom) {
        e.target.innerHTML = prenom;
    } else {
        alert("Le prénom n'a pas été renseigné correctement ! Veuillez réesayer.");
    }
});

tdsSurname.click(function (e) {
    var nom = prompt("Veuillez indiquer le nouveau nom : ");

    if (nom !== "" && nom !== null && nom) {
        e.target.innerHTML = nom;
    } else {
        alert("Le prénom n'a pas été renseigné correctement ! Veuillez réesayer.");
    }
});

tdsMail.click(function (e) {
    var mail = prompt("Veuillez indiquer le nouveau mail : ");

    if (mail !== "" && mail !== null && mail) {
        if (!regExpMail.test(mail)) {
            alert("Le mail renseigné n'est pas un mail valide. Veuillez recommencer l'opération.");
        } else if (isAlreadyPresent(mail))
            alert("Ce mail est déjà utilisé par un autre utilisateur, veuillez renseigner un autre mail !");
        else
            e.target.innerHTML = mail;
    } else {
        alert("Le mail n'a pas été renseigné correctement ! Veuillez réesayer.");
    }
});

function organizeStorage(index) {
        console.log("index en cours : " +index);
    while (index < localStorage.length) {
        console.log(localStorage.getItem("key_" + index));
        index++;
    }
    console.log(index);
}

function modifyId() {
    var listId =  $("tbody tr td:nth-of-type(1)");
    
    for (var i = 0; i < listId.length; i++) {
        listId[i].innerHTML = i + 1;
    }
}

//localStorage.clear();
