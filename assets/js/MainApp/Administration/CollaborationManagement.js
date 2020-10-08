import {GenericTable} from "../../ReusableComponents/GenericTable";
import React,{useEffect} from "react";
import * as Routes from "../../routes";

import {useGetAllCollaborations} from "../../Backend/hooks/useAdministration";
import {useHistory} from "react-router-dom";
import {Container} from "rsuite";

export default function CollaborationManagement(){
    const history = useHistory();

    const actionRender= (rowData) => {


        return (
            <span>
                <a onClick={()=>history.push(Routes.editCollaboration(rowData.id))}> Edit </a>
            </span>
        );
    }


    const model = [
        {label:"id", dataKey:"id"},
        {label:"title", dataKey:"title"},
        {label:"actions", render:actionRender}
    ];

    const [collaborations,getCollaborations] = useGetAllCollaborations();

    useEffect(()=>{
        getCollaborations();
    },[]);

    return <Container style={{padding:10}}>
        <h2>Collaborations Management</h2>
        <GenericTable sortable={true} filterable={true} resizable={true}  modelData={model} propData={collaborations} rowKey="id" />
    </Container>

}