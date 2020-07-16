import {Dropdown, Icon, Nav, Navbar} from "rsuite";
import * as Routes from "../routes";
import React from "react";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import * as ActionTypes from "../Redux/actions";
import {useHistory} from "react-router-dom";

export default function FinalHeader(){

    const { t, i18n } = useTranslation();
    const history = useHistory();
    const dispatch = useDispatch();
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
            <Dropdown.Item onClick={() => changeLanguage('it')} > Italian</Dropdown.Item>
            <Dropdown.Item onClick={() => changeLanguage('en')} > English</Dropdown.Item>
            <Dropdown.Item onClick={() => changeLanguage('ar')} > Arabic</Dropdown.Item>
        </Dropdown>
    );

    const CustomDropdown = ({ ...props }) => (
        <Dropdown {...props}>
            <Dropdown.Item onClick={()=> history.push(Routes.dashboardPage)} eventKey="1" icon={<Icon icon="home" />}>
                Home
            </Dropdown.Item>
            <Dropdown.Item onClick={()=> history.push(Routes.projectPage)} eventKey="3">{t('Search projects')}</Dropdown.Item>
            <Dropdown.Item onClick={()=> history.push(Routes.profile(user.profileName))} icon={<Icon icon="cog" />}>{t('Profile')}</Dropdown.Item>
            <Dropdown.Item onClick={()=> history.push(Routes.administration)} icon={<Icon icon="cog" />}>{t('Administration')}</Dropdown.Item>
            <Nav.Item onClick={()=>signOut()} icon={<Icon icon="cog" />}>Logout</Nav.Item>
        </Dropdown>
    );



    return <Navbar appearance="subtle" style={{position:"fixed", zIndex:100, width:"100%", height:100}}>
        <Navbar.Header>
            <img height={100} src="/defaults/en_morethanajob.png" className="navbar-brand logo">
            </img>
        </Navbar.Header>
        <Navbar.Body>

            <Nav pullRight>
                <LanguageDropdown title={t('language')} trigger="hover" />
                <Nav.Item onClick={()=>history.push(Routes.registration)} icon={<Icon icon="cog" />}>Register</Nav.Item>
                <CustomDropdown title={t('MORETHANAJOB')} placement="bottomEnd" trigger="hover" />
            </Nav>
        </Navbar.Body>
    </Navbar>
}
