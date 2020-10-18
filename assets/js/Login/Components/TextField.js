import {ControlLabel, FormControl, FormGroup} from "rsuite";
import React from "react";

export default function TextField({ name, label, accepter, style, ...rest }) {

    let finalStyle  = {...style};
    return (

        <FormGroup style={finalStyle}>
            {label && <ControlLabel><b>{label}</b> </ControlLabel>}
            <FormControl name={name} accepter={accepter} style={style} {...rest} />
        </FormGroup>
    );
}
