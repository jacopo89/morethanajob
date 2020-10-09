import React, {useEffect, useState, useRef} from "react";
import {useSelector} from "react-redux";
import {useCreateOfferedService, useEditOfferedService, useGetServices} from "../../Backend/hooks/useServices";
import {useTranslation} from "react-i18next";
import {Button, ButtonGroup, Form, Modal, Schema, SelectPicker, TreePicker} from "rsuite";
import TextField from "../../Login/Components/TextField";
import {dataCountry} from "../../selectData";
import {bordeaux} from "../../styledComponents/CustomComponents";
import {useHistory} from "react-router-dom";
import * as Routes from "../../routes";
import {expertisesTreeByLanguage} from "../../Functions/Expertises";

export default function EditFurniture(){

    const [formValue, setFormValue] = useState();
    const {user} = useSelector(state=>state);
    const [editOfferedService, editOfferedServiceHandler] = useEditOfferedService();
    const { t, i18n } = useTranslation();
    const history = useHistory();
    const formRef = useRef();


    const successCallback = () => {
        history.push(Routes.profile(user.profileName));
    }

    const onSubmitHandler = () => {

        if(formRef.current.check()){
            const formData = new FormData();
            formData.append('email', user.email);
            Object.keys(formValue).forEach((key)=>  { formData.append(key,JSON.stringify(formValue[key]));});
            editOfferedServiceHandler(formData, {successCallback:successCallback});
        }
    };

    let servicesTree = expertisesTreeByLanguage();

    const { StringType, ArrayType } = Schema.Types;
    const model = Schema.Model({
        service: ArrayType()
            // .addRule((value, data) => {return asyncCheckUsername(value);}, 'Duplicate username')
            .isRequired('This field is required'),
    })

    return (
        <Form ref={formRef} model={model} fluid formValue={formValue} onChange={setFormValue} onSubmit={onSubmitHandler}  >

            <TextField name="service" label={t('Field of expertise')} accepter={TreePicker} data={servicesTree} style={{width:"100%"}} />
            <TextField name="description" label={t('description')} componentClass="textarea"/>
            <TextField name="country" label={t('Country')} accepter={SelectPicker} data={dataCountry}/>
            <ButtonGroup>
                <Button type="submit" style={{float:'right', backgroundColor: bordeaux, color:"white", margin:5}}>
                    {t('Save')}
                </Button>
            </ButtonGroup>
        </Form>
    )
}