import React, {useEffect, useState} from 'react'
import {useChangeUserRole, useGetAllProjects, useGetUsers} from "../../Backend/hooks/useAdministration";
import {TablePanelDetail} from "../../ReusableComponents/TablePanelDetail";
import HorizontalStepForm from "../../ReusableComponents/HorizontalStepForm";
import UserDetail from "./UserDetail";
import * as Routes from "../../routes";
import {Form, CheckPicker, SelectPicker, Container} from "rsuite";
import TextField from "../../Login/Components/TextField";
import {GenericTable} from "../../ReusableComponents/GenericTable";
import DeleteButton from "../../ReusableComponents/DeleteButton";
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
                <a onClick={()=>removeUserHandler(rowData.email, {successCallback:()=>getUsersHandler()})}> Remove </a>
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