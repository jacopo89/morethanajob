<?php
/**
 * Created by PhpStorm.
 * User: jacop
 * Date: 30-May-20
 * Time: 9:41 AM
 */

namespace App\Controller;


use App\Entity\Category;
use App\Entity\Collaboration;
use App\Entity\ExternalPartner;
use App\Entity\File;
use App\Entity\OfferedService;
use App\Entity\Position;
use App\Entity\PositionUserInterest;
use App\Entity\Project;
use App\Entity\ProjectPartner;
use App\Entity\Service;
use App\Entity\User;
use App\Repository\ProjectRepository;
use App\Service\FileSystemService;
use App\Service\Serializer;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Security;

/**
 * Class ProjectController
 * @package App\Controller
 * @Route("/backend/project")
 */
class ProjectController extends AbstractController
{
    private $em;
    private $serializer;
    private $fileSystemService;

    private $repository;

    public function __construct(EntityManagerInterface $em, Serializer $serializer, FileSystemService $fileSystemService, ProjectRepository $projectRepository)
    {
        $this->em = $em;
        $this->serializer = $serializer;
        $this->fileSystemService = $fileSystemService;
        $this->repository = $projectRepository;
    }


    /**
     * @Route("/getlast")
     */
    public function getLastTenProjects(){
        $records = $this->getDoctrine()
            ->getRepository(Project::class)
            ->findBy(array(), array('creationTime' => 'DESC'), 10)
        ;

        return new Response($this->serializer->serialize($records, 'json'));
    }

