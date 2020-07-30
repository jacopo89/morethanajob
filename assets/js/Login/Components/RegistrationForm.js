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
    Schema
} from "rsuite";
import React from "react";
import {MainButton, RegistrationBox, SecondaryButton} from "../../styledComponents/CustomComponents";
import TextField from "./TextField";
import {dataLanguage} from "../../selectData";
import {useHistory} from "react-router-dom";
import * as Routes from '../../routes';

export default function RegistrationForm({registrationProps}){
    const { StringType } = Schema.Types;

    const history = useHistory();


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
                <TextField name="name" label="Society Name"  />
                <TextField name="email" label="Email"  />
                <TextField name="password" label="Password" type="password" />
                <TextField name="language" label="Choose language" accepter={SelectPicker} data={dataLanguage} searchable={false} style={{width:"100%"}}/>

                <ButtonToolbar>
                    <MainButton appearance="primary" onClick={()=>registrationProps.registrationHandler(formValue)}>Submit</MainButton>
                    <SecondaryButton onClick={()=> history.push(Routes.login)}>Back to Login</SecondaryButton>
                </ButtonToolbar>
    </Form>
        </RegistrationBox>);
}
