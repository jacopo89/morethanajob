import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Uploader, Icon, Timeline, Form, Dropdown, Button, Grid, Row, Col, Panel, Modal, IconButton} from "rsuite";
import {useUploadPictures} from "../../Backend/hooks/useProfile";
import styled from "styled-components";
import * as ActionTypes from '../../Redux/actions';
import {useGetUserInfo} from "../../Backend/hooks/UserInfo";
import {ProjectMenu} from "./../Profile/ProjectMenu";
import {useHistory, useParams} from "react-router-dom";
import {
    useConfirmApplication,
    useGetApplications,
    useGetProject,
    usePostApplication, useUploadProjectCover,
    useUploadProjectLogo
} from "../../Backend/hooks/useProjects";
import {bordeaux, InverseButton} from "../../styledComponents/CustomComponents";
import ImageCropper from "../../ReusableComponents/ImageCropper";
import * as Routes from "../../routes";
import {GenericTable} from "../../ReusableComponents/GenericTable";
import {getCalendarFormat} from "../../ReusableComponents/TimeManager";
import {useTranslation} from "react-i18next";



export default function Project(){


    const { t, i18n } = useTranslation();

    //Logged user
    const {user} = useSelector(state=>state);

    //project Id
    const {id} = useParams();

    const history = useHistory();
    //project hooks
    const [project, getProjectHandler] = useGetProject();
    const[responseLogo, uploadProjectLogoHandler] = useUploadProjectLogo();
    const[responseCover, uploadProjectPictureHandler] = useUploadProjectCover();


    const getProjectFunction = ()=>getProjectHandler(id);

    useEffect(()=>{
        getProjectHandler(id);
    },[])


    const isOwner = project.projectPartnersRelations.filter((relation)=> {
        return relation.isLeader===true && relation.partner.email===user.email
    }).length>0;


    const onChangeHandler = (file) => {
        let data = {};
        const formData = new FormData();
        formData.append('file', file);
        data.id = id;
        Object.keys(data).forEach((key)=>  { formData.append(key,JSON.stringify(data[key]));});
        uploadProjectPictureHandler(formData, {successCallback: ()=>{
                getProjectHandler(id)
            }});
    };

    const onChangeProjectLogoHandler = (file) => {
        let data = {};
        const formData = new FormData();
        formData.append('file', file);
        data.id = id;
        Object.keys(data).forEach((key)=>  { formData.append(key,JSON.stringify(data[key]));});
        uploadProjectLogoHandler(formData, {successCallback: ()=>{
                getProjectHandler(id)
            }});
    };

    const backgroundImage = (project && project.projectLogo) ? project.projectLogo.url  : "/defaults/project_thumbnail.png";
    const backgrounCoverdImage = (project && project.projectPicture) ? project.projectPicture.url  : "";

    let positions = null;
    if(project!==null){
        positions = project.positions.map((position)=> <PositionDescription project={project} isOwnerOfProject={isOwner} position={position} getProjectFunction={getProjectFunction}/>);
    }

    let list;

    if(project.isPortfolio){
        const existingPartners = project.projectPartnersRelations.map((projectPartnersRelation)=>{
            let profileImage = projectPartnersRelation.partner.profilePicture.url;
            return <div style={{backgroundImage:  `url(${profileImage})`, backgroundSize: "contain", width:200, height:200}}/>
        });
        const externalpartners =  project.externalPartners.map((externalPartner)=> externalPartner.name);
        list = <>
            <h5 style={{color:bordeaux, margin:"0 auto"}}>{t('Platform Partners')}</h5>
            <div style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap"}}>{existingPartners}</div>
            <h5 style={{color:bordeaux, margin:"0 auto"}}>{t('External Partners')}</h5>
            {externalpartners}
        </>

    }else{
        list = positions;
    }


    const uploadCoverButton = <InverseButton>{t('Change cover Button')}</InverseButton>

    const projectLogostyle = {backgroundImage:  `url(${backgroundImage})`, backgroundSize: "contain", width:150, height:150}
    const bottoneUploader = <Button style={projectLogostyle} > Upload</Button>

    const projectLogo = <div style={projectLogostyle}></div>
        const logo = (isOwner) ? <ImageCropper propCrop={{
            unit: 'px', // default, can be 'px' or '%'
            x: 0,
            y: 0,
            width: 200,
            height: 200
        }} keyField="projectImage" onChange={onChangeProjectLogoHandler} button={bottoneUploader} /> : projectLogo;
    return <>

        <div style={{height:250, width:"100%", border:"1px solid black", marginBottom:10, backgroundColor:"black",position:"relative", backgroundImage: `url(${backgrounCoverdImage})`}}>
            <LinearGradient/>
            {isOwner && <>
                <Button onClick={()=>history.push(Routes.editProject(id))}>Edit project</Button>
            </>
            }

        </div>
        <InfoBox>
            <Grid fluid>
                <Row className="show-grid" style={{padding:5, display:"flex", alignItems:"flex-start"}}>
                    <Col xs={8}>
                        <div style={{display:"flex", justifyContent:"center"}}>
                            {logo}
                        </div>
                    </Col>
                    <Col xs={16}>
                        <h3 style={{color: bordeaux}}>{project && project.title}</h3>
                        <div>{ project && project.longDescription}</div>
                    </Col>
                </Row>

            </Grid>
        </InfoBox>
        {list}
    </>;
}


