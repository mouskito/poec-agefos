<?php 

function getClassById($classes, $id) {
  $class = NULL;
  foreach($classes as $c) {
    if($c->id == $id) {
      $class = $c;
      break;
    }
  }
  return $class;
}

  $query = $db->prepare(
    ' SELECT *
      FROM class
    ');
  $query->execute();
  $classes = $query->fetchAll(PDO::FETCH_OBJ);

  if (isset($_GET['edit'])) {
      $classEdit = getClassById($classes, $_GET['id_class']);
  }

  if (isset($_POST['insert'])) {
    $queryInsert = $db->prepare(
        '   INSERT INTO class (body)
            VALUES (:body)
        ');
    $resultInsert = $queryInsert->execute(array(
        ':body' => $_POST['body']
    ));
      
    ($resultInsert)
    ? header('location:?route=class/manage')
    : print('<p>L\'enregistrement de la catégorie a échouée</p>');
  }

  if (isset($_POST['update'])) {
    $queryUpdate = $db->prepare(
        '   UPDATE class
            SET body = :body
            WHERE id = :id_class
        ');
      var_dump($queryUpdate);
    $resultUpdate = $queryUpdate->execute(array(
        ':body' => $_POST['body'],
        ':id_class' => intval($_POST['id_class'])
    ));
      
    ($resultUpdate)
    ? header('location:?route=class/manage')
    : print('<p>La mise à jour de la catégorie a échouée</p>');
  }
?>


 <div class="container">
  <div class="row">
    <div class="col-md-8">
      <?php if(sizeof($classes) == 0): ?>
        <p class="alert alert-warning">Aucune catégorie enregistrée</p>
      <?php else: ?>
        <h3>Liste des catégories</h3>
        <table class="table table-bordered table-striped">
         <tr>
            <th>#</th>
            <th>Catégorie</th>
            <th>Sous-catégorie</th>
            <th>Actions</th>
          </tr>
          <?php $i = 0; ?>
          <?php foreach($classes as $class): ?>
           <?php 
              $query2 = $db->prepare(
                ' SELECT *
                  FROM subclass
                  WHERE id_class = :id_class
                ');
              $query2->execute(array(
                ':id_class' => intval($class->id)
              ));
            
            ?>
            <tr>
              <td><?=++$i?></td>
              <td><?=$class->body ?></td>
              <td>
                <?php 
                    $urlSubclassDel = '?route=subclass/delete';
                    $urlSubclassEdit = '?route=subclass/edit';
                    $urlSubclassAdd = '?route=subclass/add&id_class='.$class->id;
                    $subclasses = $query2->fetchAll(PDO::FETCH_OBJ);
                    if (sizeof($subclasses) == 0) {
                      echo 'Pas de sous-catégorie disponible';
                    } else {
                        foreach($subclasses as $subclass) {
                            echo $subclass->body;
                            echo '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a
                                    class="btn btn-info btn-xs"
                                    href="'.$urlSubclassEdit.'&id_subclass='.$subclass->id.'">Modifier
                                </a>';
                            echo '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a
                                    class="btn btn-warning btn-xs"
                                    href="'.$urlSubclassDel.'&id_subclass='.$subclass->id.'">Supprimer
                                </a>';
                            echo '<br/>';
                            }
                    }
                  echo '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a
                         class="btn btn-success btn-xs"
                        href="'.$urlSubclassAdd.'">Ajouter
                        </a>';
                 ?>
              </td>
              <td>
                <?php
                  $urlDel = '?route=class/delete&id_class=' . $class->id;

                  $urlEdit = '?route=class/manage&id_class=' . $class->id;
                  $urlEdit .= '&edit=true';
                ?>
                <a
                  class="btn btn-primary btn-xs"
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
      <h3>Ajouter une catégorie</h3>
      <form method="POST" class="well" id="form">
        <div class="form-group">
          <label for="body">Catégorie : </label>
          <textarea name="body" id="body" required></textarea>
        </div>
        <input type="submit" name="insert" value="Enregistrer">
      </form>

    <?php else: ?>

      <h3>Modifier la catégorie</h3>
      <form method="POST" class="well">
        <div class="form-group">
          <label for="body">Texte</label>
          <textarea name="body" required><?= $classEdit->body ?></textarea>
        </div>
        <!--
        <p style="font-weight:bold">Sous-catégorie (optionnel) : </p>
        <div class="form-group" id="listSubclasses"></div>    
        <input type="button" name="addSubclass" value="Add one subclass" id="addSubclass">
        <input type="button" name="delSubclass" value="Delete one subclass" id="delSubclass">
        -->
        <input type="hidden" name="id_class" value="<?= $classEdit->id ?>">
        <input
          class="btn btn-primary"
          type="submit" name="update" value="Mettre à jour">
        <?php
          $url = '?route=class/manage';
        ?>
        <a
          class="btn btn-default"
          href="<?=$url?>">Annuler</a>
      </form>

    <?php endif ?>

    </div>
  </div>
</div>