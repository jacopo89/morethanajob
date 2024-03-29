import React, {useEffect, useState} from "react";
import {Carousel, Col, Dropdown, Grid, Icon, List, Nav, Navbar, Panel, Row} from "rsuite";
import {Link, useHistory} from "react-router-dom";
import * as Routes from '../routes'
import {
    BackTitle,
    Body,
    bordeaux,
    FlexCenterDiv,
    FrontTitle,
    guide,
    MainButton,
    noProjectPicture,
    servicePagePicture,
    userPagePicture,
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
import ReactPlayer from "react-player";
import NewsCarousel from "./News/NewsCarousel";

export default function Dashboard(){
    const history = useHistory();
    const { t, i18n } = useTranslation();

    const [categories, getCategories] = useGetCategories();

    const [readMore, setReadMore] = useState(false);
    const {language} = useSelector(state=>state);

    const panelStyle = {width: "85%", borderRadius:"20px", backgroundColor:"white", margin:"0 auto", padding:20, marginTop:20}
    const embeddedPanelStyle = {borderRadius:"20px", backgroundColor:"white", height:"100%"}
    const rowStyle = {width: "85%", margin:"0 auto", marginTop:20}
    const [profiles, getRandomProfilesHandler] = useGetRandomProfiles();
    const [collaborations, getRandomCollaborationsHandler] = useGetRandomCollaborations();
    const [recentNews, getRecentNews] = useGetRecentNews();


    useEffect(()=>{
        //getRandomProfilesHandler();
        getCategories();
        getRecentNews();
    },[]);

    const categoriesPanels = categories.map((category, index)=> <CategoryPanel key={index} category={category} /> )

    useEffect(()=>{
        const formData = new FormData();
        formData.append('language', language);
        //getRandomCollaborationsHandler(formData);
    },[language]);

    /*const profilePics = profiles.map((profile, index)=>
    {
        const picture = profile.profilePicture ? profile.profilePicture.url : noProfilePicture;
        return (<IconTextBox key={index}>
            <img style={{cursor:"pointer"}} width={75} src={picture} onClick={()=>history.push(Routes.profile(profile.profileName))}/>
            <a style={{color:"black"}} href={`/profile/${profile.profileName}`} >{profile.name}</a>
        </IconTextBox>)
    } );*/

    const collaborationBlocks = collaborations.map((collaboration, index)=><CollaborationDetail key={index} collaboration={collaboration} />)


    const HelpDropdown = ({ ...props }) => (
        <Dropdown {...props}>
            <Dropdown.Item >
                <Link to={guide} target="_blank">Download guide</Link>
            </Dropdown.Item>
        </Dropdown>
    );

    const NewsDropdown = ({ ...props }) => (
        <Dropdown {...props}>
            <Dropdown.Item >
                <Link to={Routes.newsPage} target="_blank">All news</Link>
            </Dropdown.Item>
            <Dropdown.Item >
                <Link to={()=>{
                    return {
                        pathname: "/news/projects",
                        state: { filter: 1 }
                    }
                }}>Projects</Link>
            </Dropdown.Item>
            <Dropdown.Item >
                <Link to={()=>{
                    return {
                        pathname: "/news/relevant_publications",
                        state: { filter: 2 }
                    }
                }}>Relevant publications</Link>
            </Dropdown.Item>
            <Dropdown.Item >
                <Link to={()=>{
                    return {
                        pathname: "/news/library",
                        state: { filter: 3 }
                    }
                }}>Library</Link>
            </Dropdown.Item>
            <Dropdown.Item >
                <Link to={()=>{
                    return {
                        pathname: "/news/video_tutorials",
                        state: { filter: 5 }
                    }
                }}>Video Tutorials</Link>
            </Dropdown.Item>
            <Dropdown.Item >
                <Link to={()=>{
                    return {
                        pathname: "/news/communication_tools",
                        state: { filter: 6 }
                    }
                }}>Communication tools</Link>
            </Dropdown.Item>
            <Dropdown.Item >
                <Link to={()=>{
                    return {
                        pathname: "/news/training_material",
                        state: { filter: 7 }
                    }
                }}>Training Material</Link>
            </Dropdown.Item>
            <Dropdown.Item >
                <Link to={()=>{
                    return {
                        pathname: "/news/policy_briefs",
                        state: { filter: 8 }
                    }
                }}>Policy briefs</Link>
            </Dropdown.Item>
            <Dropdown.Item >
                <Link to={()=>{
                    return {
                        pathname: "/news/funding_opportunities",
                        state: { filter: 4 }
                    }
                }}>Funding opportunities</Link>
            </Dropdown.Item>
        </Dropdown>
    );

    return <>
        <Navbar id="dashboard" appearance="inverse" style={{backgroundColor:"transparent", color:"white"}} >
            <Navbar.Body>
                <Nav>
                    {/*<Nav.Item href="#home" eventKey="1" icon={<Icon icon="home" />}>
                        {t('Homepage')}
                    </Nav.Item>*/}
                    <Nav.Item href="#aboutUs"  eventKey="2">{t('The project')}</Nav.Item>
                    <Nav.Item href="#categories" eventKey="3">{t('Categories')}</Nav.Item>
                    <Nav.Item onClick={()=>history.push(Routes.serviceSearchPage)}  eventKey="3">{t('Services and opportunities')}</Nav.Item>
                    <Nav.Item onClick={()=>history.push(Routes.searchUserPage)}  eventKey="4">{t('Organisations')}</Nav.Item>
                    <Nav.Item onClick={()=>history.push(Routes.subGrantedProjectsPage)}  eventKey="5">{t('Sub-granted Projects')}</Nav.Item>
                    <Nav.Item onClick={()=>history.push(Routes.needHelpPage)}  eventKey="5">{t('Need help?')}</Nav.Item>
                    {/*<HelpDropdown style={{fontSize:16}} title={"Need help?"}/>*/}

                    <NewsDropdown style={{fontSize:16}} trigger={['click', 'hover']} title={t('News')}></NewsDropdown>
                    {/*<Nav.Item href="#FAQ"  eventKey="5">FAQ</Nav.Item>*/}

                </Nav>
                <Nav pullRight>
                    <Nav.Item href="/login" icon={<Icon icon="cog" />}>{t('Login')}</Nav.Item>
                    {false && <Nav.Item onClick={()=>history.push(Routes.registration)} icon={<Icon icon="cog" />}>{t('Register')}</Nav.Item>}
                </Nav>
            </Navbar.Body>
        </Navbar>
        <Body style={{backgroundColor:"transparent", maxWidth:"none"}}>
            <Panel shaded style={panelStyle} >
                <Anchor id="home"/>
                <Grid fluid>
                    <Row>
                        <Col xs={24}>
                            <BackTitle>
                                <FrontTitle id="aboutUs">
                                    {t('MoreThanAJob Portal')}
                                </FrontTitle>
                                {t('MoreThanAJob Portal')}
                            </BackTitle>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24}>
                            <Carousel style={{height:600}} autoplayInterval={6000} autoplay={true}>
                                {
                                    [
                                        <div style={{backgroundImage:"url(/defaults/homepage/img_1.jpg)",backgroundSize:"cover", position:"relative"}}>
                                            <div style={{height:"100%", backgroundImage: "linear-gradient(to top,black,white)", opacity:"33%"}}></div>
                                            <div style={{position:"absolute", flexDirection:"column", top:0,left:0, margin:"0 100px", height:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                                                <h5 style={{color:"white"}}>Are you an organisation or an institution involved in the social economy? Would you like to promote your
                                                    welfare services addressed to vulnerable people? Do you want to increase your network?</h5>
                                                <h5 style={{color:"white"}}>
                                                    Improve your opportunities to collaborate with other private and public actors for the development of new
                                                    services, projects and initiatives at local and international level!
                                                </h5>
                                                <MainButton style={{float:"right", margin:10}} onClick={()=>window.location.href="/login"}>  {t('Join our Euro-Mediterranean network')}</MainButton>
                                            </div>
                                        </div>,
                                        <div style={{backgroundImage:"url(/defaults/homepage/img2.jpg)",backgroundSize:"cover", position:"relative"}}>
                                            <div style={{height:"100%", backgroundImage: "linear-gradient(to top,black,white)", opacity:"33%"}}></div>
                                            <div style={{position:"absolute", flexDirection:"column", top:0,left:0, margin:"0 100px", height:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                                                <h5 style={{color:"white"}}>Would you like to know more about the services and opportunities available in your territory? Are you
                                                    looking for new opportunities of collaboration in the field of social economy?</h5>
                                                <MainButton style={{float:"right", margin:10}} onClick={()=>history.push(Routes.serviceSearchPage)}>  {t('Check our services and opportunities')}</MainButton>
                                            </div>
                                        </div>,
                                        <div style={{backgroundImage:"url(/defaults/homepage/img3.PNG)",backgroundSize:"cover", position:"relative"}}>
                                            <div style={{height:"100%", backgroundImage: "linear-gradient(to top,black,white)", opacity:"33%"}}></div>
                                            <div style={{position:"absolute", flexDirection:"column", top:0,left:0, margin:"0 100px", height:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                                                <h5 style={{color:"white"}}>Discover more about our portal’s features and functionalities to get the most out of it and enhance your
                                                    opportunities of cooperation for the development of welfare services in your territory.</h5>
                                                <MainButton style={{float:"right", margin:10}} onClick={()=>history.push(Routes.serviceSearchPage)}> <Link style={{color:"white"}} to={guide} target="_blank">Check the user guide!</Link></MainButton>
                                            </div>
                                        </div>,
                                    ]
                                }
                            </Carousel>
                        </Col>
                    </Row>
                </Grid>
                {/*<Grid fluid>
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
                </Grid>*/}


            </Panel>
            <Panel shaded style={panelStyle}>
                <Anchor id="aboutUs">Abus</Anchor>
                <Grid fluid>
                    <Row>
                        <Col xs={24}>
                            <BackTitle>
                            <FrontTitle id="aboutUs">
                                {t('projectTitle')}
                            </FrontTitle>
                            {t('projectTitle')}
                        </BackTitle></Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                                <img width="100%" src="/defaults/bg-dashboard.jpg"/>
                        </Col>
                        <Col xs={12}>

                                {/*<ReactPlayer style={{float:"left", marginLeft:30, marginRight:30}} playing={false} width="50%" controls={false} url={"https://www.youtube.com/playlist?list=PLivtOKkDMT24-wZG7AUGBx-EUJG5OUuOt"} />*/}

                        <p>
                            {t('projectPre')}
                        </p>
                        {/*<div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <MainButton style={{margin:15, borderRadius:999}} onClick={()=>setReadMore(!readMore)}>{t('Read more')}</MainButton>
                        </div>*/}
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
                        </Col>
                    </Row>
                </Grid>

            </Panel>

            {/*Categories*/}
            <Panel shaded style={panelStyle}>
                <BackTitle>
                    <Anchor style={{ marginBottom:50 }} id="categories"/>
                    <FrontTitle>
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
            {/*News*/}
            <Panel shaded style={panelStyle}>
                <Anchor id="news"/>
                <BackTitle >
                    <FrontTitle>
                        {t('News and Resources')}
                    </FrontTitle>
                    {t('News and Resources')}
                </BackTitle>
                <NewsCarousel news={recentNews}/>
                <List size='lg'>
                    {recentNews.map((news, index)=><List.Item><NewsPanel key={index} news={news}> </NewsPanel></List.Item>)}
                </List>
                <FlexCenterDiv>
                    <MainButton onClick={()=>history.push(Routes.newsPage)}>View all</MainButton>
                </FlexCenterDiv>

            </Panel>
            {/*Organisations*/}
            <Row style={rowStyle}>
                <Col style={{height:"100%"}} xs={24} sm={12}>
                    <Panel style={embeddedPanelStyle} shaded >
                        <BackTitle >
                            <FrontTitle >
                                {t('Organisations')}
                            </FrontTitle>
                            {t('Organisations')}
                        </BackTitle>
                        <Anchor id="organisations"/>
                        <img width={"100%"} src={userPagePicture}/>
                        <p style={{padding:"20px 0"}}>
                            Discover the organisations that are part of the MoreThanAJob community!
                        </p>
                        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <MainButton style={{margin:15, borderRadius:999}} onClick={()=>history.push(Routes.searchUserPage)}>{t('View more')}</MainButton>
                        </div>


                        {/*<div style={{display:"flex", justifyContent:"space-around"}}>
                            {profilePics}

                        </div>*/}

                    </Panel>
                </Col>
                <Col style={{height:"100%"}} xs={24} sm={12}>
                    <Panel style={embeddedPanelStyle} shaded >
                        <BackTitle>
                            <FrontTitle>
                                {t('Services and opportunities')}
                            </FrontTitle>
                            {t('Services and opportunities')}
                        </BackTitle>
                        <img width={"100%"} src={servicePagePicture}/>
                        <p style={{padding:"20px 0"}}>
                            Find the services and opportunities that the organisations are
                            delivering to support the social and employment inclusion of vulnerable groups as well as the
                            collaboration opportunities to renovate or develop new ones.
                        </p>
                        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <MainButton style={{margin:15, borderRadius:999}} onClick={()=>history.push(Routes.serviceSearchPage)}>{t('View more')}</MainButton>
                        </div>
                        {/*{collaborationBlocks}*/}

                    </Panel>
                </Col>
            </Row>

            {/*Services*/}

        </Body>
    </>

}

export function CategoryPanel({category}){
    const {t, i18n} = useTranslation();
    const {language} = useSelector(state=>state);
    const history = useHistory();

    const picture = (category.picture) ? category.picture : noProjectPicture;
   return <IconTextBox>
        <img style={{cursor:"pointer"}} width={75} src={picture} onClick={()=>history.push( Routes.serviceSearchPage, { category: category.value }) }/>
        <BlackLink to={{
            pathname: Routes.serviceSearchPage,
            state: { category: category.value }
        }} >{t(category[language])}</BlackLink>
    </IconTextBox>
}


const SmallTitle = styled.h6`color:${bordeaux}; margin:10px`;


export const IconTextBox = styled.div`display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 158px;
    margin:20px`;

const Anchor = styled.div
    `position: relative;
    left: 0px;
    top: -100px;`;

export const BlackLink = styled(Link)`
    color: black;
`

