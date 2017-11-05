var buttonAddSubclass = document.getElementById('addSubclass');
var buttonDelSubclass = document.getElementById('delSubclass');

buttonAddSubclass.addEventListener('click', function (e) {
    
    var nbSubclass = document.querySelectorAll("input[id*=idSubclass_]").length;
    var newInput = document.createElement("input");
    var listSubclass = document.getElementById('listSubclasses');

    newInput.setAttribute("type", "text");
    newInput.setAttribute("class", "form-control");
    newInput.setAttribute("name", "class_" + (nbSubclass + 1));
    newInput.setAttribute("id", "idSubclass_" + (nbSubclass + 1));
    newInput.setAttribute('required', '');
    
    listSubclass.appendChild(newInput);
});

buttonDelSubclass.addEventListener('click', function (e) {
   
    var lastSubclass = document.querySelector('#listSubclasses input:last-of-type');
    var listSubclass = document.getElementById('listSubclasses');
    
    listSubclass.removeChild(lastSubclass);
});