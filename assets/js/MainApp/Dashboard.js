import React, {useEffect, useState} from "react";
import {Col, Grid, Icon, List, Nav, Navbar, Panel, Row} from "rsuite";
import {Link, useHistory} from "react-router-dom";
import * as Routes from '../routes'
import {Body, bordeaux, MainButton, noProfilePicture, noProjectPicture} from "../styledComponents/CustomComponents";
import styled from "styled-components";
import "./dashboard.css";
import {useGetRandomProfiles} from "../Backend/hooks/UserInfo";
import {useGetRandomCollaborations} from "../Backend/hooks/useCollaborations";
import {useTranslation} from "react-i18next";
import CollaborationDetail from "./Profile/DetailCards/CollaborationDetail";
import {useSelector} from "react-redux";
import {useGetCategories} from "../Backend/hooks/useCategories";
import {useGetRecentNews} from "../Backend/hooks/useNews";
import NewsPanel from "./Administration/News/NewsPanel";

export default function Dashboard(){
    const history = useHistory();
    const { t, i18n } = useTranslation();

    const [categories, getCategories] = useGetCategories();

    const [readMore, setReadMore] = useState(false);
    const {language} = useSelector(state=>state);

    const panelStyle = {width: "85%", borderRadius:"20px", backgroundColor:"white", margin:"0 auto", padding:20, marginTop:20}
    const [profiles, getRandomProfilesHandler] = useGetRandomProfiles();
    const [collaborations, getRandomCollaborationsHandler] = useGetRandomCollaborations();
    const [recentNews, getRecentNews] = useGetRecentNews();


    useEffect(()=>{
        getRandomProfilesHandler();
        getCategories();
        getRecentNews();
    },[]);

    const categoriesPanels = categories.map((category, index)=> <CategoryPanel key={index} category={category} /> )

    useEffect(()=>{
        const formData = new FormData();
        formData.append('language', language);
        getRandomCollaborationsHandler(formData);
    },[language]);

    const profilePics = profiles.map((profile, index)=>
    {
        const picture = profile.profilePicture ? profile.profilePicture.url : noProfilePicture;
        return (<IconTextBox key={index}>
            <img width={75} src={picture}/>
            <a href={`/profile/${profile.profileName}`} >{profile.name}</a>
        </IconTextBox>)
    } );

    const collaborationBlocks = collaborations.map((collaboration, index)=><CollaborationDetail key={index} collaboration={collaboration} />)


    return <>
        <Navbar id="dashboard" appearance="inverse" style={{backgroundColor:"transparent", color:"white"}} >
            <Navbar.Body>
                <Nav>
                    {/*<Nav.Item href="#home" eventKey="1" icon={<Icon icon="home" />}>
                        {t('Homepage')}
                    </Nav.Item>*/}
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
                            <MainButton style={{float:"right", margin:10}} onClick={()=>setReadMore(!readMore)}>{t('Read more')}</MainButton>
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
                                        {t('partner1')} <a target="_blank" href={t('linkpartner1')}>{t('linkpartner1')}</a>
                                    </li>
                                    <li>
                                        {t('partner2')} <a target="_blank" href={t('linkpartner2')}>{t('linkpartner2')}</a>
                                    </li>
                                    <li>
                                        {t('partner3')} <a target="_blank" href={t('linkpartner3')}>{t('linkpartner3')}</a>
                                    </li>
                                    <li>
                                        {t('partner4')} <a target="_blank" href={t('linkpartner4')}>{t('linkpartner4')}</a>
                                    </li>
                                    <li>
                                        {t('partner5')} <a target="_blank" href={t('linkpartner5')}>{t('linkpartner5')}</a>
                                    </li>
                                    <li>
                                        {t('partner6')} <a target="_blank" href={t('linkpartner6')}>{t('linkpartner6')}</a>
                                    </li>
                                </ul>
                            </>}
                    </Row>
                </Grid>

            </Panel>

            <Panel shaded style={panelStyle}>
                <Title>{t('Categories')}</Title>
                <div style={{display:"flex", justifyContent:"space-around"}}>
                    {categoriesPanels}

                </div>

            </Panel>
            <Panel shaded style={panelStyle}>
                <Title>{t('Organisations')}</Title>
                <Anchor id="organisations"/>
                <div style={{display:"flex", justifyContent:"space-around"}}>
                    {profilePics}

                </div>

            </Panel>

            <Panel shaded style={panelStyle}>
                <Title id="services">{t('Services and opportunities')}</Title>
                {collaborationBlocks}

            </Panel>
            <Panel shaded style={panelStyle}>
                <Title>News</Title>
                <Anchor id="News"/>
                <List size='lg'>
                    {recentNews.map((news, index)=><List.Item><NewsPanel key={index} news={news}> </NewsPanel></List.Item>)}
                </List>
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


        </Body>
    </>

}

function CategoryPanel({category}){
    const {t, i18n} = useTranslation();
    const {language} = useSelector(state=>state);

    const picture = (category.picture) ? category.picture : noProjectPicture;
   return <IconTextBox>
        <img width={75} src={picture}/>
        <Link to={{
            pathname: Routes.serviceSearchPage,
            state: { category: category.value }
        }} >{t(category[language])}</Link>
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
