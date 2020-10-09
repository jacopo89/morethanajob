import React, {useRef, useState} from "react";
import {useSelector} from "react-redux";
import {useCreateOfferedService} from "../../Backend/hooks/useServices";
import {useTranslation} from "react-i18next";
import {Form, Schema, SelectPicker, TreePicker} from "rsuite";
import TextField from "../../Login/Components/TextField";
import {dataCountry} from "../../selectData";
import {FormBox, SaveButton} from "../../styledComponents/CustomComponents";
import {useHistory} from "react-router-dom";
import * as Routes from "../../routes";
import {expertisesTreeByLanguage} from "../../Functions/Expertises";

export default function NewFurniture(){

    const [formValue, setFormValue] = useState();
    const {user} = useSelector(state=>state);
    const [createOfferedService, createOfferedServiceHandler] = useCreateOfferedService();
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
            createOfferedServiceHandler(formData, {successCallback:successCallback});
        }

    };



    let servicesTree = expertisesTreeByLanguage();


    const { NumberType } = Schema.Types;
    const model = Schema.Model({
        service: NumberType()
            // .addRule((value, data) => {return asyncCheckUsername(value);}, 'Duplicate username')
            .isRequired('This field is required'),
    })

    return (
        <FormBox>
            <Form ref={formRef} model={model} fluid formValue={formValue} onChange={setFormValue} onSubmit={onSubmitHandler}  >

                    <TextField name="service" label={t('Field of expertise')} accepter={TreePicker} data={servicesTree} style={{width:"100%"}} />
                    <TextField name="description" label={t('Description')} componentClass="textarea"/>
                    <TextField name="country" style={{width:"100%"}} label={t('Country')} accepter={SelectPicker} data={dataCountry}/>
                    <SaveButton type="submit">
                        {t('Save')}
                    </SaveButton>

            </Form>
        </FormBox>
    )
}