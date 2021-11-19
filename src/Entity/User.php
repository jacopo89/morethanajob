<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 * @UniqueEntity(fields={"email"}, message="There is already an account with this email")
 */
class User implements UserInterface
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     */
    private $email;

    /**
     * @ORM\Column(type="array")
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $recoveryKey;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $recoveryKeyCreationTime;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\File", mappedBy="user")
     */
    private $files;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\File", cascade={"persist", "remove"})
     */
    private $profilePicture;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\File", cascade={"persist", "remove"})
     */
    private $coverPicture;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\UserNotificationUrl", mappedBy="user", orphanRemoval=true)
     */
    private $userNotificationUrls;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\OfferedService", mappedBy="user", orphanRemoval=true)
     */
    private $offeredServicesRelations;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\ProjectPartner", mappedBy="partner", orphanRemoval=true)
     */
    private $projectsRelations;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Service", inversedBy="interestedUsers")
     */
    private $interests;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\PositionUserInterest", mappedBy="user", orphanRemoval=true)
     */
    private $positionUserInterests;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $name;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $website;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $profileName;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $profileId;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $address;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $telephone;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $language;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Collaboration", mappedBy="user", orphanRemoval=true)
     */
    private $collaborations;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $facebook;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $linkedin;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $twitter;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $country;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $localLanguageDescription;


    /**
     * @ORM\Column(type="boolean", length=255)
     */
    private $isAssociation = true;


    private $activeCollaborations;



    public function __construct()
    {
        $this->files = new ArrayCollection();
        $this->userNotificationUrls = new ArrayCollection();
        $this->offeredServicesRelations = new ArrayCollection();
        $this->projectsRelations = new ArrayCollection();
        $this->interests = new ArrayCollection();
        $this->positionUserInterests = new ArrayCollection();
        $this->collaborations = new ArrayCollection();
        $this->activeCollaborations = new ArrayCollection();

    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    public function addRole($role)
    {
        $roles = $this->roles;
        $roles[] = $role;
        $this->roles = $roles;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getRecoveryKey(): ?string
    {
        return $this->recoveryKey;
    }

    public function setRecoveryKey(?string $recoveryKey): self
    {
        $this->recoveryKey = $recoveryKey;

        return $this;
    }

    public function getRecoveryKeyCreationTime(): ?\DateTimeInterface
    {
        return $this->recoveryKeyCreationTime;
    }

    public function setRecoveryKeyCreationTime(?\DateTimeInterface $recoveryKeyCreationTime): self
    {
        $this->recoveryKeyCreationTime = $recoveryKeyCreationTime;

        return $this;
    }

    /**
     * @return Collection|File[]
     */
    public function getFiles(): Collection
    {
        return $this->files;
    }

    public function getDocFiles()
    {
        $filtered = $this->files->filter(function(File $file){return $file->getIsDoc()===true;});
        $finalArray = [];
        foreach($filtered as $item){
            $finalArray[] = $item;
        }
        return $finalArray;
    }

    public function addFile(File $file): self
    {
        if (!$this->files->contains($file)) {
            $this->files[] = $file;
            $file->setUser($this);
        }

        return $this;
    }

    public function removeFile(File $file): self
    {
        if ($this->files->contains($file)) {
            $this->files->removeElement($file);
            // set the owning side to null (unless already changed)
            if ($file->getUser() === $this) {
                $file->setUser(null);
            }
        }

        return $this;
    }

    public function getProfilePicture(): ?File
    {
        return $this->profilePicture;
    }

    public function setProfilePicture(?File $profilePicture): self
    {
        $this->profilePicture = $profilePicture;

        return $this;
    }

    public function getCoverPicture(): ?File
    {
        return $this->coverPicture;
    }

    public function setCoverPicture(?File $coverPicture): self
    {
        $this->coverPicture = $coverPicture;

        return $this;
    }


    /**
     * @return Collection|UserNotificationUrl[]
     */
    public function getUserNotificationUrls(): Collection
    {
        return $this->userNotificationUrls;
    }

    public function addUserNotificationUrl(UserNotificationUrl $userNotificationUrl): self
    {
        if (!$this->userNotificationUrls->contains($userNotificationUrl)) {
            $this->userNotificationUrls[] = $userNotificationUrl;
            $userNotificationUrl->setUser($this);
        }

        return $this;
    }

    public function removeUserNotificationUrl(UserNotificationUrl $userNotificationUrl): self
    {
        if ($this->userNotificationUrls->contains($userNotificationUrl)) {
            $this->userNotificationUrls->removeElement($userNotificationUrl);
            // set the owning side to null (unless already changed)
            if ($userNotificationUrl->getUser() === $this) {
                $userNotificationUrl->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|OfferedService[]
     */
    public function getOfferedServicesRelations(): Collection
    {
        return $this->offeredServicesRelations;
    }

    public function addOfferedServicesRelation(OfferedService $offeredServicesRelation): self
    {
        if (!$this->offeredServicesRelations->contains($offeredServicesRelation)) {
            $this->offeredServicesRelations[] = $offeredServicesRelation;
            $offeredServicesRelation->setUser($this);
        }

        return $this;
    }

    public function removeOfferedServicesRelation(OfferedService $offeredServicesRelation): self
    {
        if ($this->offeredServicesRelations->contains($offeredServicesRelation)) {
            $this->offeredServicesRelations->removeElement($offeredServicesRelation);
            // set the owning side to null (unless already changed)
            if ($offeredServicesRelation->getUser() === $this) {
                $offeredServicesRelation->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|ProjectPartner[]
     */
    public function getProjectsRelations(): Collection
    {
        return $this->projectsRelations;
    }

    public function addProjectsRelation(ProjectPartner $projectsRelation): self
    {
        if (!$this->projectsRelations->contains($projectsRelation)) {
            $this->projectsRelations[] = $projectsRelation;
            $projectsRelation->setPartner($this);
        }

        return $this;
    }

    public function removeProjectsRelation(ProjectPartner $projectsRelation): self
    {
        if ($this->projectsRelations->contains($projectsRelation)) {
            $this->projectsRelations->removeElement($projectsRelation);
            // set the owning side to null (unless already changed)
            if ($projectsRelation->getPartner() === $this) {
                $projectsRelation->setPartner(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Service[]
     */
    public function getInterests(): Collection
    {
        return $this->interests;
    }

    public function addInterest(Service $interest): self
    {
        if (!$this->interests->contains($interest)) {
            $this->interests[] = $interest;
        }

        return $this;
    }

    public function removeInterest(Service $interest): self
    {
        if ($this->interests->contains($interest)) {
            $this->interests->removeElement($interest);
        }

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
            $positionUserInterest->setUser($this);
        }

        return $this;
    }

    public function removePositionUserInterest(PositionUserInterest $positionUserInterest): self
    {
        if ($this->positionUserInterests->contains($positionUserInterest)) {
            $this->positionUserInterests->removeElement($positionUserInterest);
            // set the owning side to null (unless already changed)
            if ($positionUserInterest->getUser() === $this) {
                $positionUserInterest->setUser(null);
            }
        }

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): self
    {
        $this->name = $name;

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

    public function getWebsite(): ?string
    {
        return $this->website;
    }

    public function setWebsite(?string $website): self
    {
        $this->website = $website;

        return $this;
    }

    public function getPortfolioProjects(){
        return $this->getProjectsRelations()->map(function(ProjectPartner $projectPartner){ return $projectPartner->getProject();})->filter(function(Project $project){return $project->getIsPortfolio();});
    }

    public function getProjects(){
        return $this->getProjectsRelations()->map(function(ProjectPartner $projectPartner){ return $projectPartner->getProject();})->filter(function(Project $project){return $project->getIsPortfolio()===false;});
    }

    public function getAllProjects(){
        return $this->getProjectsRelations()->map(function(ProjectPartner $projectPartner){ return $projectPartner->getProject();});
    }

    public function getServices(): Collection
    {
        return $this->collaborations->filter(function(Collaboration $collaboration){
            return $collaboration->getPositions()->filter(function(Position $position){
                return ($position->getIsOpen()===true);
            })->isEmpty();
        });
    }

    public function getActiveCollaborations(): Collection
    {
        return $this->collaborations->filter(function(Collaboration $collaboration) {
            return !$collaboration->getPositions()->filter(function (Position $position) {
                return ($position->getIsOpen() === true);
            })->isEmpty();
        });
    }


    public function getProfileName(): ?string
    {
        return $this->profileName;
    }

    public function setProfileName(string $profileName): self
    {
        $this->profileName = $profileName;

        return $this;
    }

    public function getProfileId(): ?int
    {
        return $this->profileId;
    }

    public function setProfileId(?int $profileId): self
    {
        $this->profileId = $profileId;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(?string $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getTelephone(): ?string
    {
        return $this->telephone;
    }

    public function setTelephone(?string $telephone): self
    {
        $this->telephone = $telephone;

        return $this;
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

    public function addCollaboration(Collaboration $collaboration): self
    {
        if (!$this->collaborations->contains($collaboration)) {
            $this->collaborations[] = $collaboration;
            $collaboration->setUser($this);
        }

        return $this;
    }

    public function removeCollaboration(Collaboration $collaboration): self
    {
        if ($this->collaborations->contains($collaboration)) {
            $this->collaborations->removeElement($collaboration);
            // set the owning side to null (unless already changed)
            if ($collaboration->getUser() === $this) {
                $collaboration->setUser(null);
            }
        }

        return $this;
    }

    public function getFacebook(): ?string
    {
        return $this->facebook;
    }

    public function setFacebook(?string $facebook): self
    {
        $this->facebook = $facebook;

        return $this;
    }

    public function getLinkedin(): ?string
    {
        return $this->linkedin;
    }

    public function setLinkedin(?string $linkedin): self
    {
        $this->linkedin = $linkedin;

        return $this;
    }

    public function getTwitter(): ?string
    {
        return $this->twitter;
    }

    public function setTwitter(?string $twitter): self
    {
        $this->twitter = $twitter;

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

    public function getLocalLanguageDescription(): ?string
    {
        return $this->localLanguageDescription;
    }

    public function setLocalLanguageDescription(?string $localLanguageDescription): self
    {
        $this->localLanguageDescription = $localLanguageDescription;

        return $this;
    }

    public function getProfileData(){
        return [
            "id" => $this->id,
            "email" => $this->email,
            "roles" => $this->getRoles(),
            "profileName" => $this->profileName,
            "language" => $this->language
        ];
    }

    public function getCollaborations(){
        return $this->collaborations;
    }

    public function isAssociation(): bool
    {
        return $this->isAssociation;
    }

    public function setIsAssociation(bool $isAssociation): void
    {
        $this->isAssociation = $isAssociation;
    }

}
