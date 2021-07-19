<?php
/**
 * Created by PhpStorm.
 * User: jacop
 * Date: 05-May-20
 * Time: 5:38 PM
 */

namespace App\Controller;


use App\Entity\User;
use App\Service\Serializer;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


/**
 * Class UserController
 * @package App\Controller
 * @Route("/backend/users")
 */
class UserController extends AbstractController
{
    private $serializer;
    private $em;
    public function __construct(Serializer $serializer, EntityManagerInterface $em)
    {
        $this->serializer = $serializer;
        $this->em = $em;
    }

    /**
     * @Route("/get/{profileName}")
     * @param User $user
     * @return Response
     */
    public function getUserInfo(User $user){
        $userToSend["email"] = $user->getEmail();
        $userToSend["roles"] = $user->getRoles();
        $userToSend["name"] = $user->getName();
        $userToSend["country"] = $user->getCountry();
        $userToSend["description"] = $user->getDescription();

        $userToSend["website"] = $user->getWebsite();
        $userToSend["address"] = $user->getAddress();
        $userToSend["telephone"] = $user->getTelephone();
        $userToSend["language"] = $user->getLanguage();
        $userToSend["profileName"] = $user->getProfileName();
        $userToSend["facebook"] = $user->getFacebook();
        $userToSend["linkedin"] = $user->getLinkedin();
        $userToSend["twitter"] = $user->getTwitter();

        $userToSend["coverPicture"] = $user->getCoverPicture();
        $userToSend["profilePicture"] = $user->getProfilePicture();
        $userToSend["files"] = $user->getDocFiles();
        $userToSend["projectsNumber"] = $user->getAllProjects()->count();
        $userToSend["expertiseNumber"] = $user->getOfferedServicesRelations()->count();
        $userToSend["serviceNumber"] = $user->getServices()->count();
        $userToSend["collaborationNumber"] = $user->getActiveCollaborations()->count();
        $userToSend["localLanguageDescription"] = $user->getLocalLanguageDescription();


        return new Response($this->serializer->serialize($userToSend, 'json'), Response::HTTP_OK);
    }

    /**
     * @Route("/getByMail/{email}")
     * @param User $user
     * @return Response
     */
    public function getUserInfoByEmail(User $user){
        $userToSend["email"] = $user->getEmail();
        $userToSend["roles"] = $user->getRoles();
        $userToSend["name"] = $user->getName();
        $userToSend["description"] = $user->getDescription();
        $userToSend["coverPicture"] = $user->getCoverPicture();
        $userToSend["website"] = $user->getWebsite();
        $userToSend["address"] = $user->getAddress();
        $userToSend["telephone"] = $user->getTelephone();
        $userToSend["language"] = $user->getLanguage();
        $userToSend["facebook"] = $user->getFacebook();
        $userToSend["linkedin"] = $user->getLinkedin();
        $userToSend["twitter"] = $user->getTwitter();
        $userToSend["profileName"] = $user->getProfileName();
        $userToSend["profilePicture"] = $user->getProfilePicture();
        $userToSend["files"] = $user->getDocFiles();
        $userToSend["projectsNumber"] = $user->getAllProjects()->count();
        $userToSend["expertiseNumber"] = $user->getOfferedServicesRelations()->count();
        $userToSend["serviceNumber"] = $user->getServices()->count();
        $userToSend["collaborationNumber"] = $user->getActiveCollaborations()->count();
        $userToSend["localLanguageDescription"] = $user->getLocalLanguageDescription();
        $userToSend["country"] = $user->getCountry();

        return new Response($this->serializer->serialize($userToSend, 'json'), Response::HTTP_OK);
    }

    /**
     * @Route("/getrandom", name="get_random")
     * @return Response
     */
    public function getRandom(){

        $users = $this->em->getRepository(User::class)->findAll();
        shuffle($users);

        $totalNumberUsers = sizeof($users);
        $finalSize = ($totalNumberUsers<5) ? $totalNumberUsers : 5;
        $finalUsers = [];
        for($i=0;  $i<$finalSize; $i++){
            $user = $users[$i];
            $userToSend["email"] = $user->getEmail();
            $userToSend["roles"] = $user->getRoles();
            $userToSend["name"] = $user->getName();
            $userToSend["description"] = $user->getDescription();
            $userToSend["coverPicture"] = $user->getCoverPicture();
            $userToSend["website"] = $user->getWebsite();
            $userToSend["address"] = $user->getAddress();
            $userToSend["telephone"] = $user->getTelephone();
            $userToSend["language"] = $user->getLanguage();
            $userToSend["facebook"] = $user->getFacebook();
            $userToSend["linkedin"] = $user->getLinkedin();
            $userToSend["twitter"] = $user->getTwitter();
            $userToSend["profileName"] = $user->getProfileName();
            $userToSend["profilePicture"] = $user->getProfilePicture();
            $userToSend["files"] = $user->getDocFiles();

            $finalUsers[] = $userToSend;
        }


        return new Response($this->serializer->serialize($finalUsers, 'json'), Response::HTTP_OK);
    }

    /**
     * @Route("/remove/{id}")
     * @param User $user
     * @return Response
     */
    public function removeUser(User $user){
        $this->em->remove($user);
        $this->em->flush();

        return new Response(null,200);
    }



}