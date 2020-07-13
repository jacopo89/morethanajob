<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CategoryRepository")
 */
class Category
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
     * @ORM\ManyToOne(targetEntity="App\Entity\Category", inversedBy="childrenCategories")
     */
    private $parentCategory;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Category", mappedBy="parentCategory")
     */
    private $childrenCategories;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\File", cascade={"persist", "remove"})
     */
    private $picture;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Collaboration", mappedBy="category")
     */
    private $collaborations;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Project", mappedBy="category")
     */
    private $projects;

    public function __construct()
    {
        $this->childrenCategories = new ArrayCollection();
        $this->collaborations = new ArrayCollection();
        $this->projects = new ArrayCollection();
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

    public function getParentCategory(): ?self
    {
        return $this->parentCategory;
    }

    public function setParentCategory(?self $parentCategory): self
    {
        $this->parentCategory = $parentCategory;

        return $this;
    }

    /**
     * @return Collection|self[]
     */
    public function getChildrenCategories(): Collection
    {
        return $this->childrenCategories;
    }

    public function addChildrenCategory(self $childrenCategory): self
    {
        if (!$this->childrenCategories->contains($childrenCategory)) {
            $this->childrenCategories[] = $childrenCategory;
            $childrenCategory->setParentCategory($this);
        }

        return $this;
    }

    public function removeChildrenCategory(self $childrenCategory): self
    {
        if ($this->childrenCategories->contains($childrenCategory)) {
            $this->childrenCategories->removeElement($childrenCategory);
            // set the owning side to null (unless already changed)
            if ($childrenCategory->getParentCategory() === $this) {
                $childrenCategory->setParentCategory(null);
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
            $collaboration->setCategory($this);
        }

        return $this;
    }

    public function removeCollaboration(Collaboration $collaboration): self
    {
        if ($this->collaborations->contains($collaboration)) {
            $this->collaborations->removeElement($collaboration);
            // set the owning side to null (unless already changed)
            if ($collaboration->getCategory() === $this) {
                $collaboration->setCategory(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Project[]
     */
    public function getProjects(): Collection
    {
        return $this->projects;
    }

    public function addProject(Project $project): self
    {
        if (!$this->projects->contains($project)) {
            $this->projects[] = $project;
            $project->setCategory($this);
        }

        return $this;
    }

    public function removeProject(Project $project): self
    {
        if ($this->projects->contains($project)) {
            $this->projects->removeElement($project);
            // set the owning side to null (unless already changed)
            if ($project->getCategory() === $this) {
                $project->setCategory(null);
            }
        }

        return $this;
    }
}
