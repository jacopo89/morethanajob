<?php
/**
 * Created by PhpStorm.
 * User: jacop
 * Date: 16-May-20
 * Time: 11:40 AM
 */

namespace App\Service;


use App\Entity\User;
use Psr\Container\ContainerInterface;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class FileSystemService extends AbstractController
{

    private $logger;
    public function __construct( LoggerInterface $loggerAware)
    {
        $this->logger = $loggerAware;
    }

    public function createUserFolder($userIdentifier){



        $userFolderPath = $this->getParameter('kernel.project_dir').'/public/uploads/users';
        if(!is_dir($userFolderPath)){
            $isCreated = mkdir($userFolderPath."/".$userIdentifier);
        }
    }

    public function createProjectFolder($projectIdentifier){
        $projectFolderPath = $this->getParameter('kernel.project_dir').'/public/uploads/projects';
        if(!is_dir($projectFolderPath."/".$projectIdentifier)){
            $isCreated = mkdir($projectFolderPath."/".$projectIdentifier);
        }
    }

    public function createNewsFolder($newsIdentifier){


        $newsFolderPath = $this->getParameter('kernel.project_dir').'/public/uploads/news';
        $isCreated = mkdir($newsFolderPath."/".$newsIdentifier);
        if(!$isCreated){
            $this->logger->error( self::class.".createNewsFolder"."/".$newsIdentifier );
        }
    }

    public function getUserFolderPath($userId){
        $userFolderPath = $this->getParameter('kernel.project_dir').'/public/uploads/users/'.$userId;

        return $userFolderPath;
    }

    public function getUserFilePath($userId, $fileName){
        $userFolderPath = $this->getParameter('kernel.project_dir').'/public/uploads/users/'.$userId."/".$fileName;

        return $userFolderPath;
    }

    public function getProjectFolderPath($projectId){
        $projectFolderPath = $this->getParameter('kernel.project_dir').'/public/uploads/projects/'.$projectId;

        return $projectFolderPath;
    }

    public function getNewsFolderPath($newsId){
        return $this->getParameter('kernel.project_dir').'/public/uploads/news/'.$newsId;
    }

    public function getNewsFilePath($newsId, $fileName){
        return $this->getParameter('kernel.project_dir').'/public/uploads/news/'.$newsId."/".$fileName;
    }



    public function getUserFolderWebPath($base, $userId){
        $userFolderPath = $base.'/uploads/users/'.$userId;

        return $userFolderPath;
    }

    public function getNewsFolderWebPath($base, $newsId){
        return $base.'/uploads/news/'.$newsId;
    }

    public function getProjectFolderWebPath($base, $projectId){
        $userFolderPath = $base.'/uploads/projects/'.$projectId;

        return $userFolderPath;
    }


    public function createServiceFolder(){


        $serviceFolderPath = $this->getParameter('kernel.project_dir').'/public/uploads/services';
        $isCreated = mkdir($serviceFolderPath);
        if(!$isCreated){
            $this->logger->error( self::class.".createServiceFolder");
        }
    }

    public function getServiceFolderPath(){
        $serviceFolderPath = $this->getParameter('kernel.project_dir').'/public/uploads/services';

        return $serviceFolderPath;
    }

    public function getServiceFolderWebPath($base){
        $servicesFolderPath = $base.'/uploads/services';

        return $servicesFolderPath;
    }

    public function createCategoriesFolder(){


        $serviceFolderPath = $this->getParameter('kernel.project_dir').'/public/uploads/categories';
        $isCreated = mkdir($serviceFolderPath);
        if(!$isCreated){
            $this->logger->error( self::class.".createCategoriesFolder");
        }
    }

    public function getCategoriesFolderPath(){
        $serviceFolderPath = $this->getParameter('kernel.project_dir').'/public/uploads/categories';

        return $serviceFolderPath;
    }

    public function getCategoriesFolderWebPath($base){
        $servicesFolderPath = $base.'/uploads/categories';

        return $servicesFolderPath;
    }




}