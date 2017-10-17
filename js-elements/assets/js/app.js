function calcul(){
    var x = document.getElementById('inp1').value;
    var y = document.getElementById('inp2').value;
    var z = document.getElementById('total').value= x * y;
      if( isNaN(x) || isNaN(y)) {
        alert("vous devriez taper que des nombres!!!!!");
    }
}
calcul();
