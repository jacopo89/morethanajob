import styled from "styled-components";
import {Button, ButtonGroup, IconButton, Row} from 'rsuite';

export const gray = "#f7f8f9";
export const bordeaux = "#b45860";

export const headerHeight = 125;
export const uploaderCoverConfig = { unit: 'px', x: 0, y: 0, aspect: 3.592}


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



export const FullBody = styled.div`
    background-color: white;
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
        background-color: white!important;
    }
    `;

export const SaveButton = styled(MainButton)`
    border: 1px solid ${bordeaux}!important;
`

export const IconButtonTransparent = styled(IconButton)`
    background-color:white;
    color:${bordeaux};
    &:hover {
        background-color:${bordeaux};
        color:white;
    }
`;

export const profilePicture = "/defaults/profile_thumbnail.png";
export const projectPicture = "/defaults/project_thumbnail.png";
export const coverPicture = "/defaults/cover_thumbnail.png";
export const noProfilePicture = "/defaults/no-image.png";
export const noProjectPicture = "/defaults/no-image.png";

export const FormBox = styled.div`
padding: 10px;
min-height:100vh`
;

export const CollaborationBox =  styled.div`
width: 100%;
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

export const IconSpan = styled.span`
    display: flex;
    align-items: center;
    width: 35%;
    justify-content: space-evenly;`;

export const IconSpanProject = styled.span`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;`;

export const LinearGradient = styled.div`
    position: absolute;
    width: 100%;
    height: 0;
    padding-top: 27.83964365256125%;
    top: 0;
    background-image: linear-gradient(to top, black, white);
    opacity:33%;
    `

export const coverStyle = {height:0, paddingTop:"27.83964365256125%", width:"100%", marginBottom:10, backgroundColor:"black",position:"relative", backgroundSize:"cover"}


export const FlexAroundDiv = styled.div`
    display:flex;
    justify-content:space-around;
`

export const FlexBetweenDiv = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`


export const FormButtonGroup = styled(ButtonGroup)`
    float: right;
    margin-top:10px;
`

export const FormRow = styled(Row)`
    margin-bottom:30px;
`

export const Title = styled.h5`color:${bordeaux}; text-align:center; margin:10px;`;

export const PaginationBox = styled(FlexBetweenDiv)`
    margin:0px 20px;
    background-color:whitesmoke;
`

export const InfoBox = styled.p`
    margin:0px 20px;
    background-color:whitesmoke;
    font-weight:bold;
    padding:10px;
    
    
`

export const BackTitle = styled.div`
    position:relative;
    text-align:center;
    margin:10px;
    color:gray;
    font-weight:bolder;
    font-size:4rem;
`;

export const FrontTitle = styled(Title)`
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const ProfileImage = styled.img`
    background-position: center;
    background-repeat:no-repeat;
    background-size:contain;
    `;

