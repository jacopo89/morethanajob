<?php

namespace App\Controller;

use App\Entity\User;
use App\Service\FileSystemService;
use App\Service\Serializer;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;
use Lexik\Bundle\JWTAuthenticationBundle\Encoder\JWTEncoderInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

/**
 * Class SecurityController
 * @package App\Controller
 * @Route("/backend")
 */
class SecurityController extends AbstractController
{
    private $em;
    private $serializer;
    private $mailer;
    private $fileSystemService;

    public function __construct(EntityManagerInterface $em, \Swift_Mailer $mailer, Serializer $serializer, FileSystemService $fileSystemService)
    {
        $this->em = $em;
        $this->serializer = $serializer;
        $this->mailer = $mailer;
        $this->fileSystemService = $fileSystemService;

    }

    /**
     * @Route("/login", name="app_login")
     * @param Request $request
     * @param UserPasswordEncoderInterface $encoder
     * @param JWTEncoderInterface $jwtEncoder
     * @return Response
     * @throws \Lexik\Bundle\JWTAuthenticationBundle\Exception\JWTEncodeFailureException
     */
    public function login(Request $request, UserPasswordEncoderInterface $encoder, JWTEncoderInterface $jwtEncoder): Response
    {
        $email = $request->get('email');
        $password = $request->get('password');

        $user = $this->em->getRepository(User::class)->findOneBy(['email'=> $email]);
        if($user){

            $creation_time = new \DateTime();
            if($encoder->isPasswordValid($user, $password)){
                $data = [
                    'email' => $email
                ];

                $token = $jwtEncoder->encode($data);

                $responseData = $token;
                $status = Response::HTTP_OK;
            }else{
                $responseData = "";
                $status = Response::HTTP_UNAUTHORIZED;
            }
        }else{
            $responseData = "User could not be found";
            $status = Response::HTTP_NOT_FOUND;
        }

        return new Response($responseData, $status);
    }

    /**
     * @Route("/register", name="app_register")
     * @param Request $request
     * @param UserPasswordEncoderInterface $encoder
     * @return Response
     */
    public function register(Request $request, UserPasswordEncoderInterface $encoder): Response
    {
        $mail = $request->get('email');
        $password = $request->get('password');
        $name = $request->get('name');

        $user = new User();
        $user->setEmail($mail);
        $user->setName($name);
        $generateUsernameAnswer = $this->generateUsername($name);
        $profileName = $generateUsernameAnswer["name"];
        $profileId = $generateUsernameAnswer["profileId"];
        $user->setProfileName($profileName);
        $user->setProfileId($profileId);
        $encodedPassword = $encoder->encodePassword($user,$password);
        $user->setPassword($encodedPassword);

        $this->em->persist($user);
        $this->em->flush();

        //If registration is successful we need to create folders
        $this->fileSystemService->createUserFolder($user->getId());

        $this->registrationMail($mail);

        return new Response($user->getId());

    }


    /**
     * @Route("/checkuser", name="login_check_user")
     * @param Request $request
     * @return Response
     */
    public function checkUser(Request $request){
        $mail = $request->get('email');

        $content = null;
        $status = Response::HTTP_BAD_REQUEST;
        if(!is_null($mail)){
            $user = $this->em->getRepository(User::class)->findOneBy(['email'=> $mail]);
            if($user){
                $status = Response::HTTP_BAD_REQUEST;
                $content = "This email is already registered";
            }else{
                $status = Response::HTTP_OK;
            }
        }


        return new Response($this->serializer->serialize($content, 'json'), $status);
    }

    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout()
    {
        throw new \Exception('This method can be blank - it will be intercepted by the logout key on your firewall');
    }

    /**
     * @Route("/recovery", name="app_recovery_password")
     * @param Request $request
     * @return Response
     */
    public function recoveryPassword(Request $request)
    {
        $recoveryKey = $request->get('recoveryKey');
        $user = $this->em->getRepository(User::class)->findOneBy(['email'=> $recoveryKey]);
        if($user){
            //generiamo un codice e lo persistiamo con validità 10min
            $newRecoveryKey = self::generateString();
            $user->setRecoveryKey($newRecoveryKey);
            $user->setRecoveryKeyCreationTime(new \DateTime());
            $this->em->persist($user);
            $this->em->flush();

            $recipients = $this->recoveryPasswordMail($user->getEmail(), $newRecoveryKey);

            $content = $recipients;
            $status = Response::HTTP_OK;

        }else{
            $content = false;
            $status = Response::HTTP_BAD_REQUEST;

        }

        return new Response($this->serializer->serialize($content, 'json'), $status);

    }

    /**
     * @Route("/passwordchange", name="app_password_change")
     * @param Request $request
     * @param UserPasswordEncoderInterface $encoder
     * @return Response
     */
    public function passwordChange(Request $request, UserPasswordEncoderInterface $encoder)
    {
        $recoveryKey = $request->get('recoveryKey');
        $password = $request->get('password');
        $user = $this->em->getRepository(User::class)->findOneBy(['recoveryKey'=> $recoveryKey]);
        if($user){
            $encodedPassword = $encoder->encodePassword($user,$password);
            $user->setPassword($encodedPassword);

            $this->em->persist($user);
            $this->em->flush();


            $status = Response::HTTP_OK;

        }else{
            $status = Response::HTTP_BAD_REQUEST;

        }

        return new Response(null, $status);

    }




    private function generateString($strength = 16) {
        $permitted_chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $input_length = strlen($permitted_chars);
        $random_string = '';
        for($i = 0; $i < $strength; $i++) {
            $random_character = $permitted_chars[mt_rand(0, $input_length - 1)];
            $random_string .= $random_character;
        }

        return $random_string;
    }

    public function registrationMail($receiverMail){

        $mailerSender = $this->getParameter('app.mail_sender');
        $message = (new \Swift_Message('Hello Email'))
            ->setFrom($mailerSender)
            ->setTo($receiverMail)
            ->setBody(
                $this->renderView(
                // templates/emails/registration.html.twig
                    'emails/login/registration.html.twig',
                    ['name' => $receiverMail]
                ),
                'text/html'
            )

            // you can remove the following code if you don't define a text version for your emails
        ;

        $this->mailer->send($message);
    }

    public function recoveryPasswordMail($receiverMail, $newRecoveryKey){
        $mailerSender = $this->getParameter('app.mail_sender');
        $message = (new \Swift_Message('Password recovery'))
            ->setFrom($mailerSender)
            ->setTo($receiverMail)
            ->setBody(
                $this->renderView(
                // templates/emails/registration.html.twig
                    'emails/login/recoverypassword.html.twig',
                    ['recoveryKey' => $newRecoveryKey,
                        'mail'=> $receiverMail]
                ),
                'text/html'
            )
        ;

        return $this->mailer->send($message);

    }

    private function generateUsername($name)
    {
        $qb = $this->em->createQueryBuilder();

        $qb->select('u, MAX(u.profileId) as HIDDEN idMax')->from(User::class, 'u')->where('u.name =?1')->setParameter(1,$name);
        try {
            $existingName = $qb->getQuery()->getSingleResult();
        } catch (NoResultException $e) {
            $existingName = "boh";
        } catch (NonUniqueResultException $e) {
            $existingName = "boh";
        }


        $name = str_replace(" ", "-",strtolower($name));

        if($existingName){
            $profileId = $existingName->getProfileId();
            $newProfileId = $profileId+1;
            $newName = $name."-".$newProfileId;
        }else{
            $newName = $name;
            $newProfileId = 1;

        }
        return ["name"=>$newName,"profileId"=> $newProfileId ];
    }
}
