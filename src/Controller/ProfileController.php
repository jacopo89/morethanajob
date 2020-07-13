<?php
/**
 * Created by PhpStorm.
 * User: jacop
 * Date: 16-May-20
 * Time: 2:53 PM
 */

namespace App\Controller;


use App\Entity\File;
use App\Entity\User;
use App\Service\FileSystemService;
use App\Service\Serializer;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Class ProfileController
 * @package App\Controller
 * @Route("/profile")
 */
class ProfileController extends AbstractController
{
    private $fileSystemService;
    private $serializer;

    public function __construct(FileSystemService $fileSystemService, Serializer $serializer)
    {
        $this->fileSystemService = $fileSystemService;
        $this->serializer = $serializer;

    }

    /**
     * @Route("/cover")
     * @param Request $request
     * @return Response
     */
    public function updateCoverPicture(Request $request){
        $email = json_decode($request->get('email'),true);
        $user = $this->getDoctrine()->getManager()->getRepository(User::class)->findOneBy(['email'=>$email]);
        $status = Response::HTTP_INTERNAL_SERVER_ERROR;
        $message = "Error";
        if($user){
            $userId = $user->getId();
            $uploadedFile = $request->files->get('file');
            $basePath = $request->getBasePath();

            $userFolderPath = $this->fileSystemService->getUserFolderPath($userId);
            $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
            $newFilename = $originalFilename.'-'.uniqid().'.'.$uploadedFile->guessExtension();
            $path = $this->fileSystemService->getUserFolderWebPath($basePath, $userId)."/".$newFilename;

            $uploadedFile->move(
                $userFolderPath,
                $newFilename
            );

            $file = new File();
            $file->setFilename($newFilename);
            $file->setOriginalFilename($originalFilename);
            $file->setExtension("png");
            $file->setUrl($path);
            $file->setUser($user);
            $user->setCoverPicture($file);

            $this->getDoctrine()->getManager()->persist($file);
            $this->getDoctrine()->getManager()->persist($user);
            $this->getDoctrine()->getManager()->flush();
            $status = Response::HTTP_OK;
            $message = null;

        }else{
            $status = Response::HTTP_BAD_REQUEST;
            $message = "User Not found";

        }


        return new Response($message, $status);

    }

    /**
     * @Route("/profilePicture")
     * @param Request $request
     * @return Response
     */
    public function updateProfilePicture(Request $request){
        $email = json_decode($request->get('email'),true);
        $user = $this->getDoctrine()->getManager()->getRepository(User::class)->findOneBy(['email'=>$email]);
        $status = Response::HTTP_INTERNAL_SERVER_ERROR;
        $message = "Error";
        if($user){
            $userId = $user->getId();
            $uploadedFile = $request->files->get('file');
            $basePath = $request->getBasePath();

            $userFolderPath = $this->fileSystemService->getUserFolderPath($userId);
            $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
            $newFilename = $originalFilename.'-'.uniqid().'.'.$uploadedFile->guessExtension();
            $path = $this->fileSystemService->getUserFolderWebPath($basePath, $userId)."/".$newFilename;

            $uploadedFile->move(
                $userFolderPath,
                $newFilename
            );

            $file = new File();
            $file->setFilename($newFilename);
            $file->setOriginalFilename($originalFilename);
            $file->setExtension("png");
            $file->setUrl($path);
            $file->setUser($user);
            $user->setProfilePicture($file);

            $this->getDoctrine()->getManager()->persist($file);
            $this->getDoctrine()->getManager()->persist($user);
            $this->getDoctrine()->getManager()->flush();
            $status = Response::HTTP_OK;
            $message = null;

        }else{
            $status = Response::HTTP_BAD_REQUEST;
            $message = "User Not found";

        }


        return new Response($message, $status);

    }

    /**
     * @Route("/loadfile")
     * @param Request $request
     * @return Response
     */
    public function loadFiles(Request $request){
        $email = json_decode($request->get('email'),true);
        $user = $this->getDoctrine()->getManager()->getRepository(User::class)->findOneBy(['email'=>$email]);
        $status = Response::HTTP_INTERNAL_SERVER_ERROR;
        $message = "Error";
        if($user){
            $userId = $user->getId();
            $basePath = $request->getBasePath();

            $uploadedFiles = $request->files;
            foreach ($uploadedFiles as $uploadedFile){
                $userFolderPath = $this->fileSystemService->getUserFolderPath($userId);
                $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
                $newFilename = $originalFilename.'-'.uniqid().'.'.$uploadedFile->guessExtension();
                $path = $this->fileSystemService->getUserFolderWebPath($basePath, $userId)."/".$newFilename;

                $uploadedFile->move(
                    $userFolderPath,
                    $newFilename
                );

                $file = new File();
                $file->setFilename($newFilename);
                $file->setOriginalFilename($originalFilename);
                $file->setExtension("png");
                $file->setUrl($path);
                $file->setUser($user);

                $this->getDoctrine()->getManager()->persist($file);

            }



            $this->getDoctrine()->getManager()->persist($user);
            $this->getDoctrine()->getManager()->flush();

            $status = Response::HTTP_OK;
            $message = null;
        }else{
            $status = Response::HTTP_BAD_REQUEST;
            $message = "User Not found";

        }


        return new Response($message, $status);

    }

    /**
     * @Route("/removefile")
     * @param Request $request
     * @return Response
     */
    public function removeFile(Request $request){

        $fileId = $request->get('fileId');
        $file = $this->getDoctrine()->getManager()->getRepository(File::class)->find($fileId);
        $userId = $file->getUser()->getId();
        $filePath = $this->fileSystemService->getUserFilePath($userId, $file->getFilename());
        $isDeleted = unlink($filePath);
        if($isDeleted){
            $this->getDoctrine()->getManager()->remove($file);
            $this->getDoctrine()->getManager()->flush();
        }

        return new Response(null, Response::HTTP_OK);

    }


    /**
     * @Route("/save")
     * @param Request $request
     * @return Response
     */
    public function saveProfile(Request $request){
        $email = json_decode($request->get('email'),true);
        $name = json_decode($request->get('name'),true);
        $description = json_decode($request->get('description'),true);
        $website = json_decode($request->get('website'),true);
        $address = json_decode($request->get('address'),true);
        $telephone = json_decode($request->get('telephone'),true);
        $language = json_decode($request->get('language'),true);
        $facebook = json_decode($request->get('facebook'),true);
        $linkedin = json_decode($request->get('linkedin'),true);
        $twitter = json_decode($request->get('twitter'),true);
        $user = $this->getDoctrine()->getManager()->getRepository(User::class)->findOneBy(['email'=>$email]);
        $status = Response::HTTP_INTERNAL_SERVER_ERROR;
        $message = "Error";
        if($user){
            $user->setName($name);
            $user->setDescription($description);
            $user->setWebsite($website);
            $user->setAddress($address);
            $user->setTelephone($telephone);
            $user->setLanguage($language);
            $user->setFacebook($facebook);
            $user->setLinkedin($linkedin);
            $user->setTwitter($twitter);
            $this->getDoctrine()->getManager()->persist($user);
            $this->getDoctrine()->getManager()->flush();
            $status = Response::HTTP_OK;
            $message = $this->serializer->serialize($user, 'json');
        }
        return new Response($message, $status);
    }


}