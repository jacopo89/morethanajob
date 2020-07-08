import React from "react";
import {Icon} from "rsuite";
import styled from "styled-components";

export default function SocietyContacts({society}){
   return <>
       <div style={{display: "flex", justifyContent: "space-around"}}>
           <IconSpan><Icon icon="globe" size="3x" /> {society.website}</IconSpan>
           <IconSpan><Icon icon="envelope" size="3x" /> {society.email}</IconSpan>
       </div>
       <div style={{display: "flex", justifyContent: "space-around"}}><Icon icon="facebook-square" size="3x"/> <Icon icon="linkedin-square" size="3x"/> <Icon icon="twitter-square" size="3x" /> </div>
   </>
}


export const IconSpan = styled.span`
    display: flex;
    align-items: center;
    width: 35%;
    justify-content: space-evenly;`;





