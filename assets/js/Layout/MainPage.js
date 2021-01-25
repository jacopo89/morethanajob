import {Body, bordeaux, gray, headerHeight} from "../styledComponents/CustomComponents";
import React from 'react'
import styled from 'styled-components';
import FinalHeader from "./FinalHeader";
import Footer from "./Footer";
import ListHeader from "./ListHeader";
import {useHeader} from "./Header/useHeader";

export default function MainPage({page}){
    const header = useHeader();
    return (
        <>

        <DesktopDiv>
            <div style={{backgroundImage: `url('/defaults/background.jpg')`, minHeight:"100vh"}}>
                {header}
                <div style={{paddingTop:headerHeight, maxWidth: 1081, margin:"0 auto", width: "100%"}}>
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
