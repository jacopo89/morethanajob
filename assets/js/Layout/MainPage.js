import {Body, gray} from "../styledComponents/CustomComponents";
import React from 'react'
import {Navbar, Nav, Dropdown, Icon} from 'rsuite';
import Header from "./Header";
import styled from 'styled-components';

export default function MainPage({page}){
    return (
        <DesktopDiv>
            <div style={{backgroundColor: gray, minHeight:"100vh"}}>
                <Header />
                <div style={{paddingTop:56, maxWidth: 900, margin:"0 auto", width: "100%"}}>
                    <Body>
                        {page}
                    </Body>
                </div>

            </div>
            </DesktopDiv>
        )

}

const DesktopDiv = styled.div`position: absolute;  width: 100%; min-height:100%;`;
