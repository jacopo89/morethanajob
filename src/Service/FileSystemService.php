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
        $isCreated = mkdir($userFolderPath."/".$userIdentifier);
        if(!$isCreated){
            $this->logger->error( self::class.".createUserFolder"."/".$userIdentifier );
        }
    }

    public function createProjectFolder($projectIdentifier){
        $projectFolderPath = $this->getParameter('kernel.project_dir').'/public/uploads/projects';
        $isCreated = mkdir($projectFolderPath."/".$projectIdentifier);
        if(!$isCreated){

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

    public function getUserFolderWebPath($base, $userId){
        $userFolderPath = $base.'/uploads/users/'.$userId;

        return $userFolderPath;
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




}