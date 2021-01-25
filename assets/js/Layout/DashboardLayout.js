import {bordeaux} from "../styledComponents/CustomComponents";
import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import ListHeader from "./ListHeader";
import {useHeader} from "./Header/useHeader";

export default function DashboardLayout({page}) {

    const header = useHeader();

    return (
        <DesktopDiv>
        <div style={{backgroundColor: "white", minHeight:"100vh"}}>
            {header}
            <div style={{display:"flex", height: "100vh", flexDirection: "column", position: "absolute", top:0, width:"100%", paddingTop:53 }}>
                <div style={{paddingTop:81, paddingLeft:40, paddingRight:40, margin:"0 auto", width: "100%", background:`linear-gradient(${bordeaux} 50%,50%, whitesmoke 50%)`, flexGrow:1 }}>
                    {page}
                </div>
                <Footer />
            </div>
        </div>
        </DesktopDiv>)
}

const DesktopDiv = styled.div`position: absolute;  width: 100%; min-height:100%;`;
