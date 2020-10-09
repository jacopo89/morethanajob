<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 */
class Service
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\OfferedService", mappedBy="service", orphanRemoval=true)
     */
    private $offeredServices;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\User", mappedBy="interests")
     */
    private $interestedUsers;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Position", mappedBy="service")
     */
    private $positions;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Service", inversedBy="childrenServices")
     */
    private $parentService;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Service", mappedBy="parentService")
     */
    private $childrenServices;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\File", cascade={"persist", "remove"})
     */
    private $picture;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $ar;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $en;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $it;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $gr;

    public function __construct()
    {
        $this->offeredServices = new ArrayCollection();
        $this->interestedUsers = new ArrayCollection();
        $this->positions = new ArrayCollection();
        $this->childrenServices = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection|OfferedService[]
     */
    public function getOfferedServices(): Collection
    {
        return $this->offeredServices;
    }

    public function addOfferedService(OfferedService $offeredService): self
    {
        if (!$this->offeredServices->contains($offeredService)) {
            $this->offeredServices[] = $offeredService;
            $offeredService->setService($this);
        }

        return $this;
    }

    public function removeOfferedService(OfferedService $offeredService): self
    {
        if ($this->offeredServices->contains($offeredService)) {
            $this->offeredServices->removeElement($offeredService);
            // set the owning side to null (unless already changed)
            if ($offeredService->getService() === $this) {
                $offeredService->setService(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|User[]
     */
    public function getInterestedUsers(): Collection
    {
        return $this->interestedUsers;
    }

    public function addInterestedUser(User $interestedUser): self
    {
        if (!$this->interestedUsers->contains($interestedUser)) {
            $this->interestedUsers[] = $interestedUser;
            $interestedUser->addInterest($this);
        }

        return $this;
    }

    public function removeInterestedUser(User $interestedUser): self
    {
        if ($this->interestedUsers->contains($interestedUser)) {
            $this->interestedUsers->removeElement($interestedUser);
            $interestedUser->removeInterest($this);
        }

        return $this;
    }

    /**
     * @return Collection|Position[]
     */
    public function getPositions(): Collection
    {
        return $this->positions;
    }

    public function addPosition(Position $position): self
    {
        if (!$this->positions->contains($position)) {
            $this->positions[] = $position;
            $position->setService($this);
        }

        return $this;
    }

    public function removePosition(Position $position): self
    {
        if ($this->positions->contains($position)) {
            $this->positions->removeElement($position);
            // set the owning side to null (unless already changed)
            if ($position->getService() === $this) {
                $position->setService(null);
            }
        }

        return $this;
    }

    public function getParentService(): ?self
    {
        return $this->parentService;
    }

    public function setParentService(?self $parentService): self
    {
        $this->parentService = $parentService;

        return $this;
    }

    /**
     * @return Collection|self[]
     */
    public function getChildrenServices(): Collection
    {
        return $this->childrenServices;
    }

    public function addChildrenService(self $childrenService): self
    {
        if (!$this->childrenServices->contains($childrenService)) {
            $this->childrenServices[] = $childrenService;
            $childrenService->setParentService($this);
        }

        return $this;
    }

    public function removeChildrenService(self $childrenService): self
    {
        if ($this->childrenServices->contains($childrenService)) {
            $this->childrenServices->removeElement($childrenService);
            // set the owning side to null (unless already changed)
            if ($childrenService->getParentService() === $this) {
                $childrenService->setParentService(null);
            }
        }

        return $this;
    }

    public function getPicture(): ?File
    {
        return $this->picture;
    }

    public function setPicture(?File $picture): self
    {
        $this->picture = $picture;

        return $this;
    }

    public function getAr(): ?string
    {
        return $this->ar;
    }

    public function setAr(?string $ar): self
    {
        $this->ar = $ar;

        return $this;
    }

    public function getEn(): ?string
    {
        return $this->en;
    }

    public function setEn(?string $en): self
    {
        $this->en = $en;

        return $this;
    }

    public function getIt(): ?string
    {
        return $this->it;
    }

    public function setIt(?string $it): self
    {
        $this->it = $it;

        return $this;
    }

    public function getGr(): ?string
    {
        return $this->gr;
    }

    public function setGr(?string $gr): self
    {
        $this->gr = $gr;

        return $this;
    }
}
