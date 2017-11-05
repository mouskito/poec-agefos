<?php 
    if (isset($_GET['id_subclass'])) {
        $id_subclass = $_GET['id_subclass'];
        $query = $db->prepare(
            '   SELECT *
                FROM subclass
                WHERE id = :id_subclass
            '
        );
        $result = $query->execute(array(
            ':id_subclass' => intval($id_subclass)
        ));
        if (!$result) {
            echo 'La sous-catégorie n\'a pas été trouvée';
        } else {
            $subclass = $query->fetch(PDO::FETCH_OBJ);
        }
    }

    if (isset($_POST['update'])) {
        $queryEdit = $db->prepare(
            '   UPDATE subclass
                SET body = :body
                WHERE id = :id_subclass
            ');
        $resultEdit = $queryEdit->execute(array(
            ':body' => $_POST['body'],
            ':id_subclass' => intval($_POST['id_subclass'])
        ));

        ($resultEdit)
        ? header('location:?route=class/manage')
        : print('<p>La mise à jour de la catégorie a échouée</p>');
}
?>


<h3>Modifier la sous-catégorie : <?= $subclass->body ?></h3>
<form method="POST" class="well" id="form">
    <div class="form-group">
      <label for="body">Sous-catégorie : </label>
      <textarea name="body" id="body" required><?= $subclass->body ?></textarea>
    </div>
    <input type="hidden" name="id_subclass" value="<?= $subclass->id ?>">
    <input type="submit" name="update" value="Enregistrer">
</form>