import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button, Col, Form, Grid, Row, SelectPicker, Uploader} from "rsuite";
import {useLoadFiles, useSaveProfile, useUploadPictures, useUploadProfilePicture} from "../../Backend/hooks/useProfile";
import styled from "styled-components";
import * as ActionTypes from '../../Redux/actions';
import {useGetUserInfo} from "../../Backend/hooks/UserInfo";
import {ProjectMenu} from "./../Profile/ProjectMenu";
import {useHistory, useParams} from "react-router-dom";
import {
    bordeaux,
    coverPicture,
    coverStyle,
    InverseButton,
    LinearGradient,
    profilePicture
} from "../../styledComponents/CustomComponents";
import ImageCropper from "../../ReusableComponents/ImageCropper";
import TextField from "../../Login/Components/TextField";
import {dataCountry, dataLanguage} from "../../selectData";
import {useTranslation} from "react-i18next";
import * as Routes from '../../routes';
import {getProfileLanguageElements} from "../../Functions/Profile";

export default function Profile(){

    const {user} = useSelector(state=>state);
    const {profilename} = useParams();
    const history = useHistory();

    const { t, i18n } = useTranslation();

    const isOwner = (user!==undefined) ? (user.profileName === profilename) : false;
    const [response, uploadPictureHandler] = useUploadPictures();
    const [userInfo, getUserInfoHandler]= useGetUserInfo();

    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false);

    const [fileList, setFileList] = useState([]);



    useEffect(()=>{
        getUserInfoHandler(profilename);
    },[profilename]);


    const backgroundImage = (userInfo && userInfo.coverPicture) ? userInfo.coverPicture.url  : coverPicture;
    const profileImage = (userInfo && userInfo.profilePicture) ? userInfo.profilePicture.url  : profilePicture;


    const {description} = getProfileLanguageElements(userInfo);
    /*const social = <div style={{position:"absolute", top: 4, right:10, display:"flex", justifyContent:"space-around", width:200 }}>
        {userInfo && userInfo.facebook &&  <a href={userInfo && userInfo.facebook}><Icon style={{color:"white"}} icon="facebook-square" size="3x"/></a>}
        {userInfo && userInfo.linkedin && <a href={userInfo && userInfo.linkedin}><Icon style={{color:"white"}} icon="linkedin-square" size="3x"/></a>}
        {userInfo && userInfo.twitter && <a href={userInfo && userInfo.twitter}><Icon style={{color:"white"}} icon="twitter-square" size="3x" /></a>}
    </div>;*/


    if(userInfo) {
        const editButton = (!isEdit) ? <InverseButton style={{position: "absolute", left: 5, bottom: 5}}
                                                      onClick={() => history.push(Routes.editProfile(userInfo.profileName))}> {t('Edit profile')} </InverseButton> : <>
            <InverseButton onClick={() => setIsEdit(!isEdit)}> {t('Go Back')} </InverseButton></>
        return (
            <>
                <div style={{...coverStyle, backgroundImage: `url(${backgroundImage})`}}>
                    <LinearGradient/>
                    <h3 style={{position: "absolute", bottom: 4, right: 10, color: "white"}}><a target="_blank" href={userInfo && manipulateWebsite(userInfo.website)}>{userInfo && userInfo.website}</a>
                    </h3>
                    {/* {social}*/}
                    {isOwner && editButton}
                </div>
                <InfoBox>
                    <Grid fluid>
                        <Row className="show-grid" style={{padding: 5, display: "flex", alignItems: "flex-start"}}>
                            <Col xs={8}>
                                <div style={{display: "flex", justifyContent: "center"}}>
                                    <div style={{
                                        backgroundImage: `url(${profileImage})`,
                                        backgroundSize: "contain",
                                        width: 200,
                                        height: 200
                                    }}/>
                                </div>
                            </Col>
                            <Col xs={16}>
                                <h3 style={{color: bordeaux}}>{userInfo.name}</h3>
                                <div>{description}</div>
                            </Col>
                        </Row>
                    </Grid>
                </InfoBox>
                <ProjectMenu society={userInfo} isOwner={isOwner}/>
            </>)
    }
    else{
        return <div></div>;
    }
}

export function manipulateWebsite(website){
    if(website){
        if(website.startsWith("http")){
            return website;
        }else{
            return "https://"+website;
        }
    }

}


const InfoBox =  styled.div`
    padding: 10px;`
;



const textFieldStyle = {
    width:"100%",
    marginLeft:5,
    marginRight:5
}

