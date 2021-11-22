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

class UserRemoveRoleCommand extends Command
{
    protected static $defaultName = 'user:remove-role';
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
            ->addArgument('role', InputArgument::REQUIRED, 'role')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $arg1 = $input->getArgument('user');
        $role = $input->getArgument('role');

        if ($arg1) {
            $user = $this->em->getRepository(User::class)->find($arg1);

            if($user){
                $user->removeRole($role);
                $this->em->persist($user);
                $this->em->flush();
            }
        }


        return 0;
    }
}
