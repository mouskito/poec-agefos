$(document).ready(function() {
// dom chargé

var app = {
  server: 'http://localhost:8000',
  data: {
    fruits: null
  }
};

// ciblage et mise en cache
var appHtml               = $('div#app');
var btnTestAjax           = appHtml.find('button#btnTestAjax');
var btnListFruits         = appHtml.find('button#btnListFruits');
var fruitDisplay          = appHtml.find('div#fruitDisplay');
var selectFormat          = appHtml.find('select#selectFormat');
var tdsName               = null;
var fruitDetails          = appHtml.find('div#fruitDetails');

// fonctions
function init() {
  ajaxListFruits(); // appelle la function de récupération de fruits
}

var ajaxFn = function() {
  $.get(app.server + '/fruits/api/json', function(res) {
    console.log(res);
    console.log(typeof res);
    // la réponse du server (res) est une chaîne de caractères
    // au format JSON
    var fruit = JSON.parse(res);
    console.log(fruit);
    console.log(typeof fruit);
    console.log('Nom du fruit: ' + fruit.name);

    var fruitData = 'Nom: ' + fruit.name;
    fruitData += '<br />' + 'Origin: ' + fruit.origin;
    fruitDisplay.html(fruitData);

  });
}

var ajaxListFruits = function() {
  var format = selectFormat.val(); // format d'affichage sélectionné
  if (app.data.fruits == null) {
    // si les données n'ont pas déjà été stockées on les demande au serveur
    $.get(app.server + '/fruits/api/list', function(res) {
      // les requêtes ajax sont asynchrones
      // il faut s'assurer que la réponse de serveur est reçue
      // avant d'effectuer des opération basées sur la réponse du serveur
      var fruits = JSON.parse(res);
      app.data.fruits = fruits; // stockage de la réponse du serveur
      fruitDisplay.html(transformToHtml(app.data.fruits, format));
      tdsName = appHtml.find('tr td:nth-of-type(2)');
      tdsName.click(ajaxDetails);

    });
  } else {
    // les données ont déjà été reçues
    fruitDisplay.html(transformToHtml(app.data.fruits, format));
  }

}

var transformToHtml = function(fruits, type) {
  var output = '';

  // liste
  if (type == 'list') {
    output += '<ul>';
    // itération sur fruits
    fruits.forEach(function(fruit) {
      output += '<li>' + fruit.name + '</li>';
    });
    output += '</ul>';
  }

  // tableau
  if (type == 'table') {
    output += '<table class="table table-striped">';
    var header =
      '<tr><th>#</th><th>Nom</th><th>Origine</th><th>Comestible</th><th>Producteur</th></tr>';

    output += header;
    var i = 0;
    fruits.forEach(function(fruit) {
      // vérification des données
      var comestible = (fruit.comestible) ? 'Oui' : 'Non';
      if (fruit.producer == null) {
        var producer = 'Aucun producteur';
      } else {
        var producer = fruit.producer;
      }
      i++;
      output += '<tr>';
      output += '<td>'+i+'</td>';
      output += '<td id="'+fruit.id+'">'+fruit.name+'</td>';
      output += '<td>'+fruit.origin+'</td>';
      output += '<td>'+comestible+'</td>';
      output += '<td>'+producer+'</td>';
      output += '</tr>';
    });

    output += '</table>'
  }


  return output;
}

var ajaxDetails = function($e) {
    $.get(app.server + '/fruits/api/details/' + $e.target.id , function(res) {
        var fruit = JSON.parse(res);
        var output = '';
        
        var comestible = (fruit.comestible) ? 'Oui' : 'Non';
        
        if (fruit.producer == null) {
            var producer = 'Aucun producteur';
        } else {
            var producer = fruit.producer;
        }
        
        if (fruit.category != null) {
            var categories = '';
            fruit.category.forEach(function(category) {
                categories += category.name + '</br>';
            });
        } else {
            categories = 'Aucune';
        }
        
        if (fruit.retailors.length > 0) {
            var retailors = '';
            fruit.retailors.forEach(function(retailor) {
                retailors += retailor.name + '</br>';
            });
        } else {
            retailors = 'Aucun';
        }
        
        if (fruit.producer) {
            var producer = '';
            producer += 'Nom : ' + fruit.producer.name + '</br>';
            producer += 'Email : ' + fruit.producer.email + '</br>';
          //  producer += fruit.producer.logo + '</br>';
            producer += 'Logo : ' + '<img style="width:30px" src="/web/img/logo/' + fruit.producer.logo + '"' + ' alt="'+ fruit.producer.logo + '">';

        } else {
            producer = 'Aucun';
        }
        
        output += '<h3>Détails pour le fruit : ' + fruit.name +'</h3>'
        output += '<table class="table table-striped">';
        output += '<tr><th>Id</th><th>Nom</th><th>Origine</th><th>Comestible</th><th>Producteur</th><th>Catégories</th><th>Détaillants</th></tr>';
        output += '<tr>';
        output += '<td>'+fruit.id+'</td>';
        output += '<td>'+fruit.name+'</td>';
        output += '<td>'+fruit.origin+'</td>';
        output += '<td>'+comestible+'</td>';
        output += '<td>'+producer+'</td>';
        output += '<td>'+categories+'</td>';
        output += '<td>'+retailors+'</td>';
        output += '</tr>';
        output += '</table>';
        fruitDetails.html(output);
    });
};

// événements
btnTestAjax.click(ajaxFn);
btnListFruits.click(ajaxListFruits);
selectFormat.change(ajaxListFruits);


init();

}); //fin ready()