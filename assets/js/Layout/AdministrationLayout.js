import SidebarPage from "./SidebarPage";
import React from "react";
import {Icon, Nav} from "rsuite";
import * as Routes from "../routes"
import {useHistory} from "react-router-dom";
import MainPage from "./MainPage";
import FullPage from "./FullPage";
import {useSelector} from "react-redux";
export default function AdministrationLayout({page}) {
    const {user} = useSelector(state=>state);
    const history = useHistory();

    const seeAdminMenu = user && (user.roles.includes("ROLE_ADMIN") || user.roles.includes("ROLE_ARABIC_ADMIN") || user.roles.includes("ROLE_GREEK_ADMIN") || user.roles.includes("ROLE_ITALIAN_ADMIN") || user.roles.includes("ROLE_ENGLISH_ADMIN"));
    const seeTotalAdmin = user && user.roles.includes("ROLE_ADMIN");

    const navItems = <>
        <Nav.Item eventKey="1" icon={<Icon icon="info-circle" />} onClick={()=> history.push(Routes.administrationCollaborations)}>Collaborations</Nav.Item>
        <Nav.Item eventKey="2" icon={<Icon icon="info-circle" />} onClick={()=> history.push(Routes.administrationProjects)}>Projects</Nav.Item>
        <Nav.Item eventKey="3" icon={<Icon icon="info-circle" />} onClick={()=> history.push(Routes.administrationUsers)}>Users</Nav.Item>
        {seeTotalAdmin &&
        <>
            <Nav.Item eventKey="4" icon={<Icon icon="info-circle"/>}
                   onClick={() => history.push(Routes.administrationCategories)}>Categories</Nav.Item>
            <Nav.Item eventKey="5" icon={<Icon
            icon="info-circle"/>} onClick={() => history.push(Routes.administrationExpertise)}>Expertise</Nav.Item>
            <Nav.Item eventKey="6" icon={<Icon
            icon="info-circle"/>} onClick={() => history.push(Routes.administrationNews)}>News</Nav.Item>
            <Nav.Item eventKey="7" icon={<Icon
            icon="info-circle"/>} onClick={() => history.push(Routes.administrationStatistics)}>Statistics</Nav.Item></>
        }

    </>

    return <FullPage page={
        <SidebarPage navItemList={navItems} subPage={page}  />
    }/>

}
