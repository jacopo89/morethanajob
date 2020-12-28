import SidebarPage from "./SidebarPage";
import React from "react";
import {Icon, Nav} from "rsuite";
import * as Routes from "../routes"
import {useHistory} from "react-router-dom";
import MainPage from "./MainPage";
import FullPage from "./FullPage";
export default function AdministrationLayout({page}) {

    const history = useHistory();
    const navItems = <>
        <Nav.Item eventKey="1" icon={<Icon icon="info-circle" />} onClick={()=> history.push(Routes.administrationCollaborations)}>Collaborations</Nav.Item>
        <Nav.Item eventKey="2" icon={<Icon icon="info-circle" />} onClick={()=> history.push(Routes.administrationProjects)}>Projects</Nav.Item>
        <Nav.Item eventKey="3" icon={<Icon icon="info-circle" />} onClick={()=> history.push(Routes.administrationUsers)}>Users</Nav.Item>
        <Nav.Item eventKey="4" icon={<Icon icon="info-circle" />} onClick={()=> history.push(Routes.administrationCategories)}>Categories</Nav.Item>
        <Nav.Item eventKey="5" icon={<Icon icon="info-circle" />} onClick={()=> history.push(Routes.administrationExpertise)}>Expertise</Nav.Item>
        <Nav.Item eventKey="6" icon={<Icon icon="info-circle" />} onClick={()=> history.push(Routes.administrationNews)}>News</Nav.Item>
        <Nav.Item eventKey="7" icon={<Icon icon="info-circle" />} onClick={()=> history.push(Routes.administrationStatistics)}>Statistics</Nav.Item>


    </>

    return <FullPage page={
        <SidebarPage navItemList={navItems} subPage={page}  />
    }/>

}
