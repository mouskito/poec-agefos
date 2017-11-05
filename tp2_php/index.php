<?php
include('routes.php');
$db = new PDO('mysql:host=localhost;dbname=quizz;charset=utf8', 'root', '');

if (isset($_GET['route'])) {
  $route = $_GET['route'];
}
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Module 2: Quizz App</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  </head>
  <body>

    <header>
      <nav>
        <ul class="nav nav-tabs">
          <li><a href="?route=question/list">Liste des questions</a></li>
          <li><a href="?route=question/add">Ajouter une question</a></li>
          <li><a href="?route=class/manage">Gestionnaire des catégories</a></li>
        </ul>
      </nav>
    </header>

    <h1>Module 2: Quizz App</h1>
    <?php
    if (isset($route)) include($routes[$route]);
    ?>
    <script src="events.js"></script>
  </body>
</html>
