import {Icon, Nav, Navbar} from "rsuite";
import * as Routes from "../routes";
import {bordeaux} from "../styledComponents/CustomComponents";
import React from "react";
import styled from "styled-components";

export default function DashboardLayout({page}) {

    return (
        <DesktopDiv>
        <div style={{backgroundColor: "white", minHeight:"100vh"}}>

            <Navbar appearance="subtle">
                <Navbar.Header>
                    <a href="#" className="navbar-brand logo">
                        LOGO ENI
                    </a>
                    <a href="#" className="navbar-brand logo">
                        LOGO UE
                    </a>
                    <a href="#" className="navbar-brand logo">
                        LOGO SARDEGNA
                    </a>
                </Navbar.Header>
                <Navbar.Body>

                    <Nav pullRight>
                        <Nav.Item onClick={()=>history.push(Routes.dashboardPage)}>MORE THAN A JOB</Nav.Item>
                        <Nav.Item onClick={()=>history.push(Routes.registration)} icon={<Icon icon="cog" />}>Register</Nav.Item>
                    </Nav>
                </Navbar.Body>
            </Navbar>


            <div style={{display:"flex", height: "100vh", flexDirection: "column", position: "absolute", top:0, width:"100%", paddingTop:53 }}>
                <div style={{paddingTop:56, paddingLeft:40, paddingRight:40, margin:"0 auto", width: "100%", background:`linear-gradient(${bordeaux} 50%,50%, whitesmoke 50%)`, flexGrow:1 }}>
                    {page}
                </div>
                <div style={{width:"100%", height:200, backgroundColor:bordeaux, alignItems:"center", display:"flex", flexDirection:"column", padding:50}}>
                    <div style={{display: "flex", width:400, justifyContent: "space-around"}}>
                        <Icon style={{color:"white"}} icon="facebook-square" size="3x"/>
                        <Icon style={{color:"white"}} icon="linkedin-square" size="3x"/>
                        <Icon style={{color:"white"}} icon="twitter-square" size="3x" /> </div>
                    <p style={{color:"white"}}>enibcmed.eu/projects/morethanajob</p>
                    <p style={{color:"white"}}>More than a job is a project funded by the EU</p>
                </div>
            </div>
        </div>
        </DesktopDiv>)
}

const DesktopDiv = styled.div`position: absolute;  width: 100%; min-height:100%;`;
