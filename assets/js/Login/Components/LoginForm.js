import {ButtonToolbar, Col, ControlLabel, Grid, Input, Row, Schema} from "rsuite";
import React from "react";
import {useHistory} from "react-router-dom";
import {FlexAroundDiv, MainButton, RegistrationBox, SecondaryButton} from "../../styledComponents/CustomComponents";
import {useTranslation} from "react-i18next";
import styled from "styled-components";

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


    return (
        <RegistrationBox>
            <Grid style={{width: "100%"}} fluid>
                <FormRow>
                    <Col xs={24}>
                        <ControlLabel>{t('Email')}</ControlLabel>
                        <Input name="email" type="email"/>
                    </Col>
                </FormRow>
                <FormRow>
                    <Col xs={24}>
                        <ControlLabel><div style={{display:"flex", justifyContent:"space-between"}}><span>{t('Password')}</span> <a href="/recover">Forgot password?</a> </div></ControlLabel>
                        <Input name="password" type="password"/>
                    </Col>
                </FormRow>
                <Row>
                    <Col xs={24}>
                        <FlexAroundDiv>
                            <MainButton appearance="primary" type="submit">{t('Login')}</MainButton>
                            {registrationButton}
                        </FlexAroundDiv>
                    </Col>

                </Row>

            </Grid>
        </RegistrationBox>)
}


const FormRow = styled(Row)`
    margin-bottom:30px;
`