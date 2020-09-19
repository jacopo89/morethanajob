import {Col, Icon, IconButton, Panel, Row} from "rsuite";
import React from "react";
import {bordeaux} from "../../styledComponents/CustomComponents";
import {getCalendarFormat} from "../../ReusableComponents/TimeManager";

export function PositionDescription({position, services, remover, updater, setEdit, isEdit=false}){

    console.log("services",services);
    console.log("position",position);

    const correctService = services.filter((service)=> service.id === position.service);
    const servicePicture = (correctService.length!==0) ? correctService[0].picture : "";

    const backgroundImage = (position && position.service && position.service.picture) ? position.service.picture  : "";



    return <>
        <Panel header={
            <PositionPanelTitle position={position}  remover={remover} setEdit={setEdit} isEdit={isEdit}/>}>
            <Row className="show-grid">
                <Col xs={8}>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <div style={{
                            backgroundImage: `url(${servicePicture})`,
                            backgroundSize: "contain",
                            width: 150,
                            height: 150
                        }}/>
                    </div>
                </Col>
                <Col xs={16}>
                    <div style={{height: 150, maxHeight: 150}}>{position.description}</div>
                </Col>
            </Row>
        </Panel>
    </>;

}

function PositionPanelTitle({position, remover, updater, setEdit, isEdit=false}){

    const remoteRemover = {}; // funzione di rimozione dal db

    let removerButton = <></>;
    if(isEdit) {
        const removerFunction = (position.creationTimeFrontend === position.id) ? remover : remoteRemover;
        removerButton = <><IconButton onClick={() => setEdit(position)} icon={<Icon icon="edit2"/>}/><IconButton
            onClick={() => removerFunction(position.id)} icon={<Icon icon="trash"/>}/></>
    }


    return <div style={{backgroundColor:bordeaux, minHeight:40, color:"white", display: "flex", justifyContent: "space-evenly",alignItems: "center"}}>
        <div style={{flexGrow:3, paddingLeft:5, fontWeight: "bold", fontSize:20}}>
            {position.service && position.service.label}
        </div>
        <div style={{flexGrow:1}}>
            <Icon icon="calendar-o"/> Deadline {getCalendarFormat(position.deadline)}
        </div>
        {removerButton}
    </div>

}