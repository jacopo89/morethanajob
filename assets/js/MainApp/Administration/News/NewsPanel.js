import React from "react";
import {manipulateWebsite} from "../../Profile/Profile";
import {
    bordeaux, FlexAroundDiv,
    FlexBetweenDiv, fundingOpportunitiesPicture, projectDisseminationPicture,
    projectNewsPicture,
    relevantPublicationsPicture, videoTutorialPicture
} from "../../../styledComponents/CustomComponents";
import styled from "styled-components";
import {List, FlexboxGrid, Icon, Grid, Row, Col} from "rsuite";
import {newsSelectData} from "../../../selectData";
import {
    customNormalizedDateToString,
    getCalendarFormat,
    getDate,
    getTime
} from "../../../ReusableComponents/TimeManager";

export default function NewsPanel({news}){

    const links = <div>
        <a target="_blank" href={manipulateWebsite(news.link)}> {news.link}</a>
    </div> ;

    const typeElement = newsSelectData.find(item => {
        return item.value ===news.type
    });

    const type = (typeElement) ? typeElement.label :"";
    let imageUrl="";
    if(typeElement){
        switch(typeElement.value){
            case 1: imageUrl = projectNewsPicture; break;
            case 2: imageUrl = relevantPublicationsPicture; break;
            case 3: imageUrl = projectDisseminationPicture; break;
            case 4: imageUrl = fundingOpportunitiesPicture; break;
            case 5: imageUrl = videoTutorialPicture; break;
            default: imageUrl = "";
        }
    }else{
        imageUrl = "";
    }


    return <div>
        <Grid fluid>
            <Row>
                <Col xs={6}>
                    <FlexAroundDiv>
                        <img style={{cursor:"pointer"}} width={"100"} src={imageUrl}/>
                    </FlexAroundDiv>
                </Col>
                <Col xs={12}>
                        <a target="_blank" href={manipulateWebsite(news.link)}><Title>{news.title}</Title></a>
                </Col>
                <Col xs={6}></Col>
            </Row>
            <Row>
                <Col xs={6}></Col>
                <Col xs={12}>
                    <FlexBetweenDiv>
                        <h6>{type}</h6>
                        {getDate(news.creationTime)}
                    </FlexBetweenDiv>
                </Col>
                <Col xs={6}></Col>
            </Row>
            <Row>
                <Col xs={6}></Col>
                <Col xs={12}>
                    {news.text}

                </Col>
                <Col xs={6}></Col>
            </Row>
            <Row>
                <Col xs={6}></Col>
                <Col xs={12}>
                    {news.files.length!==0 && <h5>Files</h5>}
                    <FileList data={news.files}/>
                </Col>
                <Col xs={6}></Col>
            </Row>
        </Grid>
    </div>
}


const Title = styled.h4`
color: ${bordeaux};
`


export function FileList({data}){

    const styleCenter = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60px'
    };
    const styleRight = {
        display: 'flex',
        justifyContent: 'flex-end',
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
                    <FlexboxGrid.Item colspan={12} style={{
                        ...styleCenter,
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        overflow: 'hidden'
                    }}>
                        <div style={titleStyle}>{item['filename']}</div>
                    </FlexboxGrid.Item>
                    {/*peak data*/}
                    <FlexboxGrid.Item colspan={12} style={{
                        ...styleRight
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

export function chooseNewsImage(number){
    switch(number){
        case 1: return projectNewsPicture;
        case 2: return relevantPublicationsPicture;
        case 3: return projectDisseminationPicture;
        case 4: return fundingOpportunitiesPicture;
        case 5: return videoTutorialPicture;
        default: return "";
    }
}