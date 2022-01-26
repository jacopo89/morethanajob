<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Model\NewsDTO;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\NumericFilter;

/**
 * @ApiResource(attributes={"order"={"creationTime": "DESC"}})
 * @ApiFilter(NumericFilter::class, properties={"type"})
 * @ORM\Entity(repositoryClass="App\Repository\NewsRepository")
 */
class News
{


    const PROJECT_NEWS = 1;
    const RELEVANT_PUBLICATIONS = 2;
    const PROJECT_DISSEMINATION_MATERIAL_RESOURCES = 3;
    const FUNDING_OPPORTUNITIES = 4;
    const VIDEO_TUTORIAL = 5;
    const COMMUNICATION_TOOLS = 6;
    const TRAINING_MATERIALS = 7;
    const POLICY_BRIEFS = 8;
    const SUBGRANTED_PROJECTS = 9;

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="text")
     */
    private $text;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $link;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $videoLink;

    /**
     * @ORM\Column(type="datetime_immutable")
     */
    private $creationTime;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\File", mappedBy="news", cascade={"persist", "remove"})
     */
    private $files;



    /**
     * @ORM\Column(type="integer")
     */
    private $type;

    /**
     * @ORM\OneToOne(targetEntity=File::class, cascade={"persist", "remove"})
     */
    private $image;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getText(): ?string
    {
        return $this->text;
    }

    public function setText(string $text): self
    {
        $this->text = $text;

        return $this;
    }

    /**
     * Specify data which should be serialized to JSON
     * @link https://php.net/manual/en/jsonserializable.jsonserialize.php
     * @return mixed data which can be serialized by <b>json_encode</b>,
     * which is a value of any type other than a resource.
     * @since 5.4.0
     */
    public function jsonSerialize()
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'text' => $this->text,
            'link' => $this->link,
            'videoLink' => $this->videoLink,
            'type' => $this->type,
            'creationTime' => $this->creationTime,
            'files' =>$this->files,
            'image' =>$this->image
        ];
    }

    private function __construct(string $title, string $text, string $link, int $type, string $videoLink)
    {
        $this->title = $title;
        $this->text = $text;
        $this->link = $link;
        $this->videoLink = $videoLink;
        $this->creationTime = new \DateTimeImmutable();
        $this->files = new ArrayCollection();
        if($type){
            $this->type = $type;
        }else{
            $this->type = self::PROJECT_NEWS;
        }
    }

    public static function createFromDTO(NewsDTO $newsDTO){
        return new self($newsDTO->getTitle(),$newsDTO->getText(), $newsDTO->getLink(), $newsDTO->getType(), $newsDTO->getVideoLink());
    }

    public function getCreationTime(): ?\DateTimeImmutable
    {
        return $this->creationTime;
    }

    public function setCreationTime(\DateTimeImmutable $creationTime): self
    {
        $this->creationTime = $creationTime;

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

    /**
     * @return Collection|File[]
     */
    public function getFiles(): Collection
    {
        return $this->files;
    }

    public function addFile(File $file): self
    {
        if (!$this->files->contains($file)) {
            $this->files[] = $file;
            $file->setNews($this);
        }

        return $this;
    }

    public function removeFile(File $file): self
    {
        if ($this->files->contains($file)) {
            $this->files->removeElement($file);
            // set the owning side to null (unless already changed)
            if ($file->getNews() === $this) {
                $file->setNews(null);
            }
        }

        return $this;
    }

    public function getType(): ?int
    {
        return $this->type;
    }

    public function setType(int $type): self
    {
        $this->type = $type;

        return $this;
    }


    public function getLink(): ?string
    {
        return $this->link;
    }


    public function setLink(string $link): void
    {
        $this->link = $link;
    }


    /**
     * @return string
     */
    public function getVideoLink(): ?string
    {
        return $this->videoLink;
    }

    /**
     * @param string $videoLink
     */
    public function setVideoLink(?string $videoLink): void
    {
        $this->videoLink = $videoLink;
    }

    public function getImage(): ?File
    {
        return $this->image;
    }

    public function setImage(?File $image): self
    {
        $this->image = $image;

        return $this;
    }
}
