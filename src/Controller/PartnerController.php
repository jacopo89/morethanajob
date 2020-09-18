<?php
/**
 * Created by PhpStorm.
 * User: jacop
 * Date: 01-Sep-20
 * Time: 11:02 AM
 */

namespace App\Controller;


use App\Entity\Category;
use App\Entity\Collaboration;
use App\Entity\OfferedService;
use App\Entity\Service;
use App\Entity\User;
use App\Service\FileSystemService;
use App\Service\Serializer;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class PartnerController
 * @package App\Controller
 * @Route("/backend/partners")
 */
class PartnerController extends AbstractController
{

    private $em;
    private $serializer;
    private $fileSystemService;

    public function __construct(EntityManagerInterface $em, Serializer $serializer, FileSystemService $fileSystemService)
    {
        $this->em = $em;
        $this->serializer = $serializer;
        $this->fileSystemService = $fileSystemService;
    }

    /**
     * @Route("/searchfiltered")
     * @param Request $request
     * @return Response
     */
    public function getFiltered(Request $request){

        $country = json_decode($request->get('country'));
        $services = json_decode($request->get('expertise'));
        $categories = json_decode($request->get('category'));



        $trueServices = $this->em->getRepository(Service::class)->findBy(['id'=>$services]);
        $trueCategories = $this->em->getRepository(Category::class)->findBy(['id'=>$categories]);


        $filters = [];
        if($country){
            $filters['country'] = $country;
        }

        $collaborationUsersIds = [];
        $serviceUserIds = [];
        $uniqueUserIds = [];

        if($services){
            //ricerca con fornitura
            $offeredServices = $this->getDoctrine()->getRepository(OfferedService::class)->findBy(['service'=> $trueServices]);
            foreach($offeredServices as $offeredService){
                $serviceUserIds[] = $offeredService->getUser()->getId();
            }
            $uniqueUserIds = array_unique($serviceUserIds);

        }
        if($categories){
            $collaborations = $this->getDoctrine()->getRepository(Collaboration::class)->findBy(['category'=>$trueCategories]);
            foreach($collaborations as $collaboration){
                $collaborationUsersIds[] = $collaboration->getUser()->getId();
            }
            $uniqueUserIds = array_unique($collaborationUsersIds);
        }

        if($services && $categories){
            $uniqueServiceUserIds = array_unique($serviceUserIds);

            $uniqueCollaborationUserIds = array_unique($collaborationUsersIds);
            $uniqueUserIds = array_intersect($uniqueServiceUserIds,$uniqueCollaborationUserIds);

        }

        if($services || $categories){
            $filters['id'] = $uniqueUserIds;
        }

        $users = $this->em->getRepository(User::class)->findBy($filters);

        $results = [];
        foreach ($users as $user){
            $results[] = $user;
        }

        return new Response($this->serializer->serialize($results, 'json'));
    }

}