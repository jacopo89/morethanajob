import React, {useState} from "react";
import {Button, Col, Form, Grid, Icon, Nav, Navbar, Panel, PanelGroup, Row} from "rsuite";
import {useHistory} from "react-router-dom";
import * as Routes from '../routes'
import {Body, bordeaux, gray} from "../styledComponents/CustomComponents";
import styled from "styled-components";
import TextField from "../Login/Components/TextField";
import "./dashboard.css";

export default function Dashboard(){
    const history = useHistory();

    const [readMore, setReadMore] = useState(false);

    const panelStyle = {width: "85%", borderRadius:"20px", backgroundColor:"white", margin:"0 auto", padding:20, marginTop:20}

    return <>
        <Navbar id="dashboard" appearance="inverse" style={{backgroundColor:"transparent", color:"white"}} >
            <Navbar.Body>
                <Nav>
                    <Nav.Item eventKey="1" icon={<Icon icon="home" />}>
                        Home
                    </Nav.Item>
                    <Nav.Item href="#aboutUs"  eventKey="2">About us</Nav.Item>
                    <Nav.Item  eventKey="3">Categories</Nav.Item>
                    <Nav.Item  eventKey="3">FAQ</Nav.Item>
                    <Nav.Item  eventKey="3">Contact us</Nav.Item>
                </Nav>
                <Nav pullRight>
                    <Nav.Item onClick={()=>history.push(Routes.login)} icon={<Icon icon="cog" />}>Login</Nav.Item>
                    <Nav.Item onClick={()=>history.push(Routes.registration)} icon={<Icon icon="cog" />}>Register</Nav.Item>
                </Nav>
            </Navbar.Body>
        </Navbar>
        <Body style={{backgroundColor:"transparent", maxWidth:"none"}}>
            <Panel shaded style={panelStyle}>
                <Grid fluid>
                    <Row className="show-grid">
                        <Col xs={12}>
                            <h4>MoreThanAJob Portal</h4>
                            <h5>An integrated offer of services for the well-being of the community </h5>
                            <p>
                                This portal is a multilingual interactive space aiming at fostering dialogue and cooperation between SSE actors and public administrations for the development and delivery of services supporting the social and labour inclusion of vulnerable groups.
                                Our main aim is to provide a simple and complete overview of the existing services and opportunities to support the social and employment inclusion offered in the project partners’ territories. It is also possible to find opportunities of collaboration for the co-development and implementation of new services and opportunities on social and labour inclusion.
                            </p>
                            <Button onClick={()=>history.push(Routes.projectPage)}>Find the Service</Button>
                        </Col>
                        <Col xs={12}>
                            Col2
                        </Col>
                    </Row>
                </Grid>
            </Panel>
            <Panel shaded style={panelStyle} id="aboutUs">
                <Title>
                ABOUT US
                </Title>
                <Grid fluid>
                    <Row className="show-grid">
                        <p>
                            This portal is developed as part of the ENI CBC MED project “MoreThanAJob - Reinforcing social and solidarity economy for the unemployed, uneducated and refugees” aiming at fostering the social and labour inclusion of vulnerable groups through a stronger cooperation between SSE actors and public administrations.
                        </p>
                        <Button onClick={()=>setReadMore(!readMore)}>Read more</Button>
                        {readMore &&
                            <>
                                <p>
                                    The MoreThanAJob project aims at enhancing the development of cooperation mechanism between the Social and Solidarity Economy (SSE) and the public administration to improve the social services for vulnerable groups in order to increase their opportunities of social and labour inclusion.
                                    Improving the cooperation between these two main actors and their different realities will foster the development of innovative and more effective services able to respond to the social and economic challenges of our societies, particularly in the aftermath of the Covid19 emergency. Indeed, this emergency has highlighted how a solid welfare system is essential to protect the weaker segments, ensure fairer societies and that each citizen has the same rights and opportunities.
                                    MoreThanAJob will bring a change in the way SSE actors and public institutions work together for services provision to vulnerable groups through the development of a framework of new social pilot schemes as well as the development of policy briefs and suggestions improving the planning of policies adapted to the needs of the target groups.
                                    The project is funded by the ENI CBC Programme 2014-2020 and involves partners from five different countries: Palestine, Jordan, Lebanon, Greece and Italy.
                                </p>
                                <SmallTitle>Main Activities</SmallTitle>
                                <p>

                                    Report of international good practices for effective cooperation between SSE and public administration to reinforce social inclusion of vulnerable groups as unemployed, low-skilled people and refugees
                                    Development of MoreThanAJob Framework by adapting international good practices to local features
                                    Training seminars to SSE actors and public administration representatives
                                    Financial support to SSE actors to implement innovative private-public cooperation initiatives
                                    Recommendations for translation of the MoreThanAJob framework in effective programmes and policies at national level
                                    MoreThanAJob portal as online cooperation space between the different stakeholders
                                </p>
                                <SmallTitle>Social and Solidarity Economy</SmallTitle>
                                <p>
                                    The expression Social and Solidarity Economy is increasingly being used to refer to a broad range of organisations that are distinguished from conventional economy actors by two core features: they have explicit economic and social objectives and they involve varying forms of co-operative, associative and solidarity relations. They include, for example, NGOs, cooperatives, mutual societies, foundations, social enterprises, fair trade organisations or other similar companies and organisations.
                                </p>
                                <SmallTitle>Partners</SmallTitle>
                                <ul>
                                    <li>
                                        Coordinator
                                        An-Najah National University – Palestine
                                        https://www.najah.edu/ar/
                                    </li>
                                    <li>
                                        Nablus chamber of commerce and industry – Palestine
                                        http://nablus-chamber.org/
                                    </li>
                                    <li>
                                        Ministry of Public Works & Housing – Jordan
                                        Mutah University – Jordan
                                        https://mutah.edu.jo/Home.aspx
                                    </li>
                                    <li>
                                        Business Consultancy and Training Services – Lebanon
                                        http://bctslb.com/
                                    </li>
                                    <li>
                                        CESIE – Italy
                                        www.cesie.org
                                    </li>
                                    <li>
                                        Eurotraining Educational Organization SA – Greece
                                        https://www.eurotraining.gr/
                                    </li>
                                </ul>
                            </>}
                    </Row>
                </Grid>

            </Panel>
            <Panel shaded style={panelStyle}>
                <Title>Categories</Title>
                <div style={{display:"flex", justifyContent:"space-around"}}>
                    <IconTextBox>
                        <img width={75} src="/icons/ico1.png"/>
                        <p>Family and income support</p>
                    </IconTextBox>
                    <IconTextBox>
                        <img width={75} src="/icons/ico2.png"/>
                        <p>Family and income support</p>
                    </IconTextBox>
                    <IconTextBox>
                        <img width={75} src="/icons/ico3.png"/>
                        <p>Family and income support</p>
                    </IconTextBox>
                    <IconTextBox>
                        <img width={75} src="/icons/ico4.png"/>
                        <p>Family and income support</p>
                    </IconTextBox>
                    <IconTextBox>
                        <img width={75} src="/icons/ico5.png"/>
                        <p>Family and income support</p>
                    </IconTextBox>

                </div>

            </Panel>
            <Panel shaded style={panelStyle}>
                <Title>FAQ</Title>
                <PanelGroup accordion bordered>
                    <Panel header="Does this course need special requirements?" defaultExpanded>
                        No. It is a standard course.
                    </Panel>
                    <Panel header="Panel 2">
                        Domanda2
                    </Panel>
                    <Panel header="Panel 3">
                        Domanda 3
                    </Panel>
                </PanelGroup>
            </Panel>
            <Panel shaded style={panelStyle}>
                <Title>Contattaci</Title>
                <Form fluid>
                    <TextField name="name" placeHolder="Name" />
                    <TextField name="surname" placeHolder="Surname" />
                    <TextField name="message" placeHolder="Message" componentClass="textarea" />
                    <Button style={{float:"right", backgroundColor:bordeaux, color:"white"}}>Submit message </Button>

                </Form>
            </Panel>

        </Body>
    </>

}


const Title = styled.h5`color:${bordeaux}; text-align:center; margin:10px`;
const SmallTitle = styled.h6`color:${bordeaux}; margin:10px`;


const DesktopDiv = styled.div`position: absolute;  width: 100vw; min-height:100%;`;
const Box = styled.div`width: 85%; border-radius:20px; background-color:whitesmoke; margin:0 auto; padding:20; margin-top:20`;
const IconTextBox = styled.div`display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 158px;`;
