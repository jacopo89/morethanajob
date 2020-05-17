import React from 'react'
import {ControlLabel, FormControl, FormGroup} from "rsuite";

class TextField extends React.PureComponent {
    render() {
        const { name, label, accepter, ...props } = this.props;
        return (
            <FormGroup>
                <ControlLabel>{label} </ControlLabel>
                <FormControl name={name} accepter={accepter} {...props} />
            </FormGroup>
        );
    }
}
