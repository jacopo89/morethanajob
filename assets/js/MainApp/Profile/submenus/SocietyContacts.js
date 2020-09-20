import React, {useEffect} from "react";
import {Grid, Col, Button, Icon, Row} from "rsuite";
import styled from "styled-components";
import {bordeaux, IconSpan} from "../../../styledComponents/CustomComponents";
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
       <Grid>
           <Row>
               <Col xs={2}><Icon style={iconStyle} icon="globe" size="3x" /></Col>
               <Col xs={6}>
                   <div style={iconStyle}>
                       <a target="_blank" href={userInfo && userInfo.website}> {userInfo && userInfo.website}</a>
                   </div>

               </Col>
               <Col xs={2}><Icon style={iconStyle} icon="envelope" size="3x" /></Col>
               <Col xs={6}>
                   <div style={textStyle}>
                       {userInfo && userInfo.email}
                   </div>

               </Col>
               <Col xs={2}><Icon style={iconStyle} icon="phone-square" size="3x" /></Col>
               <Col xs={6}>
                   <div style={textStyle}>
                       {userInfo && userInfo.telephone}
                   </div>
               </Col>
           </Row>
           <Row>
               <Col xs={2}><Icon style={iconStyle} icon="facebook-square" size="3x" /></Col>
               <Col xs={6}>
                   <div style={textStyle}>
                       {userInfo && userInfo.facebook}
                   </div>
               </Col>
               <Col xs={2}><Icon style={iconStyle} icon="linkedin-square" size="3x" /></Col>
               <Col xs={6}>
                   <div style={textStyle}>
                       {userInfo && userInfo.linkedin}
                   </div>
               </Col>
               <Col xs={2}><Icon style={iconStyle} icon="twitter-square" size="3x" /></Col>
               <Col xs={6}>
                   <div style={textStyle}>
                       {userInfo && userInfo.twitter}
                   </div>
               </Col>
           </Row>
       </Grid>
       {table}
   </>
}

const iconStyle = {
    color:bordeaux, justifyContent:"center", display:"flex", height:100, alignItems:"center"
}

const textStyle = {
    justifyContent:"start", display:"flex", height:100, alignItems:"center"
}








