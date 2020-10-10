import {Body, bordeaux, FullBody, gray} from "../styledComponents/CustomComponents";
import React from 'react'
import styled from 'styled-components';
import FinalHeader from "./FinalHeader";
import Footer from "./Footer";

export default function FullPage({page}){
    return (
        <>

            <DesktopDiv>
                <div style={{backgroundImage: `url('/defaults/background.jpg')`, minHeight:"100vh"}}>
                    <FinalHeader />
                    <div style={{paddingTop:100, margin:"0 auto", width: "100%"}}>
                        <FullBody className="full-body">
                            {page}
                        </FullBody>

                    </div>
                </div>
                <Footer/>
            </DesktopDiv>

        </>
    )

}

const DesktopDiv = styled.div`position: absolute;  width: 100%; min-height:100%;`;
