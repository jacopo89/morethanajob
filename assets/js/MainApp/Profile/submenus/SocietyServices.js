import {useGetCollaborations, useGetCollaborationServices} from "../../../Backend/hooks/useCollaborations";
import React, {useEffect, useState} from "react";
import {bordeaux, InfoBox} from "../../../styledComponents/CustomComponents";
import {useHistory} from "react-router-dom";
import CollaborationDetail from "../DetailCards/CollaborationDetail";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

export default function SocietyServices({society}) {
    const [collaborations, getCollaborationsHandler] = useGetCollaborationServices();
    const [show, setShow] = useState(false);
    const openModal = ()=> setShow(true);
    const closeModal = ()=> setShow(false);

    const {user} = useSelector(state=>state);
    const history = useHistory();
    const {t} = useTranslation()


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
        {user && <InfoBox>
            {t('societyServicesText')}
        </InfoBox>}
        {panelShow}
    </>



}
