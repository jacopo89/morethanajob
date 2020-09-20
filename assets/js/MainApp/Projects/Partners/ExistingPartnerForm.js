import React, {useEffect, useState} from 'react';
import {Button, Form, SelectPicker} from "rsuite";
import TextField from "../../../Login/Components/TextField";
import {useGetUsers} from "../../../Backend/hooks/useAdministration";
import {useTranslation} from "react-i18next";

export default function ExistingPartnerForm({item, updater, save, back, partnersList}){

    const [formValue, setFormValue] = useState(item);
    const [users, getUsersListHandler] = useGetUsers();
    const {t, i18n} = useTranslation();

    useEffect(()=>{
        getUsersListHandler(null, {dataManipulationFunction: (data)=>{
                return data.map((user)=> {
                    return {...user, label:user.name, value: user.email}
                });
            } });
    },[])

    useEffect(()=>{
        updater(item.id, formValue);
    },[formValue])

    return <>
        <Form formValue={formValue}  onChange={setFormValue}>
            <TextField name="email" label={t('Existing partner')} style={{width:"100%"}} accepter={SelectPicker} data={users}/>

        </Form>
        <Button onClick={save}>{t('Confirm')}</Button><Button onClick={back}>Cancella</Button>
    </>
}