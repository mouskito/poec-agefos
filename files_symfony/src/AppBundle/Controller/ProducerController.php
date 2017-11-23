<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use AppBundle\Entity\Producer;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * @Route("/producer")
 */
class ProducerController extends Controller
{
    /**
     * @Route("/index", name="producer_index")
     */
    public function indexAction()
    {
        $producers = $this->getDoctrine()
          ->getRepository(Producer::class)->findAll();

        return $this->render('AppBundle:Producer:index.html.twig', array(
            'producers' => $producers
        ));
    }

    /**
     * @Route("/add")
     */
    public function addAction(Request $request)
    {
        // Quand une méthode doit gérer une soumission
        // de formulaire, elle doit utiliser un objet Request

        // création d'un objet vide
        $producer = new Producer();
        // la méthode createFormBuilder permet de créer un formulaire
        // en pur PHP OO (pas de balise HTML)
        $form = $this->createFormBuilder($producer)
          ->add('name', TextType::class, array())
          ->add('email', TextType::class, array())
          ->add('logo', FileType::class, array('label' => 'Choisir un logo'))
          ->add('submit', SubmitType::class, array(
            'label' => 'Enregistrer',
          ))
          ->getForm();

        // handleRequest() établit la connexion entre
        // l'objet $form et l'objet $request
        $form->handleRequest($request);

        // méthode permettant de savoir si le formulaire a été envoyé
        // équivalent de $request->getMethod() == 'POST' lorqu'on utilise
        // l'objet Request $request

        // la méthode isValid est en relation avec les annotations
        // @Assert, elle vérifie l'ensemble des conditions de validation
        // définies par les annotations
        // && $form->isValid()
        if ($form->isSubmitted()) {
          // hydratation automatique grâce à getData()
          $producer = $form->getData();
          $file = $producer->getLogo(); // récupération de l'objet UploadedFile
          // placé dans la propriété logo du $producer
          $filename =
            'logo_' . strtolower($producer->getName()) . '.' . $file->guessExtension();

          // getParameter('key') récupère la valeur d'une clé définie dans
          // le fichier config.yml
          // move(dossier_de_destination, nom_du_fichier)
          $file->move($this->getParameter('dir_logo'), $filename);

          // mise à jour de la propriété logo de $producer
          $producer->setLogo($filename);


          //validation de données en PHP sans annotations
          // $str_len = strlen($producer->getName());
          // $min = 3;
          // $max = 10;
          // $cond1 = $str_len >= $min;
          // $cond2 = $str_len <= $max;
          // $total_cond = $cond1 && $cond2;
          // $message = "Le nom du producteur doit avoir";
          // $message .= " au moins " . $min . " caractères";
          // $message .= " et au plus " . $max . " caractères";
          //
          // if (!$total_cond) return new Response($message);

          // enregistrement en base de données
          $em = $this->getDoctrine()->getManager();
          $em->persist($producer);
          $em->flush();

          return $this->redirectToRoute('producer_index');
        }

        return $this->render('AppBundle:Producer:add.html.twig', array(
          'form' => $form->createView(),
          'message' => 'Simple texte',
          'color' => 'orange'
        ));
    }

    /**
     * @Route("/edit")
     */
    public function editAction()
    {
        return $this->render('AppBundle:Producer:edit.html.twig', array(
            // ...
        ));
    }

    /**
     * @Route("/delete")
     */
    public function deleteAction()
    {
        return $this->render('AppBundle:Producer:delete.html.twig', array(
            // ...
        ));
    }

    /**
     * @Route("/{id}", name="producer_details")
     */
    public function detailsAction($id)
    {
        $producer = $this->getDoctrine()
          ->getRepository(Producer::class)
          ->find($id);

        return $this->render('AppBundle:Producer:details.html.twig', array(
          'producer' => $producer
        ));
    }

}
