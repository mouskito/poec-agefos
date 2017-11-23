<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function homeAction(Request $request)
    {
        $v1 = "cghfdjfh";
        $v2 = "tata";
        if ($v1 == "toto") {
          //echo 'toto';
        } else {
          //echo 'tata';
        }
        return $this->render('default/index.html.twig');
    }

}
