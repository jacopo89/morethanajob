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
    coverPicture, coverStyle, FormBox, IconSpanProject,
    InverseButton, LinearGradient,
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
            const partner = projectPartnersRelation.partner;
            return <PlatformPartnerPanel partner={partner} key={index} />

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

        <div style={{...coverStyle, backgroundImage: `url(${backgrounCoverdImage})`}}>
            <LinearGradient/>
            {isOwner && <>
                <InverseButton style={{position: "absolute", left:5, bottom:5}} onClick={()=>history.push(Routes.editProject(id))}>{t('Edit project')}</InverseButton>
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
                        <Grid fluid>
                            <Row>
                                <Col xs={8} style={{display:"flex",justifyContent:"center", marginBottom:5}}><Icon style={{color:bordeaux}} icon="external-link-square" size="3x" /></Col>
                                <Col xs={16}>{project && project.links}</Col>
                            </Row>
                            <Row>
                                <Col xs={8} style={{display:"flex",justifyContent:"center", marginBottom:5}}><Icon style={{color:bordeaux}} icon="envelope" size="3x" /></Col>
                                <Col xs={16}>{project && project.contacts}</Col>
                            </Row>
                        </Grid>
                    </Col>
                    <Col xs={16}>
                        <h3 style={{color: bordeaux}}>{project && project.title}</h3>
                        <div>{ project && project.longDescription}</div>
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

export function PlatformPartnerPanel({partner}){

    let profileImage = (partner.profilePicture) ? partner.profilePicture.url : profilePicture ;
    let name = (partner.name);
    let profileName = (partner.profileName);
    return (
        <div style={{display: "flex", flexDirection:"column", marginLeft:10, marginRight:10}}>
            <img src={profileImage} style={{ width:150, height:150 }} alt={profileName}/>
            <a href={`/profile/${profileName}`} >{name}</a>
        </div>)
}





