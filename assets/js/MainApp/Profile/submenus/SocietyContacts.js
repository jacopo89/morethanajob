import React, {useEffect} from "react";
import {Button, Icon} from "rsuite";
import styled from "styled-components";
import {bordeaux} from "../../../styledComponents/CustomComponents";
import {useGetUserInfo, useGetUserInfoByEmail} from "../../../Backend/hooks/UserInfo";

export default function SocietyContacts({society}){
    const [userInfo, getUserInfoHandler] = useGetUserInfoByEmail();
    useEffect(()=>{
        getUserInfoHandler(society.email);
    },[])

    const fileList = userInfo && userInfo.files.map((file)=><Button href={file.url}>{file.filename}</Button>);
   return <>
       <div style={{display: "flex", justifyContent: "space-around", height:100}}>
           <IconSpan><Icon style={{color:bordeaux}} icon="globe" size="3x" /> {userInfo && userInfo.website}</IconSpan>
           <IconSpan><Icon style={{color:bordeaux}} icon="envelope" size="3x" /> {userInfo && userInfo.email}</IconSpan>
       </div>
       <div style={{display: "flex", justifyContent: "space-around", height:100}}>
           <IconSpan><Icon style={{color:bordeaux}} icon="facebook-square" size="3x"/>{userInfo && userInfo.facebook}</IconSpan >
           <IconSpan><Icon style={{color:bordeaux}} icon="linkedin-square" size="3x"/> {userInfo && userInfo.linkedin}</IconSpan>
           <IconSpan><Icon style={{color:bordeaux}} icon="twitter-square" size="3x" />{userInfo && userInfo.twitter}</IconSpan> </div>

       <div>
           {fileList}
           </div>
   </>
}


export const IconSpan = styled.span`
    display: flex;
    align-items: center;
    width: 35%;
    justify-content: space-evenly;`;





