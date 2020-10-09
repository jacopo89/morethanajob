<?php

namespace App\Serializer\Normalizer;

use App\Entity\Service;
use Symfony\Component\Serializer\Normalizer\CacheableSupportsMethodInterface;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;

class ServiceNormalizer implements NormalizerInterface, CacheableSupportsMethodInterface
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

        foreach($object->getChildrenServices() as $service){
            $serviceNormalized = $this->normalize($service);
            $services[] = $serviceNormalized;
        }
        $normalized["children"] = $services;
        if($object->getParentService()!==null){
          $normalized["parentServiceId"] = $object->getParentService()->getId();

        }else{
            $normalized["parentServiceId"] = null;
        }

        return $normalized;

    }

    public function supportsNormalization($data, $format = null): bool
    {
        return $data instanceof \App\Entity\Service;
    }

    public function hasCacheableSupportsMethod(): bool
    {
        return true;
    }
}