    /**
     * @Route("/searchfiltered")
     * @param Request $request
     * @return Response
     */
    public function getFiltered(Request $request){

        $country = json_decode($request->get('country'));
        $language = $request->get('language');
        $services = json_decode($request->get('service'));
        $categories = json_decode($request->get('category'));
        $userMail = json_decode($request->get('user'));
        $from = json_decode($request->get('from'));
        $to = json_decode($request->get('to'));

        $deadline = new \DateTime($to);
        $checkbox = json_decode($request->get('radio'));



        $user = $this->em->getRepository(User::class)->findOneBy(['email'=>$userMail]);
        $trueServices = $this->em->getRepository(Service::class)->findBy(['id'=>$services]);
        $trueCategories = $this->em->getRepository(Category::class)->findBy(['id'=>$categories]);
        $userCollaborationsIds = [];
        $userServiceIds = [];

        $arrayServicesIds = [];
        $userOfferedServicesIds = [];


        $projectFilters = []; $serviceFilters = [];
        if($country){
            $projectFilters['country'] = $country;
        }
        if($language && $language!=="en"){
            $projectFilters['language'] = $language;
        }
        if($categories){
            $projectFilters['category'] = $trueCategories;
        }
        if($user){
            $userCollaborationsIds = $user->getCollaborations()->map(function(Collaboration $collaboration){return $collaboration->getId();})->toArray();

            $userOfferedServicesIds = $user->getOfferedServicesRelations()->map(function(OfferedService $offeredService){return $offeredService->getId();})->toArray();
        }
        if($services){

            //ricerca con fornitura

            $positions = $this->getDoctrine()->getRepository(Position::class)->findBy(['service'=>$trueServices, 'isOpen'=>true]);

            $array_positions = [];
            foreach($positions as $position){
                $array_positions[] = $position;
            }

            $userServiceIds = array_unique(array_map(function(Position $position){
                return $position->getCollaboration()->getId();
            }, $array_positions));

            $offeredServices = $this->getDoctrine()->getRepository(OfferedService::class)->findBy(['service'=> $trueServices]);

            $arrayServicesIds = [];
            foreach($offeredServices as $offeredService){
                $arrayServicesIds[] = $offeredService->getId();
            }


        }



        $arrayId = array_unique(array_merge($userCollaborationsIds, $userServiceIds));

        $servicesId = array_diff($userOfferedServicesIds,$arrayServicesIds)
        ;
        if($services || $userMail){
            $projectFilters['id'] = $arrayId;
            $serviceFilters['id'] = $servicesId;
        }




        $offeredServices = $this->getDoctrine()
            ->getRepository(OfferedService::class)
            ->findBy($serviceFilters);

        $records = $this->getDoctrine()
            ->getRepository(Collaboration::class)
            ->findBy($projectFilters)
        ;


        $results = [];

        switch($checkbox){
            case "services":{
                $filteredRecords = array_filter($records, function(Collaboration $collaboration){
                    return $collaboration->getIsActive()===false;
                });
                $newRecords = [];
                foreach ($filteredRecords as $filteredRecord){
                    $newRecords[] = $filteredRecord;
                }
            }
                break;
            case "collaborations":{
                $filteredRecords = array_filter($records, function(Collaboration $collaboration){
                    return $collaboration->getIsActive()===true;
                });
                $newRecords = [];
                foreach ($filteredRecords as $filteredRecord){
                    $newRecords[] = $filteredRecord;
                }
            }
                break;
            default:{
                $newRecords = $records;
            }
                break;

        }

        if($to){
            $timeRecords = array_filter($newRecords, function(Collaboration $collaboration)use($deadline){
                $format = "Y-m-d\TH:i:s.v\Z";
                $endDateS = $collaboration->getEndDate();
                if($endDateS){
                    $endDate = \DateTime::createFromFormat($format, $endDateS);
                    return ($endDate >=$deadline);
                }else{
                    return true;
                }
            });
            $finalRecords = [];
            foreach($timeRecords as $timeRecord){
                $finalRecords[] = $timeRecord;
            }
        }else{
            $finalRecords = $newRecords;
        }

        //filter by date
        $openRecords = array_filter($finalRecords, function(Collaboration $collaboration){
            $today = new \DateTime();
            $format = "Y-m-d\TH:i:s.v\Z";

            $endDateS = $collaboration->getEndDate();

            if($endDateS){
                $endDate = \DateTime::createFromFormat($format, $endDateS);
                if($today> $endDate){
                    return false;
                }
            }
            return true;

        });

        $sentRecords = [];
        foreach($openRecords as $openRecord){
            $sentRecords[] = $openRecord;
        }


        $results["services"] = [];
        $results["projects"] = $sentRecords;
        $results["servicesNumber"] = sizeOf($sentRecords);

        return new Response($this->serializer->serialize($results, 'json'));
    }



    /**
     * @Route("/get/{id}")
     * @param Project $project
     * @return Response
     */
    public function getProject(Project $project){

        return new Response($this->serializer->serialize($project, 'json'));
    }


    /**
     * @Route("/getbymail/{email}")
     * @param User $user
     * @return Response
     */
    public function getProjectByMail(User $user){
        $projects = $user->getProjectsRelations()->filter(function(ProjectPartner $projectPartner){
            return $projectPartner->getIsLeader()===true;
        })->map(function(ProjectPartner $projectPartner){ return $projectPartner->getProject();});
            //->filter(function(Project $project){return $project->getIsPortfolio()===false;});

        $arrayProjects = [];
        foreach ($projects as $project){
            $arrayProjects[] = $project;
        }

        return new Response($this->serializer->serialize($arrayProjects, 'json'));
    }


