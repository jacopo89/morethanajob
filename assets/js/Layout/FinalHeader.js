import {Dropdown, Icon, Nav, Navbar} from "rsuite";
import * as Routes from "../routes";
import React from "react";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import * as ActionTypes from "../Redux/actions";
import {Link, useHistory} from "react-router-dom";
import {guide, headerHeight} from "../styledComponents/CustomComponents";

export default function FinalHeader(){

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

    const seeAdminMenu = user && (user.roles.includes("ROLE_ADMIN") || user.roles.includes("ROLE_ARABIC_ADMIN") || user.roles.includes("ROLE_GREEK_ADMIN") || user.roles.includes("ROLE_ITALIAN_ADMIN") || user.roles.includes("ROLE_ENGLISH_ADMIN"));
    const seeTotalAdmin = user && user.roles.includes("ROLE_ADMIN");

    const CustomDropdown = ({ ...props }) => (
        <Dropdown placement="leftStart" {...props}>
            <Dropdown.Item onClick={()=> history.push(Routes.dashboardPage)} eventKey="1" icon={<Icon icon="home" />}>
                Home
            </Dropdown.Item>
            <Dropdown.Item onClick={()=> history.push(Routes.serviceSearchPage)} eventKey="3">{t('Search projects')}</Dropdown.Item>
            <Dropdown.Item onClick={()=> history.push(Routes.searchUserPage)} eventKey="4">{t('Search organisations')}</Dropdown.Item>
            <Dropdown.Item onClick={()=> history.push(Routes.newsPage)} eventKey="4">{t('News')}</Dropdown.Item>
            <Dropdown.Item onClick={()=> history.push(Routes.needHelpPage)} eventKey="6">{t('Need help?')}</Dropdown.Item>
            {/*<Dropdown.Item ><Link to={guide} target="_blank">Portal user guide</Link></Dropdown.Item>*/}
            {user && <Dropdown.Item onClick={()=> history.push(Routes.profile(user.profileName))} >{t('Profile')}</Dropdown.Item>}
            {seeAdminMenu && <Dropdown.Menu pullLeft title={t('Administration')} >
                <Dropdown.Item onClick={()=> history.push(Routes.administrationProjects)} eventKey="e-2">Projects</Dropdown.Item>
                <Dropdown.Item onClick={()=> history.push(Routes.administrationCollaborations)} eventKey="e-3">Services and collaborations</Dropdown.Item>
                <Dropdown.Item onClick={()=> history.push(Routes.administrationUsers)} eventKey="e-4">Users</Dropdown.Item>
                {seeTotalAdmin && <Dropdown.Item onClick={()=> history.push(Routes.administrationCategories)} eventKey="e-5">Categories</Dropdown.Item>}
                {seeTotalAdmin && <Dropdown.Item onClick={()=> history.push(Routes.administrationExpertise)} eventKey="e-6">Expertise</Dropdown.Item>}
                {seeTotalAdmin && <Dropdown.Item onClick={()=> history.push(Routes.administrationNews)} eventKey="e-7">News</Dropdown.Item>}
            </Dropdown.Menu>}
            {authenticated && <Dropdown.Item href="/backend/logout" >{t('Logout')}</Dropdown.Item>}
            {!authenticated && <Dropdown.Item href="/login" >{t('Login')}</Dropdown.Item>}
        </Dropdown>
    );

    const HelpDropdown = ({ ...props }) => (
        <Dropdown {...props}>
            <Dropdown.Item >
                <Link to={guide} target="_blank">Download guide</Link>
            </Dropdown.Item>
        </Dropdown>
    );



    return <Navbar appearance="subtle" style={{position:"fixed", zIndex:100, width:"100%", height:headerHeight, display:"flex", alignItems:"center", justifyContent:"space-between"}}>
        <Navbar.Header style={{height:headerHeight, flexGrow:1}} onClick={()=>history.push(Routes.dashboardPage)}>
            <img style={{cursor:"pointer"}} height={headerHeight} src="/defaults/en_morethanajob.png" className="navbar-brand logo">
            </img>
        </Navbar.Header>
        <Navbar.Body>
            <Nav>
                {/*<Nav.Item onClick={()=> history.push(Routes.serviceSearchPage)} >{t('Search projects')}</Nav.Item>
                <Nav.Item onClick={()=> history.push(Routes.searchUserPage)} >{t('Search organisations')}</Nav.Item>
*/}
                {/*<HelpDropdown title={"Need help?"}></HelpDropdown>*/}
                <LanguageDropdown title={t('Menu language')} />
                {false && <Nav.Item onClick={()=>history.push(Routes.registration)} icon={<Icon icon="cog" />}>Register</Nav.Item>}
                 <CustomDropdown icon={<Icon icon="bars" />} placement="bottomEnd" />
            </Nav>
        </Navbar.Body>
    </Navbar>
}


