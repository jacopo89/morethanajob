<?php
/**
 * Created by PhpStorm.
 * User: jacop
 * Date: 10-Jul-20
 * Time: 11:51 AM
 */

namespace App\Controller;


use App\Entity\Category;
use App\Entity\Collaboration;
use App\Entity\Position;
use App\Entity\Project;
use App\Entity\Service;
use App\Entity\User;
use App\Service\Serializer;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;


/**
 * Class CollaborationController
 * @package App\Controller
 * @Route("/backend/collaborations")
 */
class CollaborationController extends AbstractController
{
    private $serializer;
    private $em;
    private $mailer;

    public function __construct(EntityManagerInterface $em,Serializer $serializer, \Swift_Mailer $mailer)
    {
        $this->serializer = $serializer;
        $this->em = $em;
        $this->mailer = $mailer;
    }


    /**
     * @Route("/get/{email}")
     * @param User $user
     * @return Response
     */
    public function getCollaborations(User $user){
        $collaborations = $user->getActiveCollaborations();
        $collaborationsArray = [];
        foreach($collaborations as $collaboration){
            $collaborationsArray[] = $collaboration;
        }

        return new Response($this->serializer->serialize($collaborationsArray, 'json'), Response::HTTP_OK);
    }

    /**
     * @Route("/getservices/{email}")
     * @param User $user
     * @return Response
     */
    public function getServices(User $user){
        $collaborations = $user->getServices();
        $collaborationsArray = [];
        foreach($collaborations as $collaboration){
            $collaborationsArray[] = $collaboration;
        }

        return new Response($this->serializer->serialize($collaborationsArray, 'json'), Response::HTTP_OK);
    }



    /**
     * @Route("/getById/{id}")
     * @param Collaboration $collaboration
     * @return Response
     */
    public function getCollaboration(Collaboration $collaboration){
        return new Response($this->serializer->serialize($collaboration, 'json'), Response::HTTP_OK);
    }

    /**
     * @Route("/new")
     * @param Request $request
     * @return Response
     */
    public function newCollaboration(Request $request){
        $services = new ArrayCollection($this->em->getRepository(Service::class)->findAll());

        $email = $request->get('email');
        $user = $this->em->getRepository(User::class)->findOneBy(['email'=>$email]);
        if($user) {
            $title = json_decode($request->get('title'));
            $shortDescription = json_decode($request->get('shortDescription'));
            $longDescription = json_decode($request->get('description'));
            $startDate = json_decode($request->get('startDate'));
            $endDate = json_decode($request->get('endDate'));
            $rates = json_decode($request->get('rates'));
            $modality = json_decode($request->get('modality'));
            $mainBeneficiaries = json_decode($request->get('mainBeneficiaries'));
            $country = json_decode($request->get('country'));
            $categoryId = $request->get('category');
            $contacts = json_decode($request->get('contacts'));
            $projectId = $request->get('project');
            $isService = json_decode($request->get('isService'));
            $localLanguageTitle = json_decode($request->get('localTitle'));
            $localLanguage = json_decode($request->get('language'));
            $localLanguageDescription = json_decode($request->get('localDescription'));
            $localLanguageShortDescription = json_decode($request->get('localShortDescription'));


            $positions = json_decode($request->get('positions'), true);


            $collaboration = new Collaboration();

            $collaboration->setUser($user);
            $collaboration->setTitle($title);
            $collaboration->setCountry($country);
            $collaboration->setShortDescription($shortDescription);
            $collaboration->setDescription($longDescription);

            $collaboration->setMainBeneficiaries($mainBeneficiaries);
            $collaboration->setModality($modality);
            $collaboration->setRates($rates);
            $collaboration->setLocalLanguageTitle($localLanguageTitle);
            $collaboration->setLocalLanguageDescription($localLanguageDescription);
            $collaboration->setLocalLanguage($localLanguage);
            $collaboration->setLanguage($localLanguage);
            $collaboration->setLocalLanguageShortDescription($localLanguageShortDescription);

            $collaboration->setIsCollaboration(!$isService);
            $collaboration->setContacts($contacts);

            if($categoryId) {
                $category = $this->em->getRepository(Category::class)->find($categoryId);
                if($category){
                    $collaboration->setCategory($category);
                }
            }
            if($projectId) {
                $project = $this->em->getRepository(Project::class)->find($projectId);
                if($project){
                    $collaboration->setProject($project);
                }
            }
            $collaboration->setStartDate(new \DateTime($startDate));
            $collaboration->setEndDate(new \DateTime($endDate));


            foreach ($positions as $position) {
                $newPosition = new Position();
                $service = $services->filter(function (Service $service) use ($position) {
                    return $service->getId() === intval($position["furniture"]);
                })->first();
                $newPosition->setService($service);
                $newPosition->setDescription($position["description"]);
                $newPosition->setDeadline(new \DateTime($position["deadline"]));


                $newPosition->setIsOpen(true);
                $newPosition->setCollaboration($collaboration);
                $collaboration->addPosition($newPosition);

            }

            $this->em->persist($collaboration);
            $this->em->flush();

        }



        return new Response($this->serializer->serialize($collaboration->getId(), 'json'));
    }


