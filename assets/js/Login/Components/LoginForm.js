import {Button, ButtonToolbar, ControlLabel, Form, FormControl, FormGroup, HelpBlock, Schema} from "rsuite";
import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {MainButton, RegistrationBox, SecondaryButton} from "../../styledComponents/CustomComponents";
import * as Routes from '../../routes';
import {useChangePassword, useCheckUserMail, useLogin} from "../../Backend/useBackend";
import TextField from "./TextField";

export default function LoginForm({loginProps}){

    const { StringType } = Schema.Types;
    const [userMailResponse, checkUserMailHandler, userMailLoaded, userMailStatus] =  useCheckUserMail();

    function asyncCheckUsername(name) {
        const formData = new FormData();
        formData.append('email', name);
        let response = "cazzo";

        const callbacks = {successCallback: ()=> response = response + response, errorCallback: ()=> response= false };
        checkUserMailHandler(formData, callbacks);
        console.log("user mail checked", response);

        return response;
    }


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
                    onSubmit={()=>submitHandler(formValue)}>
                    <FormGroup>
                        <ControlLabel>Email</ControlLabel>
                        <FormControl name="email" type="email" checkAsync />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel><div style={{display:"flex", justifyContent:"space-between"}}><span>Password</span> <Link to={Routes.passwordRecovery}>Forgot password?</Link> </div></ControlLabel>
                        <FormControl name="password" type="password" />
                    </FormGroup>
                    <FormGroup>
                        <ButtonToolbar>
                            <MainButton appearance="primary" type="submit">Login</MainButton>
                            <SecondaryButton appearance="default" onClick={()=> history.push(Routes.changePassword)}>Cancel</SecondaryButton>
                            {registrationButton}
                        </ButtonToolbar>
                    </FormGroup>
                </Form>
            </div>

        </RegistrationBox>)
}