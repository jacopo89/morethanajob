import {Col, Icon, IconButton, Panel, Row} from "rsuite";
import {ServicePanelTitle} from "../../Profile/submenus/SocietyFornitures";
import {useSelector} from "react-redux";
import {useHistory} from 'react-router-dom';
import {useRemoveOfferedService} from "../../../Backend/hooks/useServices";
import {bordeaux} from "../../../styledComponents/CustomComponents";
import React from "react";
import * as Routes from "../../../routes";

export default function FurnitureDetail({furniture, isOwner}){
    const furnitureImage = (furniture && furniture.service) ? furniture.service.picture  : "";

    return <Panel header={
        <FurniturePanelTitle furniture={furniture} isOwner={isOwner} />}>
        <Row className="show-grid">
            <Col xs={8}>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <div style={{backgroundImage:  `url(${furnitureImage})`, backgroundSize: "contain", width:150, height:150}}/>
                </div>
            </Col>
            <Col xs={16}>
                <div style={{minHeight:150}}>{furniture.description}</div>
            </Col>
        </Row>
    </Panel>

}


export function FurniturePanelTitle({furniture, isOwner}){
    const {user} = useSelector(state=>state);

    const history = useHistory();


    const [deleteService, deleteServiceHandler] = useRemoveOfferedService();

    return <div style={{color:bordeaux, minHeight:40, backgroundColor:"whitesmoke", display: "flex", justifyContent: "space-evenly",alignItems: "center"}}>
        <div style={{flexGrow:3, paddingLeft:5, fontWeight: "bold", fontSize:20}}>
            {furniture.service.name}
        </div>
        <div>
            {isOwner && <IconButton icon={<Icon icon="trash"/> } onClick={() => deleteServiceHandler(furniture.id, {successCallback: ()=>history.push(Routes.dashboardPage)})}/>}
        </div>
    </div>
}



