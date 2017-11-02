<?php

if (isset($_GET['id_question'])) {
    $id_question = $_GET['id_question'];
    if (isset($_GET['isModify'])) {
        $modify = $_GET['isModify'];
        $id_answer = $_GET['id_answer'];
        $query3 = $db->prepare(
        ' SELECT id, body, correct
        FROM answer
        WHERE id = :id_answer
        ');
        $query3->execute(array(
        ':id_answer' => intval($id_answer)
        ));
        $objModify = $query3->fetch(PDO::FETCH_OBJ);
    } else {
        $modify = null;
    }
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
}

if (isset($_POST['submit'])) {
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

if (isset($_POST['submitModify'])) {
      $correct2 = 0;
  if (isset($_POST['correct'])) $correct2 = 1;
    $query4 = $db->prepare(
      ' UPDATE answer
        SET id = :id_answer1, body = :body, correct = :correct
        WHERE id = :id_answer2
      ');
    $result2 = $query4->execute(array(
      ':id_answer1'     => intval($_POST['id_answer']),
      ':body'           => $_POST['body'],
      ':correct'        => $correct2,
      ':id_answer2'     => intval($_POST['id_answer'])
    ));
    if ($result2) {
      header('location:?route=answer/manage&id_question='.$_POST['id_question']);
    } else {
      echo '<p>La mise à jour a échoué</p>';
    }
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
          <?php foreach($answers as $answer): ?>
            <tr>
              <td><?=$answer->body ?></td>
              <td>
                <?= ($answer->correct == 1) ? 'Bonne' : 'Mauvaise'; ?>
                &nbsp;réponse
              </td>
              <td>
                <?php
                    $url = '?route=answer/delete&id_answer=' . $answer->id;
                    $url .= '&id_question=' . $id_question;
                ?>
                <?php 
                    $urlModif = '?route=answer/manage&id_answer=' . $answer->id;
                    $urlModif .= '&id_question=' . $id_question;
                    $urlModif .= '&isModify=true';
                ?>
                <a
                  class="btn btn-default btn-xs"
                  href="<?= $urlModif ?>">Modifier</a>
                <a
                  class="btn btn-danger btn-xs"
                  href="<?= $url ?>">Supprimer</a>
              </td>
            </tr>
          <?php endforeach ?>
        </table>
      <?php endif ?>
    </div>
    <div class="col-md-4">
        <?php if ($modify): ?>
            <h3>Modifier une réponse</h3>
        <?php else: ?>
            <h3>Ajouter une réponse</h3>
        <?php endif ?>
      <form method="POST" class="well">
        <div class="form-group">
            <label for="body">Texte</label>
            <?php if ($modify): ?>
                <textarea name="body" required><?= $objModify->body ?></textarea>
            <?php else: ?>
                <textarea name="body" required></textarea>
            <?php endif ?>
        </div>
        <div class="form-group">
            <label for="correct">Bonne réponse</label>
            <?php if ($modify): ?>
                <?php if ($objModify->correct): ?>
                    <input type="checkbox" name="correct" checked/>
                <?php else: ?>
                    <input type="checkbox" name="correct"/>
                <?php endif ?>
            <?php else: ?>
                <input type="checkbox" name="correct"/>
            <?php endif ?>
        </div>
        <input type="hidden" name="id_question" value="<?=$id_question?>">
        <input type="hidden" name="id_answer" value="<?=$id_answer?>">
        <?php if ($modify): ?>
            <input type="submit" name="submitModify" value="Modifier">
        <?php else: ?>
            <input type="submit" name="submit" value="Enregistrer">
        <?php endif ?>
      </form>

    </div>
  </div>
</div>
