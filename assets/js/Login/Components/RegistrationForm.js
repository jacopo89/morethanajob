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

export default function RegistrationForm({registrationProps}){
    const pickerData = [
        {
            "label": "Italiano",
            "value": "it-IT",
        },
        {
            "label": "English",
            "value": "en-US",
        }
        ]
    const { StringType } = Schema.Types;


    const model = Schema.Model({
        email: StringType().isRequired('This field is required.'),
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
                <TextField name="email" label="Email"  />
                <TextField name="password" label="Password" type="password" />
                <TextField name="language" label="Select Language" accepter={SelectPicker} data={pickerData}/>

                <ButtonToolbar>
                    <MainButton appearance="primary" onClick={()=>registrationProps.registrationHandler(formValue)}>Submit</MainButton>
                    <SecondaryButton appearance="default">Cancel</SecondaryButton>
                </ButtonToolbar>
    </Form>
        </RegistrationBox>);
}
