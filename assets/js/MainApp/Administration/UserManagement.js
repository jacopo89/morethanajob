import React, {useEffect} from 'react'
import {useGetUsers} from "../../Backend/hooks/useAdministration";
import {Container} from "rsuite";
import {GenericTable} from "../../ReusableComponents/GenericTable";
import {useHistory} from "react-router-dom";
import {useRemoveUser} from "../../Backend/hooks/useProfile";

export default function UserManagement(){

    const [users, getUsersHandler] = useGetUsers();
    const [removUserResponse, removeUserHandler] = useRemoveUser();

    useEffect(()=>{getUsersHandler(); return ()=>{}},[]);

    const history = useHistory();

    const actionRender= (rowData) => {

       return (
            <span>
                <a onClick={()=>removeUserHandler(rowData.id, {successCallback:()=>getUsersHandler()})}> Remove </a>
                <a onClick={()=>{
                    console.log(rowData.profileName)
                    history.push(`/edit-profile/${rowData.profileName}`)
                }}>Edit</a>
            </span>
        );
    }


    const model = [
        {label:"id", dataKey:"id"},
        {label:"name", dataKey:"name"},
        {label:"email", dataKey:"email"},
        {label:"actions", render:actionRender}
    ];



    return <>
        <Container style={{padding:10}}>
            <h2>User Management</h2>
            <GenericTable filterable={true} resizable={true} modelData={model} propData={users} rowKey="id" />
        </Container>

    </>;
}
