import {useSelector} from "react-redux";
import React, {useState} from "react";
import {usePostApplication} from "../../Backend/hooks/useProjects";
import {Button, Col, Icon, Panel, Row} from "rsuite";
import {PositionPanelTitle, RequestsModal} from "../Projects/Project";
import {bordeaux} from "../../styledComponents/CustomComponents";
import {getCalendarFormat} from "../../ReusableComponents/TimeManager";

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
        let profileImage = (relation.partner.profilePicture) ? relation.partner.profilePicture.url : "";
        return <div style={{backgroundImage:  `url(${profileImage})`, backgroundSize: "contain", width:100, height:100}}/>
    });


    const relationsList = relations.map(item=> <div>{item}</div>);



    const backgroundImage = (position && position.service && position.service.picture) ? position.service.picture  : "https://localhost:8000/uploads/users/7/society-5ed3a86ac6b2d.png";

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



    return <div style={{backgroundColor:bordeaux, minHeight:40, color:"white", display: "flex", justifyContent: "space-evenly",alignItems: "center"}}>
        <div style={{flexGrow:3, paddingLeft:5, fontWeight: "bold", fontSize:20}}>
            {position.service.label}
        </div>
        <div style={{flexGrow:1}}>
            <Icon icon="calendar-o"/> From {getCalendarFormat(position.startDate)} to {getCalendarFormat(position.endDate)}
        </div>
    </div>

}
