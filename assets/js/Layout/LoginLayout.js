import {bordeaux, headerHeight} from "../styledComponents/CustomComponents";
import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {Dropdown, Navbar, Nav, Icon} from "rsuite";
import * as Routes from "../routes";
import {useHistory} from "react-router-dom";
import * as ActionTypes from "../Redux/actions";

export default function LoginLayout({page}) {


    return (
        <DesktopDiv>
            <div style={{backgroundColor: "white", minHeight:"100vh"}}>
                <Header/>
                <div style={{display:"flex", height: "100vh", flexDirection: "column", position: "absolute", top:0, width:"100%", paddingTop:53 }}>
                    <div style={{paddingTop:81, paddingLeft:40, paddingRight:40, margin:"0 auto", width: "100%", background:`linear-gradient(${bordeaux} 50%,50%, whitesmoke 50%)`, flexGrow:1 }}>
                        {page}
                    </div>
                    <Footer />
                </div>
            </div>
        </DesktopDiv>)
}

const DesktopDiv = styled.div`position: absolute;  width: 100%; min-height:100%;`;

const Header = () => {

        const { t, i18n } = useTranslation();
        const history = useHistory();
        const dispatch = useDispatch();
        const {user} = useSelector(state=>state);
        const {authenticated} = useSelector(state=>state);
        const changeLanguage = code => {
            i18n.changeLanguage(code);
            dispatch(ActionTypes.switchLanguage(code))

        };
        const signOut = () => {
            dispatch(ActionTypes.logOut());
            window.location.href="/login";
        }

        const LanguageDropdown = ({ ...props }) => (
            <Dropdown {...props}>
                <Dropdown.Item onClick={() => changeLanguage('it')} > Italiano</Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage('en')} > English</Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage('ar')} > اللغة العربية</Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage('gr')} > Ελληνικά</Dropdown.Item>
            </Dropdown>
        );

        const CustomDropdown = ({ ...props }) => (
            <Dropdown placement="leftStart" {...props}>
                <Dropdown.Item href={Routes.dashboardPage} eventKey="1" icon={<Icon icon="home" />}>
                    Home
                </Dropdown.Item>
                <Dropdown.Item href={Routes.serviceSearchPage} eventKey="3">{t('Search projects')}</Dropdown.Item>
                <Dropdown.Item href={Routes.searchUserPage} eventKey="4">{t('Search organisations')}</Dropdown.Item>
                {user && <Dropdown.Item href={Routes.profile(user.profileName)} >{t('Profile')}</Dropdown.Item>}
                {user && user.roles.includes("ROLE_ADMIN") && <Dropdown.Menu pullLeft title={t('Administration')} >
                    <Dropdown.Item href={Routes.administrationProjects} eventKey="e-2">Projects</Dropdown.Item>
                    <Dropdown.Item href={Routes.administrationCollaborations} eventKey="e-3">Services and collaborations</Dropdown.Item>
                    <Dropdown.Item href={Routes.administrationUsers} eventKey="e-4">Users</Dropdown.Item>
                    <Dropdown.Item href={Routes.administrationCategories} eventKey="e-5">Categories</Dropdown.Item>
                    <Dropdown.Item href={Routes.administrationExpertise} eventKey="e-6">Expertise</Dropdown.Item>
                    <Dropdown.Item href={Routes.administrationNews} eventKey="e-7">News</Dropdown.Item>
                </Dropdown.Menu>}
                {authenticated && <Dropdown.Item href="/backend/logout" >{t('Logout')}</Dropdown.Item>}
                {!authenticated && <Dropdown.Item href="/login" >{t('Login')}</Dropdown.Item>}
            </Dropdown>
        );



        return <Navbar appearance="subtle" style={{position:"fixed", zIndex:100, width:"100%", height:headerHeight, display:"flex", alignItems:"center", justifyContent:"space-between"}}>
            <Navbar.Header style={{height:headerHeight, flexGrow:1}} href={Routes.dashboardPage}>
                <img style={{cursor:"pointer"}} height={headerHeight} src="/defaults/en_morethanajob.png" className="navbar-brand logo">
                </img>
            </Navbar.Header>
            <Navbar.Body>
                <Nav>
                    <LanguageDropdown title={t('Menu language')} />
                    {false && <Nav.Item href={Routes.registration} icon={<Icon icon="cog" />}>Register</Nav.Item>}
                    <CustomDropdown icon={<Icon icon="bars" />} placement="bottomEnd" />
                </Nav>
            </Navbar.Body>
        </Navbar>


}