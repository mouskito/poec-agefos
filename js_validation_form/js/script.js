
function validate() {

    // Declare variables

    var male = document.getElementById('male').checked;
    var female = document.getElementById('female').checked;

    var Firstname = document.getElementById('first_name').value;
    var Lastname = document.getElementById('last_name').value;
    var Email = document.getElementById('email').value;
    var Tel = document.getElementById('tel').value;
    var Agree = document.getElementById("agree").checked;
    var Read = document.getElementById("read").checked;
    var Message = document.getElementById('message').value;

    var email_regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/; // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var tel_regex = /^(01|02|03|04|05|06|08|0033|\+33)[0-9]{8}/;

    // Gender button
    if (male === false && female === false) {
        alert("Please select your gender!");
        document.form.male.focus();
        document.form.male.style.backgroundColor = "#f2dede";
        return false;
    }

    // First name
    if (Firstname === "") {
        alert("Please enter your first name!");
        document.form.first_name.focus();
        document.form.first_name.style.backgroundColor = "#f2dede";
        return false;
    }

    // Last name
    if (Lastname === "") {
        alert("Please enter your last name!");
        document.form.last_name.focus();
        document.form.last_name.style.backgroundColor = "#f2dede";
        return false;
    }

    // Email
    if (!email_regex.test(Email)) {
        alert("Please enter your email!");
        document.form.email.focus();
        document.form.email.style.backgroundColor = "#f2dede";
        return false;
    }


    // Telephone
    if(!tel_regex.test(Tel)) {
        alert("Please enter your telephone number!");
        document.form.tel.focus();
        document.form.tel.style.backgroundColor = "#f2dede";
        return false;
    }

    // Message
    if (Message === "" || Message.length > 10) {
        alert("Please enter your message maximum 10 characters!");
        document.form.message.focus();
        document.form.message.style.backgroundColor = "#f2dede";
        return false;
    }

    // Terms and Conditions
    if (Agree === false && Read === false) {
        alert("Please accept terms and conditions or read it!");
        document.form.agree.focus();
        document.form.agree.style.backgroundColor = "#f2dede";
        return false;
    }







}







   /*

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
*/













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