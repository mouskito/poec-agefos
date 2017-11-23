<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use AppBundle\Entity\Retailor;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;

/**
 * @Route("/retailor")
 */
class RetailorController extends Controller
{
    /**
     * @Route("/index")
     */
    public function indexAction()
    {
        return $this->render('AppBundle:Retailor:index.html.twig', array(
            // ...
        ));
    }

    /**
     * @Route("/add")
     */
    public function addAction(Request $request)
    {
        $retailor = new Retailor();
        $form = $this->createFormBuilder($retailor)
          ->add('name', TextType::class, array())
          ->add('fruit', EntityType::class, array(
            'class' => 'AppBundle:Fruit',
            'choice_label' => 'name'
          ))
          ->add('submit', SubmitType::class, array(
            'label' => 'Enregistrer')
          )
          ->getForm();

        $form->handleRequest($request);

        if ($form->isSubmitted()) {
          $retailor = $form->getData();
          $em = $this->getDoctrine()->getManager();
          $em->persist($retailor);
          $em->flush();
        }

        return $this->render('AppBundle:Retailor:add.html.twig', array(
          'form' => $form->createView()
        ));
    }

}
