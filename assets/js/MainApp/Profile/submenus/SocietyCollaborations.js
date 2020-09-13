import React, {useEffect, useState} from "react";
import {Button, Col, Icon, IconButton, Panel, PanelGroup, Row} from "rsuite";
import NewProjectModal from "../../Projects/NewProjectModal";
import * as Routes from "../../../routes";
import {bordeaux} from "../../../styledComponents/CustomComponents";
import {getCalendarFormat} from "../../../ReusableComponents/TimeManager";
import {useHistory} from "react-router-dom";
import {PortfolioPanelTitle} from "./SocietyPortfolio";
import {useGetCollaborations} from "../../../Backend/hooks/useCollaborations";
import {useTranslation} from "react-i18next";

export default function SocietyCollaborations({society}) {
    const [collaborations, getCollaborationsHandler] = useGetCollaborations();
    const [show, setShow] = useState(false);
    const openModal = ()=> setShow(true);
    const closeModal = ()=> setShow(false);

    const history = useHistory();
    const { t, i18n } = useTranslation();


    console.log("Collaborations", collaborations);

    useEffect(()=>{
        getCollaborationsHandler(society.email);
    },[]);


    const successCallback = ()=>{
        closeModal();
        getCollaborationsHandler(society.email);
    }

    const panels = collaborations.map((collaboration, item)=> <CollaborationDetail key={item} collaboration={collaboration}/>);
    const panelShow = panels.length > 0 ? panels : <div style={{height:100, margin:"0 auto", textAlign:"center", color:bordeaux}}> No collaborations </div>
    return  <>
        {panelShow}
    </>



}

export function CollaborationDetail({collaboration}){

    const history = useHistory();
    const { t, i18n } = useTranslation();

    const backgroundImage = (collaboration && collaboration.category && collaboration.category.picture) ? collaboration.category.picture  : "/defaults/project_thumbnail.png";

    const collaborationPositions = collaboration.positions.map((position)=> <div style={{width: 50, height: 50, backgroundImage: `url(${position.service.picture})`, backgroundSize:"contain"}} /> );

    return <Panel header={
        <CollaborationPanelTitle collaboration={collaboration} />}>
        <Row className="show-grid">
            <Col xs={8}>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <div style={{backgroundImage:  `url(${backgroundImage})`, backgroundSize: "contain", width:150, height:150}}/>
                </div>
            </Col>
            <Col xs={16}>
                <div style={{height:150, maxHeight:150, display:"flex", flexDirection:"column", flexWrap:"wrap", justifyContent:"space-around"}}>
                    <div style={{width:"100%", flexGrow:1}} >{collaboration.shortDescription}</div>
                    {collaborationPositions}
                </div>
                <Button style={{float:"right", color:"white", backgroundColor: bordeaux}} onClick={()=> history.push(Routes.collaboration(collaboration.id))}>{t('details')}</Button>
            </Col>
        </Row>
    </Panel>

}

export function CollaborationPanelTitle({collaboration}){

    const openPositions = collaboration.positions.filter((position) => position.isOpen === true).length;


    return <div style={{color:bordeaux, minHeight:40, backgroundColor:"whitesmoke", display: "flex", justifyContent: "space-evenly",alignItems: "center"}}>
        <div style={{flexGrow:3, paddingLeft:10, fontWeight: "bold", fontSize:20}}>
            {collaboration.title}
        </div>
        <div style={{flexGrow:1, fontSize:12}}>
            <Icon icon="calendar-o"/> {t('From')} {getCalendarFormat(collaboration.startDate)} {t('to')} {getCalendarFormat(collaboration.endDate)}
        </div>
        <div style={{flexGrow:1, fontSize:12}}>
            <Icon icon="suitcase" /> {t('Open positions')}: {openPositions}
        </div>
    </div>
}
