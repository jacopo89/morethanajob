<?php
/**
 * Created by PhpStorm.
 * User: jacop
 * Date: 01-Sep-20
 * Time: 11:02 AM
 */

namespace App\Controller;


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

        $trueServices = $this->em->getRepository(Service::class)->findBy(['id'=>$services]);


        $filters = [];
        if($country){
            $filters['country'] = $country;
        }

        $userIds = [];

        if($services){

            //ricerca con fornitura
            $offeredServices = $this->getDoctrine()->getRepository(OfferedService::class)->findBy(['service'=> $trueServices]);
            foreach($offeredServices as $offeredService){
                $userIds[] = $offeredService->getUser()->getId();
            }

        }

        $uniqueUserIds = array_unique($userIds);
        if($uniqueUserIds){
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