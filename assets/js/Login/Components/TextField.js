import {ControlLabel, FormControl, FormGroup} from "rsuite";
import React from "react";

export default function TextField({ name, label, accepter, style, ...rest }) {
    return (
        <FormGroup style={style}>
            <ControlLabel>{label} </ControlLabel>
            <FormControl name={name} accepter={accepter} style={style} {...rest} />
        </FormGroup>
    );
}
