import {Body, bordeaux, gray} from "../styledComponents/CustomComponents";
import React from 'react'
import styled from 'styled-components';
import FinalHeader from "./FinalHeader";
import Footer from "./Footer";

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
            <Footer/>
        </DesktopDiv>

        </>
        )

}

const DesktopDiv = styled.div`position: absolute;  width: 100%; min-height:100%;`;
