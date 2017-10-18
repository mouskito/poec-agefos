$( "i" ).click(function() {
	if (($( "i" ).hasClass("fa-chevron-down" ))) {
	  $( "p" ).hide( "slow" );
	  $(".fa").addClass('fa-chevron-right').removeClass('fa-chevron-down');
	}
	else {
	  $( "p" ).show( "slow" );
	  $(".fa").addClass('fa-chevron-down').removeClass('fa-chevron-right');
	}
});

var couleur = $('p').css('color');

$('p').click(function() {


	if(($(this).css('color') === couleur)) {
		$(this).css('color','red');
	}
	else {

		$(this).css('color','rgb(33, 37, 41)');
	}
	
});

$('img').fadeOut(5000, 0, function img() {

  	setInterval(function () {
        $('img').delay(20).fadeIn(5000, 0).delay(20).fadeOut(5000,0).delay(20).fadeIn(5000,0);
    }, 1000);
  	
});

$('#all').click(function () {
 
        if ($('#all').is(':checked')) {
            $(".choix").find(':checkbox').prop("checked", true);
        }
        else {
            $(".choix").find(':checkbox').prop("checked", false);
        }
});

var message = $('#message');
var nbM = $('#text-mot');
var nbC = $('#text-caractere');

$("#message").on('keyup', function(e) {
	
    var tableau = $(this).val().split("");
    var nbCaractere = tableau.length;
    nbC.text(nbCaractere);

   if (nbCaractere > 20) {

   	 e.target.value = e.target.value.slice(0, 20);
   	 $(this).css('backgroundColor','rgba(237, 0, 0, 0.3)');
   	 $('#text-caractere').css("color","red");
   	 $('#text-mot').css("color","red");
   	 $('.erreur').css("color","red");
     nbC.text(nbCaractere-1);


   }
   else {

   	 $(this).css('backgroundColor','rgb(255, 255, 255)');
   	 $('#text-caractere').css("color","rgb(33, 37, 41)");
   	 $('#text-mot').css("color","rgb(33, 37, 41)");
   	 $('.erreur').css("color","rgb(33, 37, 41)");
   }


   var tableau2 = $(this).val().split(" ");
   tableau2 = tableau2.filter(function (elem) {
        return (elem !== "");
    });
   var nbMot = tableau2.length;
   nbM.text(nbMot);

 });
