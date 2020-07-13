import React from "react";
import {Icon} from "rsuite";
import styled from "styled-components";
import {bordeaux} from "../../../styledComponents/CustomComponents";

export default function SocietyContacts({society}){
   return <>
       <div style={{display: "flex", justifyContent: "space-around", height:100}}>
           <IconSpan><Icon style={{color:bordeaux}} icon="globe" size="3x" /> {society.website}</IconSpan>
           <IconSpan><Icon style={{color:bordeaux}} icon="envelope" size="3x" /> {society.email}</IconSpan>
       </div>
       <div style={{display: "flex", justifyContent: "space-around", height:100}}>
           <IconSpan><Icon style={{color:bordeaux}} icon="facebook-square" size="3x"/>{society.facebook}</IconSpan>
           <IconSpan><Icon style={{color:bordeaux}} icon="linkedin-square" size="3x"/> {society.linkedin}</IconSpan>
           <IconSpan><Icon style={{color:bordeaux}} icon="twitter-square" size="3x" />{society.twitter}</IconSpan> </div>
   </>
}


export const IconSpan = styled.span`
    display: flex;
    align-items: center;
    width: 35%;
    justify-content: space-evenly;`;





