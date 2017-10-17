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

$("#message").on('keyup', function() {
	
   var char = $(this).val().split("");
   var numC = char.length;
   $('#text-caractere').text(numC);
   var nombreMots = jQuery.trim($(this).val()).split(' ').length;

   $('#text-mot').text(nombreMots);

   if (numC >= 20) {
   	
   	 $(this).css('backgroundColor','rgba(237, 0, 0, 0.3)');
   	 $('#text-caractere').css("color","red");
   	 $('#text-mot').css("color","red");
   	 $('.erreur').css("color","red");

   }
   else {

   	 $(this).css('backgroundColor','rgb(255, 255, 255)');
   	 $('#text-caractere').css("color","rgb(33, 37, 41)");
   	 $('#text-mot').css("color","rgb(33, 37, 41)");
   	 $('.erreur').css("color","rgb(33, 37, 41)");
   }

 });
