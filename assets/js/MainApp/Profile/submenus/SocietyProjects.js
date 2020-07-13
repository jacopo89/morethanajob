import {useGetCollaborationProjects, useGetPortfolioProjects} from "../../../Backend/hooks/useProjects";
import React, {useEffect, useState} from "react";
import {Button, Col, Icon, IconButton, Panel, PanelGroup, Row} from "rsuite";
import NewProjectModal from "../../Projects/NewProjectModal";
import * as Routes from "../../../routes";
import {bordeaux} from "../../../styledComponents/CustomComponents";
import {getCalendarFormat} from "../../../ReusableComponents/TimeManager";
import {useHistory} from "react-router-dom";
import {PortfolioPanelTitle} from "./SocietyPortfolio";

export default function SocietyProjects({society}) {
    const [portfolioProjects, getCollaborationProjectsHandler] = useGetCollaborationProjects();
    const [show, setShow] = useState(false);
    const openModal = ()=> setShow(true);
    const closeModal = ()=> setShow(false);

    const history = useHistory();


    useEffect(()=>{
        getCollaborationProjectsHandler(society.email);
    },[]);

    const successCallback = ()=>{
        closeModal();
        getCollaborationProjectsHandler(society.email);
    }

    const panels = portfolioProjects.map((project, item)=> <CollaborationDetail project={project}/>);
    const panelShow = panels.length > 0 ? panels : <div style={{height:100, margin:"0 auto", textAlign:"center", color:bordeaux}}> No collaborations </div>
    return  <>
        {panelShow}
        <NewProjectModal show={show} onHide={closeModal} successCallback={successCallback} isPortfolio={false} />
    </>



}

export function CollaborationDetail({project}){

    console.log("Project", project);
    const history = useHistory();

    const backgroundImage = (project && project.projectLogo) ? "https://localhost:8000/"+project.projectLogo.url  : "https://localhost:8000/uploads/users/7/society-5ed3a86ac6b2d.png";

    return <Panel header={
        <CollaborationPanelTitle project={project} />}>
        <Row className="show-grid">
            <Col xs={8}>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <div style={{backgroundImage:  `url(${backgroundImage})`, backgroundSize: "contain", width:150, height:150}}/>
                </div>
            </Col>
            <Col xs={16}>
                <div style={{height:150, maxHeight:150}}>{project.shortDescription}</div>
                <Button style={{float:"right", color:"white", backgroundColor: bordeaux}} onClick={()=> history.push(Routes.project(project.id))}>Dettaglio</Button>
            </Col>
        </Row>
    </Panel>

}

export function CollaborationPanelTitle({project}){

    const collaborationsNumber = project.collaborations.length;


    return <div style={{backgroundColor:bordeaux, height:40, color:"white", display: "flex", justifyContent: "space-evenly",alignItems: "center"}}>
        <div style={{flexGrow:3, paddingLeft:5, fontWeight: "bold", fontSize:20}}>
            {project.title}
        </div>
        <div style={{flexGrow:1, fontSize:12}}>
            <Icon icon="calendar-o"/> From {getCalendarFormat(project.startTime)} to {getCalendarFormat(project.endTime)}
        </div>
        <div style={{flexGrow:1, fontSize:12}}>
            Numero collaborazioni: {collaborationsNumber}
        </div>
    </div>
}
