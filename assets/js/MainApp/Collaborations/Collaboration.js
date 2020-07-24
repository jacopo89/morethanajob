import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {Button, Col, Form, Grid, Icon, Modal, Panel, Row} from "rsuite";
import {bordeaux, InverseButton, MainButton} from "../../styledComponents/CustomComponents";
import {useGetCollaboration} from "../../Backend/hooks/useCollaborations";
import {getCalendarFormat} from "../../ReusableComponents/TimeManager";
import {useSelector} from "react-redux";
import {useConfirmApplication, useGetApplications, usePostApplication} from "../../Backend/hooks/useProjects";
import * as Routes from "../../routes";
import {GenericTable} from "../../ReusableComponents/GenericTable";
import styled from "styled-components";
import TextField from "../../Login/Components/TextField";

export default function Collaboration(){
    const {id} = useParams();
    const [collaboration, getCollaborationHandler] = useGetCollaboration();
    const {user} = useSelector(state=>state);
    const isOwner = collaboration && collaboration.user.email === user.email;

    console.log("is owner", isOwner);

    const history = useHistory();

    useEffect(()=>{
        getCollaborationHandler(id);
    }, []);

    const positionPanels = collaboration && collaboration.positions.map((position, index)=><PositionDescription key={index} isOwnerOfProject={isOwner} position={position} /> );
    const categoryImage = collaboration && collaboration.category && collaboration.category.picture;

    const isCollaborationClosed =  collaboration && collaboration.positions.filter((position)=>!position.isOpen).length === collaboration.positions.length;

    const serviceBox = <ServiceFormBox/>;

    return (<>
        <TitleBox>
            <div style={{height: 150, width: 150, backgroundImage: `url(${categoryImage})`, backgroundColor: "white", backgroundSize: "contain"}}/>
            {collaboration && collaboration.title}
            <InverseButton onClick={()=>history.push(Routes.editCollaboration(id))}>Edit Collaboration</InverseButton>
        </TitleBox>
        <div>{ collaboration && collaboration.description}</div>
        <InfoBox>
            <Grid style={{width:"100%"}}>
                <Row className="show-grid" style={{padding:5}}>
                    <Col xs={12}>
                        <IconWithText icon="user" label="Modality" value={collaboration && collaboration.modality}/>
                    </Col>
                    <Col xs={12}>
                        <IconWithText icon="map-marker" label="Address" value={collaboration && collaboration.address}/>
                    </Col>
                </Row>
                <Row className="show-grid" style={{padding:5}}>
                    <Col xs={12}>
                        <IconWithText icon="calendar-o" label="Start Date" value={collaboration && getCalendarFormat(collaboration.startDate)}/>
                    </Col>
                    <Col xs={12}>
                        <IconWithText icon="calendar-o" label="End Date" value={collaboration && getCalendarFormat(collaboration.endDate)}/>
                        </Col>
                </Row>
                <Row className="show-grid" style={{padding:5}}>
                    <Col xs={24}>
                        <IconWithText icon="calendar-o" label="Main Beneficiaries" value={collaboration && collaboration.mainBeneficiaries}/>
                    </Col>

                </Row>
                <Row className="show-grid" style={{padding:5}}>
                    <Col xs={24}>
                        <IconWithText icon="calendar-o" label="Costi" value={collaboration && collaboration.rates}/>
                    </Col>

                </Row>

            </Grid>
        </InfoBox>

        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        {isCollaborationClosed ? serviceBox :positionPanels }
        </div>
    </>)

}

export function PositionDescription({isOwnerOfProject, position}){
    const history = useHistory();
    const {user} = useSelector(state=>state);

    const [showModal, setShowModal] = useState(false);
    const openModal = ()=>setShowModal(true);
    const closeModal = ()=>setShowModal(false);

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



    const backgroundImage = (position && position.service && position.service.picture) ? position.service.picture  : "https://localhost:8000/uploads/users/7/society-5ed3a86ac6b2d.png";

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
                        {isOwnerOfProject && <Button onClick={openModal} >Check requests!</Button> }
                        {position.isOpen && !alreadyApplied && !isOwnerOfProject && <Button style={{float:"right"}} onClick={()=>postApplicationFunction()}>Apply!</Button> }
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



    return <div style={{backgroundColor:"whitesmoke", height:40, color:bordeaux, display: "flex", justifyContent: "space-evenly",alignItems: "center"}}>
        <div style={{flexGrow:3, paddingLeft:5, fontWeight: "bold", fontSize:20}}>
            {position.service.label}
        </div>
        <div style={{flexGrow:1}}>
            <Icon icon="calendar-o"/> From {getCalendarFormat(position.startDate)} to {getCalendarFormat(position.endDate)}
        </div>
    </div>

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

        console.log("Rowdata", rowData);

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


export function ServiceFormBox() {

    const [formValue, setFormValue] = useState();
    const [apply, setApply] = useState(false);
    const onSubmit = () =>{}



    return(
        <div style={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center", margin:5, height:300}}>
            {(!apply) ? <MainButton style={{width:200}}  onClick={()=>setApply(true)}>Apply</MainButton> :
                <Form fluid formValue={formValue} onChange={setFormValue} onSubmit={onSubmit}>
                    <TextField name="message" label="Messaggio" componentClass="textarea" />
                    <MainButton style={{width:100}} type="submit">Send</MainButton>
                </Form>}
        </div>
    )



}

export function IconWithText({icon, label, value}){
    return (<div style={{display:"flex", alignItems:"center"}}>
        <Icon size="2x" style={{margin:5, color:bordeaux, width:40}} icon={icon}/>
        <div style={{borderBottom:`1px solid ${bordeaux}`, display:"flex", alignItems:"center", width:"90%"}}>
            <div style={{fontSize:"18px", width:150, fontWeight:"bold", color:bordeaux}}>{label}: </div>
            <div style={{fontSize:"18px", marginLeft:20}}>{value}</div>
        </div>

    </div>);
}



const TitleBox =  styled.div`
width: 100%;
height:200px;
background-color: ${bordeaux};
color: white;
font-size: 40px;
font-weight: bolder;
display: flex;
align-items: center;    
justify-content: center;
`
;

const Title =  styled.div`
color: ${bordeaux};
font-size: 18px;
font-weight: bolder;
`
;


const InfoBox =  styled.div`
border: 3px solid ${bordeaux};
padding-top:10px;
padding-bottom:10px;
padding-left:30px;
padding-right:30px;
margin: 40px;
`
;