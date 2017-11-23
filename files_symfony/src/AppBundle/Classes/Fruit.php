<?php

namespace AppBundle\Classes;

class Fruit {

  private $name;
  private $origin;
  private $comestible;
  private $wiki;

  public function __construct($name, $origin, $comestible, $wiki) {
    $this->setName($name);
    $this->setOrigin($origin);
    $this->setComestible($comestible);
    $this->setWiki($wiki);
  }

  public function getName() { return $this->name; }
  public function getOrigin() { return $this->origin; }
  public function getComestible() { return $this->comestible; }
  public function getWiki() { return $this->wiki; }


  public function setName($name) {
    $this->name = $name;
    return $this->name;
  }
  public function setOrigin($origin) {
    $this->origin = $origin;
    return $this->origin;
  }
  public function setComestible($comestible) {
    $this->comestible = $comestible;
    return $this->comestible;
  }
  public function setWiki($wiki) {
    $this->wiki = $wiki;
    return $this->wiki;
  }

}
