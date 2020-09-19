import styled from "styled-components";
import {Button, IconButton} from 'rsuite';

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
    max-width: 1081px;
    display: flex;
    flex-direction: column;
    margin-bottom:20;
    `;

export const MainButton = styled(Button)`
    background-color: ${bordeaux};
    color: white;
    `;

export const SecondaryButton = styled(Button)`
    background-color: white;
    color: ${bordeaux};
    border: 1px solid ${bordeaux}
`;


export const InverseButton = styled(Button)`
    background-color: transparent!important;
    color:${bordeaux}!important;
    border: 1px solid ${bordeaux}!important;
    &:hover {
        background-color: white;
    }
    `;

export const SaveButton = styled(MainButton)`
float:right;
`

export const IconButtonTransparent = styled(IconButton)`
    background-color:white;
    color:${bordeaux};
`;


export const profilePicture = "/defaults/profile_thumbnail.png";
export const projectPicture = "/defaults/project_thumbnail.png";
export const coverPicture = "/defaults/cover_thumbnail.png";

export const FormBox = styled.div`
padding: 10px;
min-height:100vh`
;

export const CollaborationBox =  styled.div`
width: 100%;
margin-top:20px;
min-height: 150px;
background-color: ${bordeaux};
color: white;
font-size: 40px;
font-weight: bolder;
display: flex;
align-items: center;    
justify-content: flex-start;
`
;
