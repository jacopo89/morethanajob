import React from "react";
import {manipulateWebsite} from "../../Profile/Profile";

export default function NewsPanel({news}){

    const links = news.links.map((link,index)=> <div>
        <a href={manipulateWebsite(link)}> {link}</a>
    </div> )

    return <div>
        <h3>{news.title}</h3>
        <div>
            {news.text}
        </div>
        <div>
            {links}
        </div>

    </div>
}


