<?php

namespace App\Repository;

use App\Entity\News;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Mapping;
use Doctrine\ORM\Tools\CustomPagination\Paginator;

/**
 * @method News|null find($id, $lockMode = null, $lockVersion = null)
 * @method News|null findOneBy(array $criteria, array $orderBy = null)
 * @method News[]    findAll()
 * @method News[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class NewsRepository extends ServiceEntityRepository
{

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, News::class);
    }

    public function getPaginatedNews($currentPage = 1, $limit = 5){
        $dql = $this->createQueryBuilder('n')
            ->getQuery()->setFirstResult($limit * ($currentPage -1 ))
            ->setMaxResults($limit)
            ->getResult();


        return $dql;

    }

    public function save(News $news){


        $this->getEntityManager()->persist($news);
        $this->getEntityManager()->flush();
    }

    public function delete(News $news){
        $this->getEntityManager()->remove($news);
        $this->getEntityManager()->flush();
    }

    public function getRecent(){
        return $this->createQueryBuilder('n')
            ->orderBy('n.creationTime', 'DESC')
            ->setMaxResults(5)
            ->getQuery()
            ->getResult();
    }

    public function getAllOrdered(){
        return $this->createQueryBuilder('n')
            ->orderBy('n.creationTime', 'ASC')
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
