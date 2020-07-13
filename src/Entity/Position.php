<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 */
class Position
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Collaboration", inversedBy="positions")
     * @ORM\JoinColumn(nullable=false)
     */
    private $collaboration;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Service", inversedBy="positions")
     */
    private $service;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isOpen;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\PositionUserInterest", mappedBy="position", orphanRemoval=true)
     */
    private $positionUserInterests;

    /**
     * @ORM\Column(type="text")
     */
    private $detailedDescription;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $modality;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $startDate;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $endDate;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $mainBeneficiaries;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $rates;

    public function __construct()
    {
        $this->positionUserInterests = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCollaboration(): ?Collaboration
    {
        return $this->collaboration;
    }

    public function setCollaboration(?Collaboration $collaboration): self
    {
        $this->collaboration = $collaboration;

        return $this;
    }

    public function getService(): ?Service
    {
        return $this->service;
    }

    public function setService(?Service $service): self
    {
        $this->service = $service;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getIsOpen(): ?bool
    {
        return $this->isOpen;
    }

    public function setIsOpen(bool $isOpen): self
    {
        $this->isOpen = $isOpen;

        return $this;
    }

    /**
     * @return Collection|PositionUserInterest[]
     */
    public function getPositionUserInterests(): Collection
    {
        return $this->positionUserInterests;
    }

    public function addPositionUserInterest(PositionUserInterest $positionUserInterest): self
    {
        if (!$this->positionUserInterests->contains($positionUserInterest)) {
            $this->positionUserInterests[] = $positionUserInterest;
            $positionUserInterest->setPosition($this);
        }

        return $this;
    }

    public function removePositionUserInterest(PositionUserInterest $positionUserInterest): self
    {
        if ($this->positionUserInterests->contains($positionUserInterest)) {
            $this->positionUserInterests->removeElement($positionUserInterest);
            // set the owning side to null (unless already changed)
            if ($positionUserInterest->getPosition() === $this) {
                $positionUserInterest->setPosition(null);
            }
        }

        return $this;
    }

    public function getDetailedDescription(): ?string
    {
        return $this->detailedDescription;
    }

    public function setDetailedDescription(string $detailedDescription): self
    {
        $this->detailedDescription = $detailedDescription;

        return $this;
    }

    public function getModality(): ?string
    {
        return $this->modality;
    }

    public function setModality(?string $modality): self
    {
        $this->modality = $modality;

        return $this;
    }

    public function getStartDate(): ?\DateTimeInterface
    {
        return $this->startDate;
    }

    public function setStartDate(?\DateTimeInterface $startDate): self
    {
        $this->startDate = $startDate;

        return $this;
    }

    public function getEndDate(): ?\DateTimeInterface
    {
        return $this->endDate;
    }

    public function setEndDate(?\DateTimeInterface $endDate): self
    {
        $this->endDate = $endDate;

        return $this;
    }

    public function getMainBeneficiaries(): ?string
    {
        return $this->mainBeneficiaries;
    }

    public function setMainBeneficiaries(?string $mainBeneficiaries): self
    {
        $this->mainBeneficiaries = $mainBeneficiaries;

        return $this;
    }

    public function getRates(): ?string
    {
        return $this->rates;
    }

    public function setRates(?string $rates): self
    {
        $this->rates = $rates;

        return $this;
    }
}
