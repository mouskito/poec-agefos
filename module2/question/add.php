<?php
include('categories.php'); // accès à la variable $categories

if (isset($_POST['submit'])) {
  //var_dump($_POST);
  //1 validation des données
  $cond1 = $_POST['title']      != "";
  $cond2 = $_POST['category']   != "0";
  $cond3 = $_POST['level']      != "0";

  if ($cond1 && $cond2 && $cond3) {
    // toutes les conditions sont remplies
    //2 Enregistrement des données en DB
    // 1. préparation de la requête
    $query = $db->prepare(
      'INSERT INTO question (title, category, level) VALUES (:title, :category, :level)'
    );

    //2. exécution
    // intval convertit la valeur en entier
    $result = $query->execute(array(
      ':title'      => $_POST['title'],
      ':category'   => $_POST['category'],
      ':level'      => intval($_POST['level'])
    ));

    if ($result) {
      //echo '<p>Enregistrement réussi</p>';
      // redirectiinclude('categories.php'); // accès à la variable $categorieson vers la liste des questions
      header('location:?route=question/list');
    } else {
      echo '<p>L\'enregisrement a échoué</p>';
    }

  } else {
    echo 'Une des conditions de validation n\'est pas remplie';
  }

}
?>

<h2>Ajout d'une question</h2>
<form style="width:30%" method="POST">

  <div class="form-group">
    <label>Intitulé</label>
    <input type="text" class="form-control" name="title" required>
  </div>

  <div class="form-group">
    <select name="category">
      <option value="0">Choisir une catégorie</option>
      <?php foreach($categories as $category): ?>
        <option><?= $category ?></option>
      <?php endforeach ?>
    </select>
  </div>

  <div class="form-group">
    <select name="level">
      <option value="0">Choisir un niveau de difficulté</option>
      <option value="1">Facile</option>
      <option value="2">Moyen</option>
      <option value="3">Difficile</option>
    </select>
  </div>

  <input type="submit" class="btn btn-primary" value="Enregistrer" name="submit">

</form>
