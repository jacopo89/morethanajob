<?php
/**
 * Created by PhpStorm.
 * User: jacop
 * Date: 21-May-20
 * Time: 9:08 AM
 */

namespace App\Controller;


use App\Entity\User;
use App\Service\Serializer;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class AdministrationController
 * @package App\Controller
 * @Route("/administration")
 */
class AdministrationController extends AbstractController
{
    private $serializer;
    private $em;
    public function __construct(Serializer $serializer, EntityManagerInterface $em)
    {
        $this->serializer = $serializer;
        $this->em = $em;
    }


    /**
     * @Route("/getusers")
     * @Method(methods={"GET"})
     */
    public function getUsers(){
        $users = $this->em->getRepository(User::class)->findAll();
        return new Response($this->serializer->serialize($users, 'json'), Response::HTTP_OK);
    }

    /**
     * @Route("/changerole")
     * @Method(methods={"POST"})
     * @param Request $request
     * @return Response
     */
    public function changeRole(Request $request){
        $email = $request->get('email');
        $roles = json_decode($request->get('roles'),true);
        $status = Response::HTTP_BAD_REQUEST;

        $user = $this->em->getRepository(User::class)->findOneBy(['email'=>$email]);
        if($user){
            $user->setRoles($roles);
            $this->em->persist($user);
            $this->em->flush();

            $status = Response::HTTP_OK;
        }

        return new Response($this->serializer->serialize($user, 'json'), $status);
    }
}