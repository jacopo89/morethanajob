import React from "react";
import {Button, Col, Form, Grid, Icon, Nav, Navbar, Panel, PanelGroup, Row} from "rsuite";
import {useHistory} from "react-router-dom";
import * as Routes from '../routes'
import {Body, bordeaux, gray} from "../styledComponents/CustomComponents";
import styled from "styled-components";
import TextField from "../Login/Components/TextField";
import "./dashboard.css";

export default function Dashboard(){
    const history = useHistory();

    const panelStyle = {width: "85%", borderRadius:"20px", backgroundColor:"white", margin:"0 auto", padding:20, marginTop:20}

    return <>
        <Navbar id="dashboard" appearance="inverse" style={{backgroundColor:"transparent", color:"white"}} >
            <Navbar.Body>
                <Nav>
                    <Nav.Item eventKey="1" icon={<Icon icon="home" />}>
                        Home
                    </Nav.Item>
                    <Nav.Item href="#aboutUs"  eventKey="2">About us</Nav.Item>
                    <Nav.Item  eventKey="3">Categories</Nav.Item>
                    <Nav.Item  eventKey="3">FAQ</Nav.Item>
                    <Nav.Item  eventKey="3">Contact us</Nav.Item>
                </Nav>
                <Nav pullRight>
                    <Nav.Item onClick={()=>history.push(Routes.login)} icon={<Icon icon="cog" />}>Login</Nav.Item>
                    <Nav.Item onClick={()=>history.push(Routes.registration)} icon={<Icon icon="cog" />}>Register</Nav.Item>
                </Nav>
            </Navbar.Body>
        </Navbar>
        <Body style={{backgroundColor:"transparent", maxWidth:"none"}}>
            <Panel shaded style={panelStyle}>
                <Grid fluid>
                    <Row className="show-grid">
                        <Col xs={12}>
                            <h4>Portale More than a JOb</h4>
                            <h5>Un'offerta integrata di servizi per il benessere della collettività</h5>
                            <p>L'obiettivo principale è quello di fornire una visualizzazione semplice e completa dell'offerta dei servizi di welfare presenti sul territorio, erogati sia dala pubblica ammnistrazione che dall'ampia gamma di attori appartenenti all'economia sociale e solidale</p>
                        </Col>
                        <Col xs={12}>
                            Col2
                        </Col>
                    </Row>
                </Grid>
            </Panel>
            <Panel shaded style={panelStyle} id="aboutUs">
                <Title>
                ABOUT US
                </Title>
            </Panel>
            <Panel shaded style={panelStyle}>
                <Title>Categories</Title>
                <div style={{display:"flex", justifyContent:"space-around"}}>
                    <IconTextBox>
                        <img width={75} src="/icons/ico1.png"/>
                        <p>Family and income support</p>
                    </IconTextBox>
                    <IconTextBox>
                        <img width={75} src="/icons/ico2.png"/>
                        <p>Family and income support</p>
                    </IconTextBox>
                    <IconTextBox>
                        <img width={75} src="/icons/ico3.png"/>
                        <p>Family and income support</p>
                    </IconTextBox>
                    <IconTextBox>
                        <img width={75} src="/icons/ico4.png"/>
                        <p>Family and income support</p>
                    </IconTextBox>
                    <IconTextBox>
                        <img width={75} src="/icons/ico5.png"/>
                        <p>Family and income support</p>
                    </IconTextBox>

                </div>

            </Panel>
            <Panel shaded style={panelStyle}>
                <Title>FAQ</Title>
                <PanelGroup accordion bordered>
                    <Panel header="Does this course need special requirements?" defaultExpanded>
                        No. It is a standard course.
                    </Panel>
                    <Panel header="Panel 2">
                        Domanda2
                    </Panel>
                    <Panel header="Panel 3">
                        Domanda 3
                    </Panel>
                </PanelGroup>
            </Panel>
            <Panel shaded style={panelStyle}>
                <Title>Contattaci</Title>
                <Form fluid>
                    <TextField name="name" placeHolder="Name" />
                    <TextField name="surname" placeHolder="Surname" />
                    <TextField name="message" placeHolder="Message" componentClass="textarea" />
                    <Button style={{float:"right", backgroundColor:bordeaux}}>Submit message </Button>

                </Form>
            </Panel>

        </Body>
    </>

}


const Title = styled.h5`color:${bordeaux}; text-align:center; margin:10px`;

const DesktopDiv = styled.div`position: absolute;  width: 100vw; min-height:100%;`;
const Box = styled.div`width: 85%; border-radius:20px; background-color:whitesmoke; margin:0 auto; padding:20; margin-top:20`;
const IconTextBox = styled.div`display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 158px;`;
