<?php


namespace App\Controller;


use App\Entity\Position;
use App\Entity\Service;
use App\Service\Serializer;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class PositionController
 * @package App\Controller
 * @Route("/backend/positions")
 */
class PositionController extends AbstractController
{
    private $serializer;
    private $em;
    private $mailer;

    public function __construct(EntityManagerInterface $em,Serializer $serializer, \Swift_Mailer $mailer)
    {
        $this->serializer = $serializer;
        $this->em = $em;
        $this->mailer = $mailer;
    }

    /**
     * @param Position $position
     * @Route("/delete/{id}")
     * @return JsonResponse
     */
    public function removePosition( Position $position){
        $this->em->remove($position);
        $this->em->flush();
        return new JsonResponse(null,Response::HTTP_OK);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     * @Route("/edit")
     * @throws \Exception
     */
    public function editPosition(Request $request){
        $id = $request->get('id');

        if($id){
            $services = new ArrayCollection($this->em->getRepository(Service::class)->findAll());
            $position = $this->em->getRepository(Position::class)->find($id);
            $description = $request->get('description');
            $deadline = $request->get('deadline');
            $furniture = $request->get('furniture');

            $service = $services->filter(function (Service $service) use ($position) {
                return $service->getId() === intval($position["furniture"]);
            })->first();


            $position->setService($service);
            $position->setDescription($description);
            $position->setDeadline(new \DateTime($deadline));

            $this->em->persist($position);
            $this->em->flush();


        }
        return new JsonResponse(null, Response::HTTP_OK);
    }
}