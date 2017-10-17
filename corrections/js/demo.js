// console.log(document.getElementById('test1').innerHTML);
// document.getElementById('test2').innerHTML = '<a href="#"><strong>Modification avec le JavaScript</strong></a>';
// console.log(document.getElementById('test2').innerHTML);


// // Modifier les propriétés

// console.log(document.getElementById('monId'));
// console.log(document.getElementsByClassName('maClasse'));

// console.log(document.querySelector('.maClasse').className)
// console.log(document.querySelector('#monId'));

// document.querySelector('.maClasse');

// var mesClasses = document.querySelector('.maClasse').classList
// console.log(mesClasses);

// mesClasses.add("nouvelle");

// console.log(mesClasses);

// mesClasses.remove("nouvelle");

// console.log(mesClasses);

// mesClasses.add("newClass");

// console.log(mesClasses);


// console.log(document.querySelector('#monId').style.color="red");


// // Toogle

// window.setInterval( function () {
// 	mesClasses.toggle("newClass");
// }, 1000)



/* JQUERY */
// INIT JQUERY

var li = document.querySelectorAll('li');

console.log(li);
for (var i = 0; i < li.length; i++) {
	li[i].style.backgroundColor = "#f2dede";
}


// jQuery('li:first-child').css('backgroundColor','#f2dede');
// jQuery('li:last').css('backgroundColor','#f2dede');
// $('li:nth-child(2)').css('backgroundColor','blue');


// var ul = $('ul:first');
// var li = $('<li><a href="">ajoute un li</a></li>').css('backgroundColor','red');

//ul.append(li)
//ul.prepend(li)

// var first_li = $('li:first');
// first_li.before(li);
//first_li.after(li);

/*
* class active 
*/

/* THIS
* "this" est une référence à l'objet courant.
*/
//console.log($(this).parent())
// La fonction siblings retourne tous les éléments voisins de l'élément retourné par le sélecteur

//console.log($('li').siblings())

$('li a'). click(function(e){
	e.preventDefault();
	var li = $(this).parent();
	li.siblings('.active').removeClass('active');
	li.addClass('active');

	var text = $($(this).attr('href'));
	//text.fadeIn(500);
	//text.siblings().fadeOut(500);

	text.show(500);
	text.siblings().hide(500);

})