var studentsTab = [
/*    {

        firstName: 'Rémi',
        lastName: 'Langlais',
        email: 'remi.langlais@email.com'

        },
    {

        firstName: 'Thomas',
        lastName: 'Dupont',
        email: 'thomas.dupont@email.com'

            },
    {

        firstName: 'Paul',
        lastName: 'Boulet',
        email: 'paul.boulet@email.com'

                },
    {

        firstName: 'Dimiri',
        lastName: 'Poulet',
        email: 'dimitri.poulet@email.com'

                    },
    {

        firstName: 'Julie',
        lastName: 'Lagarde',
        email: 'julie.lagarde@email.com'

                    }*/
];

console.log(studentsTab);


setInterval(function checkStudentListLen() {
    len = studentsTab.length;
    console.log(len);
}, 1000);


function updateStudentsList() {

    if (studentsTab.length > len) {

        for (var i = 0; i < studentsTab.length; i++) {
            var studentFirstName = studentsTab[i].firstName;
            var studentLastName = studentsTab[i].lastName;
            var studentEmail = studentsTab[i].email;


            $("#tableContent").append("<tr>" +
                "<td>" + studentFirstName + "</td>" + "<td>" + studentLastName + "</td>" + "<td>" + studentEmail + "</td>" + "</tr>");

            /*        var btnRemove = document.createElement("input");
                    var btnRemoveLabel = document.createTextNode("Delete");
                    btnRemove.appendChild(btnRemoveLabel);
                    btnRemove.setAttribute("id", "buttonDelete");
                    btnRemove.setAttribute("type", "image");
                    btnRemove.setAttribute("src", "/img/iconRemove.png");
                    btnRemove.setAttribute("onclick", "removeStudent");
                    $("#tableContent").append(btnRemove);*/
        }
    }
}


function initStudentsList() {



    for (var i = 0; i < studentsTab.length; i++) {
        var studentFirstName = studentsTab[i].firstName;
        var studentLastName = studentsTab[i].lastName;
        var studentEmail = studentsTab[i].email;


        $("#tableContent").append("<tr>" +
            "<td>" + studentFirstName + "</td>" + "<td>" + studentLastName + "</td>" + "<td>" + studentEmail + "</td>" + "</tr>");

        /*        var btnRemove = document.createElement("input");
                var btnRemoveLabel = document.createTextNode("Delete");
                btnRemove.appendChild(btnRemoveLabel);
                btnRemove.setAttribute("id", "buttonDelete");
                btnRemove.setAttribute("type", "image");
                btnRemove.setAttribute("src", "/img/iconRemove.png");
                btnRemove.setAttribute("onclick", "removeStudent");
                $("#tableContent").append(btnRemove);*/
    }

}






function displayForm() {

    document.getElementById("addingForm").setAttribute("style", "display:block");
}

function cancelForm() {

    document.getElementById("addingForm").setAttribute("style", "display:none");
}

function addStudent() {
    var userFirstName = $("#addStudentFirstName").val();
    var userLastName = $("#addStudentLastName").val();
    var userEmail = $("#addStudentEmail").val();
    studentsTab.push({
        firstName: userFirstName,
        lastName: userLastName,
        email: userEmail,
    })
    $("#tableContent").append("<tr>" + "<td>" + userFirstName + "</td>" + "<td>" + userLastName + "</td>" + "<td>" + userEmail + "</td>" + "</tr>");
    /*    var btnRemove = document.createElement("input");
        var btnRemoveLabel = document.createTextNode("Delete");
        btnRemove.appendChild(btnRemoveLabel);
        btnRemove.setAttribute("id", "buttonDelete");
        btnRemove.setAttribute("type", "image");
        btnRemove.setAttribute("src", "/img/iconRemove.png");
        btnRemove.setAttribute("onclick", "removeStudent");
        $("#tableContent").append(btnRemove);*/
    console.log(studentsTab);
}

function purgeButton() {
    $("#addStudentFirstName").val('');
    $("#addStudentLastName").val('');
    $("#addStudentEmail").val('');

}

function displayDeletingForm() {

    document.getElementById("deletingForm").setAttribute("style", "display:block");
}

function cancelDeletingForm() {

    document.getElementById("deletingForm").setAttribute("style", "display:none");
}

function removeStudent() {
    var deleteStudentName = $("#RemoveStudentName").val();
    var index = studentsTab.findIndex(x => x.firstName == deleteStudentName);
    console.log(index);
    studentsTab.splice(index, 1);
    console.log(studentsTab);

}
