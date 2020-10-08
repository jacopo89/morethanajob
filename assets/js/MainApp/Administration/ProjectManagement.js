import {GenericTable} from "../../ReusableComponents/GenericTable";
import React,{useEffect} from "react";
import * as Routes from "../../routes";

import {useGetAllCollaborations, useGetAllProjects} from "../../Backend/hooks/useAdministration";
import {useHistory} from "react-router-dom";
import {Container} from "rsuite";

export default function ProjectManagement(){
    const history = useHistory();

    const actionRender= (rowData) => {

        console.log("Rowdata", rowData);

        return (
            <span>
                <a onClick={()=>history.push(Routes.editProject(rowData.id))}> Edit </a>
            </span>
        );
    }


    const model = [
        {label:"id", dataKey:"id"},
        {label:"name", dataKey:"title"},
        {label:"actions", render:actionRender}
    ];

    const [projects,getProjects] = useGetAllProjects();

    useEffect(()=>{
        getProjects();
    },[]);


    return <Container style={{padding:10}}>
        <h2>Projects Management</h2>
        <GenericTable filterable={true} resizable={true} modelData={model} propData={projects} rowKey="id" />
    </Container>
}