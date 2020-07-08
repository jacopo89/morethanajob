import styled from "styled-components";
import {Button} from 'rsuite';

export const gray = "#f7f8f9";
export const bordeaux = "#b45860";

export const RegistrationBox = styled.div`
    background-color: white;
    padding: 25px;
    border-color: ${gray};
    border-width: 1px;
    border-radius: 8px;
    border-style: solid;
    display: flex;
    width: 350px;
    flex-direction: column;
    margin:0 auto;
    `;

export const Body = styled.div`
    background-color: white;
    max-width: 900px;
    border-color: ${gray};
    border-width: 1px;
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

export const InverseButton = styled(Button)`
    background-color: white!important;
    color:${bordeaux}!important;
    border: 4px solid ${bordeaux}!important;
    `;
