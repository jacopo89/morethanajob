import {Body, bordeaux, gray} from "../styledComponents/CustomComponents";
import React from 'react'
import {Navbar, Nav, Dropdown, Icon} from 'rsuite';
import Header from "./Header";
import styled from 'styled-components';
import FinalHeader from "./FinalHeader";

export default function MainPage({page}){
    return (
        <>

        <DesktopDiv>
            <div style={{backgroundImage: `url('/defaults/background.jpg')`, minHeight:"100vh"}}>
                <FinalHeader />
                <div style={{paddingTop:100, maxWidth: 1081, margin:"0 auto", width: "100%"}}>
                    <Body>
                        {page}
                    </Body>

                </div>
            </div>
            <div style={{width:"100%", height:200, backgroundColor:bordeaux, alignItems:"center", display:"flex", flexDirection:"column", padding:50}}>
                <div style={{display: "flex", width:400, justifyContent: "space-around"}}>
                    <Icon style={{color:"white"}} icon="facebook-square" size="3x"/>
                    <Icon style={{color:"white"}} icon="linkedin-square" size="3x"/>
                    <Icon style={{color:"white"}} icon="twitter-square" size="3x" /> </div>
                <p style={{color:"white"}}>enibcmed.eu/projects/morethanajob</p>
                <p style={{color:"white"}}>More than a job is a project funded by the EU</p>
            </div>
        </DesktopDiv>

        </>
        )

}

const DesktopDiv = styled.div`position: absolute;  width: 100%; min-height:100%;`;
