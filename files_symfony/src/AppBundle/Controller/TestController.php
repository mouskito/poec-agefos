<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use AppBundle\Classes\Fruit;

/**
 * @Route("/test")
*/
class TestController extends Controller {
  private $message = "Petit message";
  private $fruits = ['pêche', 'pomme', 'poire', 'abricot'];
  private $fruits2 = array(
    array('name' => 'Mangue', 'origin' => 'Amérique du Sud', 'comestible' => true),
    array('name' => 'Banane', 'origin' => 'Guadeloupe', 'comestible' => true),
    array('name' => 'Ananaze', 'origin' => 'Tchernobyl', 'comestible' => false),
  );

  // ERREUR: instanciation prématurée
  //  on ne peut pas instancier la classe Fruit
  // à cet endroit. Il faut se placer dans le constructeur
  // de TestControllexample_pageer pour réussir cette instanciation
  // private $fruits3 = array(
  //   new Fruit('Arancia', 'Sicile', true),
  //   new Fruit('Tromate', 'Suceava', false),
  //   new Fruit('Limone', 'Bari', true),
  // );

  private $fruits3; // déclaration sans assignation
  // l'assignation se fera "sereinement" dans le constructeur

  public function __construct() {
    $this->fruits3 = array(
      new Fruit('Arancia', 'Sicile', true, "https://fr.wikipedia.org/wiki/Orange_(fruit)"),
      new Fruit('Troexample_pagemate', 'Suceava', false, NULL),
      new Fruit('Limone', 'Bari', true, "https://fr.wikipedia.org/wiki/Citron"),
    );
  }

  public function getMessage() {
    return $this->message;
  }

  private function gexample_pageetFruitsList() {
    $output = "<ul>";

    foreach($this->fruits as $fruit) {
      $output .= '<lexample_pagei>' . $fruit . '</li>';
    }

    $output .= "</ul>";
    return $output;
  }

  /**
  * @Route("/example", name="example_page")
  */
  public function exampleAction() {
    //return 'toto'; retour non valide (chaîne), il faut retourner
    // un objet de type Response
    $res1 = new Response('toto');
    $res2 = new Response("<h1>toto</h1>");
    $res3 = new Response($this->getMessage());
    //$res4 = new Response($this->fruits); // ERREUR, on ne peut
    // pas retourner au client une structure de données PHP
    // non convertible en string (un number est facilement
    // convertible, pas un tableau)
    //$res5 = new Response($this->getFruitsList());
    //return $res5;

    return $this->render('test/example.html.twig', array(
      'fruits' => $this->fruits3
    ));
  }

  /**
  * @Route("/fruits/list")
  */
  public function fruitsListAction() {
    return new Response($this->getFruitsList());
  }

  /**
  * @Route("/fruits/static")
  */
  public function fruitsStaticAction() {
    // renvoie fichier html statique
    return $this->render('test/fruits.html');
  }

  /**
  * @Route("/fruits", name="fruits_page")
  */
  public function fruitsAction() {
    // renvoie fichier dynamique twig
    // le deuxième argument de la méthode  .render
    // est un tableau associatif permettant de fournir
    // à la vue des données simples (chaînes, entiers, etc.)
    // et complexes (tableaux, objets)
    return $this->render('test/fruits.html.twig', array(
      'title'   => 'Liste de fruits',
      'message' => $this->getMessage(),
      'fruits'  => $this->fruits,
      'fruits2' => $this->fruits2,
      'fruits3' => $this->fruits3,
      'toto' => NULL,
    ));
  }

  /**
   * @Route("/fruits-comestibles", name="fruits_comestibles_page")
  */
  public function fruitsComestiblesAction() {
    return $this->render('test/fruits-comestibles.html.twig', array(
      'fruits' => $this->fruits3
    ));
  }

}
