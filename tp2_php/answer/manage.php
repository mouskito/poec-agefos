<?php

function getAnswerById($answers, $id) {
  // recherche une réponse identifiée dans un tableau de réponses
  $answer = NULL;
  foreach($answers as $a) {
    if($a->id == $id) {
      $answer = $a;
      break; // réponse trouvée => sortie de boucle
    }
  }
  return $answer;
}

if (isset($_GET['id_question'])) {
  $id_question = $_GET['id_question'];

  $query = $db->prepare(
    ' SELECT title
      FROM question
      WHERE id = :id_question
    ');
  $query->execute(array(
    ':id_question' => intval($id_question)
  ));
  $title = $query->fetch(PDO::FETCH_OBJ)->title;

  // récupération des réponses associées à la question traitée
  $query2 = $db->prepare(
    ' SELECT id, body, correct
      FROM answer
      WHERE id_question = :id_question
    ');
  $query2->execute(array(
    ':id_question' => $id_question
  ));
  $answers = $query2->fetchAll(PDO::FETCH_OBJ);

  // si on est en mode édition de réponse
  if (isset($_GET['edit']) && isset($_GET['id_answer'])) {
    $answerEdit = getAnswerById($answers, intval($_GET['id_answer']));
  }
}

// click sur le bouton submit du formulaire d'insertion
if (isset($_POST['insert'])) {
  // formulaire d'ajout d'une réponse envoyé
  // Enregistrement en DB
  $correct = 0;
  if (isset($_POST['correct'])) $correct = 1;

  $query = $db->prepare(
    ' INSERT INTO answer (body, correct, id_question)
      VALUES (:body, :correct, :id_question)
    ');
  $result = $query->execute(array(
    ':body' => $_POST['body'],
    ':correct' => $correct,
    ':id_question' => intval($_POST['id_question'])
  ));

  ($result)
    ? header('location:?route=answer/manage&id_question='.$_POST['id_question'])
    : print('<p>L\'enregistrement de la réponse a échoué</p>');
}

// click sur le bouton submit du formulaire de mise à jour
if (isset($_POST['update'])) {
  $correct = 0;
  if (isset($_POST['correct'])) $correct = 1;

  $query = $db->prepare(
    ' UPDATE answer
      SET body = :body, correct = :correct
      WHERE id = :id
    ');
  $result = $query->execute(array(
    ':body' => $_POST['body'],
    ':correct' => $correct,
    ':id' => intval($_POST['id_answer'])
  ));

  // url de retour à la liste des réponses pour la question traitée
  $url = '?route=answer/manage&id_question=' . $_POST['id_question'];
  ($result)
    ? header('location:' . $url)
    : print('La mise à jour de la réponse a échoué');

}

?>

<h2>Question: <?=$title ?></h2>

<div class="container">
  <div class="row">
    <div class="col-md-8">
      <?php if(sizeof($answers) == 0): ?>
        <p class="alert alert-warning">Aucune réponse enregistrée</p>
      <?php else: ?>
        <h3>Liste des réponses</h3>
        <table class="table table-bordered table-striped">
          <?php $i = 0; // compteur  ?>
          <?php foreach($answers as $answer): ?>
            <tr>
              <td><?=++$i?></td>
              <td><?=$answer->body ?></td>
              <td>
                <?= ($answer->correct == 1) ? 'Bonne' : 'Mauvaise'; ?>
                &nbsp;réponse
              </td>
              <td>
                <?php
                  $urlDel = '?route=answer/delete&id_answer=' . $answer->id;
                  $urlDel .= '&id_question=' . $id_question;

                  $urlEdit = '?route=answer/manage&id_question=' . $id_question;
                  $urlEdit .= '&edit=true&id_answer=' . $answer->id;
                ?>
                <a
                  class="btn btn-default btn-xs"
                  href="<?= $urlEdit ?>">Modifier</a>
                <a
                  class="btn btn-danger btn-xs"
                  href="<?= $urlDel ?>">Supprimer</a>
              </td>
            </tr>
          <?php endforeach ?>
        </table>
      <?php endif ?>
    </div>
    <div class="col-md-4">

      <?php if(!isset($_GET['edit'])) : ?>
      <!--
      Si le paramètre edit n'est pas dans l'URL on affiche
      le formulaire d'ajout d'une réponse
      -->
      <h3>Ajouter une réponse</h3>
      <form method="POST" class="well">
        <div class="form-group">
          <label for="body">Texte</label>
          <textarea name="body" required></textarea>
        </div>
        <div class="form-group">
          <label for="correct">Bonne réponse</label>
          <input type="checkbox" name="correct"/>
        </div>
        <input type="hidden" name="id_question" value="<?=$id_question?>">
        <input type="submit" name="insert" value="Enregistrer">
      </form>

    <?php else: ?>

      <h3>Modifier la réponse</h3>
      <form method="POST" class="well">
        <div class="form-group">
          <label for="body">Texte</label>
          <textarea name="body" required><?= $answerEdit->body ?></textarea>
        </div>
        <div class="form-group">
          <label for="correct">Bonne réponse</label>
          <?php if($answerEdit->correct == 1): ?>
            <input type="checkbox" name="correct" checked/>
          <?php else: ?>
            <input type="checkbox" name="correct" />
          <?php endif ?>
        </div>
        <input type="hidden" name="id_question" value="<?=$id_question?>">
        <input type="hidden" name="id_answer" value="<?= $answerEdit->id ?>">
        <input
          class="btn btn-primary"
          type="submit" name="update" value="Mettre à jour">
        <?php
          $url = '?route=answer/manage&id_question=' . $id_question;
        ?>
        <!--
        le lien annuler permet de quitter le mode édition:
        les paramètres "edit" et "id_answer" ne sont plus dans l'url
        -->
        <a
          class="btn btn-default"
          href="<?=$url?>">Annuler</a>
      </form>

    <?php endif ?>

    </div>
  </div>
</div>
