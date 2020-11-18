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

    private $links;

    private $type;

    public function __construct(string $title, string $text, array $links, int $type)
    {
        $this->title = $title;
        $this->text = $text;
        $this->links = $links;
        $this->type = $type;
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
     * @return array
     */
    public function getLinks(): ?array
    {
        return $this->links;
    }

    /**
     * @return int
     */
    public function getType(): int
    {
        return $this->type;
    }




}