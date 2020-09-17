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
            <Dropdown.Item onClick={() => changeLanguage('it')} > Italian</Dropdown.Item>
            <Dropdown.Item onClick={() => changeLanguage('en')} > English</Dropdown.Item>
            <Dropdown.Item onClick={() => changeLanguage('ar')} > Arabic</Dropdown.Item>
            <Dropdown.Item onClick={() => changeLanguage('gr')} > Greek</Dropdown.Item>
        </Dropdown>
    );

    const CustomDropdown = ({ ...props }) => (
        <Dropdown {...props}>
            <Dropdown.Item onClick={()=> history.push(Routes.dashboardPage)} eventKey="1" icon={<Icon icon="home" />}>
                Home
            </Dropdown.Item>
            <Dropdown.Item onClick={()=> history.push(Routes.serviceSearchPage)} eventKey="3">{t('Search projects')}</Dropdown.Item>
            <Dropdown.Item onClick={()=> history.push(Routes.searchUserPage)} eventKey="4">{t('Search organisations')}</Dropdown.Item>
            <Dropdown.Item onClick={()=> history.push(Routes.profile(user.profileName))} >{t('Profile')}</Dropdown.Item>
            {false && <Dropdown.Item onClick={()=> history.push(Routes.administration)} >{t('Administration')}</Dropdown.Item>}
            <Dropdown.Item onClick={()=>signOut()} >{t('Logout')}</Dropdown.Item>
        </Dropdown>
    );



    return <Navbar appearance="subtle" style={{position:"fixed", zIndex:100, width:"100%", height:100}}>
        <Navbar.Header onClick={()=>history.push(Routes.dashboardPage)}>
            <img height={100} src="/defaults/en_morethanajob.png" className="navbar-brand logo">
            </img>
        </Navbar.Header>
        <Navbar.Body>

            <Nav pullRight>
                <LanguageDropdown title={t('language')} />
                {false && <Nav.Item onClick={()=>history.push(Routes.registration)} icon={<Icon icon="cog" />}>Register</Nav.Item>}
                {authenticated && <CustomDropdown icon={<Icon icon="bars" />} placement="bottomEnd" />}
            </Nav>
        </Navbar.Body>
    </Navbar>
}
