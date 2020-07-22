<?php
/**
 * Created by PhpStorm.
 * User: jacop
 * Date: 05-May-20
 * Time: 5:38 PM
 */

namespace App\Controller;


use App\Entity\User;
use App\Entity\UserNotificationUrl;
use App\Service\Serializer;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class UserController
 * @package App\Controller
 * @Route("/backend/notifications")
 */
class NotificationController extends AbstractController
{
    private $serializer;
    private $em;
    public function __construct(Serializer $serializer, EntityManagerInterface $em)
    {
        $this->serializer = $serializer;
        $this->em = $em;
    }

    /**
     * @Route("/setNotificationUrl")
     * @param Request $request
     * @return Response
     */
    public function storeNotificationUrl(Request $request){
        $email = $request->get('email');
        $user = $this->em->getRepository(User::class)->findOneBy(['email'=>$email]);
        if($user){
            $userSubscription = json_decode($request->get('userSubscription'),true);

            dump($userSubscription);
            $userNotificationUrl = new UserNotificationUrl();
            $userNotificationUrl->setNotificationUrl($userSubscription["endpoint"]);
            $userNotificationUrl->setPublicKey($userSubscription["keys"]["auth"]);
            $userNotificationUrl->setUser($user);

            $this->em->persist($userNotificationUrl);
            $this->em->flush();
        }
        return new Response($this->serializer->serialize($user, 'json'), Response::HTTP_OK);
    }

    /**
     * @Route("/forceNotification")
     * @param Request $request
     * @return Response
     */
    public function forceNotification(Request $request){
        $email = $request->get('email');
        $user = $this->em->getRepository(User::class)->findOneBy(['email'=>$email]);
        if($user){
            $notificationUrls = $user->getUserNotificationUrls();
            foreach($notificationUrls as $notificationUrl){
                $this->makeApiRequest($notificationUrl->getNotificationUrl(), $notificationUrl->getPublicKey());
            }

        }
        return new Response($this->serializer->serialize($user, 'json'), Response::HTTP_OK);
    }

    private function makeApiRequest($url, $publicKey, $options = [])
    {
        $crypted = "ciao";
        $httpClient = HttpClient::create([
            'headers' => [
                'Content-Length' => 0,
                'Authorization' => 'key='.$publicKey,
                'TTL' => '60'
            ],
        ]);
        $response = $httpClient->request("GET", $url, $options);
        var_dump($response);
        return $response;
    }

}