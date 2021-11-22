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
use App\Entity\File;
use App\Entity\OfferedService;
use App\Entity\Position;
use App\Entity\Project;
use App\Entity\Service;
use App\Entity\User;
use App\Repository\CollaborationRepository;
use App\Service\FileSystemService;
use App\Service\Serializer;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Security\Core\Security;


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
    private $repository;
    private $fileSystemService;

    public function __construct(EntityManagerInterface $em,Serializer $serializer, \Swift_Mailer $mailer, CollaborationRepository $collaborationRepository, FileSystemService $fileSystemService)
    {
        $this->fileSystemService = $fileSystemService;
        $this->serializer = $serializer;
        $this->em = $em;
        $this->mailer = $mailer;
        $this->repository = $collaborationRepository;
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
     * @Route("/get-paginated/{email}/{page}/{limit}")
     * @param $email
     * @param $page
     * @param $limit
     * @return Response
     */
    public function getPaginatedCollaborations($email, $page, $limit){
        $user = $this->em->getRepository(User::class)->findOneBy(['email'=> $email]);
        if($user){
            $collaborations = $this->repository->getUserCollaborationsPaginated($user, $page,$limit);
            $response  = $collaborations;
            $status = Response::HTTP_OK;
        }else{
            $response = "User not found";
            $status = Response::HTTP_NOT_FOUND;
        }


        return new Response($this->serializer->serialize($response, 'json'), $status);
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
            $rateType = json_decode($request->get('rateType'));
            $currency = json_decode($request->get('currency'));
            $ratesText = json_decode($request->get('ratesText'));
            $modality = json_decode($request->get('modality'));
            $mainBeneficiaries = json_decode($request->get('mainBeneficiaries'));
            $localBeneficiaries = json_decode($request->get('localBeneficiaries'));
            $country = json_decode($request->get('country'));
            $categoryId = $request->get('category');
            $contacts = json_decode($request->get('contacts'));
            $projectId = $request->get('project');
            $isService = json_decode($request->get('isService'));
            $localLanguageTitle = json_decode($request->get('localTitle'));
            $localLanguage = json_decode($request->get('language'));

            $localLanguageDescription = json_decode($request->get('localLanguageDescription'));
            $localLanguageShortDescription = json_decode($request->get('localLanguageShortDescription'));


            $positions = json_decode($request->get('positions'), true);


            $collaboration = new Collaboration();

            $collaboration->setUser($user);
            $collaboration->setTitle($title);
            $collaboration->setCountry($country);
            $collaboration->setShortDescription($shortDescription);
            $collaboration->setDescription($longDescription);

            $collaboration->setMainBeneficiaries($mainBeneficiaries);
            $collaboration->setLocalBeneficiaries($localBeneficiaries);
            $collaboration->setModality($modality);
            $collaboration->setRates($rates);
            $collaboration->setRateType($rateType);
            $collaboration->setRatesText($ratesText);
            $collaboration->setCurrency($currency);
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
            $collaboration->setStartDate($startDate);
            $collaboration->setEndDate($endDate);


            foreach ($positions as $position) {
                $newPosition = new Position();
                $service = $services->filter(function (Service $service) use ($position) {
                    return $service->getId() === intval($position["furniture"]);
                })->first();
                $newPosition->setService($service);
                $newPosition->setDescription($position["description"]);
                $newPosition->setLocalDescription($position["localDescription"]);
                $newPosition->setDeadline($position["deadline"]);


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
        $id = $request->get('id');
        $collaboration = $this->em->getRepository(Collaboration::class)->find($id);
        if($collaboration) {
            $title = json_decode($request->get('title'));
            $shortDescription = json_decode($request->get('shortDescription'));
            $longDescription = json_decode($request->get('description'));
            $startDate = json_decode($request->get('startDate'));
            $endDate = json_decode($request->get('endDate'));
            $categoryId = $request->get('category');
            $projectId = $request->get('project');
            $rates = json_decode($request->get('rates'));
            $rateType = json_decode($request->get('rateType'));
            $currency = json_decode($request->get('currency'));
            $ratesText = json_decode($request->get('ratesText'));
            $modality = json_decode($request->get('modality'));
            $mainBeneficiaries = json_decode($request->get('mainBeneficiaries'));
            $localBeneficiaries = json_decode($request->get('localBeneficiaries'));
            $contacts = json_decode($request->get('contacts'));
            $country = json_decode($request->get('country'));
            $localLanguageTitle = json_decode($request->get('localLanguageTitle'));
            $localLanguageDescription = json_decode($request->get('localLanguageDescription'));
            $localLanguageShortDescription = json_decode($request->get('localLanguageShortDescription'));


            $collaboration->setTitle($title);
            $collaboration->setStartDate($startDate);
            $collaboration->setEndDate($endDate);
            $collaboration->setShortDescription($shortDescription);
            $collaboration->setDescription($longDescription);
            $collaboration->setLocalLanguageTitle($localLanguageTitle);
            $collaboration->setLocalLanguageDescription($localLanguageDescription);
            $collaboration->setLocalLanguageShortDescription($localLanguageShortDescription);
            $collaboration->setRateType($rateType);
            $collaboration->setRatesText($ratesText);
            $collaboration->setCurrency($currency);

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
            $collaboration->setLocalBeneficiaries($localBeneficiaries);
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

        if($language!=="en"){
            $collaborations = $this->em->getRepository(Collaboration::class)->findBy(['language'=>$language]);
        }else{
            $collaborations = $this->repository->findAll();
        }
        shuffle($collaborations);


        $openRecords = array_filter($collaborations, function(Collaboration $collaboration){
            $today = new \DateTime();
            $format = "Y-m-d\TH:i:s.v\Z";

            $endDateS = $collaboration->getEndDate();

            if($endDateS){
                $endDate = \DateTime::createFromFormat($format, $endDateS);
                if($today> $endDate){
                    return false;
                }
            }
            return true;

        });
        $sentRecords = [];
        foreach($openRecords as $openRecord){
            $sentRecords[] = $openRecord;
        }

        $totalNumberCollaborations = sizeof($sentRecords);
        $finalSize = ($totalNumberCollaborations<5) ? $totalNumberCollaborations : 5;
        $finalCollaborations = [];
        for($i=0;  $i<$finalSize; $i++){
            $collaboration = $sentRecords[$i];
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


    /**
     * @Route("/getall")
     */
    public function getAll(Security $security){
        /**
         * @var User $user
         */
        $user = $security->getUser();

        $isAdmin = in_array("ROLE_ADMIN",$user->getRoles());
        if($isAdmin){
            $projects = $this->em->getRepository(Collaboration::class)->findAll();
            return new Response($this->serializer->serialize($projects,'json'));
        }
        $isArabicAdmin = in_array("ROLE_ARABIC_ADMIN",$user->getRoles());
        if($isArabicAdmin){
            $projects = $this->em->getRepository(Collaboration::class)->findBy(["language"=>"ar"]);
            return new Response($this->serializer->serialize($projects,'json'));
        }

        $isGreekAdmin = in_array("ROLE_GREEK_ADMIN",$user->getRoles());
        if($isGreekAdmin){
            $projects = $this->em->getRepository(Collaboration::class)->findBy(["language"=>"gr"]);
            return new Response($this->serializer->serialize($projects,'json'));
        }

        $isItaAdmin = in_array("ROLE_ITALIAN_ADMIN",$user->getRoles());
        if($isItaAdmin){
            $projects = $this->em->getRepository(Collaboration::class)->findBy(["language"=>"it"]);
            return new Response($this->serializer->serialize($projects,'json'));
        }

        $isEnglishAdmin = in_array("ROLE_ENGLISH_ADMIN",$user->getRoles());
        if($isEnglishAdmin){
            $projects = $this->em->getRepository(Collaboration::class)->findBy(["language"=>"en"]);
            return new Response($this->serializer->serialize($projects,'json'));
        }

        $projects =[];


        return new Response($this->serializer->serialize($projects,'json'));

    }


    /**
     * @Route("/searchfiltered")
     * @param Request $request
     * @return Response
     */
    public function getFiltered(Request $request){


        //REQUEST PARAMETERS
        $country = json_decode($request->get('country'));
        $language = $request->get('language');
        $services = json_decode($request->get('service'));
        $categories = json_decode($request->get('category'));
        $userMail = json_decode($request->get('user'));
        $from = json_decode($request->get('from'));
        $to = json_decode($request->get('to'));
        $deadline = new \DateTime($to);
        $checkbox = json_decode($request->get('radio'));

        $page = intval($request->get('page'));
        $limit = intval($request->get('limit'));


        //RELATIONS
        $user = $this->em->getRepository(User::class)->findOneBy(['email'=>$userMail]);
        $trueServices = $this->em->getRepository(Service::class)->findBy(['id'=>$services]);
        $trueCategories = $this->em->getRepository(Category::class)->findBy(['id'=>$categories]);


        $userCollaborationsIds = [];
        $userServiceIds = [];

        $arrayServicesIds = [];
        $userOfferedServicesIds = [];


        $projectFilters = []; $serviceFilters = [];
        if($country){
            $projectFilters['country'] = $country;
        }
        if($language && $language!=="en"){
            $projectFilters['language'] = $language;
        }
        if($categories){
            $projectFilters['category'] = $trueCategories;
        }
        if($user){
            $userCollaborationsIds = $user->getCollaborations()->map(function(Collaboration $collaboration){return $collaboration->getId();})->toArray();

            $userOfferedServicesIds = $user->getOfferedServicesRelations()->map(function(OfferedService $offeredService){return $offeredService->getId();})->toArray();
        }
        if($services){

            //ricerca con fornitura

            $positions = $this->getDoctrine()->getRepository(Position::class)->findBy(['service'=>$trueServices, 'isOpen'=>true]);

            $array_positions = [];
            foreach($positions as $position){
                $array_positions[] = $position;
            }

            $userServiceIds = array_unique(array_map(function(Position $position){
                return $position->getCollaboration()->getId();
            }, $array_positions));

            $offeredServices = $this->getDoctrine()->getRepository(OfferedService::class)->findBy(['service'=> $trueServices]);

            $arrayServicesIds = [];
            foreach($offeredServices as $offeredService){
                $arrayServicesIds[] = $offeredService->getId();
            }


        }



        $arrayId = array_unique(array_merge($userCollaborationsIds, $userServiceIds));

        $servicesId = array_diff($userOfferedServicesIds,$arrayServicesIds)
        ;
        if($services || $userMail){
            $projectFilters['id'] = $arrayId;
            $serviceFilters['id'] = $servicesId;
        }




        $offeredServices = $this->getDoctrine()
            ->getRepository(OfferedService::class)
            ->findBy($serviceFilters);

        $records = $this->getDoctrine()
            ->getRepository(Collaboration::class)
            ->findBy($projectFilters)
        ;


        $results = [];

        switch($checkbox){
            case "services":{
                $filteredRecords = array_filter($records, function(Collaboration $collaboration){
                    return $collaboration->getIsActive()===false;
                });
                $newRecords = [];
                foreach ($filteredRecords as $filteredRecord){
                    $newRecords[] = $filteredRecord;
                }
            }
                break;
            case "collaborations":{
                $filteredRecords = array_filter($records, function(Collaboration $collaboration){
                    return $collaboration->getIsActive()===true;
                });
                $newRecords = [];
                foreach ($filteredRecords as $filteredRecord){
                    $newRecords[] = $filteredRecord;
                }
            }
                break;
            default:{
                $newRecords = $records;
            }
                break;

        }

        if($to){
            $timeRecords = array_filter($newRecords, function(Collaboration $collaboration)use($deadline){
                $format = "Y-m-d\TH:i:s.v\Z";
                $endDateS = $collaboration->getEndDate();
                if($endDateS){
                    $endDate = \DateTime::createFromFormat($format, $endDateS);
                    return ($endDate >=$deadline);
                }else{
                    return true;
                }
            });
            $finalRecords = [];
            foreach($timeRecords as $timeRecord){
                $finalRecords[] = $timeRecord;
            }
        }else{
            $finalRecords = $newRecords;
        }

        //filter by date
        $openRecords = array_filter($finalRecords, function(Collaboration $collaboration){
            $today = new \DateTime();
            $format = "Y-m-d\TH:i:s.v\Z";

            $endDateS = $collaboration->getEndDate();

            if($endDateS){
                $endDate = \DateTime::createFromFormat($format, $endDateS);
                if($today> $endDate){
                    return false;
                }
            }
            return true;

        });

        $sentRecords = [];
        foreach($openRecords as $openRecord){
            $sentRecords[] = $openRecord;
        }


        $results["services"] = [];
        $results["servicesNumber"] = sizeOf($sentRecords);
        $results["projects"] = array_slice($sentRecords, $limit * ($page -1), $limit * $page);
        return new Response($this->serializer->serialize($results, 'json'));
    }

    /**
     * @Route("/logo")
     * @param Request $request
     * @return Response
     */
    public function updateLogo(Request $request){
        $id = json_decode($request->get('id'),true);
        $collaboration = $this->getDoctrine()->getManager()->getRepository(Collaboration::class)->find($id);
        $status = Response::HTTP_INTERNAL_SERVER_ERROR;
        $message = "Error";
        if($collaboration instanceof Collaboration){
            $collaborationId = $collaboration->getId();
            $uploadedFile = $request->files->get('file');
            $basePath = $request->getBasePath();

            $collaborationPath = $this->fileSystemService->getCollaborationFolderPath($collaborationId);
            $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
            $newFilename = $originalFilename.'-'.uniqid().'.'.$uploadedFile->guessExtension();
            $path = $this->fileSystemService->getCollaborationFolderWebPath($basePath, $collaborationId)."/".$newFilename;

            $uploadedFile->move(
                $collaborationPath,
                $newFilename
            );

            $file = new File();
            $file->setFilename($newFilename);
            $file->setOriginalFilename($originalFilename);
            $file->setExtension("png");
            $file->setIsDoc(false);
            $file->setUrl($path);
            $collaboration->setLogo($file);

            $this->getDoctrine()->getManager()->persist($file);
            $this->getDoctrine()->getManager()->persist($collaboration);
            $this->getDoctrine()->getManager()->flush();
            $status = Response::HTTP_OK;
            $message = null;

        }else{
            $status = Response::HTTP_BAD_REQUEST;
            $message = "Project Not found";

        }


        return new Response($message, $status);

    }


}
