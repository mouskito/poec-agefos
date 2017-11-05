<?php 
    if (isset($_GET['id_class'])) {
        $id_class = $_GET['id_class'];
        $query = $db->prepare(
            '   SELECT *
                FROM class
                WHERE id = :id_class
            '
        );
        $result = $query->execute(array(
            ':id_class' => intval($id_class)
        ));
        if (!$result) {
            echo 'La catégorie n\'a pas été trouvée';
        } else {
            $class = $query->fetch(PDO::FETCH_OBJ);
        }
    }

    if (isset($_POST['insert'])) {
        $id_class = intval($_POST['id_class']);
        $query2 = $db->prepare(
            '   INSERT INTO subclass (body, id_class)
                VALUES (:body, :id_class)
            '
        );
        $result = $query2->execute(array(
            ':body' => $_POST['body'],
            ':id_class' => $id_class
        ));

        ($result)
        ? header('location:?route=class/manage')
        : print('<p>L\'enregistrement de la catégorie a échouée</p>');
}
?>


<h3>Ajouter une sous-catégorie à <?= $class->body ?></h3>
<form method="POST" class="well" id="form">
    <div class="form-group">
      <label for="body">Sous-catégorie : </label>
      <textarea name="body" id="body" required></textarea>
    </div>
    <input type="hidden" name="id_class" value="<?= $class->id ?>">
    <input type="submit" name="insert" value="Enregistrer">
</form>