import {useState} from "react";
import {
    Button,
    SelectPicker,
    ButtonToolbar,
    ControlLabel,
    Form,
    FormControl,
    FormGroup,
    HelpBlock,
    Schema, Grid, Col
} from "rsuite";
import React from "react";
import {FormRow, MainButton, RegistrationBox, SecondaryButton} from "../../styledComponents/CustomComponents";
import TextField from "./TextField";
import {dataLanguage} from "../../selectData";
import {useHistory} from "react-router-dom";
import * as Routes from '../../routes';
import {useTranslation} from "react-i18next";

export default function RegistrationForm({registrationProps}){
    const { StringType } = Schema.Types;

    const history = useHistory();
    const { t, i18n } = useTranslation();


    const model = Schema.Model({
        email: StringType().isRequired('This field is required.'),
        name: StringType().isRequired('This field is required.'),
        password: StringType().isRequired('This field is required.'),
    });
    const [formValue, setFormValue] = useState();
    const submitHandler = (formValue) =>
    {

        registrationProps.registrationHandler();
    }




    return (
        <RegistrationBox>

            <Form
                model={model}
                formValue={formValue}
                onChange={setFormValue}
                onSubmit={()=>submitHandler(formValue)}>

                <Grid style={{width: "100%"}} fluid>
                    <FormRow>
                        <Col xs={24}>
                            <TextField name="name" label={t('Organisation name')}  />
                        </Col>
                    </FormRow>
                    <FormRow>
                        <Col xs={24}>
                            <TextField name="email" label={t('Email')}  />
                        </Col>
                    </FormRow>
                    <FormRow>
                        <Col xs={24}>
                            <TextField name="password" label={t('Password')} type="password" />
                        </Col>
                    </FormRow>
                    <FormRow>
                        <Col xs={24}>
                            <TextField name="language" label={t('Choose language')} accepter={SelectPicker} data={dataLanguage()} searchable={false} style={{width:"100%"}}/>
                        </Col>
                    </FormRow>
                </Grid>
                <ButtonToolbar>
                    <MainButton appearance="primary" onClick={()=>registrationProps.registrationHandler(formValue)}>{t('Submit')}</MainButton>
                    <SecondaryButton href="/login">{t('Login')}</SecondaryButton>
                </ButtonToolbar>
    </Form>
        </RegistrationBox>);
}
