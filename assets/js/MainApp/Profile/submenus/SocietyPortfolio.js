import React, {useEffect, useState} from "react";
import {Button, Col, Icon, IconButton, Panel, PanelGroup, Row} from "rsuite";
import {useGetCollaborationProjects, useGetPortfolioProjects} from "../../../Backend/hooks/useProjects";
import {bordeaux} from "../../../styledComponents/CustomComponents";
import {getCalendarFormat, getDayAndMonth} from "../../../ReusableComponents/TimeManager";
import {useHistory} from "react-router-dom";
import * as Routes from '../../../routes';
import NewProjectModal from "../../Projects/NewProjectModal";

import {useTranslation} from "react-i18next";
import CollaborationDetail from "../DetailCards/CollaborationDetail";

export default function SocietyPortfolio({society}) {
    const [portfolioProjects, getPortfolioProjectsHandler] = useGetPortfolioProjects();
    const [portfolioProjectsCollaborations, getCollaborationProjectsHandler] = useGetCollaborationProjects();
    const [show, setShow] = useState(false);
    const openModal = ()=> setShow(true);
    const closeModal = ()=> setShow(false);
    const { t, i18n } = useTranslation();

    const history = useHistory();

    useEffect(()=>{
        getPortfolioProjectsHandler(society.email);
        getCollaborationProjectsHandler(society.email);
    },[]);

    const successCallback = ()=>{
        closeModal();
        getPortfolioProjectsHandler(society.email);
        getCollaborationProjectsHandler(society.email);
    }

    const panels = portfolioProjects.map((project, item)=> <PortfolioDetail key={item} project={project}/>);
    const panelShow = panels.length > 0 ? panels : <div style={{height:100, margin:"0 auto", textAlign:"center", color:bordeaux}}> No portfolio projects </div>

    const panelsCollaborations = portfolioProjectsCollaborations.map((collaboration, item)=> <CollaborationDetail collaboration={collaboration}/>);
    const panelShowCollaborations = panelsCollaborations.length > 0 ? panelsCollaborations : <div style={{height:100, margin:"0 auto", textAlign:"center", color:bordeaux}}> No collaborations </div>
    return  <>

        <PanelGroup>{panelShow}{panelShowCollaborations}</PanelGroup>
        <NewProjectModal show={show} onHide={closeModal} successCallback={successCallback} isPortfolio={true} />
        </>



}

export function PortfolioDetail({project}){

    const history = useHistory();
    const { t, i18n } = useTranslation();

    const backgroundImage = (project && project.projectLogo) ? project.projectLogo.url  : "/defaults/project_thumbnail.png";

        const existingPartners = project.projectPartnersRelations.map((projectPartnersRelation, index)=>{
            let profileImage = (projectPartnersRelation.partner.profilePicture) ? projectPartnersRelation.partner.profilePicture.url : "";
            return <div key={index} style={{backgroundImage:  `url(${profileImage})`, backgroundSize: "contain", width:50, height:50}}/>
        });
        let list = <>
            <div style={{display:"flex", flexWrap:"wrap"}}>{existingPartners}</div>
        </>


        return <Panel header={
        <PortfolioPanelTitle project={project} />}>
        <Row className="show-grid">
            <Col xs={8}>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <div style={{backgroundImage:  `url(${backgroundImage})`, backgroundSize: "contain", width:150, height:150}}/>
                </div>
            </Col>
            <Col xs={16}>
                <div style={{display:"flex", flexDirection:"column", flexWrap:"wrap", justifyContent:"space-around"}}>
                    <div style={{width:"100%", flexGrow:1}} >{project.shortDescription}</div>
                    {list}
                </div>

            </Col>
        </Row>
            <Row className="show-grid">
                <Col xs={8}>

                </Col>
                <Col xs={16}>
                    <Button style={{backgroundColor:bordeaux, color:"white", float:"right"}} onClick={()=> history.push(Routes.project(project.id))}>{t('Read More')}</Button>
                </Col>
            </Row>
    </Panel>

}

export function PortfolioPanelTitle({project}){
    const { t, i18n } = useTranslation();
    return <div style={{backgroundColor:bordeaux, minHeight:40, color:"white", display: "flex", justifyContent: "space-evenly",alignItems: "center"}}>
        <div style={{flexGrow:3, paddingLeft:5, fontWeight: "bold", fontSize:20}}>
            {project.title}
        </div>

    </div>
}
