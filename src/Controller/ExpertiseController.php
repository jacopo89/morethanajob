<?php
/**
 * Created by PhpStorm.
 * User: jacop
 * Date: 10/9/2020
 * Time: 7:00 PM
 */

namespace App\Controller;


use App\Entity\Service;
use App\Service\FileSystemService;
use App\Service\Serializer;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class ExpertiseController
 * @package App\Controller
 * @Route("/backend/expertise")
 */
class ExpertiseController
{
    private $serializer;
    private $em;
    private $fileSystemService;

    public function __construct(Serializer $serializer, EntityManagerInterface $em, FileSystemService $fileSystemService)
    {
        $this->serializer = $serializer;
        $this->em = $em;
        $this->fileSystemService = $fileSystemService;
    }


    /**
     * @param Request $request
     * @return Response
     * @Route("/add")
     */
    public function add(Request $request){
        $id = $request->get('parentId');
        $value = $request->get('value');
        $en = $request->get('en') ?? $value;
        $it = $request->get('it') ?? $value;
        $ar = $request->get('ar') ?? $value;
        $gr = $request->get('gr') ?? $value;
        $categoryParent = $this->em->getRepository(Service::class)->find($id);


        $category = new Service();
        $category->setName($value);
        $category->setAr($ar);
        $category->setEn($en);
        $category->setGr($gr);
        $category->setIt($it);


        if($categoryParent){
            $category->setParentService($categoryParent);
        }else{
            $category->setParentService(null);
        }
        $this->em->persist($category);
        $this->em->flush();
        $status = Response::HTTP_OK;


        return new Response(null, $status);
    }


    /**
     * @param Service $category
     * @return Response
     * @Route("/delete/{id}")
     */
    public function remove(Service $category){
        $this->em->remove($category);
        $this->em->flush();
        return new Response(null, Response::HTTP_OK);
    }
}