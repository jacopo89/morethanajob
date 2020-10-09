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

    /**
     * @param Request $request
     * @return Response
     * @Route("/edit")
     */
    public function edit(Request $request){
        $id = $request->get('id');
        $value = $request->get('value');
        $en = $request->get('en');
        $it = $request->get('it');
        $ar = $request->get('ar');
        $gr = $request->get('gr');

        $category = $this->em->getRepository(Category::class)->find($id);

        $status = Response::HTTP_NOT_FOUND;

        if($category){
            $category->setName($value);
            $category->setAr($ar);
            $category->setEn($en);
            $category->setGr($gr);
            $category->setIt($it);
            $this->em->persist($category);
            $this->em->flush();
            $status = Response::HTTP_OK;
        }

        return new Response(null, $status);
    }


    /**
     * @param Request $request
     * @return Response
     * @Route("/add")
     */
    public function add(Request $request){
        $id = $request->get('parentId');
        $value = $request->get('value');
        $en = $request->get('en');
        $it = $request->get('it');
        $ar = $request->get('ar');
        $gr = $request->get('gr');
        $categoryParent = $this->em->getRepository(Category::class)->find($id);


        $category = new Category();
        $category->setName($value);
        $category->setAr($ar);
        $category->setEn($en);
        $category->setGr($gr);
        $category->setIt($it);


        if($categoryParent){
            $category->setParentCategory($categoryParent);
        }else{
            $category->setParentCategory(null);
        }
        $this->em->persist($category);
        $this->em->flush();
        $status = Response::HTTP_OK;


        return new Response(null, $status);
    }


    /**
     * @param Category $category
     * @Route("/delete/{id}")
     * @return Response
     */
    public function remove(Category $category){
        $this->em->remove($category);
        $this->em->flush();
        return new Response(null, Response::HTTP_OK);
    }


}