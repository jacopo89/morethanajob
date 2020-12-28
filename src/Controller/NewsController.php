<?php
/**
 * Created by PhpStorm.
 * User: jacop
 * Date: 10/17/2020
 * Time: 12:57 PM
 */

namespace App\Controller;


use App\Entity\File;
use App\Entity\News;
use App\Model\NewsDTO;
use App\Repository\NewsRepository;
use App\Service\FileSystemService;
use App\Service\Serializer;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


/**
 * Class NewsController
 * @package App\Controller
 *
 * @Route("/backend/news")
 */
class NewsController extends AbstractController
{

    private $em;
    private $fileSystemService;
    private $serializer;



    /**
     * NewsController constructor.
     * @param NewsRepository $newsRepository
     * @param FileSystemService $fileSystemService
     */
    public function __construct(NewsRepository $newsRepository, FileSystemService $fileSystemService, Serializer $serializer)
    {

        $this->em = $newsRepository;
        $this->serializer = $serializer;
        $this->fileSystemService = $fileSystemService;
    }

    /**
     * @Route("/get-all", methods={"GET"})
     */
    public function getAll(){
        return new Response($this->serializer->serialize($this->em->getAllOrdered(), 'json'));
    }

    /**
     * @param Request $request
     * @return Response
     * @IsGranted("ROLE_ADMIN")
     * @Route("/new", methods={"POST"})
     */
    public function createNews(Request $request){
        $title = $request->get('title');
        $text = $request->get('text');
        $type = intval($request->get('type'));
        $link = $request->get('link');
        $newsDto = new NewsDTO($title, $text, $link, $type);
        $news = News::createFromDTO($newsDto);
        $this->em->save($news);
        $basePath = $request->getBasePath();

        $uploadedFiles = $request->files;
        foreach ($uploadedFiles as $uploadedFileArray){
            foreach ($uploadedFileArray as $uploadedFile) {

                $newsFolderPath = $this->fileSystemService->getNewsFolderPath($news->getId());
                $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
                $newFilename = $originalFilename.'-'.uniqid().'.'.$uploadedFile->guessExtension();
                $path = $this->fileSystemService->getNewsFolderWebPath($basePath, $news->getId())."/".$newFilename;

                $uploadedFile->move(
                    $newsFolderPath,
                    $newFilename
                );

                $file = new File();
                $file->setFilename($newFilename);
                $file->setOriginalFilename($originalFilename);
                $file->setExtension("png");
                $file->setUrl($path);
                $file->setIsDoc(true);
                $file->setUser(null);
                $file->setNews($news);

                $this->getDoctrine()->getManager()->persist($file);

            }


        }
        $this->em->save($news);


        return new Response(json_encode($news));

    }

    /**
     * @param Request $request
     * @return Response
     * @Route("/edit", methods={"POST"})
     */
    public function editNews(Request $request){
        $id = $request->get('id');
        $news = $this->em->find($id);
        if($news){
            $title = $request->get('title');
            $text = $request->get('text');
            $type = $request->get('type');
            $link = $request->get('link');
            $news->setTitle($title);
            $news->setText($text);
            $news->setLink($link);
            $news->setType($type);

            $this->em->save($news);
            $status = Response::HTTP_OK;
        }else{
            $status = Response::HTTP_NOT_FOUND;
        }

        return new Response(json_encode($news), $status);

    }

    /**
     * @Route("/get-paginated/{page}", methods={"GET"})
     * @param $page
     * @return false|string
     */
    public function getPaginated($page){

        return new Response(json_encode($this->em->getPaginatedNews($page)));
    }

    /**
     * @param News $news
     * @Route("/delete/{id}", methods={"DELETE"})
     * @return Response
     */
    public function delete(News $news){
        $this->em->delete($news);
        return new Response("", Response::HTTP_OK);
    }


    /**
     * @Route("/get-recent", methods={"GET"})
     *
     */
    public function getLastNews(){
        $news = $this->em->getRecent();
        return new Response($this->serializer->serialize($news, 'json'), Response::HTTP_OK);
    }



    /**
     * @Route("/load-file", methods={"POST"})
     * @param Request $request
     * @return Response
     */
    public function loadFiles(Request $request){
        $id = $request->get('id');
        $news = $this->getDoctrine()->getManager()->getRepository(News::class)->find($id);
        $status = Response::HTTP_INTERNAL_SERVER_ERROR;
        $message = "Error";
        if($news){
            $newsId = $news->getId();
            $basePath = $request->getBasePath();

            $uploadedFiles = $request->files;
            foreach ($uploadedFiles as $uploadedFile){
                $newsFolderPath = $this->fileSystemService->getNewsFolderPath($newsId);
                $originalFilename = pathinfo($uploadedFile->getClientOriginalName(), PATHINFO_FILENAME);
                $newFilename = $originalFilename.'-'.uniqid().'.'.$uploadedFile->guessExtension();
                $path = $this->fileSystemService->getNewsFolderWebPath($basePath, $newsId)."/".$newFilename;

                $uploadedFile->move(
                    $newsFolderPath,
                    $newFilename
                );

                $file = new File();
                $file->setFilename($newFilename);
                $file->setOriginalFilename($originalFilename);
                $file->setExtension("png");
                $file->setUrl($path);
                $file->setIsDoc(true);
                $file->setUser(null);
                $file->setNews($news);

                $this->getDoctrine()->getManager()->persist($file);

            }

            $this->getDoctrine()->getManager()->flush();

            $status = Response::HTTP_OK;
            $message = null;
        }else{
            $status = Response::HTTP_BAD_REQUEST;
            $message = "News Not found";

        }


        return new Response($message, $status);

    }
}