import {useGetCollaborations, useGetCollaborationServices} from "../../../Backend/hooks/useCollaborations";
import React, {useEffect, useState} from "react";
import {bordeaux} from "../../../styledComponents/CustomComponents";
import {CollaborationDetail} from "./SocietyCollaborations";
import {useHistory} from "react-router-dom";

export default function SocietyServices({society}) {
    const [collaborations, getCollaborationsHandler] = useGetCollaborationServices();
    const [show, setShow] = useState(false);
    const openModal = ()=> setShow(true);
    const closeModal = ()=> setShow(false);

    const history = useHistory();


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