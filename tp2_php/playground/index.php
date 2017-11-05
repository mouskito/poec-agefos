<?php
$db = new PDO('mysql:host=localhost;dbname=quizz;charset=utf8', 'root', 'paris');
// $db est un objet de type PDO, il contient des propriétés et
// des méthodes permettant d'interagir avec la BD

// -> query();
$sql = 'SELECT * FROM stagiaire';
//$db->query($sql);

// fetch
// lignes sql transformées en tableaux PHP (à la fois assoc et num)
foreach($db->query($sql, PDO::FETCH_OBJ) as $s) {
  // formats possible: PDO::FETCH_ASSOC, PDO::FETCH_NUM, PDO::FETCH_OBJ
  //echo '<p>ASSOC ' . $s['nom'] . '</p>';
  //echo '<p>NUM ' . $s[1] . '</p>';
  echo '<p>OBJ ' . $s->prenom . '</p>';
}

?>
