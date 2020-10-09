import React, {useEffect, useState} from "react";
import {Button, ButtonGroup, Dropdown, Icon, Nav, SelectPicker, Sidenav} from "rsuite";
import {useHistory, useParams} from "react-router";
import "./sidebarPage.css";

const headerStyles = {
    padding: 20,
    fontSize: 16,
    background: '#008ccf',
    minHeight: 76,
    color: ' #fff'
};

export default function SidebarPage({navItemList, subPage, handleToggle, handleSelect, expanded, activeKey, label}){

    const history = useHistory();


    return (
        <div style={{display: 'flex', flexFlow: 'row', height: '100%'}}>
            <nav style={{maxWidth:'200px'}}>
                <Sidenav expanded={expanded} defaultOpenKeys={['1', '2']} activeKey={activeKey} onSelect={handleSelect} style={{ height: '100%'}}>
                    <Sidenav.Body style={{height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: "#f1f1f1"}}>
                        <Nav style={{flexGrow:'1'}} className="sectionDropdown">
                            {/* <Dropdown
                                className="dropdownMain"
                                placement="rightStart"
                                eventKey="0"
                                title={label}
                                icon={<Icon icon="exchange" />}
                            >
                                <Dropdown.Item className="dropdownItem" eventKey="0-1" onSelect={()=>onSelectChange(CORSO)}>Gestione corso</Dropdown.Item>
                                <Dropdown.Item className="dropdownItem" eventKey="0-2" onSelect={()=>onSelectChange(CLASSE)}>Gestione classe</Dropdown.Item>
                                <Dropdown.Item className="dropdownItem" eventKey="0-3" onSelect={()=>onSelectChange(STUDENTE)}>Visuale studente</Dropdown.Item>
                            </Dropdown>*/}
                            {navItemList}
                        </Nav>
                        <Nav>
                            <Nav.Item icon={expanded ? (<Icon icon="left" />) : (<Icon icon="right" />)} onClick={handleToggle} />
                        </Nav>

                    </Sidenav.Body>
                </Sidenav>
            </nav>

            <section style={{flexGrow:'1', overflowY:'scroll'}}>
                <div style={{padding:"20px"}}>
                    {subPage}
                </div>
            </section>
        </div>

    );

}

