import React, {useEffect} from "react";
import {Grid, Col, Button, Icon, Row, FlexboxGrid, List} from "rsuite";
import styled from "styled-components";
import {bordeaux, IconSpan} from "../../../styledComponents/CustomComponents";
import {useGetUserInfo, useGetUserInfoByEmail} from "../../../Backend/hooks/UserInfo";
import {GenericTable} from "../../../ReusableComponents/GenericTable";
import Divider from "rsuite/es/Divider/Divider";
import {manipulateWebsite} from "../Profile";

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

    const list = userInfo ? <FileList data={userInfo.files} /> : <div></div>;

    const table = userInfo ? <GenericTable rowKey="id" modelData={modelData} propData={userInfo.files} /> :<div></div>

   return <>
       <Grid>
           <Row>
               <Col xs={2}><Icon style={iconStyle} icon="globe" size="3x" /></Col>
               <Col xs={6}>
                   <div style={iconStyle}>
                       <a target="_blank" href={userInfo && manipulateWebsite(userInfo.website)}> {userInfo && userInfo.website}</a>
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
       <Divider />
       <div style={{padding:40}}>{list}</div>

   </>
}

const iconStyle = {
    color:bordeaux, justifyContent:"center", display:"flex", height:100, alignItems:"center"
}

const textStyle = {
    justifyContent:"start", display:"flex", height:100, alignItems:"center"
}



function FileList({data}){

    const styleCenter = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60px'
    };
    const slimText = {
        fontSize: '0.666em',
        color: '#97969B',
        fontWeight: 'lighter',
        paddingBottom: 5
    };

    const titleStyle = {
        paddingBottom: 5,
        whiteSpace: 'nowrap',
        fontWeight: 500
    };

    const dataStyle = {
        fontSize: '1.2em',
        fontWeight: 500
    };

    return  <List hover>
        {data.map((item,index)=>
            <List.Item key={item['filename']} index={index}>
                <FlexboxGrid>
                    {/*icon*/}
                    {/*base info*/}
                    <FlexboxGrid.Item colspan={6} style={{
                        ...styleCenter,
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        overflow: 'hidden'
                    }}>
                        <div style={titleStyle}>{item['filename']}</div>
                    </FlexboxGrid.Item>
                    {/*peak data*/}
                    <FlexboxGrid.Item colspan={4} style={{
                        ...styleCenter
                    }}>
                        <a target="__blank"  href={item["url"]}>View</a>
                        <span style={{ padding: 5 }}>|</span>
                        <a href={item["url"]} download>Download</a>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </List.Item>
        )}
    </List>
}
