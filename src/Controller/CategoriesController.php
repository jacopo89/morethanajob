<?php
/**
 * Created by PhpStorm.
 * User: jacop
 * Date: 10-Jul-20
 * Time: 4:32 PM
 */

namespace App\Controller;


use App\Entity\Category;
use App\Entity\File;
use App\Service\FileSystemService;
use App\Service\Serializer;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class CategoriesController
 * @package App\Controller
 * @Route("/backend/categories")
 */
class CategoriesController extends AbstractController
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
     * @Route("/uploadPicture")
     */
    public function uploadServicePicture(Request $request){
        $status = Response::HTTP_INTERNAL_SERVER_ERROR;
        $message = "Error";

        $id = $request->get('id');
        $service = $this->em->getRepository(Category::class)->find($id);
        if($service) {
            $uploadedFile = $request->files->get('file');
            $basePath = $request->getBasePath();

            $serviceFolderPath = $this->fileSystemService->getCategoriesFolderPath();
            $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
            $newFilename = $originalFilename . '-' . uniqid() . '.' . $uploadedFile->guessExtension();
            $path = $this->fileSystemService->getCategoriesFolderWebPath($basePath) . "/" . $newFilename;

            $uploadedFile->move(
                $serviceFolderPath,
                $newFilename
            );

            $file = new File();
            $file->setFilename($newFilename);
            $file->setOriginalFilename($originalFilename);
            $file->setExtension("png");
            $file->setIsDoc(false);
            $file->setUrl($path);
            $service->setPicture($file);

            $this->getDoctrine()->getManager()->persist($file);
            $this->getDoctrine()->getManager()->persist($service);
            $this->getDoctrine()->getManager()->flush();

            $status = Response::HTTP_OK;
            $message = null;

        }
        return new Response($message, $status);
    }


    /**
     * @return Response
     * @Route("/get")
     */
    public function getAll(){
        $categories = $this->em->getRepository(Category::class)->findAll();
        return new Response($this->serializer->serialize($categories, 'json'), Response::HTTP_OK);
    }
}