import React, {useEffect, useRef, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {Button, Col, Form, Grid, HelpBlock, Icon, Modal, Panel, Row} from "rsuite";
import {bordeaux, CollaborationBox, MainButton} from "../../styledComponents/CustomComponents";
import {useGetCollaboration, useSendMessage} from "../../Backend/hooks/useCollaborations";
import {getCalendarFormat} from "../../ReusableComponents/TimeManager";
import {useSelector} from "react-redux";
import {useConfirmApplication, useGetApplications, usePostApplication} from "../../Backend/hooks/useProjects";
import * as Routes from "../../routes";
import {GenericTable} from "../../ReusableComponents/GenericTable";
import styled from "styled-components";
import TextField from "../../Login/Components/TextField";
import {useTranslation} from "react-i18next";
import {getCollaborationsLanguageElements} from "../../Functions/Collaborations";
import {digestAmounts} from "../../selectData";
import {messageAnonymousModel} from "../FormModels/models";

export default function Collaboration(){
    const {id} = useParams();
    const [collaboration, getCollaborationHandler] = useGetCollaboration();
    const {user,language} = useSelector(state=>state);
    const isOwner = (user!==undefined) ? (collaboration && collaboration.user.email === user.email) :false;
    const { t, i18n } = useTranslation();

    const history = useHistory();

    useEffect(()=>{
        getCollaborationHandler(id);
    }, []);

    const positionPanels = collaboration && collaboration.positions.map((position, index)=><PositionShowDescription key={index} isOwnerOfProject={isOwner} position={position} /> );
    const categoryImage = collaboration && collaboration.category && collaboration.category.picture;

    const isCollaborationClosed =  collaboration && collaboration.positions.filter((position)=>!position.isOpen).length === collaboration.positions.length;

    const {title, description, languageMessage} = getCollaborationsLanguageElements(collaboration);

    const serviceBox = <ServiceFormBox collaboration={collaboration}/>;

    const editButton = isCollaborationClosed ? <Button style={{backgroundColor:"white", color:bordeaux, margin:10, bottom:10, right:10}} onClick={()=>history.push(Routes.editService(id))}>Edit Service</Button> : <Button style={{backgroundColor:"white", color:bordeaux, margin:10, bottom:10, right:10}} onClick={()=>history.push(Routes.editCollaboration(id))}>Edit Collaboration</Button>

    return (<>
        <div style={{width:"100%", backgroundColor:bordeaux}}>
            <CollaborationBox>
                <div style={{height: 150, width: 150, backgroundImage: `url(${categoryImage})`, backgroundColor: "white", backgroundSize: "contain", flex:"none", margin:10}}/>
                {title}
            </CollaborationBox>
            {isOwner && editButton}
        </div>

        <div style={{padding:10}}>{description}</div>
        <HelpBlock>{languageMessage}</HelpBlock>
        <InfoBox>
            <Grid style={{width:"100%"}}>
                <Row className="show-grid" style={{padding:5}}>
                    <Col xs={12}>
                        <IconWithText icon="calendar-o" label={t('Start date')} value={collaboration && getCalendarFormat(collaboration.startDate)}/>
                    </Col>
                    <Col xs={12}>
                        <IconWithText icon="calendar-o" label={t('End date')} value={collaboration && getCalendarFormat(collaboration.endDate)}/>
                        </Col>
                </Row>
                {isCollaborationClosed && <>
                    <Row className="show-grid" style={{padding: 5}}>
                        <Col xs={24}>
                            <IconWithText icon="calendar-o" label={t('Main beneficiaries')}
                                          value={collaboration && collaboration.mainBeneficiaries}/>
                        </Col>

                    </Row>
                    <Row className="show-grid" style={{padding: 5}}>
                        <Col xs={12}>
                            <IconWithText icon="calendar-o" label={t('Rate type')} value={collaboration && collaboration.rateType}/>
                        </Col>
                        <Col xs={12}>
                            <IconWithText icon="calendar-o" label={t('Payment')} value={collaboration && collaboration.rates && digestAmounts(collaboration.rates, collaboration.currency)}/>
                        </Col>
                    </Row>
                    <Row className="show-grid" style={{padding: 5}}>
                        <Col xs={24}>
                            <IconWithText icon="calendar-o" label={t('More info')} value={collaboration && collaboration.ratesText}/>
                        </Col>
                    </Row>
                </>
                }
                <Row className="show-grid" style={{padding:5}}>
                    <Col xs={24}>
                        <IconWithText icon="calendar-o" label={t('Contacts')} value={collaboration && collaboration.contacts}/>
                    </Col>

                </Row>
                <Row className="show-grid" style={{padding:5}}>
                    <Col xs={12}>
                        <IconWithText icon="user" label={t('Modality')} value={collaboration && collaboration.modality}/>
                    </Col>
                </Row>

            </Grid>
        </InfoBox>

        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        {isCollaborationClosed ? serviceBox :positionPanels }
        </div>
    </>)

}

export function PositionShowDescription({isOwnerOfProject, position}){
    const history = useHistory();
    const {user} = useSelector(state=>state);

    const [showModal, setShowModal] = useState(false);
    const openModal = ()=>setShowModal(true);
    const closeModal = ()=>setShowModal(false);

    const {t, i18n} = useTranslation();

    const [applyResponse, postApplicationHandler] = usePostApplication();

    const postApplicationFunction = () => {
        const formData = new FormData();
        formData.append('user', user.email);
        formData.append('position', position.id);
        postApplicationHandler(formData);
    }


    const relations = position.positionUserInterests.filter((userInterest) => {
        if(userInterest.user){
            return userInterest.user.id !== user.id
        }
    }).map(userInterest=>  {
        let profileImage = (userInterest.user.profilePicture) ? userInterest.user.profilePicture.url : "";
        return <div style={{backgroundImage:  `url(${profileImage})`, backgroundSize: "contain", width:100, height:100}}/>
    });



    const backgroundImage = (position && position.service && position.service.picture) ? position.service.picture  : "";

    const alreadyApplied = position.positionUserInterests.filter((userinterest)=> userinterest.user.id === user.id).length>0;

    const render = (position.isOpen) ?
        <>
            <Panel style={{width:"100%"}} header={
                <PositionPanelTitle position={position} />}>
                <Row className="show-grid">
                    <Col xs={8}>
                        <div style={{display:"flex", justifyContent:"center"}}>
                            <div style={{backgroundImage:  `url(${backgroundImage})`, backgroundSize: "contain", width:150, height:150}}/>
                        </div>
                    </Col>
                    <Col xs={16}>
                        <div style={{height:150, maxHeight:150}}>{position.description}</div>
                        {false && isOwnerOfProject && <Button onClick={openModal} >Check requests!</Button> } //TODO should be done
                        {position.isOpen && !alreadyApplied && !isOwnerOfProject && <Button style={{float:"right"}} onClick={()=>postApplicationFunction()}>{t('Apply')}</Button> }
                    </Col>
                </Row>
            </Panel>
            <RequestsModal position={position} showModal={showModal} closeModal={closeModal} />
        </> :
        <>
            <Panel header={
                <PositionPanelTitle position={position} />}>
                <Row className="show-grid">
                    <Col xs={8}>
                        <div style={{display:"flex", justifyContent:"center"}}>
                            <div style={{backgroundImage:  `url(${backgroundImage})`, backgroundSize: "contain", width:150, height:150}}/>
                        </div>
                    </Col>
                    <Col xs={16}>
                        <div style={{height:150, maxHeight:150, display:"flex", flexDirection:"column", flexWrap:"wrap", justifyContent:"space-around"}}>
                            <div style={{width:"100%", flexGrow:1}} >{position.description}</div>
                            <div style={{display:"flex",alignItems:"center"}}>
                                assigned to
                                {relations}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Panel>
        </>
    ;
    return render;

}

export function PositionPanelTitle({position}){

    const {t, i18n} = useTranslation();

    const today = new Date();
    const deadlineDate = new Date(position.deadline);

    const timeMessage = (position.deadline && today > deadlineDate) ? t('Position closed') : t('Deadline') + getCalendarFormat(position.deadline);


    return <div style={{backgroundColor:"whitesmoke", minHeight:40, color:bordeaux, display: "flex", justifyContent: "space-evenly",alignItems: "center"}}>
        <div style={{flexGrow:3, paddingLeft:5, fontWeight: "bold", fontSize:20}}>
            {position.service.label}
        </div>
        <div style={{flexGrow:1}}>
            <Icon icon="calendar-o"/> {timeMessage}
        </div>
    </div>

}


export function RequestsModal({position, showModal, closeModal, callback}){


    const [positionRequests, getPositionRequestsHandler] = useGetApplications();
    const [confirmCollaborationResponse, confirmCollaborationHandler] = useConfirmApplication();
    const history = useHistory();

    const confirmCollaboration = (rowData) =>{
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
        {label:"Nome società", render:nameRender},
        {label:"Time", render:timeRender},
        {label:"actions", render:actionRender}
    ];
    const table = <GenericTable modelData={model} propData={positionRequests} />
    useEffect(()=>{
        getPositionRequestsHandler(position.id);
    },[position]);

    return (<Modal overflow={true} show={showModal}  >
        <Modal.Header>
            <Modal.Title>Modal Title</Modal.Title>
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


export function ServiceFormBox({collaboration}) {

    const {user} = useSelector(state=>state);
    const [formValue, setFormValue] = useState();
    const [apply, setApply] = useState(false);
    const [messageResponse, sendMessageHandler] =  useSendMessage();
    const { t, i18n } = useTranslation();

    const receiver = (collaboration.contacts) ? collaboration.contacts : collaboration.user.email;
    const formRef = useRef();
    const onSubmit = () =>{
        const formData = new FormData();

        if(formRef.current.check()){

            const profileName = formValue.firstname + " " + formValue.lastname;
            formData.append('emailSender',formValue.email);
            formData.append('userSender', JSON.stringify({profileName:profileName}));
            formData.append('emailReceiver',receiver);
            formData.append('message', formValue.message);
            sendMessageHandler(formData);
        }

    };

    return(
        (!messageResponse) ?
        <div style={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center", margin:5, height:300}}>
            {(!apply) ?
                <MainButton style={{width:200}}  onClick={()=>setApply(true)}>{t('Apply')}</MainButton>
                :
                <Form ref={formRef} model={messageAnonymousModel} fluid style={{width:"100%", padding:40}} formValue={formValue} onChange={setFormValue} onSubmit={onSubmit}>
                       <Grid fluid>
                           <Row>
                               <Col xs={12}>
                                   <TextField style={{width:"100%"}} name="firstname" label={t('Firstname')}  />
                               </Col>
                               <Col xs={12}>
                                   <TextField style={{width:"100%"}} name="lastname" label={t('Lastname')}  />
                               </Col>
                           </Row>
                           <Row>
                               <Col xs={24}>
                                   <TextField style={{width:"100%"}} name="email" label={t('Email')}  />
                               </Col>
                           </Row>
                        </Grid>
                    <TextField style={{width:"100%"}} name="message" label={t('Message')} componentClass="textarea" />
                    <MainButton style={{width:100}} type="submit">{t('Send')}</MainButton>
                </Form>}
        </div> : <div>Message correctly sent!</div>
    )



}

export function IconWithText({icon, label, value}){
    return (<div style={{display:"flex", alignItems:"center", marginLeft:5, marginRight:5}}>
        <Icon size="2x" style={{margin:5, color:bordeaux, width:40}} icon={icon}/>
        <div style={{borderBottom:`1px solid ${bordeaux}`, display:"flex", alignItems:"center", width:"100%"}}>
            <div style={{fontSize:"18px", width:150, fontWeight:"bold", color:bordeaux}}>{label}: </div>
            <div style={{fontSize:"18px", marginLeft:20}}>{value}</div>
        </div>

    </div>);
}



const InfoBox =  styled.div`
border: 3px solid ${bordeaux};
padding-top:10px;
padding-bottom:10px;
padding-left:30px;
padding-right:30px;
margin: 40px;
`
;
