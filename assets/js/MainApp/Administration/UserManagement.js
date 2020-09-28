import React, {useEffect, useState} from 'react'
import {useChangeUserRole, useGetUsers} from "../../Backend/hooks/useAdministration";
import {TablePanelDetail} from "../../ReusableComponents/TablePanelDetail";
import HorizontalStepForm from "../../ReusableComponents/HorizontalStepForm";
import UserDetail from "./UserDetail";
import * as Routes from "../../routes";
import {Form, CheckPicker, SelectPicker} from "rsuite";
import TextField from "../../Login/Components/TextField";
import {GenericTable} from "../../ReusableComponents/GenericTable";
import DeleteButton from "../../ReusableComponents/DeleteButton";

export default function UserManagement(){

    const [users, getUsersHandler] = useGetUsers();

    useEffect(()=>{getUsersHandler(); return ()=>{}},[]);

    const roles = [{
        label:"User",
        value:"ROLE_USER",
    }, {
        label:"Admin",
        value:"ROLE_ADMIN"
    }]



    const actionRender = (rowData) => {
        return (
            <span>
                <DeleteButton onClickHandler={() => console.log("Delete User")}/>
            </span>)
    }

    const roleRender= (rowData) => <RolePicker roles={roles} rowData={rowData} />

    const modelData = [
        {label:"id",dataKey: "id"},
        {label:"Email", dataKey: "email"},
        {label:"Ruoli",render:roleRender},
        {label:"Actions", render:actionRender}
    ]


    return <GenericTable rowKey="id" propData={users} modelData={modelData} />
}

function RolePicker({rowData, roles}){
    const selectRoles = (rowData.roles.includes("ROLE_ADMIN") ? "ROLE_ADMIN" : "ROLE_USER" );

    const [formValue, setFormValue] = useState({roles:selectRoles});

    const [changeUserRoleResponse, changeUserRoleHandler] = useChangeUserRole();

    const changeUserRole = () => {
        const formData = new FormData();
        const isAdmin = selectRoles==="ROLE_ADMIN";
        formData.append("id", rowData.id);
        formData.append("admin", isAdmin.toString());
        changeUserRoleHandler(formData);

    }

    const customSetFormValue = (value) => {
        setFormValue(state => {
            if(value.roles!==state.roles){
                changeUserRole();
            }
            return value;
        });
    }

    return (
        <Form formValue={formValue} onChange={customSetFormValue}>
            <TextField accepter={SelectPicker} name="roles" data={roles} searchable={false}  />
        </Form>
    );
}