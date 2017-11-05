<?php

    if (isset($_GET['id_class'])) {
      $id_class = $_GET['id_class'];

      $query = $db->prepare(
        ' DELETE FROM class
          WHERE id = :id_class
        ');
      $result = $query->execute(array(
        ':id_class' => intval($id_class)
      ));

      if ($result) {
        $querySubclasses = $db->prepare(
            ' DELETE FROM subclass
              WHERE id_class = :id_class
            ');
        $result2 = $querySubclasses->execute(array(
            ':id_class' => intval($id_class)
        ));
        
        ($result2)
        ? header('location:?route=class/manage')
        : print('La suppression des sous-catégories a échouée'); 
      } else {
           echo 'La suppression de la catégorie a échouée'; 
      }
    }
?>