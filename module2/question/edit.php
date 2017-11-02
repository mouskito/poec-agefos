<?php
include('categories.php'); // accès à la variable $categories
include('levels.php'); // accès à la variable $levels;

if (isset($_GET['id'])) {
  $id = $_GET['id'];

  $query = $db->prepare('SELECT * FROM question WHERE id = :id');
  $query->execute(array(
    ':id' => intval($id)
  ));
  $question = $query->fetch(PDO::FETCH_OBJ); // renvoie un objet
}

// Cas où le formulaire de mise à jour est envoyé
if (isset($_POST['submit'])) {
  // 1 validation des données
  $cond1 = $_POST['title']      != "";
  $cond2 = $_POST['category']   != "0";
  $cond3 = $_POST['level']      != "0";

  if ($cond1 && $cond2 && $cond3) {
    // 2 enregistrement des nouvelles données
    $query = $db->prepare(
      ' UPDATE question
        SET title = :title, category = :category, level = :level
        WHERE id = :id
      ');
    $result = $query->execute(array(
      ':title'      => $_POST['title'],
      ':category'   => $_POST['category'],
      ':level'      => intval($_POST['level']),
      ':id'         => intval($_POST['id'])
    ));

    if ($result) {
      header('location:?route=question/list');
    } else {
      echo '<p>La mise à jour a échoué</p>';
    }

  } else {
    echo 'Une des conditions de validation n\'est pas remplie';
  }
}
?>

<form style="width:30%" method="POST">

  <div class="form-group">
    <label>Intitulé</label>
    <input value="<?=$question->title ?>" type="text" class="form-control" name="title" required>
  </div>

  <div class="form-group">
    <select name="category">
      <option value="0">Choisir une catégorie</option>
      <?php foreach($categories as $category): ?>
        <?php if($question->category == $category): ?>
          <option selected><?= $category ?></option>
        <?php else: ?>
          <option><?= $category ?></option>
        <?php endif ?>
      <?php endforeach ?>
    </select>
  </div>

  <div class="form-group">
    <select name="level">
      <option value="0">Choisir un niveau de difficulté</option>
      <?php foreach($levels as $k => $level): ?>
        <?php if($question->level == $k): ?>
          <option selected value="<?= $k ?>"><?= $level ?></option>
        <?php else: ?>
          <option value="<?= $k ?>"><?= $level ?></option>
        <?php endif ?>
      <?php endforeach ?>
    </select>
  </div>

  <!-- le champ hidden permet d'ajouter dans la super globale $_POST
  des informations que l'on souhaite conservées (l'id de la question ici) -->
  <input type="hidden" name="id" value="<?=$id ?>">
  <input type="submit" class="btn btn-primary" value="Mettre à jour" name="submit">

</form>
