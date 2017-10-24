//Variables 
var studentForm = document.querySelector('form');
var studentName = document.getElementById('name');
var studentFirstname = document.getElementById('firstname');
var studentEmail = document.getElementById('email');
var studentNameLabel = document.querySelector('[for="name"]');
var studentFirstnameLabel = document.querySelector('[for="firstname"]');
var studentEmailLabel = document.querySelector('[for="email"]');
var contentTable = document.querySelector('tbody');

//Tableau Etudiants
var students = [];

//Etudiant
function Student (index, name, firstname, email){
    this.index = index;
    this.name = name;
    this.firstname = firstname;
    this.email = email;
}

//Fonctions
function hideError(input, label){
    var initialText = label.innerHTML;    
    input.onfocus = function(){
        label.innerHTML = initialText;
    };
};

hideError(studentName, studentNameLabel);
hideError(studentFirstname, studentFirstnameLabel);
hideError(studentEmail, studentEmailLabel);

 //Validation formulaire
studentForm.onsubmit = function(event){
    event.preventDefault();
    
    var scoreForm = 0;

    if(studentName.value.length == 0){
        studentNameLabel.innerHTML += ' : <b> Veuillez indiquer votre nom</b>';
    }else{
        scoreForm++;
    }

    if(studentFirstname.value.length == 0){
        studentFirstnameLabel.innerHTML += ' : <b>Veuillez indiquer votre prénom</b>'
    }else{
        scoreForm++;
    }

    if(studentEmail.value.length == 0){
        studentEmailLabel.innerHTML += ' : <b>Veuillez indiquer votre email</b>'
    }else{
        scoreForm++;
    }

    if(scoreForm == 3){
        var newStudent = new Student(students.length, studentName.value, studentFirstname.value, studentEmail.value);
        students.push(newStudent);

        //Creation ligne tableau
        var newRow = document.createElement('tr');
        newRow.innerHTML = '<td><strong>'+students[students.length - 1].index+'</strong></td><td>'+students[students.length - 1].name+'</td><td>'+students[students.length - 1].firstname+'</td><td>'+students[students.length - 1].email+'</td>';
        contentTable.appendChild(newRow);

        //Remise à zéro formulaire
        studentName.value = '';
        studentFirstname.value = '';
        studentEmail.value = '';

    }
}