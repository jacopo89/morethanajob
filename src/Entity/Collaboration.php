<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CollaborationRepository")
 */
class Collaboration
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $shortDescription;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $modality;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $country;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $startDate;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $endDate;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $mainBeneficiaries;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $rates;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Position", mappedBy="collaboration", orphanRemoval=true, cascade={"persist","remove"})
     */
    private $positions;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Category", inversedBy="collaborations")
     */
    private $category;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="collaborations")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Project", inversedBy="collaborations")
     */
    private $project;

    private $isActive;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $language;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isCollaboration;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $contacts;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $localLanguageDescription;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $localLanguageTitle;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $localLanguage;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $localLanguageShortDescription;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $rateType;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $currency;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $ratesText;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $localBeneficiaries;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\File", cascade={"persist", "remove"})
     */
    private $logo;


    public function __construct()
    {
        $this->positions = new ArrayCollection();
    }


    public function getId(): ?int
    {
        return $this->id;
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

    public function getShortDescription(): ?string
    {
        return $this->shortDescription;
    }

    public function setShortDescription(?string $shortDescription): self
    {
        $this->shortDescription = $shortDescription;

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

    public function getCountry(): ?string
    {
        return $this->country;
    }

    public function setCountry(?string $country): self
    {
        $this->country = $country;

        return $this;
    }

    public function getStartDate()
    {
        return $this->startDate;
    }

    public function setStartDate($startDate): self
    {
        $this->startDate = $startDate;

        return $this;
    }

    public function getEndDate()
    {
        return $this->endDate;
    }

    public function setEndDate($endDate): self
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
            $position->setCollaboration($this);
        }

        return $this;
    }

    public function removePosition(Position $position): self
    {
        if ($this->positions->contains($position)) {
            $this->positions->removeElement($position);
            // set the owning side to null (unless already changed)
            if ($position->getCollaboration() === $this) {
                $position->setCollaboration(null);
            }
        }

        return $this;
    }

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): self
    {
        $this->category = $category;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getProject(): ?Project
    {
        return $this->project;
    }

    public function setProject(?Project $project): self
    {
        $this->project = $project;

        return $this;
    }

    public function getIsActive(){
        return !$this->getPositions()->filter(function(Position $position){
            return ($position->getIsOpen()===true);
        })->isEmpty();
    }

    public function getLanguage(): ?string
    {
        return $this->language;
    }

    public function setLanguage(?string $language): self
    {
        $this->language = $language;

        return $this;
    }

    public function getIsCollaboration(): ?bool
    {
        return $this->isCollaboration;
    }

    public function setIsCollaboration(bool $isCollaboration): self
    {
        $this->isCollaboration = $isCollaboration;

        return $this;
    }

    public function getContacts(): ?string
    {
        return $this->contacts;
    }

    public function setContacts(?string $contacts): self
    {
        $this->contacts = $contacts;

        return $this;
    }

    public function getLocalLanguageDescription(): ?string
    {
        return $this->localLanguageDescription;
    }

    public function setLocalLanguageDescription(?string $localLanguageDescription): self
    {
        $this->localLanguageDescription = $localLanguageDescription;

        return $this;
    }

    public function getLocalLanguageTitle(): ?string
    {
        return $this->localLanguageTitle;
    }

    public function setLocalLanguageTitle(?string $localLanguageTitle): self
    {
        $this->localLanguageTitle = $localLanguageTitle;

        return $this;
    }

    public function getLocalLanguage(): ?string
    {
        return $this->localLanguage;
    }

    public function setLocalLanguage(?string $localLanguage): self
    {
        $this->localLanguage = $localLanguage;

        return $this;
    }

    public function getLocalLanguageShortDescription(): ?string
    {
        return $this->localLanguageShortDescription;
    }

    public function setLocalLanguageShortDescription(?string $localLanguageShortDescription): self
    {
        $this->localLanguageShortDescription = $localLanguageShortDescription;

        return $this;
    }

    public function getRateType(): ?string
    {
        return $this->rateType;
    }

    public function setRateType(?string $rateType): self
    {
        $this->rateType = $rateType;

        return $this;
    }

    public function getCurrency(): ?string
    {
        return $this->currency;
    }

    public function setCurrency(?string $currency): self
    {
        $this->currency = $currency;

        return $this;
    }

    public function getRatesText(): ?string
    {
        return $this->ratesText;
    }

    public function setRatesText(?string $ratesText): self
    {
        $this->ratesText = $ratesText;

        return $this;
    }

    public function getLocalBeneficiaries(): ?string
    {
        return $this->localBeneficiaries;
    }

    public function setLocalBeneficiaries(?string $localBeneficiaries): self
    {
        $this->localBeneficiaries = $localBeneficiaries;

        return $this;
    }

    public function getLogo()
    {
        return $this->logo;
    }

    public function setLogo($logo): void
    {
        $this->logo = $logo;
    }
    
}
