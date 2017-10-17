function aPayerParArticle(){
    var facturations = document.querySelectorAll('.facturations li')

    facturations.forEach(function(facturation) {
        var price = facturation.querySelector('.price');
        var quantite = facturation.querySelector('.quantite');

        if ( (quantite.value != '' && !isNaN(quantite.value)) && (price.value != '' && !isNaN(price.value)) ) {
            var calc = price.value * quantite.value;

            facturation.querySelector('.totalAPayer').value = calc;
        }
    });
}
