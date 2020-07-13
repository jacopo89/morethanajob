<?php

namespace App\Repository;

use App\Entity\ExternalPartner;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method ExternalPartner|null find($id, $lockMode = null, $lockVersion = null)
 * @method ExternalPartner|null findOneBy(array $criteria, array $orderBy = null)
 * @method ExternalPartner[]    findAll()
 * @method ExternalPartner[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ExternalPartnerRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ExternalPartner::class);
    }

    // /**
    //  * @return ExternalPartner[] Returns an array of ExternalPartner objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('e.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ExternalPartner
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
