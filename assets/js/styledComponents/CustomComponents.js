import styled from "styled-components";
import {Button} from 'rsuite';

const gray = "#f7f8f9";

export const RegistrationBox = styled.div`
    background-color: white;
    padding: 25px;
    border-color: ${gray};
    border-width: 1px;
    border-radius: 8px;
    border-style: solid;
    display: flex;
    flex-direction: column;
    `;

export const MainButton = styled(Button)`
    background-color: #2589f5;
    color: white;
    `;

export const SecondaryButton = styled(Button)``;

export const DeleteButton = styled(Button)``;
