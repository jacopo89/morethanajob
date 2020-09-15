import {Button, ButtonToolbar, ControlLabel, Form, FormControl, FormGroup, HelpBlock, Schema} from "rsuite";
import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {MainButton, RegistrationBox, SecondaryButton} from "../../styledComponents/CustomComponents";
import * as Routes from '../../routes';
import {useChangePassword, useCheckUserMail, useLogin} from "../../Backend/useBackend";
import TextField from "./TextField";
import {useTranslation} from "react-i18next";

export default function LoginForm({loginProps}){

    const { StringType } = Schema.Types;
    const { t, i18n } = useTranslation();



    const model = Schema.Model({
        email: StringType()
            // .addRule((value, data) => {return asyncCheckUsername(value);}, 'Duplicate username')
            .isRequired('This field is required'),
        password: StringType().isRequired('This field is required.'),
    });

    const [formValue, setFormValue] = useState();
    const [response, submitBackendHandler, loaded, status] = useLogin();
    const submitHandler = (formValue) => {
        const formData = new FormData();
        Object.keys(formValue).forEach((key)=> formData.append(key, formValue[key] ));
        submitBackendHandler(formData);
    }

    const history = useHistory();
    const registrationButton = (loginProps.registration) ? <SecondaryButton appearance="default" onClick={loginProps.registrationNavigation} >Register</SecondaryButton> : <></>;


    return (
        <RegistrationBox>
            <div>
                <h3>Sign in</h3>
            </div>
            <div>
                <Form
                    autoComplete="off"
                    model={model}
                    formValue={formValue}
                    onChange={setFormValue}
                    onSubmit={()=>loginProps.loginHandler(formValue)}>
                    <FormGroup>
                        <ControlLabel>{t('Email')}</ControlLabel>
                        <FormControl name="email" type="email" checkAsync />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel><div style={{display:"flex", justifyContent:"space-between"}}><span>{t('Password')}</span> <Link to={Routes.passwordRecovery}>Forgot password?</Link> </div></ControlLabel>
                        <FormControl name="password" type="password" />
                    </FormGroup>
                    <FormGroup>
                        <ButtonToolbar>
                            <MainButton appearance="primary" type="submit">{t('Login')}</MainButton>
                            {registrationButton}
                        </ButtonToolbar>
                    </FormGroup>
                </Form>
            </div>

        </RegistrationBox>)
}