    /**
     * @param Request $request
     * @Route("/edit")
     * @return Response
     */
    public function ediProject(Request $request)
    {
        $id = $request->get('id');
        $project = $this->em->getRepository(Project::class)->find($id);
        if ($project) {
            $title = json_decode($request->get('title'));
            $shortDescription = json_decode($request->get('shortDescription'));
            $longDescription = json_decode($request->get('longDescription'));
            $links = json_decode($request->get('links'), true);
            $localTitle = json_decode($request->get('localTitle'));
            $shortLocalDescription = json_decode($request->get('localShortDescription'));
            $longLocalDescription = json_decode($request->get('localLongDescription'));
            $contacts = json_decode($request->get('contacts'), true);
            $language = json_decode($request->get('language'), true);
            $project->setLanguage($language);
            $project->setTitle($title);
            $project->setShortDescription($shortDescription);
            $project->setLongDescription($longDescription);
            $project->setLocalTitle($localTitle);
            $project->setLocalLongDescription($longLocalDescription);
            $project->setLocalShortDescription($shortLocalDescription);


            $project->setLinks($links);
            $project->setContacts($contacts);
            $this->em->persist($project);
            $this->em->flush();

        }
        return new Response($this->serializer->serialize(null, 'json'));
    }

    /**
     * @param Request $request
     * @Route("/new")
     * @return Response
     */
    public function newProject(Request $request){
        $services = new ArrayCollection($this->em->getRepository(Service::class)->findAll());

        $email = $request->get('email');
        $user = $this->em->getRepository(User::class)->findOneBy(['email'=>$email]);
        if($user){
            $title = json_decode($request->get('title'));
            $localTitle = json_decode($request->get('localTitle'));
            $isPortfolio = json_decode($request->get('isPortfolio'));
            $shortDescription = json_decode($request->get('shortDescription'));
            $shortLocalDescription = json_decode($request->get('localShortDescription'));
            $longLocalDescription = json_decode($request->get('localLongDescription'));
            $longDescription = json_decode($request->get('longDescription'));
            $links = json_decode($request->get('links'), true);
            $contacts = json_decode($request->get('contacts'), true);
            $positions = json_decode($request->get('positions'),true);
            $partners = json_decode($request->get('partners'),true);

            $language = json_decode($request->get('language'));



            $project = new Project();
            $project->setLanguage($language);
            $project->setTitle($title);
            $project->setLocalTitle($localTitle);
            $project->setLocalLongDescription($longLocalDescription);
            $project->setLocalShortDescription($shortLocalDescription);
            $project->setShortDescription($shortDescription);
            $project->setLongDescription($longDescription);
            $project->setIsPortfolio($isPortfolio);
            $project->setLinks($links);
            $project->setContacts($contacts);
            $project->setCreationTime(new \DateTime());
            $projectPartner = new ProjectPartner();
            $projectPartner->setProject($project);
            $projectPartner->setPartner($user);
            $projectPartner->setIsLeader(true);


            if($isPortfolio){
                foreach($partners as $partner){
                    if($partner["type"] ==="new"){
                        $newPartner = new ExternalPartner();
                        $newPartner->setEmail($partner["email"]);
                        $newPartner->setName($partner["name"]);
                        $newPartner->setWebsite($partner["website"]);
                        $project->addExternalPartner($newPartner);
                        $this->em->persist($newPartner);

                    }else{
                        $user = $this->em->getRepository(User::class)->findOneBy(['email'=>$partner["email"]]);
                        if($user){
                            $newProjectPartnerRelation = new ProjectPartner();
                            $newProjectPartnerRelation->setProject($project);
                            $newProjectPartnerRelation->setPartner($user);
                            $newProjectPartnerRelation->setIsLeader(false);
                            $project->addProjectPartnerRelation($newProjectPartnerRelation);
                            $this->em->persist($newProjectPartnerRelation);
                        }
                    }
                }
            }else{

                foreach($positions as $position){
                    $newPosition = new Position();
                    $service = $services->filter(function(Service $service)use($position){ return $service->getId() === intval($position["service"]);})->first();
                    $newPosition->setService($service);
                    $newPosition->setDescription($position["shortDescription"]);
                    $newPosition->setDetailedDescription($position["description"]);
                    $newPosition->setStartDate(new \DateTime($position["startDate"]));
                    $newPosition->setEndDate(new \DateTime($position["endDate"]));
                    $newPosition->setMainBeneficiaries($position["mainBeneficiaries"]);
                    $newPosition->setRates($position["rates"]);

                    $newPosition->setIsOpen(true);
                    $newPosition->setProject($project);
                    $project->addPosition($newPosition);

                }

            }


            $this->em->persist($project);
            $this->em->persist($projectPartner);
            $this->em->flush();


            //Creation of project folder
            $this->fileSystemService->createProjectFolder($project->getId());

            $uploadedFile = $request->files->get('projectCover');
            if($uploadedFile){
                $basePath = $request->getBasePath();

                $projectFolderPath = $this->fileSystemService->getProjectFolderPath($project->getId());
                $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
                $newFilename = $originalFilename.'-'.uniqid();
                $path = $this->fileSystemService->getProjectFolderWebPath($basePath, $project->getId())."/".$newFilename;

                $uploadedFile->move(
                    $projectFolderPath,
                    $newFilename
                );

                $file = new File();
                $file->setFilename($newFilename);
                $file->setOriginalFilename($originalFilename);
                $file->setExtension("png");
                $file->setIsDoc(false);
                $file->setUrl($path);
                $project->setProjectPicture($file);
                $this->em->persist($file);
                $this->em->flush();

            }

            $uploadedFile = $request->files->get('projectLogo');
            if($uploadedFile){
                $basePath = $request->getBasePath();

                $projectFolderPath = $this->fileSystemService->getProjectFolderPath($project->getId());
                $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
                $newFilename = $originalFilename.'-'.uniqid();
                $path = $this->fileSystemService->getProjectFolderWebPath($basePath, $project->getId())."/".$newFilename;

                $uploadedFile->move(
                    $projectFolderPath,
                    $newFilename
                );

                $file = new File();
                $file->setFilename($newFilename);
                $file->setOriginalFilename($originalFilename);
                $file->setExtension("png");
                $file->setIsDoc(false);
                $file->setUrl($path);
                $project->setProjectLogo($file);
                $this->em->persist($file);
                $this->em->flush();

            }
        }



        return new Response($this->serializer->serialize($project->getId(), 'json'));
    }

