import React, {useEffect, useState} from "react";
import {
    bordeaux,
    coverPicture,
    coverStyle,
    InverseButton,
    LinearGradient, profilePicture
} from "../../styledComponents/CustomComponents";
import * as Routes from "../../routes";
import {Button, Col, Form, Grid, Row, SelectPicker, Uploader} from "rsuite";
import ImageCropper from "../../ReusableComponents/ImageCropper";
import TextField from "../../Login/Components/TextField";
import {dataCountry, dataLanguage} from "../../selectData";
import * as ActionTypes from "../../Redux/actions";
import {useLoadFiles, useSaveProfile, useUploadPictures, useUploadProfilePicture} from "../../Backend/hooks/useProfile";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {useGetUserInfo} from "../../Backend/hooks/UserInfo";
import {useHistory, useParams} from "react-router-dom";
import styled from "styled-components";

export default function ProfileEdit() {
    const {user} = useSelector(state=>state);
    const {profilename} = useParams();
    const history = useHistory();
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const isOwner = (user!==undefined) ? (user.profileName === profilename) : false;
    const [response, uploadPictureHandler] = useUploadPictures();
    const [userInfo, getUserInfoHandler]= useGetUserInfo();
    const [uploadProfilePictureResponse, uploadProfilePictureHandler] = useUploadProfilePicture();
    const [loadFileResponse, loadFileHandler] = useLoadFiles();
    const [saveProfileResponse, saveProfileHandler] = useSaveProfile();
    const [fileList, setFileList] = useState([]);
    const [formValue, setFormValue] = useState({name:"", description:""});

    useEffect(()=>{
        getUserInfoHandler(profilename, {successCallback: (data)=>{setFormValue(data)}});
    },[profilename]);

    const onChangeHandler = (file) => {
        let data = {};
        const formData = new FormData();
        formData.append('file', file);
        data.email = user.email;
        Object.keys(data).forEach((key)=>  { formData.append(key,JSON.stringify(data[key]));});
        uploadPictureHandler(formData, {successCallback: ()=>{
                getUserInfoHandler(profilename, {successCallback: (data)=>dispatch(ActionTypes.updateUserInfo(data))})
            }});
    };


    const onChangeProfileHandler = (file) => {
        let data = {};
        const formData = new FormData();
        formData.append('file', file);
        data.email = userInfo.email;
        Object.keys(data).forEach((key)=>  { formData.append(key,JSON.stringify(data[key]));});
        uploadProfilePictureHandler(formData, {successCallback: ()=>{
                getUserInfoHandler(profilename, {successCallback: (data)=>dispatch(ActionTypes.updateUserInfo(data))})
            }});
    };
    const saveProfile = () =>{
        const formData = new FormData();
        formValue.email = userInfo.email;
        Object.keys(formValue).forEach((key)=>  { formData.append(key,JSON.stringify(formValue[key]));});
        saveProfileHandler(formData, {successCallback: ()=>{
                getUserInfoHandler(profilename, {successCallback: (data)=>
                    {
                        dispatch(ActionTypes.updateUserInfo(data));
                        history.push(Routes.profile(profilename));
                    }
                })
            }});

    }
    const submitFiles = () => {
        const formData = new FormData();
        formData.append('email', userInfo.email);
        formData.append('file', formValue.file);
        formData.append('title', formValue.title);

        loadFileHandler(formData, {successCallback: ()=>{
                setFormValue({...formValue, file:null, title:null});
                setFileList([]);

            }});

    }
    const handleFileChange = (file) =>{
        setFormValue({
            ...formValue,
            file: file[0].blobFile,
            title: file[0].name
        })
        setFileList([...fileList, file[0].blobFile]);
    };

    const backgroundImage = (userInfo && userInfo.coverPicture) ? userInfo.coverPicture.url  : coverPicture;
    const profileImage = (userInfo && userInfo.profilePicture) ? userInfo.profilePicture.url  : profilePicture;


    const uploadCoverButton = <InverseButton style={{position: "absolute", top:0}}>{t('Change cover Button')}</InverseButton>

    const uploaderProfileButton = <Button style={{backgroundImage:  `url(${profileImage})`, backgroundSize: "contain", width:200, height:200}}> Upload</Button>;
    return(
        <>
            <div style={{...coverStyle, backgroundImage: `url(${backgroundImage})`}}>
                <LinearGradient/>
                <h3 style={{position:"absolute", bottom:4, right:10, color:"white"}}>{userInfo && userInfo.website}</h3>
                {/*{social}*/}
                <ImageCropper button={uploadCoverButton}  propCrop={{
                    unit: 'px', // default, can be 'px' or '%'
                    x: 0,
                    y: 0,
                    width: 250,
                    aspect:3.592
                }} keyField="projectImage" onChange={onChangeHandler}/>
            </div>
            <InfoBox>
                <Grid fluid>
                    <Row>
                        <Col xs={12}>
                            Profile Image
                            <div  style={{display:"flex", justifyContent:"center"}}>
                                <ImageCropper button={uploaderProfileButton} propCrop={{
                                    unit: 'px', // default, can be 'px' or '%'
                                    x: 0,
                                    y: 0,
                                    width: 200,
                                    aspect:1
                                }}  keyField="projectImage" onChange={onChangeProfileHandler}/>
                            </div>
                        </Col>
                        <Col xs={12}>

                        </Col>

                    </Row>
                </Grid>
                <Form fluid autoComplete="off" formValue={formValue} onChange={setFormValue}>
                    <Grid fluid>
                        <Row className="show-grid">
                            <Col xs={24}> <TextField name="name" label={t('Society Name')} /></Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <TextField style={{width:"100%"}} name="language" label={t('Language')} accepter={SelectPicker} data={dataLanguage()} />
                            </Col>
                            <Col xs={12}>
                                <TextField style={{width:"100%"}} name="country" label={t('Country')} accepter={SelectPicker} data={dataCountry} />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={24}>
                                <TextField  name="description" label={t('Society Description')} componentClass="textarea" />
                            </Col>
                            <Col xs={24}>
                                <TextField label={t('Local Language description')} name="localDescription" componentClass="textarea" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}> <TextField style={{width:"100%"}} name="website" label={t('Website')} /></Col>
                            <Col xs={12}><TextField style={{width:"100%"}} name="address" label={t('Address')} /></Col>
                        </Row>
                        <Row>
                            <Col xs={12} ><TextField style={{width:"100%"}} name="telephone" label={t('Telephone')} /></Col>
                            <Col xs={12} ><TextField style={{width:"100%"}} name="email" label={t('Email')} /></Col>
                        </Row>
                        <Row>
                            <Col xs={8} ><TextField style={{width:"100%"}} name="facebook" label={t('Facebook')} /></Col>
                            <Col xs={8} > <TextField style={{width:"100%"}} name="linkedin" label={t('Linkedin')} /></Col>
                            <Col xs={8} ><TextField style={{width:"100%"}} name="twitter" label={t('Twitter')} /></Col>
                        </Row>
                        <Row>
                            <Col xs={24}>
                                {t('Documents')}
                                <Uploader
                                    action="//jsonplaceholder.typicode.com/posts/"
                                    onChange={handleFileChange}
                                    fileList={fileList}
                                    dragable  autoUpload={false} multiple={false}>
                                    <div style={{lineHeight:10}}>{t('clickdrag')}</div>
                                </Uploader>
                                <Button onClick={submitFiles}>
                                    {t('Start Upload')}
                                </Button>
                            </Col>
                        </Row>
                    </Grid>
                    <Button style={{float:"right", backgroundColor:bordeaux, color:"white"}} onClick={()=>saveProfile()}> {t('Save Profile')} </Button>
                </Form>

            </InfoBox>
        </>
    )

}



const InfoBox =  styled.div`
    padding: 10px;`
;

