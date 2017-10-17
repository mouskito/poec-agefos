function sum_elements() {
    var somme = 0;
    var result = document.getElementById('somme');
    for (var i=1; i<=6; i++) {
        var element = document.getElementById('el_'+i);
        if (element.value != '' && !isNaN(element.value)) {
            somme += parseInt(element.value);
        }
    }
    result.value = somme;
}
