import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Button, Col, Grid, Icon, Modal, Panel, Row} from "rsuite";
import styled from "styled-components";
import {useHistory, useParams} from "react-router-dom";
import {
    useConfirmApplication,
    useGetApplications,
    useGetProject,
    usePostApplication
} from "../../Backend/hooks/useProjects";
import {
    bordeaux,
    coverPicture, FormBox,
    InverseButton,
    profilePicture,
    projectPicture
} from "../../styledComponents/CustomComponents";
import * as Routes from "../../routes";
import {GenericTable} from "../../ReusableComponents/GenericTable";
import {getCalendarFormat} from "../../ReusableComponents/TimeManager";
import {useTranslation} from "react-i18next";
import CollaborationDetail from "../Profile/DetailCards/CollaborationDetail";
import {profile} from "../../routes";
import {IconSpan} from "../Profile/submenus/SocietyContacts";



export default function Project(){


    const { t, i18n } = useTranslation();

    //Logged user
    const {user} = useSelector(state=>state);

    //project Id
    const {id} = useParams();

    const history = useHistory();
    //project hooks
    const [project, getProjectHandler] = useGetProject();

    useEffect(()=>{
        getProjectHandler(id);
    },[]);

    const isOwner = project.projectPartnersRelations.filter((relation)=> {
        return relation.isLeader===true && relation.partner.email===user.email
    }).length>0;



    const backgroundImage = (project && project.projectLogo) ? project.projectLogo.url  : projectPicture;
    const backgrounCoverdImage = (project && project.projectPicture) ? project.projectPicture.url  : coverPicture;

    let list;

    if(project.isPortfolio){
        const existingPartners = project.projectPartnersRelations.map((projectPartnersRelation, index)=>{
            let profileImage = (projectPartnersRelation.partner.profilePicture) ? projectPartnersRelation.partner.profilePicture.url : profilePicture ;
            let name = (projectPartnersRelation.partner.name);
            let profileName = (projectPartnersRelation.partner.profileName);
            return (<div style={{display: "flex", flexDirection:"column"}}>
                <img key={index} src={profileImage} style={{ width:150, height:150 }} alt={profileName}/>
                <a href={`/profile/${profileName}`} >{name}</a>
            </div>)
        });
        const externalpartners =  project.externalPartners.map((externalPartner)=> <ExternalPartnerPanel partner={externalPartner}/>);
        list = <>
            <h4 style={{color:bordeaux}}>{t('Platform Partners')}</h4>
            <div style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap"}}>{existingPartners}</div>

            {externalpartners.length!==0 && <><Icon style={{color:bordeaux}} icon="people-group" size="3x" /> <h4 style={{color:bordeaux}}>{t('External Partners')}</h4></> }
            {externalpartners}
        </>

    }else{
        list = project.collaborations.map((collaboration)=> <CollaborationDetail collaboration={collaboration} />);
    }

    const projectLogostyle = {backgroundImage:  `url(${backgroundImage})`, backgroundSize: "contain", width:150, height:150}

    const projectLogo = <div style={projectLogostyle}/>
    return <>

        <div style={{height:250, width:"100%", marginBottom:10, backgroundColor:"black",position:"relative", backgroundImage: `url(${backgrounCoverdImage})`}}>
            <LinearGradient/>
            {isOwner && <>
                <InverseButton onClick={()=>history.push(Routes.editProject(id))}>Edit project</InverseButton>
            </>
            }

        </div>
        <FormBox>
            <Grid fluid style={{margin:10}}>
                <Row className="show-grid" style={{padding:5, display:"flex", alignItems:"flex-start"}}>
                    <Col xs={8}>
                        <div style={{display:"flex", justifyContent:"center"}}>
                            {projectLogo}
                        </div>
                    </Col>
                    <Col xs={16}>
                        <h3 style={{color: bordeaux}}>{project && project.title}</h3>
                        <div>{ project && project.longDescription}</div>

                            <IconSpan><Icon style={{color:bordeaux}} icon="external-link-square" size="3x" /> {project && project.links}</IconSpan>
                            <IconSpan><Icon style={{color:bordeaux}} icon="envelope" size="3x" /> {project && project.contacts}</IconSpan>

                    </Col>
                </Row>


            </Grid>
            {list}
        </FormBox>

    </>;
}

export function ExternalPartnerPanel({partner}){
    return <>
        <div>{partner.name}</div>
        <div>{partner.website}</div>
        <div>{partner.email}</div>

        </>
}




export function RequestsModal({position, showModal, closeModal, callback}){


    const [positionRequests, getPositionRequestsHandler] = useGetApplications();
    const [confirmCollaborationResponse, confirmCollaborationHandler] = useConfirmApplication();
    const history = useHistory();

    const confirmCollaboration = (rowData) =>{
        console.log("Confirm Collaboration", rowData)
        const formData = new FormData();
        formData.append('user', rowData.user.email);
        formData.append('position',position.id );
        confirmCollaborationHandler(formData);
    };



    const actionRender= (rowData) => {


        return (
            <span>
                    <a onClick={() => approveHandler(rowData)}> Approve </a> |{' '}
                <a onClick={()=>seeHandler(rowData)}> See </a>
                  </span>
        );
    }

    const approveHandler = (rowData)=>{
        console.log("rowdata approvehandler", rowData);
        confirmCollaboration(rowData, {successCallback: callback});
    }

    const seeHandler = (rowData) => {
        console.log("Rowdata profilename", rowData);
        history.push(Routes.profile(rowData.user.profileName));
    }

    const timeRender = (rowData) => {
        return getCalendarFormat(rowData.creationTime);
    }
    const nameRender = (rowData) => {
        return rowData.user.name;
    }


    const model = [
        {label:t('Society Name'), render:nameRender},
        {label:"Time", render:timeRender},
        {label:"actions", render:actionRender}
    ];
    const table = <GenericTable modelData={model} propData={positionRequests} />
    useEffect(()=>{
        getPositionRequestsHandler(position.id);
    },[position]);

    return (<Modal overflow={true} show={showModal}  >
        <Modal.Header>
            <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {table}
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={closeModal} appearance="primary">
                Ok
            </Button>
            <Button onClick={closeModal} appearance="subtle">
                Cancel
            </Button>
        </Modal.Footer>
    </Modal>)
}





const LinearGradient = styled.div`
position: absolute;
width: 100%;
height: 100%;
background-image: linear-gradient(to top, black, white);
opacity:33%;
`;
