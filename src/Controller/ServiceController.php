<?php
/**
 * Created by PhpStorm.
 * User: jacop
 * Date: 21-May-20
 * Time: 12:58 PM
 */

namespace App\Controller;


use App\Entity\File;
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
 * Class ServiceController
 * @package App\Controller
 * @Route("/service")
 */
class ServiceController extends AbstractController
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
     * @return Response
     * @Route("/getAll")
     */
    public function getAll(){
        $services = $this->em->getRepository(Service::class)->findAll();
        return new Response($this->serializer->serialize($services, 'json'), Response::HTTP_OK);
    }

    /**
     * @param Request $request
     * @return Response
     * @Route("/setuserservices")
     */
    public function setUserServices(Request $request){

        $email = $request->get('email');
        $offeredServices = json_decode($request->get('services'),true);
        $user = $this->em->getRepository(User::class)->findOneBy(['email'=>$email]);
        if($user){
            foreach ($offeredServices as $offeredService){
                //TODO solito trick di quelli da levare e quelli da mettere
            }

            $this->em->persist($user);
            $this->em->flush();
        }

        return new Response($this->serializer->serialize($user, 'json'), Response::HTTP_OK);
    }


    /**
     * @param User $user
     * @return Response
     * @Route("/getuserservices/{email}")
     */
    public function getOfferedByUser(User $user){

        $servicesRelations = $user->getOfferedServicesRelations();
        $data = [];
        foreach ($servicesRelations as $servicesRelation){
            $serviceData["description"] = $servicesRelation->getDescription();
            $serviceData["service"] = $servicesRelation->getService();
            $data[] = $serviceData;
        }

        return new Response($this->serializer->serialize($data, 'json'), Response::HTTP_OK);
    }


    /**
     * @param Request $request
     * @return Response
     * @Route("/add")
     */
    public function createService(Request $request){
        $status = Response::HTTP_INTERNAL_SERVER_ERROR;
        $message = "Error";

        $name = $request->get('name');
        $parentId = $request->get('parentId');
        $parentService = $this->em->getRepository(Service::class)->find($parentId);
        if($parentService){
            $service = new Service();
            $service->setName($name);
            $service->setParentService($parentService);
            $this->em->persist($service);
            $this->em->flush();
            $status = Response::HTTP_OK;
            $message = null;
        }
        return new Response($message, $status);

    }

    /**
     * @param Request $request
     * @return Response
     * @Route("/edit")
     */
    public function editService(Request $request){
        $status = Response::HTTP_INTERNAL_SERVER_ERROR;
        $message = "Error";

        $id = $request->get('id');
        $service = $this->em->getRepository(Service::class)->find($id);
        if($service) {
            $name = $request->get('name');
            $service->setName($name);
            $this->em->persist($service);
            $this->em->flush();
            $status = Response::HTTP_OK;
            $message = null;
        }

        return new Response($message, $status);
    }

    /**
     * @param Service $service
     * @return Response
     * @Route("/delete/{id}")
     */
    public function deleteService(Service $service){
        $this->em->remove($service);
        $this->em->flush();
        return new Response("", Response::HTTP_OK);
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
        $service = $this->em->getRepository(Service::class)->find($id);
        if($service) {
            $uploadedFile = $request->files->get('file');
            $basePath = $request->getBasePath();

            $serviceFolderPath = $this->fileSystemService->getServiceFolderPath();
            $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
            $newFilename = $originalFilename . '-' . uniqid() . '.' . $uploadedFile->guessExtension();
            $path = $this->fileSystemService->getServiceFolderWebPath($basePath) . "/" . $newFilename;

            $uploadedFile->move(
                $serviceFolderPath,
                $newFilename
            );

            $file = new File();
            $file->setFilename($newFilename);
            $file->setOriginalFilename($originalFilename);
            $file->setExtension("png");
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
     * @Route("/createUserService")
     * @param Request $request
     * @return Response
     */
    public function createOfferedService(Request $request){
        $email = $request->get('email');
        $serviceId = $request->get('service');
        $description = json_decode($request->get('description'));
        $address = json_decode($request->get('address'));

        $user = $this->em->getRepository(User::class)->findOneBy(['email'=>$email]);
        $service = $this->em->getRepository(Service::class)->find($serviceId);


        if($user && $service){
            $offeredService = new OfferedService();
            $offeredService->setUser($user);
            $offeredService->setService($service);
            $offeredService->setDescription($description);
            $offeredService->setAddress($address);

            $this->em->persist($offeredService);
            $this->em->flush();

            $message = "";
            $status = Response::HTTP_OK;
        }else{
            $message = "user or service not found". $email . $serviceId;
            $status = Response::HTTP_BAD_REQUEST;
        }

        return new Response($message, $status);


    }

    /**
     * @Route("/removeUserService")
     */
    public function removeUserService(){

    }


}