export function PositionDescription({isOwnerOfProject, position, project, getProjectFunction}){


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


    const relations = project.projectPartnersRelations.filter((relation) => {
        if(relation.position){
            return relation.position.id === position.id
        }
    }).map(relation=>  {
        let profileImage = (relation.partner.profilePicture) ? "https://localhost:8000/"+relation.partner.profilePicture.url : "";
        return <div style={{backgroundImage:  `url(${profileImage})`, backgroundSize: "contain", width:100, height:100}}/>
    });


    const relationsList = relations.map(item=> <div>{item}</div>);



    const backgroundImage = (position && position.service && position.service.picture) ? "https://localhost:8000/"+position.service.picture  : "https://localhost:8000/uploads/users/7/society-5ed3a86ac6b2d.png";

    const alreadyApplied = position.positionUserInterests.filter((userinterest)=> userinterest.user.id === user.id).length>0;

    const render = (position.isOpen) ?
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
                    <div style={{height:150, maxHeight:150}}>{position.description}</div>
                    {isOwnerOfProject && <Button onClick={openModal} >Check requests!</Button> }
                    {position.isOpen && !alreadyApplied && !isOwnerOfProject && <Button style={{float:"right"}} onClick={()=>postApplicationFunction()}>Apply!</Button> }
                </Col>
            </Row>
        </Panel>
        <RequestsModal position={position} showModal={showModal} closeModal={closeModal} callback={getProjectFunction}/>
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



    return <div style={{backgroundColor:bordeaux, height:40, color:"white", display: "flex", justifyContent: "space-evenly",alignItems: "center"}}>
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





const InfoBox =  styled.div`
padding: 10px;`
;

const ProjectsBox =  styled.div`
border-color: gray;
border-width: 26px;
border-style: dashed;
border-radius: 10px;
padding: 10px;
overflow: scroll;
max-height:200px`

;
const UpdateProfilePicButton =  styled.div`
width: 160px;
background-color: transparent;
position: absolute;
bottom: 4;
left: 4;
height: 80px;
border-bottom-left-radius: 80px;
border-bottom-right-radius: 80px;
&:hover {
background-color: black;
opacity: 50%
}
`
;

const EditButton = styled(Button)`
background-color: gray;
position: absolute;
bottom: 4;
right: 4;
`;

const LinearGradient = styled.div`
position: absolute;
width: 100%;
height: 100%;
background-image: linear-gradient(to top, black, white);
opacity:33%;
`;
