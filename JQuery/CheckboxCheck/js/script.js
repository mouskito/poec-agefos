var students = $("input[type=checkbox]");
var allStudentsAccepted = $("input#Tous");
var noStudentsAccepted = $("input#Aucun");
var validation = $("input#Validation");
var button = $("<input type=\"button\" value=\"Revenir en arrière\">");

allStudentsAccepted.click(function(e) {
    students.each(function(i) {
        if (students[i].id !== "Abdel")
            students[i].checked = true;
    });
});

noStudentsAccepted.click(function(e) {
    students.each(function(i) {
        if (students[i].id !== "Sébastien")
            students[i].checked = false;
    });
});

students.click(function(e) {
    if (e.target.id === "Abdel")
        e.target.checked = false;
    if (e.target.id === "Sébastien")
        e.target.checked = true;
});

validation.click(function(e) {
    var tabAll = getStudentsAccepted();
    var divSuccessful = $("<div>");
    
    $("fieldset").hide();
    button.show();
    divSuccessful.html("<p>Les élèves suivants ont reçus une bonne appréciation : <br/><span class=\"green\">" + tabAll.studentsSuccessful + "</span></p><br /><p>Les élèves suivants sont voués à l'échec scolaire : <br/><span class=\"red\">" + tabAll.studentsUnsuccessful + "</span></p>");
    divSuccessful.appendTo("body");
    button.appendTo("body");
    $("div p span.green").css("color", "green");
    $("div p span.red").css("color", "red");
});

button.click(function(e) {
    $("fieldset").show();
    $("div").hide();
    $(this).hide();
});

function getStudentsAccepted() {
    var tabStudentsSuccessful = "";
    var tabStudentsUnsuccessful = "";
    var tabAll = {};
    for (var i = 0; i < students.length; i++) {
        if (students[i].checked)
            tabStudentsSuccessful += students[i].id + " ";
        else
            tabStudentsUnsuccessful += students[i].id + " ";
    }
    tabAll.studentsSuccessful = tabStudentsSuccessful;
    tabAll.studentsUnsuccessful = tabStudentsUnsuccessful;
    return (tabAll);
}