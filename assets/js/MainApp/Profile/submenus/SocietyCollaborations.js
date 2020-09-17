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
import CollaborationDetail from "../DetailCards/CollaborationDetail";

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

