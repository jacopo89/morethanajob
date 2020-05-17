import React from 'react';
import '../../css/header.css';
import {ButtonToolbar, Col, Container, Dropdown, Grid, Icon, Nav, Navbar, Row} from "rsuite";
import {useTranslation} from "react-i18next";
import * as ActionTypes from "../Redux/actions";
import {useDispatch} from "react-redux";


export default function Header(){

        return (
            <NavBarInstance />
        );

}

function NavBarInstance({ onSelect, activeKey, ...props }){

    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const changeLanguage = code => {
        i18n.changeLanguage(code);
        dispatch(ActionTypes.switchLanguage(code))

    };
    const logout = () => console.log("logout");

    const CustomDropdown = ({ ...props }) => (
        <Dropdown {...props}>
        <Dropdown.Item onClick={() => changeLanguage('it')} > It</Dropdown.Item>
        <Dropdown.Item onClick={() => changeLanguage('en')} > En</Dropdown.Item>
        </Dropdown>
        );

    return (
        <Navbar {...props}>
            <Navbar.Header>
                <a href="#" className="navbar-brand logo">
                    RSUITE
                </a>
            </Navbar.Header>
            <Navbar.Body>
                <Nav onSelect={onSelect} activeKey={activeKey}>
                    <Nav.Item eventKey="1" icon={<Icon icon="home" />}>
                        Home
                    </Nav.Item>
                    <Nav.Item eventKey="2">News</Nav.Item>
                    <Nav.Item eventKey="3">Products</Nav.Item>

                    <Dropdown title={t('company')}>
                        <Dropdown.Item eventKey="4">{t('company')}</Dropdown.Item>
                        <Dropdown.Item eventKey="5">Team</Dropdown.Item>
                        <Dropdown.Item eventKey="6">Contact</Dropdown.Item>
                    </Dropdown>
                </Nav>
                <Nav pullRight>
                    <CustomDropdown title="Language" trigger="hover" />
                    <Nav.Item icon={<Icon icon="cog" />}>Settings</Nav.Item>
                </Nav>
            </Navbar.Body>
        </Navbar>
    );

};
