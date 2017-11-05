<?php

    if (isset($_GET['id_subclass'])) {
        $id_subclass = $_GET['id_subclass'];

        $query = $db->prepare(
            ' DELETE FROM subclass
              WHERE id = :id_subclass
            ');
        $result = $query->execute(array(
            ':id_subclass' => intval($id_subclass)
        ));

        ($result)
        ? header('location:?route=class/manage')
        : print('La suppression de la sous-catégorie a échouée'); 
    }
?>