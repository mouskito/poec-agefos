console.log(document.getElementById('test1').innerHTML);
document.getElementById('test2').innerHTML = '<a href="#"><strong>Modification avec le JavaScript</strong></a>';
console.log(document.getElementById('test2').innerHTML);


// Modifier les propriétés

console.log(document.getElementById('monId'));
console.log(document.getElementsByClassName('maClasse'));

console.log(document.querySelector('.maClasse').className)
console.log(document.querySelector('#monId'));

document.querySelector('.maClasse');

var mesClasses = document.querySelector('.maClasse').classList
console.log(mesClasses);

mesClasses.add("nouvelle");

console.log(mesClasses);

mesClasses.remove("nouvelle");

console.log(mesClasses);

mesClasses.add("newClass");

console.log(mesClasses);


console.log(document.querySelector('#monId').style.color="red");


// Toogle

window.setInterval( function () {
	mesClasses.toggle("newClass");
}, 1000)
