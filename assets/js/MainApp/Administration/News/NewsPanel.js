import React from "react";
import {manipulateWebsite} from "../../Profile/Profile";
import {bordeaux} from "../../../styledComponents/CustomComponents";
import styled from "styled-components";

export default function NewsPanel({news}){

    const links = news.links.map((link,index)=> <div>
        <a href={manipulateWebsite(link)}> {link}</a>
    </div> )

    return <div>
        <Title>{news.title}</Title>
        <div>
            {news.text}
        </div>
        <div>
            {links}
        </div>

    </div>
}


const Title = styled.h3`
color: ${bordeaux};
`
