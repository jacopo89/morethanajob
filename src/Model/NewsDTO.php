<?php
/**
 * Created by PhpStorm.
 * User: jacop
 * Date: 10/17/2020
 * Time: 3:00 PM
 */

namespace App\Model;


class NewsDTO
{
    private $title;

    private $text;

    private $link;

    private $videoLink;

    private $type;

    public function __construct(string $title, string $text, string $link, int $type, string $videoLink)
    {
        $this->title = $title;
        $this->text = $text;
        $this->link = $link;
        $this->type = $type;
        $this->videoLink= $videoLink;
    }

    /**
     * @return string
     */
    public function getTitle(): ?string
    {
        return $this->title;
    }



    /**
     * @return string
     */
    public function getText(): ?string
    {
        return $this->text;
    }

    /**
     * @return string
     */
    public function getLink(): ?string
    {
        return $this->link;
    }

    /**
     * @return int
     */
    public function getType(): int
    {
        return $this->type;
    }

    /**
     * @return string
     */
    public function getVideoLink(): string
    {
        return $this->videoLink;
    }




}
