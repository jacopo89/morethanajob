<?php
/**
 * Created by PhpStorm.
 * User: jacop
 * Date: 23-Feb-20
 * Time: 1:44 AM
 */

namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class DefaultController extends AbstractController
{


    /**
     * @Route("/{route}", name="home", requirements={"route"="^(?!backend|api).*$"}, priority="0")
     */
    public function index()
    {
        return $this->render('default/base.html.twig');
    }

}