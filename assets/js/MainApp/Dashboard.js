import React, {useEffect, useState} from "react";
import {Button, Col, Form, Grid, Icon, Nav, Navbar, Panel, PanelGroup, Row} from "rsuite";
import {Link, useHistory} from "react-router-dom";
import * as Routes from '../routes'
import {Body, bordeaux, gray, MainButton} from "../styledComponents/CustomComponents";
import styled from "styled-components";
import TextField from "../Login/Components/TextField";
import "./dashboard.css";
import {useGetRandomProfiles} from "../Backend/hooks/UserInfo";
import {useGetRandomCollaborations} from "../Backend/hooks/useCollaborations";
import {useTranslation} from "react-i18next";
import CollaborationDetail from "./Profile/DetailCards/CollaborationDetail";
import {useSelector} from "react-redux";
import {useGetCategories} from "../Backend/hooks/useCategories";

export default function Dashboard(){
    const history = useHistory();
    const { t, i18n } = useTranslation();

    const [categories, getCategories] = useGetCategories();

    const [readMore, setReadMore] = useState(false);
    const {language} = useSelector(state=>state);

    const panelStyle = {width: "85%", borderRadius:"20px", backgroundColor:"white", margin:"0 auto", padding:20, marginTop:20}
    const [profiles, getRandomProfilesHandler] = useGetRandomProfiles();
    const [collaborations, getRandomCollaborationsHandler] = useGetRandomCollaborations();


    useEffect(()=>{
        getRandomProfilesHandler();
        getCategories();
    },[]);

    const categoriesPanels = categories.map((category, index)=> <CategoryPanel key={index} category={category} /> )

    useEffect(()=>{
        const formData = new FormData();
        formData.append('language', language);
        getRandomCollaborationsHandler(formData);
    },[language]);

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
                        {t('Home')}
                    </Nav.Item>
                    <Nav.Item href="#aboutUs"  eventKey="2">{t('The project')}</Nav.Item>
                    <Nav.Item onClick={()=>history.push(Routes.serviceSearchPage)}  eventKey="3">{t('Services and opportunities')}</Nav.Item>
                    <Nav.Item onClick={()=>history.push(Routes.searchUserPage)}  eventKey="4">{t('Organisations')}</Nav.Item>
                    {/*<Nav.Item href="#FAQ"  eventKey="5">FAQ</Nav.Item>*/}

                </Nav>
                <Nav pullRight>
                    <Nav.Item onClick={()=>history.push(Routes.login)} icon={<Icon icon="cog" />}>{t('Login')}</Nav.Item>
                    {false && <Nav.Item onClick={()=>history.push(Routes.registration)} icon={<Icon icon="cog" />}>{t('Register')}</Nav.Item>}
                </Nav>
            </Navbar.Body>
        </Navbar>
        <Body style={{backgroundColor:"transparent", maxWidth:"none"}}>
            <Panel shaded style={panelStyle} >
                <Anchor id="home"/>
                <Grid fluid>
                    <Row className="show-grid">
                        <Col xs={12}>
                            <h4 style={{color: bordeaux, margin:10}}>{t('MoreThanAJob Portal')}</h4>
                            <h5 style={{margin:10}}>{t('Dashboard title')}</h5>
                            <p style={{margin:10}}>
                                {t('Dashboard text')}
                            </p>
                            <MainButton style={{float:"right", margin:10}} onClick={()=>history.push(Routes.serviceSearchPage)}>  {t('Dashboard button')}</MainButton>
                        </Col>
                        <Col xs={12}>
                            <div style={{display:"flex", justifyContent:"center"}}>
                            <img width="100%" src="/defaults/bg-dashboard.jpg"/>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </Panel>
            <Panel shaded style={panelStyle}>
                <Anchor id="aboutUs">Abus</Anchor>
                <Grid fluid>
                    <Row className="show-grid">
                        <Col xs={12}>
                            <div style={{display:"flex", justifyContent:"center"}}>
                            <img width="100%" src="/defaults/MoreThanAJob_Cover.jpg"/>
                            </div>
                        </Col>
                        <Col xs={12}>
                            <Title id="aboutUs">
                                {t('projectTitle')}
                            </Title>
                            <p>
                                {t('projectPre')}
                            </p>
                            <MainButton style={{float:"right", margin:10}} onClick={()=>setReadMore(!readMore)}>Read more</MainButton>
                        </Col>
                    </Row>
                    <Row style={{marginTop: 20}} className="show-grid">


                        {readMore &&
                            <>
                                <p>
                                    {t('projectMore')}.
                                </p>
                                <SmallTitle>{t('projectSSE')}</SmallTitle>
                                <p>
                                    {t('projectSSEText')}
                                </p>
                                <SmallTitle>{t('projectPartners')}</SmallTitle>
                                <ul>
                                    <li>
                                        {t('partner1')}
                                    </li>
                                    <li>
                                        {t('partner2')}
                                    </li>
                                    <li>
                                        {t('partner3')}
                                    </li>
                                    <li>
                                        {t('partner4')}
                                    </li>
                                    <li>
                                        {t('partner5')}
                                    </li>
                                    <li>
                                        {t('partner6')}
                                    </li>
                                </ul>
                            </>}
                    </Row>
                </Grid>

            </Panel>

            <Panel shaded style={panelStyle}>
                <Title>Categories</Title>
                <div style={{display:"flex", justifyContent:"space-around"}}>
                    {categoriesPanels}

                </div>

            </Panel>
            <Panel shaded style={panelStyle}>
                <Title>Organisations</Title>
                <Anchor id="organisations"/>
                <div style={{display:"flex", justifyContent:"space-around"}}>
                    {profilePics}

                </div>

            </Panel>

            <Panel shaded style={panelStyle}>
                <Title id="services">Services and opportunities</Title>
                {collaborationBlocks}

            </Panel>


           {/* <Panel shaded style={panelStyle}>
                <Title>FAQ</Title>
                <Anchor id="FAQ"/>
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
            </Panel>*/}
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

function CategoryPanel({category}){
    const {t, i18n} = useTranslation();
   return <IconTextBox>
        <img width={75} src={category.picture}/>
        <Link to={{
            pathname: Routes.serviceSearchPage,
            state: { category: category.value }
        }} >{t(category.name)}</Link>
    </IconTextBox>
}


const Title = styled.h5`color:${bordeaux}; text-align:center; margin:10px`;
const SmallTitle = styled.h6`color:${bordeaux}; margin:10px`;


const DesktopDiv = styled.div`position: absolute;  width: 100vw; min-height:100%;`;
const Box = styled.div`width: 85%; border-radius:20px; background-color:whitesmoke; margin:0 auto; padding:20; margin-top:20`;
const IconTextBox = styled.div`display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 158px;`;

const Anchor = styled.div
    `position: relative;
    left: 0px;
    top: -100px;`;