    /**
     * @param Request $request
     * @Route("/newportofolio")
     * @return Response
     */
    public function newPortfolioProject(Request $request){
        $services = new ArrayCollection($this->em->getRepository(Service::class)->findAll());

        $title = $request->get('title');
        $shortDescription = $request->get('shortDescription');


        $project = new Project();
        $project->setTitle($title);
        $project->setShortDescription($shortDescription);
        $project->setIsPortfolio(true);
        $project->setStartTime(new \DateTime());
        $project->setEndTime(new \DateTime());
        $project->setCreationTime(new \DateTime());


        $this->em->persist($project);
        $this->em->flush();

        return new Response($this->serializer->serialize($request, 'json'));
    }

    /**
     * @param Request $request
     * @return Response
     * @Route("/declareinterest")
     */
    public function declareInterestPosition(Request $request){
        $positionId = $request->get('position');
        $email  = $request->get('email');
        $position = $this->em->getRepository(Position::class)->find($positionId);
        $user = $this->em->getRepository(User::class)->findOneBy(['email'=>$email]);
        if($user){
            $positionUserInterest = new PositionUserInterest();
            $positionUserInterest->setPosition($position);
            $positionUserInterest->setUser($user);
            $positionUserInterest->setCreationTime(new \DateTime());
            $this->em->persist($positionUserInterest);
            $this->em->flush();


        }
        return new Response($this->serializer->serialize($positionUserInterest, 'json'), Response::HTTP_OK);
    }


    /**
     * @param User $user
     * @return Response
     * @Route("/getportfolio/{email}")
     */
    public function getPortfolioProjects(User $user){
        $portfolioProjects = $user->getPortfolioProjects();
        $finalProjects = [];
        foreach($portfolioProjects as $project){
            $finalProjects[] = $project;
        }
        return new Response($this->serializer->serialize($finalProjects, 'json'), Response::HTTP_OK);

    }

