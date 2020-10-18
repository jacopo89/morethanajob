<?php
/**
 * Created by PhpStorm.
 * User: jacop
 * Date: 10/8/2020
 * Time: 5:55 PM
 */

namespace App\Model;


class ProjectDTO
{
    /**
     * @var string
     */
    private $title;

    /**
     * @var string
     */
    private $shortDescription;

    /**
     * @var string
     */
    private $longDescription;

    /**
     * @var boolean
     */
    private $isPortfolio;

    /**
     * @var array
     */
    private $links;

    /**
     * @var array
     */
    private $contacts;

    /**
     * @var string
     */
    private $localTitle;

    /**
     * @var string
     */
    private $localShortDescription;

    /**
     * @var string
     */
    private $localLongDescription;

    /**
     * @var string
     */
    private $language;



}