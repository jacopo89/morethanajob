import React, {useEffect} from "react";
import {Grid, Col, Button, Icon, Row, FlexboxGrid, List} from "rsuite";
import styled from "styled-components";
import {bordeaux, IconSpan} from "../../../styledComponents/CustomComponents";
import {useGetUserInfo, useGetUserInfoByEmail} from "../../../Backend/hooks/UserInfo";
import {GenericTable} from "../../../ReusableComponents/GenericTable";
import Divider from "rsuite/es/Divider/Divider";
import {manipulateMail, manipulateWebsite} from "../Profile";
import FileList from "../../../ReusableComponents/FileList";

export default function SocietyContacts({society}){
    const [userInfo, getUserInfoHandler] = useGetUserInfoByEmail();
    useEffect(()=>{
        getUserInfoHandler(society.email);
    },[])



    const list = userInfo ? <FileList data={userInfo.files} /> : <div></div>;


   return <>
       <Grid fluid>
           <Row>
               <Col xs={6} md={2}><Icon style={iconStyle} icon="globe" size="3x" /></Col>
               <Col xs={18} md={6}>
                   <div style={textStyle}>
                       <a style={{wordBreak:"break-word"}} target="_blank" href={userInfo && manipulateWebsite(userInfo.website)}> {userInfo && userInfo.website}</a>
                   </div>

               </Col>
               <Col xs={6} md={2}><Icon style={iconStyle} icon="envelope" size="3x" /></Col>
               <Col xs={18} md={6}>
                   <div style={textStyle}>
                       <a style={{wordBreak:"break-word"}} href={userInfo && manipulateMail(userInfo.email)}> {userInfo && userInfo.email}</a>
                   </div>

               </Col>
               <Col xs={6} md={2}><Icon style={iconStyle} icon="phone-square" size="3x" /></Col>
               <Col xs={18} md={6}>
                   <div style={textStyle}>

                       {userInfo && userInfo.telephone}
                   </div>
               </Col>
           </Row>
           <Row>
               <Col xs={6} md={2}><Icon style={iconStyle} icon="facebook-square" size="3x" /></Col>
               <Col xs={18} md={6}>
                   <div style={textStyle}>
                       <a style={{wordBreak:"break-word"}} target="_blank" href={userInfo && manipulateWebsite(userInfo.facebook)}> {userInfo && userInfo.facebook}</a>
                   </div>
               </Col>
               <Col xs={6} md={2}><Icon style={iconStyle} icon="linkedin-square" size="3x" /></Col>
               <Col xs={18} md={6}>
                   <div style={textStyle}>
                       <a style={{wordBreak:"break-word"}} target="_blank" href={userInfo && manipulateWebsite(userInfo.linkedin)}> {userInfo && userInfo.linkedin}</a>
                   </div>
               </Col>
               <Col xs={6} md={2}><Icon style={iconStyle} icon="twitter-square" size="3x" /></Col>
               <Col xs={18} md={6}>
                   <div style={textStyle}>
                       <a style={{wordBreak:"break-word"}} target="_blank" href={userInfo && manipulateWebsite(userInfo.twitter)}> {userInfo && userInfo.twitter}</a>
                   </div>
               </Col>
           </Row>
       </Grid>
       <Divider />
       <div style={{padding:40}}>{list}</div>

   </>
}

const iconStyle = {
    color:bordeaux, justifyContent:"center", display:"flex", height:100, alignItems:"center"
}

const textStyle = {
    justifyContent:"start", display:"flex", height:100, alignItems:"center", wordBreak:"break-word"
}