    /**
     * @param User $user
     * @return Response
     * @Route("/get-all-projects/{email}")
     */
    public function getAllProjects(User $user){
        $portfolioProjects = $user->getAllProjects();

        return new Response($this->serializer->serialize($portfolioProjects, 'json'), Response::HTTP_OK);

    }




    /**
     * @param User $user
     * @return Response
     * @Route("/getcollaborations/{email}")
     */
    public function getCollaborations(User $user){
        $portfolioProjects = $user->getProjects();
        $finalProjects = [];
        foreach($portfolioProjects as $project){
            $finalProjects[] = $project;
        }
        return new Response($this->serializer->serialize($finalProjects, 'json'), Response::HTTP_OK);
    }


    /**
     * @Route("/logo")
     * @param Request $request
     * @return Response
     */
    public function updateLogo(Request $request){
        $id = json_decode($request->get('id'),true);
        $project = $this->getDoctrine()->getManager()->getRepository(Project::class)->find($id);
        $status = Response::HTTP_INTERNAL_SERVER_ERROR;
        $message = "Error";
        if($project){
            $projectId = $project->getId();
            $uploadedFile = $request->files->get('file');
            $basePath = $request->getBasePath();

            $projectFolderPath = $this->fileSystemService->getProjectFolderPath($projectId);
            $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
            $newFilename = $originalFilename.'-'.uniqid().'.'.$uploadedFile->guessExtension();
            $path = $this->fileSystemService->getProjectFolderWebPath($basePath, $projectId)."/".$newFilename;

            $uploadedFile->move(
                $projectFolderPath,
                $newFilename
            );

            $file = new File();
            $file->setFilename($newFilename);
            $file->setOriginalFilename($originalFilename);
            $file->setExtension("png");
            $file->setIsDoc(false);
            $file->setUrl($path);
            $project->setProjectLogo($file);

            $this->getDoctrine()->getManager()->persist($file);
            $this->getDoctrine()->getManager()->persist($project);
            $this->getDoctrine()->getManager()->flush();
            $status = Response::HTTP_OK;
            $message = null;

        }else{
            $status = Response::HTTP_BAD_REQUEST;
            $message = "Project Not found";

        }


        return new Response($message, $status);

    }


    /**
     * @Route("/cover")
     * @param Request $request
     * @return Response
     */
    public function updateCover(Request $request){
        $id = json_decode($request->get('id'),true);
        $project = $this->getDoctrine()->getManager()->getRepository(Project::class)->find($id);
        $status = Response::HTTP_INTERNAL_SERVER_ERROR;
        $message = "Error";
        if($project){
            $projectId = $project->getId();
            $uploadedFile = $request->files->get('file');
            $basePath = $request->getBasePath();

            $projectFolderPath = $this->fileSystemService->getProjectFolderPath($projectId);
            $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
            $newFilename = $originalFilename.'-'.uniqid().'.'.$uploadedFile->guessExtension();
            $path = $this->fileSystemService->getProjectFolderWebPath($basePath, $projectId)."/".$newFilename;

            $uploadedFile->move(
                $projectFolderPath,
                $newFilename
            );

            $file = new File();
            $file->setFilename($newFilename);
            $file->setOriginalFilename($originalFilename);
            $file->setExtension("png");
            $file->setIsDoc(false);
            $file->setUrl($path);
            $project->setProjectPicture($file);

            $this->getDoctrine()->getManager()->persist($file);
            $this->getDoctrine()->getManager()->persist($project);
            $this->getDoctrine()->getManager()->flush();
            $status = Response::HTTP_OK;
            $message = null;

        }else{
            $status = Response::HTTP_BAD_REQUEST;
            $message = "Project Not found";

        }


        return new Response($message, $status);

    }

