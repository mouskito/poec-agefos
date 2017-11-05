<?php
include('levels.php'); 
// fonction retournant le nombre de réponses associées à une question
function getNumAnswers($db, $id_question) {
  // on fournit $db en entrée de la function afin qu'elle puisse
  // se servir de cet objet permettant les opérations en base de données
  $query = $db->prepare(
    'SELECT COUNT(*) FROM answer WHERE id_question = :id_question');
  $query->execute(array(
    ':id_question' => $id_question
  ));
  $num = $query->fetch(PDO::FETCH_NUM);
  // fetch envoie un tableau d'un seul élément (indice 0)
  return $num[0];
}

// 1. preparation de la requête
$query = $db->prepare('SELECT * FROM question ORDER BY id DESC');

// 2. exécution
$query->execute();

// 3. récupération des données (fetch)
$questions = $query->fetchAll(PDO::FETCH_OBJ);

?>

<h2>Liste de questions</h2>
<table class="table table-bordered table-striped">
  <tr>
    <th>#</th>
    <th>Intitulé</th>
    <th>Catégorie</th>
    <th>Niveau</th>
    <th>Actions</th>
  </tr>
  <?php $i = 0 //compteur ?>
<?php foreach($questions as $question): ?>
    <tr>
      <td><?= ++$i ?></td>
      <td><?= $question->title ?></td>
      <td><?= $question->category ?></td>
      <td><?= $levels[$question->level] ?></td>
      <td>
        <a
          href="?route=answer/manage&id_question=<?= $question->id ?>"
          class="btn btn-default btn-xs">
          <?= getNumAnswers($db, $question->id) ?> réponse(s)</a>
        <a
          href="?route=question/edit&id=<?= $question->id ?>"
          class="btn btn-default btn-xs">Modifier</a>
        <a
          href="?route=question/delete&id=<?= $question->id ?>"
          class="btn btn-danger btn-xs">Supprimer</a>
      </td>
    </tr>
<?php endforeach ?>
</table>
