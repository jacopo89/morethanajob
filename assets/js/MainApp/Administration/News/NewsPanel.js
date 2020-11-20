import React from "react";
import {manipulateWebsite} from "../../Profile/Profile";
import {bordeaux, FlexBetweenDiv} from "../../../styledComponents/CustomComponents";
import styled from "styled-components";
import {List, FlexboxGrid, Icon, Grid, Row, Col} from "rsuite";
import {newsSelectData} from "../../../selectData";

export default function NewsPanel({news}){

    const links = news.links.map((link,index)=> <div key={index}>
        <a target="_blank" href={manipulateWebsite(link)}> {link}</a>
    </div> )

    const typeElement = newsSelectData.find(item => item.value ===news.type);

    const type = (typeElement) ? typeElement.value :"";

    return <div>
        <Grid fluid>
            <Row>
                <Col xs={24}>
                    <FlexBetweenDiv>
                        <Title>{news.title}</Title><h5>{type.label}</h5>
                    </FlexBetweenDiv>
                </Col>
            </Row><Row>
                <Col xs={2}>
                </Col>
                <Col xs={22}>
                    {news.text}
                </Col>
            </Row>
            <Row>
                <Col xs={2}>
                </Col>
                <Col xs={22}>
                    {links.length!==0 && <h5>Links</h5>}
                    {links}
                </Col>
            </Row>
            <Row>
                <Col xs={2}>
                </Col>
                <Col xs={22}>
                    {news.files.length!==0 && <h5>Files</h5>}
                    <FileList data={news.files}/>
                </Col>
            </Row>
        </Grid>
    </div>
}


const Title = styled.h3`
color: ${bordeaux};
`


export function FileList({data}){

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