    /**
     * @Route("/postApplication")
     * @param Request $request
     * @return Response
     */
    public function postApplication(Request $request){
        $userMail = $request->get('user');
        $positionId = $request->get('position');

        $user = $this->em->getRepository(User::class)->findOneBy(['email'=> $userMail]);
        $position = $this->em->getRepository(Position::class)->find($positionId);

        $status = Response::HTTP_OK;
        $message = "Like";

        if($user && $position){
            $userPosition = $this->em->getRepository(PositionUserInterest::class)->findOneBy(['user'=>$user, 'position'=>$position]);
            if($userPosition){
                $this->em->remove($userPosition);
                $this->em->flush();
                $message = "Like Removed";
            }else{
                $userPosition = new PositionUserInterest();
                $userPosition->setUser($user);
                $userPosition->setPosition($position);
                $userPosition->setStatus(PositionUserInterest::PENDING);
                $userPosition->setCreationTime(new \DateTime());
                $this->em->persist($userPosition);
                $this->em->flush();
            }

        }else{
            $message = "User or position missing";
            $status = Response::HTTP_BAD_REQUEST;
        }


        return new Response($message, $status);

    }

    /**
     * @Route("/getApplications/{id}")
     * @param Position $position
     * @return Response
     */
    function getApplications(Position $position){
        $positionUserInterests = $position->getPositionUserInterests();
        $responses = [];
        foreach ($positionUserInterests as $positionUserInterest){
            $response["user"] = $positionUserInterest->getUser();
            $response["creationTime"] = $positionUserInterest->getCreationTime();
            $responses[] = $response;
        }
        return new Response($this->serializer->serialize($responses, 'json'), Response::HTTP_OK);
    }

    /**
     * @Route("/confirmCollaboration")
     * @param Request $request
     * @return Response
     */
    public function confirmCollaboration(Request $request){
        $userMail = $request->get('user');
        $positionId = $request->get('position');
        $status = Response::HTTP_OK;
        $message = "Like";

        $user = $this->em->getRepository(User::class)->findOneBy(['email'=> $userMail]);
        $position = $this->em->getRepository(Position::class)->find($positionId);

        if($user && $position){
            $positionUserInterest = $this->em->getRepository(PositionUserInterest::class)->findOneBy(['user'=>$user, 'position'=>$position]);
            $positionUserInterest->setStatus(PositionUserInterest::ACCEPTED);
            $position->setIsOpen(false);

            $collaboration = $position->getCollaboration();
            if($collaboration){
                $project = $collaboration->getProject();
                if($project){
                    $projectPartnerRelation = new ProjectPartner();
                    $projectPartnerRelation->setProject($project);
                    $projectPartnerRelation->setPartner($user);
                    $projectPartnerRelation->setPosition($position);
                    $projectPartnerRelation->setIsLeader(false);
                    $project->addProjectPartnerRelation($projectPartnerRelation);

                    $this->em->persist($position);
                    $this->em->persist($projectPartnerRelation);
                    $this->em->flush();


                }
            }
        }else{
            $message = "User or position missing";
            $status = Response::HTTP_BAD_REQUEST;
        }



        return new Response($message, $status);

    }

    /**
     * @Route("/removeCollaboration")
     * @param Request $request
     * @return Response
     */
    public function removeCollaboration(Request $request){
        $userMail = $request->get('user');
        $positionId = $request->get('position');

        $user = $this->em->getRepository(User::class)->findOneBy(['email'=> $userMail]);
        $position = $this->em->getRepository(Position::class)->find($positionId);

        $status = Response::HTTP_OK;
        $message = "Like";

        if($user && $position){

            $project = $position->getProject();

            $projectPartnerRelation = $this->em->getRepository(ProjectPartner::class)->findOneBy(['project'=>$project, 'partner'=>$user]);
            if($projectPartnerRelation){
                $this->em->remove($projectPartnerRelation);
                $position->setIsOpen(true);
                $this->em->persist($position);
                $this->em->flush();
            }else{
                $message = "relation missing";
                $status = Response::HTTP_BAD_REQUEST;
            }


        }else{
            $message = "User or position missing";
            $status = Response::HTTP_BAD_REQUEST;
        }


        return new Response($message, $status);

    }


