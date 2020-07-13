import React from 'react';
import '../../css/header.css';
import {ButtonToolbar, Col, Container, Dropdown, Grid, Icon, Nav, Navbar, Row} from "rsuite";
import {useTranslation} from "react-i18next";
import * as ActionTypes from "../Redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import * as Routes from '../routes';
import {bordeaux} from "../styledComponents/CustomComponents";
import "./header.css"

export default function Header(){

        return (
            <NavBarInstance />
        );

}

function NavBarInstance({ onSelect, activeKey, ...props }){

    const { t, i18n } = useTranslation();
    const history = useHistory();
    const dispatch = useDispatch();
    const changeLanguage = code => {
        i18n.changeLanguage(code);
        dispatch(ActionTypes.switchLanguage(code))

    };
    const {user} = useSelector(state=>state);
    const signOut = () => {
        dispatch(ActionTypes.logOut());
        history.push(Routes.login);
    }

    const CustomDropdown = ({ ...props }) => (
        <Dropdown {...props}>
        <Dropdown.Item onClick={() => changeLanguage('it')} > Italian</Dropdown.Item>
        <Dropdown.Item onClick={() => changeLanguage('en')} > English</Dropdown.Item>
        <Dropdown.Item onClick={() => changeLanguage('ar')} > Arabic</Dropdown.Item>
        </Dropdown>
        );

    return (
        <Navbar id="mainHeader" style={{backgroundColor:bordeaux, position:"fixed", zIndex:100, width:"100%"}} {...props}>
            <Navbar.Body>
                <Nav onSelect={onSelect} activeKey={activeKey}>
                    <Nav.Item onClick={()=> history.push(Routes.dashboardPage)} eventKey="1" icon={<Icon icon="home" />}>
                        Home
                    </Nav.Item>
                    <Nav.Item onClick={()=> history.push(Routes.projectPage)} eventKey="3">{t('Search projects')}</Nav.Item>
                    <Nav.Item onClick={()=> history.push(Routes.profile(user.profileName))} icon={<Icon icon="cog" />}>{t('Profile')}</Nav.Item>
                    <Nav.Item onClick={()=> history.push(Routes.administration)} icon={<Icon icon="cog" />}>{t('Administration')}</Nav.Item>
                </Nav>
                <Nav pullRight>
                    <CustomDropdown title={t('language')} trigger="hover" />
                    <Nav.Item onClick={()=>signOut()} icon={<Icon icon="cog" />}>Logout</Nav.Item>
                </Nav>
            </Navbar.Body>
        </Navbar>
    );

};
