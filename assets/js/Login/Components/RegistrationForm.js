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

export default function RegistrationForm({registrationProps}){
    const { StringType } = Schema.Types;


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
                <TextField name="name" label="Nome società"  />
                <TextField name="email" label="Email"  />
                <TextField name="password" label="Password" type="password" />
                <TextField name="language" label="Seleziona lingua" accepter={SelectPicker} data={dataLanguage} searchable={false} style={{width:"100%"}}/>

                <ButtonToolbar>
                    <MainButton appearance="primary" onClick={()=>registrationProps.registrationHandler(formValue)}>Sottometti</MainButton>
                    <SecondaryButton appearance="default">Cancel</SecondaryButton>
                </ButtonToolbar>
    </Form>
        </RegistrationBox>);
}
