<?php
/**
 * Created by PhpStorm.
 * User: jacop
 * Date: 10-Jul-20
 * Time: 4:41 PM
 */

namespace App\Serializer\Normalizer;


use Symfony\Component\Serializer\Normalizer\CacheableSupportsMethodInterface;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;

class CategoryNormalizer implements NormalizerInterface, CacheableSupportsMethodInterface
{
    private $normalizer;

    public function __construct(ObjectNormalizer $normalizer)
    {
        $this->normalizer = $normalizer;
    }

    public function normalize($object, $format = null, array $context = array()): array
    {
        // Here: add, edit, or delete some data
        $normalized = [];
        $normalized["id"] = $object->getId();
        $normalized["value"] = $object->getId();
        $normalized["label"] = $object->getName();
        $normalized["name"] = $object->getName();
        $normalized["ar"] = $object->getAr();
        $normalized["en"] = $object->getEn();
        $normalized["it"] = $object->getIt();
        $normalized["gr"] = $object->getGr();
        $normalized["picture"] = is_null($object->getPicture())? null: $object->getPicture()->getUrl();

        //$normalized["parentService"] = (!is_null($object->getParentService())) ? $this->normalize($object->getParentService()) : null ;
        $services = [];

        foreach($object->getChildrenCategories() as $service){
            $serviceNormalized = $this->normalize($service);
            $services[] = $serviceNormalized;
        }
        $normalized["children"] = $services;
        if($object->getParentCategory()!==null){
            $normalized["parentCategoryId"] = $object->getParentCategory()->getId();

        }else{
            $normalized["parentCategoryId"] = null;
        }

        return $normalized;

    }

    public function supportsNormalization($data, $format = null): bool
    {
        return $data instanceof \App\Entity\Category;
    }

    public function hasCacheableSupportsMethod(): bool
    {
        return true;
    }

}