<?php

namespace App\Controller;

use App\Model\QuestionarioDTO;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class QuestionarioController extends AbstractController
{
    private $serializer;
    private $mailer;

    public function __construct(SerializerInterface $serializer, \Swift_Mailer $swift_Mailer)
    {
        $this->serializer = $serializer;
        $this->mailer = $swift_Mailer;
    }

    /**
     * @param Request $request
     * @return JsonResponse
     * @Route ("/backend/questionario", methods={"POST"})
     */
    public function sendQuestionario(Request $request){

        $message = (new \Swift_Message('Nuovo questionario'))
            ->setFrom("info@morethanajob.org")
            ->setTo("cesie@joinmorethanajob.org")
            ->setBody(
                $this->renderView(
                // templates/emails/registration.html.twig
                    'emails/questionario/questionario.html.twig',
                    [
                        'name' => $request->get("name"),
                        'surname'=>$request->get("surname"),
                        'country' => $request->get("country"),
                        'type' => $request->get("type"),
                        'q1' => $request->get("q1"),
                        'q2' => $request->get("q2"),
                        'q3' => $request->get("q3"),
                        'q4' => $request->get("q4"),
                        'q5' => $request->get("q5"),
                        'q6' => $request->get("q6"),
                        'q7' => $request->get("q7"),
                        'q8' => $request->get("q8"),
                        'q9' => $request->get("q9"),
                        'q10' => $request->get("q10"),
                        'q11' => $request->get("q11"),
                        'comments' => $request->get("comments")
                    ]
                ),
                'text/html'
            )

            // you can remove the following code if you don't define a text version for your emails
        ;

        $this->mailer->send($message);

        return new JsonResponse();
    }
}
