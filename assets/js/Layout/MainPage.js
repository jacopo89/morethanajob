import {Body} from "../styledComponents/CustomComponents";
import React from 'react'
import {Navbar, Nav, Dropdown, Icon} from 'rsuite';

export default function MainPage({page}){
    return (
        <>
            <NavBarInstance />
            <main style={{backgroundColor:"yellow"}}>
                <section style={{
                    backgroundColor:"red",
                    flexGrow: 1,
                    margin: "0 auto",
                    maxWidth: 900,
                    position: "relative",
                    width: "100%"
                }}>

                    <Body>
                        {page}
                    </Body>
                </section>
            </main>
            </>
        )

}

const NavBarInstance = ({ onSelect, activeKey, ...props }) => {
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
                    <Dropdown title="About">
                        <Dropdown.Item eventKey="4">Company</Dropdown.Item>
                        <Dropdown.Item eventKey="5">Team</Dropdown.Item>
                        <Dropdown.Item eventKey="6">Contact</Dropdown.Item>
                    </Dropdown>
                </Nav>
                <Nav pullRight>
                    <Nav.Item icon={<Icon icon="cog" />}>Settings</Nav.Item>
                </Nav>
            </Navbar.Body>
        </Navbar>
    );
};
