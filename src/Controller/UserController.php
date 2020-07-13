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
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


/**
 * Class UserController
 * @package App\Controller
 * @Route("/users")
 */
class UserController extends AbstractController
{
    private $serializer;
    public function __construct(Serializer $serializer)
    {
        $this->serializer = $serializer;
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
        return new Response($this->serializer->serialize($userToSend, 'json'), Response::HTTP_OK);
    }


}