    /**
     * @param Project $project
     * @return Response
     * @Route("/removeProject/{id}")
     */
    public function removeProject(Project $project){
        $this->em->remove($project);
        $this->em->flush();
        return new Response($project->getId(), Response::HTTP_OK);
    }

    private function saveLogo($file, $basePath, $project){
        $projectId = $project->getId();

        $projectFolderPath = $this->fileSystemService->getProjectFolderPath($projectId);
        $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
        $newFilename = $originalFilename.'-'.uniqid().'.'.$uploadedFile->guessExtension();
        $path = $this->fileSystemService->getProjectFolderWebPath($basePath, $projectId)."/".$newFilename;

        $uploadedFile->move(
            $projectFolderPath,
            $newFilename
        );

        $file = new File();
        $file->setFilename($newFilename);
        $file->setOriginalFilename($originalFilename);
        $file->setExtension("png");
        $file->setIsDoc(false);
        $file->setUrl($path);
        $project->setProjectLogo($file);

        $this->getDoctrine()->getManager()->persist($file);
        $this->getDoctrine()->getManager()->persist($project);
        $this->getDoctrine()->getManager()->flush();
    }


    /**
     * @Route("/getall")
     * @param Security $security
     * @return Response
     */
    public function getAll(Security $security){
        /**
         * @var User $user
         */
        $user = $security->getUser();

        $isAdmin = in_array("ROLE_ADMIN",$user->getRoles());
        if($isAdmin){
            $projects = $this->em->getRepository(Project::class)->findAll();
            return new Response($this->serializer->serialize($projects,'json'));
        }
        $isArabicAdmin = in_array("ROLE_ARABIC_ADMIN",$user->getRoles());
        if($isArabicAdmin){
            $projects = $this->em->getRepository(Project::class)->findBy(["language"=>"ar"]);
            return new Response($this->serializer->serialize($projects,'json'));
        }

        $isGreekAdmin = in_array("ROLE_GREEK_ADMIN",$user->getRoles());
        if($isGreekAdmin){
            $projects = $this->em->getRepository(Project::class)->findBy(["language"=>"gr"]);
            return new Response($this->serializer->serialize($projects,'json'));
        }

        $isItaAdmin = in_array("ROLE_ITALIAN_ADMIN",$user->getRoles());
        if($isItaAdmin){
            $projects = $this->em->getRepository(Project::class)->findBy(["language"=>"it"]);
            return new Response($this->serializer->serialize($projects,'json'));
        }

        $isEnglishAdmin = in_array("ROLE_ENGLISH_ADMIN",$user->getRoles());
        if($isEnglishAdmin){
            $projects = $this->em->getRepository(Project::class)->findBy(["language"=>"en"]);
            return new Response($this->serializer->serialize($projects,'json'));
        }

        $projects =[];


        return new Response($this->serializer->serialize($projects,'json'));

    }


    /**
     * @param $email
     * @param $page
     * @param $limit
     * @return Response
     * @Route("/get-user-paginated/{email}/{page}/{limit}", methods={"GET"})
     */
    public function getUserPaginated($email, $page, $limit){
        $user = $this->em->getRepository(User::class)->findOneBy(['email'=> $email]);
        if($user){
            $projects = $this->repository->getUserPaginated($user, $page,$limit);
            $response  = $projects;
            $status = Response::HTTP_OK;
        }else{
            $response = "User not found";
            $status = Response::HTTP_NOT_FOUND;
        }


        return new Response($this->serializer->serialize($response, 'json'), $status);
    }
}
