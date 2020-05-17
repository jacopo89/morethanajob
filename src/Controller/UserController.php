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
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

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
     * @Route("/get/{email}")
     * @param User $user
     * @return Response
     */
    public function getUserInfo(User $user){
        return new Response($this->serializer->serialize($user, 'json'), Response::HTTP_OK);
    }


}