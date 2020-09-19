import {Col, Icon, IconButton, Panel, Row} from "rsuite";
import {ServicePanelTitle} from "../../Profile/submenus/SocietyFornitures";
import {useSelector} from "react-redux";
import {useRemoveOfferedService} from "../../../Backend/hooks/useServices";
import {bordeaux} from "../../../styledComponents/CustomComponents";
import React from "react";

export default function FurnitureDetail({furniture}){
    const furnitureImage = (furniture && furniture.service) ? furniture.service.picture  : "";

    return <Panel header={
        <FurniturePanelTitle furniture={furniture} />}>
        <Row className="show-grid">
            <Col xs={8}>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <div style={{backgroundImage:  `url(${furnitureImage})`, backgroundSize: "contain", width:150, height:150}}/>
                </div>
            </Col>
            <Col xs={16}>
                <div style={{height:150, maxHeight:150}}>{furniture.description}</div>
            </Col>
        </Row>
    </Panel>

}


export function FurniturePanelTitle({furniture}){
    const {user} = useSelector(state=>state);
    const isOwner = (user!==undefined) ? true : false;
    const [deleteService, deleteServiceHandler] = useRemoveOfferedService();

    return <div style={{color:bordeaux, minHeight:40, backgroundColor:"whitesmoke", display: "flex", justifyContent: "space-evenly",alignItems: "center"}}>
        <div style={{flexGrow:3, paddingLeft:5, fontWeight: "bold", fontSize:20}}>
            {furniture.service.name}
        </div>
        <div>
            {isOwner && <IconButton icon={<Icon icon="trash"/> } onClick={() => deleteServiceHandler(furniture.id)}/>}
        </div>
    </div>
}



