import {GenericTable} from "../../ReusableComponents/GenericTable";
import React,{useEffect} from "react";
import * as Routes from "../../routes";

import {useGetAllCollaborations} from "../../Backend/hooks/useAdministration";
import {useHistory} from "react-router-dom";

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
        {label:"name", dataKey:"name"},
        {label:"actions", render:actionRender}
    ];

    const [collaborations,getCollaborations] = useGetAllCollaborations();

    useEffect(()=>{
        getCollaborations();
    },[]);


    return <GenericTable modelData={model} propData={collaborations} rowKey="id" />;
}