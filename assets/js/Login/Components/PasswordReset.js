import React, {useState} from "react";
import {Form, Schema} from "rsuite";
import {useHistory} from "react-router-dom";
import TextField from "./TextField";
import {useTranslation} from "react-i18next";
import {useChangePassword} from "../../Backend/useBackend";
import * as Routes from '../../routes';

export default function PasswordReset(){

    const [formValue, setFormValue] = useState({});
    const history = useHistory();


    const [passwordResponse, passwordChangeHandler] = useChangePassword();

    const { StringType } = Schema.Types;
    const { t, i18n } = useTranslation();



    const model = Schema.Model({
        recoveryKey: StringType()
            // .addRule((value, data) => {return asyncCheckUsername(value);}, 'Duplicate username')
            .isRequired('This field is required'),
        password: StringType().isRequired('This field is required.'),
    });

    const onSubmitHandler = () => {
        const formData = new FormData();
        formData.append('recoveryKey', formValue.recoveryKey);
        formData.append('password', formValue.password);

        passwordChangeHandler(formData, {successCallback:()=> history.push(Routes.login)});

    }

    return <Form model={model} formValue={formValue} onChange={setFormValue} onSubmit={onSubmitHandler}>
        <TextField name="recoveryKey" label="Insert code" />
        <TextField name="password" label="Insert new password" />
    </Form>
}