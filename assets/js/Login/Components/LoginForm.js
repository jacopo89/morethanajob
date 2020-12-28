import {Input,Button, ButtonToolbar, ControlLabel, Form, FormControl, FormGroup, HelpBlock, Schema} from "rsuite";
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

    const history = useHistory();
    const registrationButton = (loginProps.registration) ? <SecondaryButton href={loginProps.registrationNavigation} appearance="default"  >{t('Register')}</SecondaryButton> : <></>;


    return (<RegistrationBox>
        <ControlLabel>{t('Email')}</ControlLabel>
        <Input name="email" type="email"/>
        <ControlLabel><div style={{display:"flex", justifyContent:"space-between"}}><span>{t('Password')}</span> <a href="/recover">Forgot password?</a> </div></ControlLabel>
        <Input name="password" type="password"/>
        <ButtonToolbar>
            <MainButton appearance="primary" type="submit">{t('Login')}</MainButton>
            {registrationButton}
        </ButtonToolbar>
        </RegistrationBox>)
}


/*
const altro = <Form
    autoComplete="off"
    model={model}
    formValue={formValue}
    onChange={setFormValue}
    //onSubmit={()=>loginProps.loginHandler(formValue)}
>
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
</Form>*/
