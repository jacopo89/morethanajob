import React, {useEffect, useState} from "react";
import {Col, FlexboxGrid, Grid, Icon, List, Nav, Navbar, Panel, Row} from "rsuite";
import {Link, useHistory} from "react-router-dom";
import * as Routes from '../routes'
import {
    BackTitle,
    Body,
    bordeaux, FrontTitle,
    MainButton,
    noProfilePicture,
    noProjectPicture,
    Title,
} from "../styledComponents/CustomComponents";
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
            <a style={{color:"black"}} href={`/profile/${profile.profileName}`} >{profile.name}</a>
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
                    <Nav.Item eventKey="4" onClick={()=>history.push(Routes.newsPage)}>{t('News')}</Nav.Item>
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
                        <Col xs={24}  md={12}>
                            <BackTitle>
                                <FrontTitle id="aboutUs">
                                    {t('MoreThanAJob Portal')}
                                </FrontTitle>
                                {t('MoreThanAJob Portal')}
                            </BackTitle>
                            <h5 style={{margin:10}}>{t('Dashboard title')}</h5>
                            <p style={{margin:10}}>
                                {t('Dashboard text')}
                            </p>
                            <MainButton style={{float:"right", margin:10}} onClick={()=>history.push(Routes.serviceSearchPage)}>  {t('Dashboard button')}</MainButton>
                        </Col>
                        <Col xs={24} md={12}>
                            <div style={{display:"flex", justifyContent:"center"}}>
                            <img width="75%" src="/defaults/bg-dashboard.jpg"/>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </Panel>
            <Panel shaded style={panelStyle}>
                <Anchor id="aboutUs">Abus</Anchor>
                <Grid fluid>
                    <Row>
                        <Col xs={24}>
                            <div>

                                {false &&
                                    <>
                                        <img style={{float:"left", marginLeft:30, marginRight:30}}  width="50%" src="/defaults/MoreThanAJob_Cover.jpg"/>
                                        <p style={{float:"left", clear:"left", marginLeft:30, marginRight:30, fontSize:"0.6rem"}}>Photo © UN Women/Christopher Herwig </p>
                                    </>}

                                <BackTitle>
                                    <FrontTitle id="aboutUs">
                                        {t('projectTitle')}
                                    </FrontTitle>
                                    {t('projectTitle')}
                                </BackTitle>
                                <p>
                                    {t('projectPre')}
                                </p>
                                {! readMore &&
                                <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                    <MainButton style={{margin:15, borderRadius:999}} onClick={()=>setReadMore(!readMore)}>{t('Read more')}</MainButton>
                                </div>}
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
                            </div>
                        </Col>
                    </Row>
                </Grid>

            </Panel>

            <Panel shaded style={panelStyle}>
                <BackTitle >
                    <FrontTitle id="aboutUs">
                        {t('Categories')}
                    </FrontTitle>
                    {t('Categories')}
                </BackTitle>
                <p> These categories orient the classification of the information in the portal in order to allow an
                    easier navigation facilitating to find the services and opportunities answering to your needs.
                    By clicking on each icon, you will find the relevant services and opportunities available in the
                    portal.</p>
                <div style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap"}}>
                    {categoriesPanels}

                </div>

            </Panel>
            <Panel shaded style={panelStyle}>
                <BackTitle >
                    <FrontTitle >
                        {t('Organisations')}
                    </FrontTitle>
                    {t('Organisations')}
                </BackTitle>
                <Anchor id="organisations"/>
                <div style={{display:"flex", justifyContent:"space-around"}}>
                    {profilePics}

                </div>

            </Panel>

            <Panel shaded style={panelStyle}>
                <BackTitle>
                    <FrontTitle>
                        {t('Services and opportunities')}
                    </FrontTitle>
                    {t('Services and opportunities')}
                </BackTitle>
                {collaborationBlocks}

            </Panel>
            <Panel shaded style={panelStyle}>
                <Anchor id="news"/>
                <BackTitle >
                    <FrontTitle>
                        {t('News')}
                    </FrontTitle>
                    {t('News')}
                </BackTitle>
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
        <BlackLink to={{
            pathname: Routes.serviceSearchPage,
            state: { category: category.value }
        }} >{t(category[language])}</BlackLink>
    </IconTextBox>
}

function TitleWithBack(text){
    return <BackTitle>
        <FrontTitle>{text}</FrontTitle>
        {text}
    </BackTitle>
}

const SmallTitle = styled.h6`color:${bordeaux}; margin:10px`;


const DesktopDiv = styled.div`position: absolute;  width: 100vw; min-height:100%;`;
const Box = styled.div`width: 85%; border-radius:20px; background-color:whitesmoke; margin:0 auto; padding:20; margin-top:20`;
const IconTextBox = styled.div`display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 158px;
    margin:20px`;

const Anchor = styled.div
    `position: relative;
    left: 0px;
    top: -100px;`;

const BlackLink = styled(Link)`
    color: black;
`

