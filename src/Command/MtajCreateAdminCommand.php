<?php

namespace App\Command;

use App\Entity\User;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class MtajCreateAdminCommand extends Command
{
    protected static $defaultName = 'mtaj:create-admin';
    private $em;

    public function __construct(?string $name = null, EntityManagerInterface $em)
    {
        parent::__construct($name);
        $this->em = $em;

    }

    protected function configure()
    {
        $this
            ->setDescription('Add a short description for your command')
            ->addArgument('user', InputArgument::REQUIRED, 'user')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $arg1 = $input->getArgument('user');

        if ($arg1) {
            $user = $this->em->getRepository(User::class)->find($arg1);

            if($user){
                $user->addRole("ROLE_ADMIN");
                $this->em->persist($user);
                $this->em->flush();
            }
            $io->note(sprintf('You passed an argument: %s', $arg1));
        }


        return 0;
    }
}
