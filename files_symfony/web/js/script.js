if ($) console.log('jQuery est dispo');

$(document).ready(function () {
  // dom chargé

  // mise en cache (stockage dans une variable) du retour de la
  // function $(cible)
  var btnHideForm = $('#btnHideForm');
  var isFormVisible = false;

  btnHideForm.click(function() {
    // next() renvoie l'élément suivant dans le dom (form)
    // alternative: donner un id à la balise form
    $(this).next('form').toggle();
    isFormVisible = !isFormVisible;
    (isFormVisible)
      ? $(this).html('Masquer le formulaire')
      : $(this).html('Afficher le formulaire');
  });

});