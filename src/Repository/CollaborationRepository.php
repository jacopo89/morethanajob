<?php

namespace App\Repository;

use App\Entity\Collaboration;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Collaboration|null find($id, $lockMode = null, $lockVersion = null)
 * @method Collaboration|null findOneBy(array $criteria, array $orderBy = null)
 * @method Collaboration[]    findAll()
 * @method Collaboration[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CollaborationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Collaboration::class);
    }

    public function getUserCollaborationsPaginated(User $user, $currentPage = 1, $limit = 5){
        $dql = $this->createQueryBuilder('n')
            ->innerJoin('n.user', 'u')
            ->innerJoin('n.positions', 'ps')
            ->where('ps.isOpen = true')
            ->andWhere('n.isCollaboration = true')
            ->andWhere('u = :val')->setParameter('val', $user)
            ->getQuery()->setFirstResult($limit * ($currentPage -1 ))
            ->setMaxResults($limit)
            ->getResult();


        return $dql;

    }


    public function getUserServicesPaginated(User $user, $currentPage = 1, $limit = 5){
        $dql = $this->createQueryBuilder('n')
            ->innerJoin('n.user', 'u')
            ->innerJoin('n.positions', 'ps')
            ->where('ps.isOpen = false')
            ->andWhere('n.isCollaboration = true')
            ->andWhere('u = :val')->setParameter('val', $user)
            ->getQuery()->setFirstResult($limit * ($currentPage -1 ))
            ->setMaxResults($limit)
            ->getResult();


        return $dql;

    }

    // /**
    //  * @return Collaboration[] Returns an array of Collaboration objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Collaboration
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
