<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * Fruit
 *
 * @ORM\Table(name="fruit")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\FruitRepository")
 */
class Fruit
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=100)
     * @Assert\NotBlank()
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="origin", type="string", length=255)
     */
    private $origin;

    /**
     * @var bool
     *
     * @ORM\Column(name="comestible", type="boolean")
     */
    private $comestible;

    /**
     *
     * @ORM\OneToOne(targetEntity="AppBundle\Entity\Producer")
     *
     */
    private $producer;

    /**
     *
     * @ORM\OneToMany(targetEntity="AppBundle\Entity\Retailor", mappedBy="fruit")
     *
     */
    private $retailors;

    /**
     * @ORM\ManyToMany(targetEntity="AppBundle\Entity\Category")
    */
    private $category;

    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set name
     *AppBundle\Entity\Producer
     * @param string $name
     *
     * @return Fruit
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set origin
     *
     * @param string $origin
     *
     * @return Fruit
     */
    public function setOrigin($origin)
    {
        $this->origin = $origin;
        return $this;
    }

    /**  private $producer;
     * Get origin
     *
     * @return string
     */
    public function getOrigin()
    {
        return $this->origin;
    }

    /**
     * Set comestible
     *
     * @param boolean $comestible
     *
     * @return Fruit
     */
    public function setComestible($comestible)
    {
        $this->comestible = $comestible;

        return $this;
    }

    /**
     * Get comestible
     *
     * @return bool
     */
    public function getComestible()
    {
        return $this->comestible;
    }

    /**
     * Set producer
     *
     * @param \AppBundle\Entity\Producer $producer
     *
     * @return Fruit
     */
    public function setProducer(\AppBundle\Entity\Producer $producer = null)
    {
        $this->producer = $producer;

        return $this;
    }

    /**
     * Get producer
     *
     * @return \AppBundle\Entity\Producer
     */
    public function getProducer()
    {
        return $this->producer;
    }
    /**
     * Constructor
     */
    public function __construct()
    {
        $this->retailors = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Add retailor
     *
     * @param \AppBundle\Entity\Retailor $retailor
     *
     * @return Fruit
     */
    public function addRetailor(\AppBundle\Entity\Retailor $retailor)
    {
        $this->retailors[] = $retailor;

        return $this;
    }

    /**
     * Remove retailor
     *
     * @param \AppBundle\Entity\Retailor $retailor
     */
    public function removeRetailor(\AppBundle\Entity\Retailor $retailor)
    {
        $this->retailors->removeElement($retailor);
    }

    /**
     * Get retailors
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getRetailors()
    {
        return $this->retailors;
    }

    /**
     * Add category
     *
     * @param \AppBundle\Entity\Category $category
     *
     * @return Fruit
     */
    public function addCategory(\AppBundle\Entity\Category $category)
    {
        $this->category[] = $category;

        return $this;
    }

    /**
     * Remove category
     *
     * @param \AppBundle\Entity\Category $category
     */
    public function removeCategory(\AppBundle\Entity\Category $category)
    {
        $this->category->removeElement($category);
    }

    /**
     * Get category
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getCategory()
    {
        return $this->category;
    }
}
