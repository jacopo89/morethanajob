<?php

namespace App\Repository;

use App\Entity\News;
use App\Entity\Project;
use App\Entity\ProjectPartner;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;


/**
 * @method News|null find($id, $lockMode = null, $lockVersion = null)
 * @method News|null findOneBy(array $criteria, array $orderBy = null)
 * @method News[]    findAll()
 * @method News[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProjectRepository extends ServiceEntityRepository
{

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Project::class);
    }

    public function getUserPaginated(User $user, $currentPage = 1, $limit = 5){
        $dql = $this->createQueryBuilder('n')->innerJoin('n.projectPartnersRelations', 'pp')->where('pp.partner = :val')->setParameter('val', $user)
            ->getQuery()->setFirstResult($limit * ($currentPage -1 ))
            ->setMaxResults($limit)
            ->getResult();


        return $dql;

    }

    public function save(Project $project){


        $this->getEntityManager()->persist($project);
        $this->getEntityManager()->flush();
    }

    public function delete(Project $project){
        $this->getEntityManager()->remove($project);
        $this->getEntityManager()->flush();
    }

    public function getRecent(){
        return $this->createQueryBuilder('n')
            ->setMaxResults(5)
            ->getQuery()
            ->getResult();
    }

    // /**
    //  * @return News[] Returns an array of News objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('n')
            ->andWhere('n.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('n.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?News
    {
        return $this->createQueryBuilder('n')
            ->andWhere('n.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
