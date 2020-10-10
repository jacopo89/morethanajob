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

    return (
        <div style={{display: 'flex', flexFlow: 'row', height: '100vh'}}>
            <nav style={{maxWidth:'200px'}}>
                <Sidenav expanded={expanded} defaultOpenKeys={['1', '2']} activeKey={activeKey} onSelect={handleSelect} style={{ height: '100%'}}>
                    <Sidenav.Body style={{height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: "#f1f1f1"}}>
                        <Nav style={{flexGrow:'1'}} className="sectionDropdown">
                            {navItemList}
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

