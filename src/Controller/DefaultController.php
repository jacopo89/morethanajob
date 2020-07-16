<?php
/**
 * Created by PhpStorm.
 * User: jacop
 * Date: 23-Feb-20
 * Time: 1:44 AM
 */

namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{

    /**
     * @Route("/", name="base")
     */
    public function basic()
    {
        return $this->redirectToRoute('default/base.html.twig');
    }

    /**
     * @Route("/app/{route}", name="home", requirements={"route"=".+"})
     */
    public function index()
    {
        return $this->render('default/base.html.twig');
    }

    /**
     * @Route("/logout")
     */
    public function logout(){
        return $this->redirectToRoute("home",['route'=>"immediatelogout"]);
    }

}