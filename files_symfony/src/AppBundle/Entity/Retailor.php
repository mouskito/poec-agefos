<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Retailor
 *
 * @ORM\Table(name="retailor")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\RetailorRepository")
 */
class Retailor
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
     * @ORM\Column(name="name", type="string", length=255)
     */
    private $name;

    /**
    * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Fruit", inversedBy="retailors")
    * @ORM\JoinColumn(name="fruit_id", referencedColumnName="id")
    */
    private $fruit;


    /**
     * Get id
     * 	fruit_id
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set name
     *
     * @param string $name
     *
     * @return Retailor
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
     * Set fruit
     *
     * @param \AppBundle\Entity\Fruit $fruit
     *
     * @return Retailor
     */
    public function setFruit(\AppBundle\Entity\Fruit $fruit = null)
    {
        $this->fruit = $fruit;

        return $this;
    }

    /**
     * Get fruit
     *
     * @return \AppBundle\Entity\Fruit
     */
    public function getFruit()
    {
        return $this->fruit;
    }
}
