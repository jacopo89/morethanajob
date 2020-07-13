import React from 'react'
import {ControlLabel, FormControl, FormGroup} from "rsuite";
import {bordeaux} from "../styledComponents/CustomComponents";

class TextField extends React.PureComponent {
    render() {
        const { name, label, accepter, ...props } = this.props;
        return (
            <FormGroup>
                <ControlLabel>{label} </ControlLabel>
                <FormControl style={{borderColor:bordeaux}} name={name} accepter={accepter} {...props} />
            </FormGroup>
        );
    }
}
