var totalprices = document.querySelectorAll(".totalprice"); 
var totalbasket = document.querySelector(".totalbasket");

document.querySelectorAll('.facturations li').forEach(function (facture) {
	var price = facture.querySelector('.price');
	var quantity = facture.querySelector('.quantity');
	var totalprice = facture.querySelector('.totalprice');

	var listener = function () {
		if((quantity.value != "" && !isNaN(quantity.value)) && (price.value != "" && !isNaN(price.value)) ) {
			var calcul = price.value * quantity.value;

			totalprice.value = calcul;
			var sum = 0;

			totalprices.forEach(function (total) {
				sum = sum + parseInt(total.value, 10);
			})
			totalbasket.value = sum;
		}
	}

	price.onkeyup = listener;
	quantity.onkeyup = listener;
})


// function totalpriceperitem(event) {

// 	console.log(event.target);
// 	var facturations = document.querySelectorAll(".facturations li")

// 	facturations.forEach(function(facture){
// 		var price = facture.querySelector(".price");
// 		var quantity = facture.querySelector(".quantity");

// 		if((quantity.value != "" && !isNaN(quantity.value)) && (price.value != "" && !isNaN(price.value)) ) {
// 			var calcul = price.value * quantity.value;

// 			facture.querySelector(".totalprice").value = calcul;
// 		}
// 	});
// }


/*{
	var num1 = document.getElementsByClassName("quantity").value;
	var num2 = document.getElementsByClassName("price").value;
	var num3 = document.getElementsByClassName("totalprice").value= num1 * num2;

if ( (quantity.value != '' && !isNaN(quantity.value)) && (price.value != '' && !isNan(price.value)) ); 
}
*/