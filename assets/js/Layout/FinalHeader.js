import {Dropdown, Icon, Nav, Navbar} from "rsuite";
import * as Routes from "../routes";
import React from "react";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import * as ActionTypes from "../Redux/actions";
import {useHistory} from "react-router-dom";

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
        history.push(Routes.login);
    }


    const LanguageDropdown = ({ ...props }) => (
        <Dropdown {...props}>
            <Dropdown.Item onClick={() => changeLanguage('it')} > {t('Italian')}</Dropdown.Item>
            <Dropdown.Item onClick={() => changeLanguage('en')} > {t('English')}</Dropdown.Item>
            <Dropdown.Item onClick={() => changeLanguage('ar')} > {t('Arabic')}</Dropdown.Item>
            <Dropdown.Item onClick={() => changeLanguage('gr')} > {t('Greek')}</Dropdown.Item>
        </Dropdown>
    );

    const CustomDropdown = ({ ...props }) => (
        <Dropdown placement="leftStart" {...props}>
            <Dropdown.Item onClick={()=> history.push(Routes.dashboardPage)} eventKey="1" icon={<Icon icon="home" />}>
                Home
            </Dropdown.Item>
            <Dropdown.Item onClick={()=> history.push(Routes.serviceSearchPage)} eventKey="3">{t('Search projects')}</Dropdown.Item>
            <Dropdown.Item onClick={()=> history.push(Routes.searchUserPage)} eventKey="4">{t('Search organisations')}</Dropdown.Item>
            {user && <Dropdown.Item onClick={()=> history.push(Routes.profile(user.profileName))} >{t('Profile')}</Dropdown.Item>}
            {user && user.roles.includes("ROLE_ADMIN") && <Dropdown.Menu pullLeft title={t('Administration')} >
                <Dropdown.Item onClick={()=> history.push(Routes.administration)} eventKey="e-1">Management</Dropdown.Item>
                <Dropdown.Item onClick={()=> history.push(Routes.administrationProjects)} eventKey="e-2">Projects</Dropdown.Item>
                <Dropdown.Item onClick={()=> history.push(Routes.administrationCollaborations)} eventKey="e-3">Services and collaborations</Dropdown.Item>
                <Dropdown.Item onClick={()=> history.push(Routes.administrationUsers)} eventKey="e-4">Users</Dropdown.Item>
            </Dropdown.Menu>}
            {authenticated && <Dropdown.Item onClick={()=>signOut()} >{t('Logout')}</Dropdown.Item>}
        </Dropdown>
    );



    return <Navbar appearance="subtle" style={{position:"fixed", zIndex:100, width:"100%", height:125}}>
        <Navbar.Header onClick={()=>history.push(Routes.dashboardPage)}>
            <img style={{cursor:"pointer"}} height={125} src="/defaults/en_morethanajob.png" className="navbar-brand logo">
            </img>
        </Navbar.Header>
        <Navbar.Body>

            <Nav pullRight>
                <LanguageDropdown title={t('language')} />
                {false && <Nav.Item onClick={()=>history.push(Routes.registration)} icon={<Icon icon="cog" />}>Register</Nav.Item>}
                 <CustomDropdown icon={<Icon icon="bars" />} placement="bottomEnd" />
            </Nav>
        </Navbar.Body>
    </Navbar>
}
