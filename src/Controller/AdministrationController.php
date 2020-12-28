<?php
/**
 * Created by PhpStorm.
 * User: jacop
 * Date: 21-May-20
 * Time: 9:08 AM
 */

namespace App\Controller;


use App\Entity\User;
use App\Repository\CollaborationRepository;
use App\Repository\ProjectRepository;
use App\Repository\UserRepository;
use App\Service\Serializer;
use Doctrine\ORM\EntityManagerInterface;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AdministrationController
 * @package App\Controller
 * @Route("/backend/administration")
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
     * @Route("/getusers", methods={"GET"})
     */
    public function getUsers(){
        $users = $this->em->getRepository(User::class)->findAll();
        return new Response($this->serializer->serialize($users, 'json'), Response::HTTP_OK);
    }

    /**
     * @Route("/changerole", methods={"POST"})
     * @param Request $request
     * @return Response
     */
    public function changeRole(Request $request){
        $email = $request->get('email');
        $isAdmin = $request->get('isAdmin');
        $status = Response::HTTP_BAD_REQUEST;

        $user = $this->em->getRepository(User::class)->findOneBy(['email'=>$email]);
        if($user){
            $roles =  $user->getRoles();
            if($isAdmin){
               $roles[] = "ROLE_ADMIN";
            }else{
                if(in_array("ROLE_ADMIN", $roles)){
                    //TODO va rimosso
                }
            }
            $user->setRoles($roles);
            $this->em->persist($user);
            $this->em->flush();

            $status = Response::HTTP_OK;
        }

        return new Response($this->serializer->serialize($user, 'json'), $status);
    }

    /**
     * @param CollaborationRepository $collaborationRepository
     * @param ProjectRepository $projectRepository
     * @param UserRepository $userRepository
     * @return Response
     * @Route("/statistics")
     */
    public function getStatistics(CollaborationRepository $collaborationRepository, ProjectRepository $projectRepository, UserRepository $userRepository){
        return new Response(json_encode([
            "users" => sizeof($userRepository->findAll()),
            "projects" => sizeof($projectRepository->findAll()),
            "services" => sizeof($collaborationRepository->getAllServices()),
            "collaborations" => sizeof($collaborationRepository->getAllCollaborations())
        ]));
    }
}