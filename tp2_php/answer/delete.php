<?php

if (isset($_GET['id_question']) && isset($_GET['id_answer'])) {
  $id_answer = $_GET['id_answer'];
  $id_question = $_GET['id_question'];

  $query = $db->prepare(
    ' DELETE FROM answer
      WHERE id = :id_answer
    ');
  $result = $query->execute(array(
    ':id_answer' => intval($id_answer)
  ));

  // la variable $url permet de retourner sur la page
  // de gestion des réponses pour la question traitée
  $url = '?route=answer/manage&id_question=' . $id_question;

  ($result)
    ? header('location:' . $url)
    : print('La suppression de la réponse a échoué');

}


?>
