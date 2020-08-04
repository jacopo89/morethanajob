import React, {useEffect} from "react";
import {Button, Icon} from "rsuite";
import styled from "styled-components";
import {bordeaux} from "../../../styledComponents/CustomComponents";
import {useGetUserInfo, useGetUserInfoByEmail} from "../../../Backend/hooks/UserInfo";
import {GenericTable} from "../../../ReusableComponents/GenericTable";

export default function SocietyContacts({society}){
    const [userInfo, getUserInfoHandler] = useGetUserInfoByEmail();
    useEffect(()=>{
        getUserInfoHandler(society.email);
    },[])


    const actionRender= (rowData) => {

        return (
                    <Button href={rowData.url}>Download</Button>
        );
    }
    const modelData = [
        {label:"File", dataKey: "filename"},
        {label:"download", render:actionRender}
    ]


    const table = userInfo ? <GenericTable rowKey="id" modelData={modelData} propData={userInfo.files} /> :<div></div>

   return <>
       <div style={{display: "flex", justifyContent: "space-around", height:100}}>
           <IconSpan><a target="_blank" href={userInfo && userInfo.website}><Icon style={{color:bordeaux}} icon="globe" size="3x" /> {userInfo && userInfo.website}</a></IconSpan>
           <IconSpan><Icon style={{color:bordeaux}} icon="envelope" size="3x" /> {userInfo && userInfo.email}</IconSpan>
       </div>
       <div style={{display: "flex", justifyContent: "space-around", height:100}}>
           <IconSpan><a target="_blank" href={userInfo && userInfo.facebook}><Icon style={{color:bordeaux}} icon="facebook-square" size="3x"/>{userInfo && userInfo.facebook}</a ></IconSpan>
           <IconSpan><a target="_blank" href={userInfo && userInfo.linkedin}><Icon style={{color:bordeaux}} icon="linkedin-square" size="3x"/> {userInfo && userInfo.linkedin}</a></IconSpan>
           <IconSpan><a target="_blank" href={userInfo && userInfo.twitter}><Icon style={{color:bordeaux}} icon="twitter-square" size="3x" />{userInfo && userInfo.twitter}</a></IconSpan> </div>
       {table}
   </>
}


export const IconSpan = styled.span`
    display: flex;
    align-items: center;
    width: 35%;
    justify-content: space-evenly;`;





