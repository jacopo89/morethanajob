import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    Uploader,
    Icon,
    Timeline,
    Form,
    Dropdown,
    Button,
    Grid,
    Row,
    Col,
    FormGroup,
    ControlLabel,
    FormControl, ButtonToolbar, SelectPicker, IconButton
} from "rsuite";
import {useSaveProfile, useUploadPictures, useUploadProfilePicture} from "../../Backend/hooks/useProfile";
import styled from "styled-components";
import * as ActionTypes from '../../Redux/actions';
import {useGetUserInfo} from "../../Backend/hooks/UserInfo";
import {ProjectMenu} from "./../Profile/ProjectMenu";
import {Link, useParams} from "react-router-dom";
import {
    bordeaux,
    coverPicture,
    InverseButton,
    MainButton, profilePicture,
    SecondaryButton
} from "../../styledComponents/CustomComponents";
import ImageCropper from "../../ReusableComponents/ImageCropper";
import * as Routes from "../../routes";
import TextField from "../../Login/Components/TextField";
import {dataLanguage} from "../../selectData";
import {useTranslation} from "react-i18next";

export default function Profile(){

    const {user} = useSelector(state=>state);
    const {profilename} = useParams();

    const { t, i18n } = useTranslation();

    const isOwner = (user.profileName === profilename);
    const [response, uploadPictureHandler] = useUploadPictures();
    const [userInfo, getUserInfoHandler]= useGetUserInfo();
    const [uploadProfilePictureResponse, uploadProfilePictureHandler] = useUploadProfilePicture();
    const [saveProfileResponse, saveProfileHandler] = useSaveProfile();
    const dispatch = useDispatch();
    const [render, setRender] = useState(null);
    const [isEdit, setIsEdit] = useState(false);

    const [formValue, setFormValue] = useState({name:"", description:""});

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

    const backgroundImage = (userInfo && userInfo.coverPicture) ? userInfo.coverPicture.url  : coverPicture;
    const profileImage = (userInfo && userInfo.profilePicture) ? userInfo.profilePicture.url  : profilePicture;

    const social = <div style={{position:"absolute", top: 4, right:10, display:"flex", justifyContent:"space-around", width:200 }}>
        <Icon style={{color:"white"}} icon="facebook-square" size="3x"/>
        <Icon style={{color:"white"}} icon="linkedin-square" size="3x"/>
        <Icon style={{color:"white"}} icon="twitter-square" size="3x" />
    </div>;

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
                getUserInfoHandler(profilename, {successCallback: (data)=>dispatch(ActionTypes.updateUserInfo(data))})
            }});
        setIsEdit(!isEdit);
    }

    useEffect(()=>{
        getUserInfoHandler(profilename, {successCallback: (data)=>{setFormValue({name:data.name, description:data.description,
                website:data.website, address: data.address, telephone:data.telephone, language:data.language, email:data.email})}});
    },[]);

    useEffect(()=>{
        const uploadCoverButton = <EditButton>Change cover Button</EditButton>
        const editButton = (!isEdit) ?  <EditButton onClick={()=>setIsEdit(!isEdit)}> {t('Edit profile')} </EditButton> : <> <InverseButton onClick={()=>setIsEdit(!isEdit)}> Go back </InverseButton></>
        if(userInfo && !isEdit){

            setRender(
                <>
                    <div style={{height:281, width:"100%", marginBottom:10, backgroundColor:"black",position:"relative", backgroundImage: `url(${backgroundImage})`, backgroundSize:"contain", backgroundRepeat: "no-repeat"}}>
                        <LinearGradient/>
                        <h3 style={{position:"absolute", bottom:4, right:10, color:"white"}}>{userInfo && userInfo.website}</h3>
                        {social}
                        {isOwner  && editButton  }
                    </div>
                    <InfoBox>
                        <Grid fluid>
                            <Row className="show-grid" style={{padding:5, display:"flex", alignItems:"flex-start"}}>
                                <Col xs={8}>
                                    <div style={{display:"flex", justifyContent:"center"}}>
                                        <div style={{backgroundImage:  `url(${profileImage})`, backgroundSize: "contain", width:200, height:200}}/>
                                    </div>
                                </Col>
                                <Col xs={16}>
                                    <h3 style={{color: bordeaux}}>{ userInfo.name}</h3>
                                    <div>{userInfo.description}</div>
                                </Col>
                            </Row>
                        </Grid>
                    </InfoBox>
                    <ProjectMenu society={userInfo} isOwner={isOwner}/>
                </>)
        }else if(userInfo && isEdit){
            const uploaderButton = <Button style={{backgroundImage:  `url(${profileImage})`, backgroundSize: "contain", width:200, height:200}}> Upload</Button>;
            setRender(<>
                <div style={{height:281, width:"100%", marginBottom:10, backgroundColor:"black",position:"relative", backgroundImage: `url(${backgroundImage})`, backgroundSize:"contain", backgroundRepeat: "no-repeat"}}>
                    <LinearGradient/>
                    <h3 style={{position:"absolute", bottom:4, right:10, color:"white"}}>{userInfo && userInfo.website}</h3>
                    {social}
                    <ImageCropper button={uploadCoverButton} propCrop={{
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
                            <div  style={{display:"flex", justifyContent:"center"}}>
                                <ImageCropper button={uploaderButton} propCrop={{
                                    unit: 'px', // default, can be 'px' or '%'
                                    x: 0,
                                    y: 0,
                                    width: 200,
                                    aspect:1
                                }}  keyField="projectImage" onChange={onChangeProfileHandler}/>
                            </div>
                        </Row>
                        <Row className="show-grid" style={{padding:5}}>
                                <Form
                                    fluid
                                    autoComplete="off"
                                    formValue={formValue}
                                    onChange={setFormValue}>
                                    <div style={{display:"flex", justifyContent:"space-around"}}>
                                        <TextField style={{width:"90%"}} name="name" label="Society Name" />
                                        <TextField style={{width:"90%"}} name="language" label="Language" accepter={SelectPicker} data={dataLanguage} />
                                    </div>
                                    <TextField style={{width:"90%"}} name="description" label="Society Description" componentClass="textarea" />
                                    <div style={{display:"flex", justifyContent:"space-around"}}>
                                        <TextField style={{width:"90%"}} name="website" label="Website" />
                                        <TextField style={{width:"90%"}} name="address" label="Address" />
                                    </div>
                                    <div style={{display:"flex", justifyContent:"space-around"}}>
                                        <TextField style={{width:"90%"}} name="telephone" label="Telephone" />
                                        <TextField style={{width:"90%"}} name="email" label="Email" />
                                    </div>
                                    <div style={{display:"flex", justifyContent:"space-around"}}>
                                        <TextField style={{width:"90%"}} name="facebook" label="Facebook" />
                                        <TextField style={{width:"90%"}} name="linkedin" label="Linkedin" />
                                        <TextField style={{width:"90%"}} name="twitter" label="Twitter" />
                                    </div>
                                    {isOwner && editButton}
                                    <Button style={{float:"right", backgroundColor:bordeaux, color:"white"}} onClick={()=>saveProfile()}> Save profile </Button>
                                </Form>
                        </Row>
                    </Grid>
                </InfoBox>
                </>

            )
        }
    },[userInfo,isEdit, formValue])


    return render;
}


const InfoBox =  styled.div`
    padding: 10px;`
;


const EditButton = styled(InverseButton)`
    position: absolute;
    bottom: 4;
    left: 4;`;

const LinearGradient = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top, black, white);
    opacity:33%;
    `
