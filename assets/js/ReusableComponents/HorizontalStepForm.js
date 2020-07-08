import React, {useEffect, useRef, useState} from "react";
import {
    Grid,
    Row,
    Steps,
    ButtonGroup,
    IconButton,
    Icon,
    Button,
    FlexboxGrid,
    Form,
    Panel,
    Container,
    Header, Footer, Content
} from "rsuite";

/**
 * props.components -> Array di Componenti
 * props.labels -> Array di Label
 * */
export default function HorizontalStepForm({labels, components}){
    const [step, setStep] = useState(0);

    const nextStep = () => {
        if(step+1 < components.length) setStep(step + 1);
    };

    const previewStep = () => {
        if((step-1) >= 0) setStep(step - 1)
    };

    const style = {
        header: {
            marginBottom: '20px'
        },
        panel: {
            height: '100%',
            overflowY: 'scroll'
        },
        grid:{
            height: '100%',
            width: '100%',
            position: 'absolute'
        },
        footer: {
            marginTop: '10px'
        },
        content: {
            overflowY: 'auto'
        }
    };

    return (
        <Container style={style.grid}>
            <Header style={style.header}>
                <Steps current={step}>
                    {labels && labels.map((label) => <Steps.Item key={label} title={label} />)}
                </Steps>
            </Header>
            <Content style={style.content}>
                <Panel bordered style={style.panel}>
                    {components && components[step]}
                </Panel>
            </Content>
            <Footer style={style.footer}>
                <FlexboxGrid justify="end">
                    <ButtonGroup>
                        {(step === 0) ? (<IconButton icon={<Icon icon="angle-left" />} disabled/>) : (<IconButton icon={<Icon icon="angle-left" />} onClick={() => previewStep()} />)}
                        {(step === components.length-1) ? (<IconButton icon={<Icon icon="angle-right" />} disabled />)  : (<IconButton icon={<Icon icon="angle-right" />} onClick={() => nextStep()}/>)}
                    </ButtonGroup>
                </FlexboxGrid>
            </Footer>
        </Container>
    );

}
