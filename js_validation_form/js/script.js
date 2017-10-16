
function validate() {

    var male = document.getElementById('male').checked;
    var female = document.getElementById('female').checked;

    var Firstname = document.getElementById('first-name').value;
    var Lastname = document.getElementById('last-name').value;
    var Email = document.getElementById('email').value;
    var Tel = document.getElementById('tel').value;
    var Terms = document.getElementById("terms").checked;
    var Message = document.getElementById('message').value;

    var emailregex = /^[a-zA-Z0-9._-]+\.[a-zA-Z]{2,6}$/;
    var telregex = /^(01|02|03|04|05|06|08|0033|\+33)[0-9]{8}/;

    if (Firstname != "" && Lastname != "" && Email != "" && Tel != "" && Message != "") {
        if (document.getElementById("first-name").value && document.getElementById("last-name")) {
            if (Email.match(emailregex)) {
                if (document.getElementById("male").checked || document.getElementById("female").checked) {
                    if (Tel.match(telregex)) {
                        if (document.getElementById("terms").checked) {
                            if (document.getElementById("message")) {
                                alert("All entered values are correct!");
                                return true;
                            }
                            else {
                                alert("Please write your message at least 10 characters!");
                                return false;
                            }
                        }
                        else {
                            alert("Please select Terms and Conditions!");
                            return false;
                        }
                    }
                    else {
                        alert("Please enter your correct phone number!");
                        return false;
                    }
                }
                else {
                    alert("Please select your gender");
                    return false;
                }
            }
            else {
                alert("Please enter your valid email");
                return false;
            }
        }
        else {
            alert("Please enter your first name and last name");
            return false;
        }
    }
    else {
        alert("All Fields are Required!");
        return false;
    }
}













/*function validate () {

    var male = document.getElementById('male').checked;
    var female = document.getElementById('female').checked;
    console.log(male);

    if (!male && !female) {
        alert("You have to select your gender!");
        document.form.male.focus();
        document.form.male.style.backgroundColor = "#a2dede";
        return false;
    }

    if (document.form.first_name.value = "") {
        alert("Please click male button!");
        document.form.first_name.focus();
        return false;
    }
    if (document.form.last_name.value = "") {
        alert("Please click male button!");
        document.form.last_name.focus();
        return false;
    }
    if (document.form.email.value = "") {
        alert("Please click male button!");
        document.form.email.focus();
        return false;
    }
    if (document.form.tel.value = "") {
        alert("Please click male button!");
        document.form.tel.focus();
        return false;
    }
    if (document.form.message.value = "") {
        alert("Please click male button!");
        document.form.message.focus();
        return false;
    }
}
validate();*/