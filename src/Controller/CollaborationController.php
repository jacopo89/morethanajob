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


/**
 * Class CollaborationController
 * @package App\Controller
 * @Route("/backend/collaborations")
 */
class CollaborationController extends AbstractController
{
    private $serializer;
    private $em;

    public function __construct(EntityManagerInterface $em,Serializer $serializer)
    {
        $this->serializer = $serializer;
        $this->em = $em;
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
            $longDescription = json_decode($request->get('longDescription'));
            $startDate = json_decode($request->get('startDate'));
            $endDate = json_decode($request->get('endDate'));
            $rates = json_decode($request->get('rates'));
            $modality = json_decode($request->get('modality'));
            $mainBeneficiaries = json_decode($request->get('mainBeneficiaries'));
            $country = json_decode($request->get('country'));
            $categoryId = $request->get('category');
            $projectId = $request->get('project');

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
                    return $service->getId() === intval($position["service"]);
                })->first();
                $newPosition->setService($service);
                $newPosition->setDescription($position["shortDescription"]);
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
        $id = $request->get('id');
        $collaboration = $this->em->getRepository(Collaboration::class)->find($id);
        if($collaboration) {
            $shortDescription = json_decode($request->get('shortDescription'));
            $longDescription = json_decode($request->get('longDescription'));
            $startDate = json_decode($request->get('startTime'));
            $endDate = json_decode($request->get('endTime'));
            $categoryId = $request->get('category');
            $projectId = $request->get('project');

            $collaboration->setShortDescription($shortDescription);
            $collaboration->setDescription($longDescription);
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

            $this->em->persist($collaboration);
            $this->em->flush();

        }


        return new Response($this->serializer->serialize($collaboration->getId(), 'json'));
    }


    /**
     * @Route("/getrandom", name="get_random_collaborations")
     * @return Response
     */
    public function getRandom(){

        $collaborations = $this->em->getRepository(Collaboration::class)->findAll();
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

}