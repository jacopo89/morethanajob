import {Icon, Nav, Navbar} from "rsuite";
import * as Routes from "../routes";
import {bordeaux} from "../styledComponents/CustomComponents";
import React from "react";
import styled from "styled-components";
import FinalHeader from "./FinalHeader";
import Footer from "./Footer";

export default function DashboardLayout({page}) {

    return (
        <DesktopDiv>
        <div style={{backgroundColor: "white", minHeight:"100vh"}}>
            <FinalHeader />


            <div style={{display:"flex", height: "100vh", flexDirection: "column", position: "absolute", top:0, width:"100%", paddingTop:53 }}>
                <div style={{paddingTop:56, paddingLeft:40, paddingRight:40, margin:"0 auto", width: "100%", background:`linear-gradient(${bordeaux} 50%,50%, whitesmoke 50%)`, flexGrow:1 }}>
                    {page}
                </div>
                <Footer />
            </div>
        </div>
        </DesktopDiv>)
}

const DesktopDiv = styled.div`position: absolute;  width: 100%; min-height:100%;`;