    /**
     * @Route("/edit")
     * @param Request $request
     * @return Response
     */
    public function editCollaboration(Request $request){
        $services = new ArrayCollection($this->em->getRepository(Service::class)->findAll());
        $id = $request->get('id');
        $collaboration = $this->em->getRepository(Collaboration::class)->find($id);
        if($collaboration) {
            $shortDescription = json_decode($request->get('shortDescription'));
            $longDescription = json_decode($request->get('description'));
            $startDate = json_decode($request->get('startDate'));
            $endDate = json_decode($request->get('endDate'));
            $categoryId = $request->get('category');
            $projectId = $request->get('project');
            $rates = json_decode($request->get('rates'));
            $modality = json_decode($request->get('modality'));
            $mainBeneficiaries = json_decode($request->get('mainBeneficiaries'));
            $contacts = json_decode($request->get('contacts'));
            $country = json_decode($request->get('country'));
            $localLanguageTitle = json_decode($request->get('localLanguageTitle'));
            $localLanguageDescription = json_decode($request->get('localLanguageDescription'));
            $localLanguageShortDescription = json_decode($request->get('localShortDescription'));

            var_dump($endDate);
            $newEndDate = new \DateTime();
            $newEndDate->setTimestamp($endDate*1000);
            $collaboration->setEndDate($newEndDate);
            $collaboration->setShortDescription($shortDescription);
            $collaboration->setDescription($longDescription);
            $collaboration->setLocalLanguageTitle($localLanguageTitle);
            $collaboration->setLocalLanguageDescription($localLanguageDescription);
            $collaboration->setLocalLanguageShortDescription($localLanguageShortDescription);

            if($categoryId) {
                $category = $this->em->getRepository(Category::class)->find($categoryId);
                if($category){
                    $collaboration->setCategory($category);
                }
            }
            if($projectId) {
                $project = $this->em->getRepository(Project::class)->find($projectId);
                if($project){
                    $collaboration->setProject($project);
                }
            }
            //$collaboration->setStartDate(new \DateTime($startDate));
            //$collaboration->setEndDate(new \DateTime($endDate));
            $collaboration->setRates($rates);
            $collaboration->setModality($modality);
            $collaboration->setMainBeneficiaries($mainBeneficiaries);
            $collaboration->setCountry($country);
            $collaboration->setContacts($contacts);


            $this->em->persist($collaboration);
            $this->em->flush();

        }


        return new Response($this->serializer->serialize($collaboration->getId(), 'json'));
    }


    /**
     * @Route("/getrandom", name="get_random_collaborations")
     * @param Request $request
     * @return Response
     */
    public function getRandom(Request $request){
        $language = $request->get('language');

        $collaborations = $this->em->getRepository(Collaboration::class)->findBy(['language'=>$language]);
        shuffle($collaborations);

        $totalNumberCollaborations = sizeof($collaborations);
        $finalSize = ($totalNumberCollaborations<5) ? $totalNumberCollaborations : 5;
        $finalCollaborations = [];
        for($i=0;  $i<$finalSize; $i++){
            $collaboration = $collaborations[$i];
            $finalCollaborations[] = $collaboration;
        }


        return new Response($this->serializer->serialize($finalCollaborations, 'json'), Response::HTTP_OK);
    }

    /**
     * @Route("/delete/{id}", methods={"DELETE"})
     * @param Collaboration $collaboration
     * @return Response
     */
    public function deleteCollaboration(Collaboration $collaboration){

        $this->em->remove($collaboration);
        $this->em->flush();


        return new Response(null, Response::HTTP_OK);
    }


    /**
     * @Route("/sendmessage", methods={"POST"})
     * @param Request $request
     * @return Response
     */
    public function sendMessage(Request $request){

        $emailSender = $request->get('emailSender');
        $userSender = json_decode($request->get('userSender'),true);
        $profileName = $userSender["profileName"];

        $emailReceiver = $request->get('emailReceiver');
        $body = $request->get('message');


        $message = (new \Swift_Message('Service Information'))
            ->setFrom($emailSender)
            ->setTo($emailReceiver)
            ->setBody(
                $this->renderView(
                // templates/emails/registration.html.twig
                    'emails/main/servicemessage.html.twig',
                    ['message' => $body,
                        'sender'=> $emailSender,
                        'profileName'=>$profileName]
                ),
                'text/html'
            )
        ;


        try {
            $mailResponse = $this->mailer->send($message);
            $response = "sent";
                $status = Response::HTTP_OK;

        } catch (TransportExceptionInterface $e) {
              $status = Response::HTTP_INTERNAL_SERVER_ERROR;
              $response = $e->getMessage();
            // some error prevented the email sending; display an
            // error message or try to resend the messag
        }




        return new Response($response, $status);
    }

}