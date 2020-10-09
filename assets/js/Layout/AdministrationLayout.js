import SidebarPage from "./SidebarPage";
import React from "react";
import {Icon, Nav} from "rsuite";
import * as Routes from "../routes"
import {useHistory} from "react-router-dom";
import MainPage from "./MainPage";
export default function AdministrationLayout({page}) {

    const history = useHistory();
    const navItems = <>
        <Nav.Item eventKey="1" icon={<Icon icon="info-circle" />} onClick={()=> history.push(Routes.administrationCollaborations)}>Collaborations</Nav.Item>
        <Nav.Item eventKey="2" icon={<Icon icon="info-circle" />} onClick={()=> history.push(Routes.administrationProjects)}>Projects</Nav.Item>
        <Nav.Item eventKey="3" icon={<Icon icon="info-circle" />} onClick={()=> history.push(Routes.administrationUsers)}>Users</Nav.Item>
        <Nav.Item eventKey="3" icon={<Icon icon="info-circle" />} onClick={()=> history.push(Routes.administrationCategories)}>Categories</Nav.Item>
        <Nav.Item eventKey="3" icon={<Icon icon="info-circle" />} onClick={()=> history.push(Routes.administrationExpertise)}>Expertise</Nav.Item>


    </>

    return <MainPage page={
        <SidebarPage navItemList={navItems} subPage={page}  />
    }/>

}
