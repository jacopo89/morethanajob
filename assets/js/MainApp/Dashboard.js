import React, {useEffect, useState} from "react";
import {Button, Col, Form, Grid, Icon, Nav, Navbar, Panel, PanelGroup, Row} from "rsuite";
import {useHistory} from "react-router-dom";
import * as Routes from '../routes'
import {Body, bordeaux, gray, MainButton} from "../styledComponents/CustomComponents";
import styled from "styled-components";
import TextField from "../Login/Components/TextField";
import "./dashboard.css";
import {useGetRandomProfiles} from "../Backend/hooks/UserInfo";
import {useGetRandomCollaborations} from "../Backend/hooks/useCollaborations";
import {CollaborationDetail} from "./Profile/submenus/SocietyCollaborations";

export default function Dashboard(){
    const history = useHistory();

    const [readMore, setReadMore] = useState(false);

    const panelStyle = {width: "85%", borderRadius:"20px", backgroundColor:"white", margin:"0 auto", padding:20, marginTop:20}
    const [profiles, getRandomProfilesHandler] = useGetRandomProfiles();
    const [collaborations, getRandomCollaborationsHandler] = useGetRandomCollaborations();


    useEffect(()=>{
        getRandomProfilesHandler();
        getRandomCollaborationsHandler();
    },[]);

    const profilePics = profiles.map((profile)=> <IconTextBox>
        {profile.profilePicture && <img width={75} src={profile.profilePicture.url}/>}
        <a href={`/profile/${profile.profileName}`} >{profile.name}</a>
    </IconTextBox> );

    const collaborationBlocks = collaborations.map(collaboration=><CollaborationDetail collaboration={collaboration} />)

    return <>
        <Navbar id="dashboard" appearance="inverse" style={{backgroundColor:"transparent", color:"white"}} >
            <Navbar.Body>
                <Nav>
                    <Nav.Item href="#home" eventKey="1" icon={<Icon icon="home" />}>
                        Home
                    </Nav.Item>
                    <Nav.Item href="#aboutUs"  eventKey="2">The project</Nav.Item>
                    <Nav.Item href="#services"  eventKey="3">Services and opportunities</Nav.Item>
                    <Nav.Item href="#organisations"  eventKey="4">Organisations</Nav.Item>
                    <Nav.Item href="#FAQ"  eventKey="5">FAQ</Nav.Item>

                </Nav>
                <Nav pullRight>
                    <Nav.Item onClick={()=>history.push(Routes.login)} icon={<Icon icon="cog" />}>Login</Nav.Item>
                    {false && <Nav.Item onClick={()=>history.push(Routes.registration)} icon={<Icon icon="cog" />}>Register</Nav.Item>}
                </Nav>
            </Navbar.Body>
        </Navbar>
        <Body style={{backgroundColor:"transparent", maxWidth:"none"}}>
            <Panel shaded style={panelStyle} >
                <Title id="home">

                </Title>
                <Grid fluid>
                    <Row className="show-grid">
                        <Col xs={12}>
                            <h4 style={{color: bordeaux, margin:10}}>MoreThanAJob Portal</h4>
                            <h5 style={{margin:10}}>An integrated offer of services for the well-being of the community </h5>
                            <p style={{margin:10}}>
                                This portal is a multilingual interactive space aiming at fostering dialogue and cooperation between SSE actors and public administrations for the development and delivery of services supporting the social and labour inclusion of vulnerable groups.
                                Our main aim is to provide a simple and complete overview of the existing services and opportunities to support the social and employment inclusion offered in the project partners’ territories. It is also possible to find opportunities of collaboration for the co-development and implementation of new services and opportunities on social and labour inclusion.
                            </p>
                            <MainButton style={{float:"right", margin:10}} onClick={()=>history.push(Routes.projectPage)}>Find services and opportunities</MainButton>
                        </Col>
                        <Col xs={12}>
                            <div style={{display:"flex", justifyContent:"center"}}>
                            <img width={400} src="/defaults/bg-dashboard.jpg"/>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </Panel>
            <Panel shaded style={panelStyle} id="aboutUs">

                <Grid fluid>
                    <Row className="show-grid">
                        <Col xs={12}>
                            <div style={{display:"flex", justifyContent:"center"}}>
                            <img width={400} src="/defaults/MoreThanAJob_Cover.jpg"/>
                            </div>
                        </Col>
                        <Col xs={12}>
                            <Title id="aboutUs">
                                THE PROJECT
                            </Title>
                            <p>
                                This portal is developed as part of the ENI CBC MED project “MoreThanAJob - Reinforcing social and solidarity economy for the unemployed, uneducated and refugees” aiming at fostering the social and labour inclusion of vulnerable groups through a stronger cooperation between SSE actors and public administrations.
                            </p>
                            <MainButton style={{float:"right", margin:10}} onClick={()=>setReadMore(!readMore)}>Read more</MainButton>
                        </Col>
                    </Row>
                    <Row style={{marginTop: 20}} className="show-grid">


                        {readMore &&
                            <>
                                <p>
                                    The MoreThanAJob project aims at enhancing the development of cooperation mechanism between the Social and Solidarity Economy (SSE) and the public administration to improve the social services for vulnerable groups in order to increase their opportunities of social and labour inclusion.
                                    Improving the cooperation between these two main actors and their different realities will foster the development of innovative and more effective services able to respond to the social and economic challenges of our societies, particularly in the aftermath of the Covid19 emergency. Indeed, this emergency has highlighted how a solid welfare system is essential to protect the weaker segments, ensure fairer societies and that each citizen has the same rights and opportunities.
                                    MoreThanAJob will bring a change in the way SSE actors and public institutions work together for services provision to vulnerable groups through the development of a framework of new social pilot schemes as well as the development of policy briefs and suggestions improving the planning of policies adapted to the needs of the target groups.
                                    The project is funded by the ENI CBC Programme 2014-2020 and involves partners from five different countries: Palestine, Jordan, Lebanon, Greece and Italy.
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
                        <p>Health and counselling services</p>
                    </IconTextBox>
                    <IconTextBox>
                        <img width={75} src="/icons/ico3.png"/>
                        <p>Education and training</p>
                    </IconTextBox>
                    <IconTextBox>
                        <img width={75} src="/icons/ico4.png"/>
                        <p>Career guidance and employment support</p>
                    </IconTextBox>
                    <IconTextBox>
                        <img width={75} src="/icons/ico5.png"/>
                        <p>Culture and participation</p>
                    </IconTextBox>

                </div>

            </Panel>
            <Panel shaded style={panelStyle}>
                <Title id="organisations">Organisations</Title>
                <div style={{display:"flex", justifyContent:"space-around"}}>
                    {profilePics}

                </div>

            </Panel>

            <Panel shaded style={panelStyle}>
                <Title id="services">Services and opportunities</Title>
                {collaborationBlocks}

            </Panel>


            <Panel shaded style={panelStyle}>
                <Title id="FAQ">FAQ</Title>
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
            {false && <Panel shaded style={panelStyle}>
                <Title>Contattaci</Title>
                <Form fluid>
                    <TextField name="name" placeHolder="Name" />
                    <TextField name="surname" placeHolder="Surname" />
                    <TextField name="message" placeHolder="Message" componentClass="textarea" />
                    <Button style={{float:"right", backgroundColor:bordeaux, color:"white"}}>Submit message </Button>

                </Form>
            </Panel>}

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
