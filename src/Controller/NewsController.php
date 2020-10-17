<?php
/**
 * Created by PhpStorm.
 * User: jacop
 * Date: 10/17/2020
 * Time: 12:57 PM
 */

namespace App\Controller;


use App\Entity\News;
use App\Model\NewsDTO;
use App\Repository\NewsRepository;
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


    /**
     * NewsController constructor.
     * @param NewsRepository $newsRepository
     */
    public function __construct(NewsRepository $newsRepository)
    {

        $this->em = $newsRepository;
    }

    /**
     * @Route("/get-all", methods={"GET"})
     */
    public function getAll(){
        return new Response(json_encode($this->em->findAll()));
    }

    /**
     * @param Request $request
     * @return Response
     * @Route("/new", methods={"POST"})
     */
    public function createNews(Request $request){
        $title = $request->get('title');
        $text = $request->get('text');
        $links = json_decode($request->get('links'), true);
        $newsDto = new NewsDTO($title, $text, $links);
        $news = News::createFromDTO($newsDto);
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
            $links = json_decode($request->get('links'), true);
            $news->setTitle($title);
            $news->setText($text);
            $news->setLinks($links);
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
        return new Response(json_encode($news), Response::HTTP_OK);
    }

}