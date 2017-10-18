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

    if (localStorage.length > 0) {
        for (var i = 0; i < localStorage.length; i++) {
            var newTr = $("<tr id=\"tr_" + (index + i) + "\">");
            console.log(localStorage.getItem("key_" + (index + i)));
            newTr.html(localStorage.getItem("key_" + (index + i)));
            newTr.appendTo("tbody");
        }
    }
    listDel = $("td[id*=del_]");
    localStorage.setItem("id", listDel.length + 1);
}
insertStorage();


listDel.click(function (e) {
    var id = e.target.id.slice(4);
    var trCancel = $("#tr_" + id);
    
    trCancel.remove();
});

function editTdOne() {
    
}
