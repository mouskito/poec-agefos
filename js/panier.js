
/*function calcul () {
    
    var el_1 = document.getElementById('el_1').value;
    var el_2 = document.getElementById('el_2').value;
    var total = document.getElementById('total').value = el_1 * el_2;
            }
calcul();*/

// Total Panier 



function aPayerParArticle(){
    var facturations = document.querySelectorAll('.facturations p')

    facturations.forEach(function(facturation) {
        var price = facturation.querySelector('.price');
        var quantite = facturation.querySelector('.quantite');

        if ( (quantite.value != '' && !isNaN(quantite.value)) && (price.value != '' && !isNaN(price.value)) ) {
            var calc = price.value * quantite.value;

            facturation.querySelector('.totalAPayer').value = calc;
        }
    });
}

function sum_elements_panier(){
    var elements = document.querySelectorAll('.totalAPayer');
    elements.forEach(function(element) {
        if ( (element.value != '' && !isNaN(element.value)) ) {
            netAPayer += element.value * 1;
            document.querySelector('.totalPanier').value = netAPayer;
        }
    });

}

