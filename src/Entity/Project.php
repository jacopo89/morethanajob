<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 */
class Project
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
    private $title;

    /**
     * @ORM\Column(type="text")
     */
    private $shortDescription;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $longDescription;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\ProjectPartner", mappedBy="project", orphanRemoval=true)
     */
    private $projectPartnersRelations;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isPortfolio;


    /**
     * @ORM\Column(type="datetime")
     */
    private $creationTime;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\File", cascade={"persist", "remove"})
     */
    private $projectPicture;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\File", cascade={"persist", "remove"})
     */
    private $projectLogo;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $links;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $contacts;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\ExternalPartner", inversedBy="projects")
     */
    private $externalPartners;


    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Category", inversedBy="projects")
     */
    private $category;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Collaboration", mappedBy="project")
     */
    private $collaborations;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $localTitle;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $localShortDescription;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $localLongDescription;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $language;
    

    public function __construct()
    {
        $this->projectPartnersRelations = new ArrayCollection();
        $this->externalPartners = new ArrayCollection();
        $this->collaborations = new ArrayCollection();

    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getShortDescription(): ?string
    {
        return $this->shortDescription;
    }

    public function setShortDescription(string $shortDescription): self
    {
        $this->shortDescription = $shortDescription;

        return $this;
    }

    public function getLongDescription(): ?string
    {
        return $this->longDescription;
    }

    public function setLongDescription(?string $longDescription): self
    {
        $this->longDescription = $longDescription;

        return $this;
    }

    /**
     * @return Collection|ProjectPartner[]
     */
    public function getProjectPartnersRelations(): Collection
    {
        return $this->projectPartnersRelations;
    }

    public function addProjectPartnerRelation(ProjectPartner $projectPartner): self
    {
        if (!$this->projectPartnersRelations->contains($projectPartner)) {
            $this->projectPartnersRelations[] = $projectPartner;
            $projectPartner->setProject($this);
        }

        return $this;
    }

    public function removeProjectPartner(ProjectPartner $projectPartner): self
    {
        if ($this->projectPartnersRelations->contains($projectPartner)) {
            $this->projectPartnersRelations->removeElement($projectPartner);
            // set the owning side to null (unless already changed)
            if ($projectPartner->getProject() === $this) {
                $projectPartner->setProject(null);
            }
        }

        return $this;
    }

    public function getIsPortfolio(): ?bool
    {
        return $this->isPortfolio;
    }

    public function setIsPortfolio(bool $isPortfolio): self
    {
        $this->isPortfolio = $isPortfolio;

        return $this;
    }



    public function getCreationTime(): ?\DateTimeInterface
    {
        return $this->creationTime;
    }

    public function setCreationTime(\DateTimeInterface $creationTime): self
    {
        $this->creationTime = $creationTime;

        return $this;
    }

    public function getProjectPicture(): ?File
    {
        return $this->projectPicture;
    }

    public function setProjectPicture(?File $projectPicture): self
    {
        $this->projectPicture = $projectPicture;

        return $this;
    }

    public function getProjectLogo(): ?File
    {
        return $this->projectLogo;
    }

    public function setProjectLogo(?File $projectLogo): self
    {
        $this->projectLogo = $projectLogo;

        return $this;
    }

    public function getLinks()
    {
        return $this->links;
    }

    public function setLinks($links): self
    {
        $this->links = $links;

        return $this;
    }

    public function getContacts()
    {
        return $this->contacts;
    }

    public function setContacts( $contacts): self
    {
        $this->contacts = $contacts;

        return $this;
    }

    /**
     * @return Collection|ExternalPartner[]
     */
    public function getExternalPartners(): Collection
    {
        return $this->externalPartners;
    }

    public function addExternalPartner(ExternalPartner $externalPartner): self
    {
        if (!$this->externalPartners->contains($externalPartner)) {
            $this->externalPartners[] = $externalPartner;
        }

        return $this;
    }

    public function removeExternalPartner(ExternalPartner $externalPartner): self
    {
        if ($this->externalPartners->contains($externalPartner)) {
            $this->externalPartners->removeElement($externalPartner);
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

    /**
     * @return Collection|Collaboration[]
     */
    public function getCollaborations(): Collection
    {
        return $this->collaborations;
    }

    public function addCollaboration(Collaboration $collaboration): self
    {
        if (!$this->collaborations->contains($collaboration)) {
            $this->collaborations[] = $collaboration;
            $collaboration->setProject($this);
        }

        return $this;
    }

    public function removeCollaboration(Collaboration $collaboration): self
    {
        if ($this->collaborations->contains($collaboration)) {
            $this->collaborations->removeElement($collaboration);
            // set the owning side to null (unless already changed)
            if ($collaboration->getProject() === $this) {
                $collaboration->setProject(null);
            }
        }

        return $this;
    }

    public function getLocalTitle(): ?string
    {
        return $this->localTitle;
    }

    public function setLocalTitle(?string $localTitle): self
    {
        $this->localTitle = $localTitle;

        return $this;
    }

    public function getLocalShortDescription(): ?string
    {
        return $this->localShortDescription;
    }

    public function setLocalShortDescription(?string $localShortDescription): self
    {
        $this->localShortDescription = $localShortDescription;

        return $this;
    }

    public function getLocalLongDescription(): ?string
    {
        return $this->localLongDescription;
    }

    public function setLocalLongDescription(?string $localLongDescription): self
    {
        $this->localLongDescription = $localLongDescription;

        return $this;
    }

    public function getLanguage(): ?string
    {
        return $this->language;
    }

    public function setLanguage(string $language): self
    {
        $this->language = $language;

        return $this;
    }


}
