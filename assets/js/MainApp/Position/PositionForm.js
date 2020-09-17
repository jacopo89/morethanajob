import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {bordeaux} from "../../styledComponents/CustomComponents";
import {Button, DatePicker, Form, TreePicker} from "rsuite";
import TextField from "../../Login/Components/TextField";

export default function PositionForm({item, updater, save, remover, back, servicesTree}){

    const [formValue, setFormValue] = useState(item);
    const { t, i18n } = useTranslation();

    useEffect(()=>{
        updater(item.id, formValue);
    },[formValue])

    return <div style={{border:"1px solid", borderColor:bordeaux, padding:5}}>
        <Form formValue={formValue}  onChange={setFormValue}>
            <div style={{display:"flex", justifyContent:"space-around"}}>
                <TextField name="service" label={t('Expertise')} accepter={TreePicker} data={servicesTree} style={{width:"100%"}} />
            </div>
            <TextField name="description" label={t('Description')} componentClass="textarea"/>

            <div style={{display:"flex", justifyContent:"space-around"}}>
                <TextField name="deadline" accepter={DatePicker} label={t('Deadline')} format="DD-MM-YYYY" style={{width:"100%"}}/>
            </div>

        </Form>
        <Button onClick={save}>{t('Save')}</Button><Button onClick={()=>back(item.id)}>Undo</Button>
    </div>
}