import React, {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {useCreateNewProject} from "../../Backend/hooks/useProjects";
import TextField from "../../Login/Components/TextField";
import {Col, Divider, Form, Grid, Row, SelectPicker} from "rsuite";
import {dataLanguage} from "../../selectData";
import {
    bordeaux,
    coverPicture,
    InverseButton,
    projectPicture,
    SaveButton
} from "../../styledComponents/CustomComponents";
import styled from "styled-components";
import ImageCropper from "../../ReusableComponents/ImageCropper";
import {useHistory} from "react-router-dom";
import * as Routes from "../../routes";
import {useTranslation} from "react-i18next";
import PartnersList from "./Partners/PartnersList";
import {projectModel} from "../FormModels/models";
import DynamicList from "../../ReusableComponents/DynamicList";

export default function NewProject({isPortfolio=false}){
    const {user} = useSelector(state=>state);
    const [formValue, setFormValue] = useState({language:user.language,positions: [], partners:[]});

    const [response, createNewProjectHandler] = useCreateNewProject();
    const history = useHistory();
    const formRef = useRef();
    const { t, i18n } = useTranslation();
//    useEffect(()=>console.log("FormValue", formValue), [formValue]);


    const onSubmitHandler = () =>{
        const formData = new FormData();
        formData.append('projectCover', formValue.projectCoverImage);
        formData.append('projectLogo', formValue.projectLogoImage);
        formData.append('email', user.email);
        formData.append('isPortfolio', isPortfolio.toString());

        if(formRef.current.check()){
            Object.keys(formValue).forEach((key)=>  { formData.append(key,JSON.stringify(formValue[key]));});
            createNewProjectHandler(formData, {successCallback: (data)=> history.push(Routes.project(data)) });
        }


    }

    const partialSave = () =>{
        const formData = new FormData();
        formData.append('projectCover', formValue.projectCoverImage);
        formData.append('projectLogo', formValue.projectLogoImage);
        formData.append('email', user.email);
        formData.append('isPortfolio', isPortfolio.toString());

        if(formRef.current.check()){
            Object.keys(formValue).forEach((key)=>  { formData.append(key,JSON.stringify(formValue[key]));});
            createNewProjectHandler(formData, {successCallback: (data)=> history.push(Routes.editProject(data)) });
        }


    }



    const [pathUrl, setPathUrl] = useState(coverPicture);
    const [projectLogoUrl, setProjectLogoUrl] = useState(projectPicture);

    const handleFileChange = (file) =>{

        if(file){
            setFormValue({
                ...formValue,
                projectCoverImage:  file,
            })

            const fileReaderInstance = new FileReader();
            fileReaderInstance.readAsDataURL(file);
            fileReaderInstance.onload = ()=> {
                setPathUrl(fileReaderInstance.result);
            }
        }
    };

    const handleProjectLogoChange = (file) =>{

        if(file){
            setFormValue({
                ...formValue,
                projectLogoImage:  file,
            })

            const fileReaderInstance = new FileReader();
            fileReaderInstance.readAsDataURL(file);
            fileReaderInstance.onload = ()=> {
                setProjectLogoUrl(fileReaderInstance.result);
            }
        }
    };

    const linksListChanger = (list) => setFormValue({...formValue, links: list});
    const contactListChanger = (list) => setFormValue({...formValue, contacts: list});


    const uploadCoverButton = <InverseButton>{t('Upload cover button')}</InverseButton>;
    const uploadLogoButton = <InverseButton>{t('Upload logo button')}</InverseButton>;


    return (
        <>
            <div style={{height:281, width:"100%", marginBottom:10,position:"relative", backgroundImage:`url(${pathUrl})`,  backgroundSize: "contain"}}>
                <ImageCropper button={uploadCoverButton} propCrop={{
                    unit: 'px', // default, can be 'px' or '%'
                    x: 0,
                    y: 0,
                    height: 281
                    //height: 281,
                    //aspect: 3.592
                }} keyField="projectImage" onChange={handleFileChange}/>
            </div>

            <InfoBox >
                <TitleBox>Info </TitleBox>
                <div style={{margin:5}}>
                    <Form ref={formRef} fluid formValue={formValue} model={projectModel} onChange={setFormValue} onSubmit={onSubmitHandler}>
                        <TextField label={t('Title')} name="title" type="text" />
                        <TextField disabled style={{width:"100%"}} label={t('Language')} name="language" accepter={SelectPicker} data={dataLanguage()} />
                        <TextField label={t('Local Title')} name="localTitle" type="text" />
                        <TextField label={t('Short Description')} name="shortDescription" componentClass="textarea" />
                        <TextField label={t('Local Short Description')} name="LocalShortDescription" componentClass="textarea" />
                        <TextField label={t('Description')} name="longDescription" componentClass="textarea" />
                        <TextField label={t('Local Description')} name="localLongDescription" componentClass="textarea" />

                        <Grid fluid>
                            <Row>
                                <Col xs={12}>
                                    <DynamicList name="link" updater={linksListChanger} startingValue={[]}> </DynamicList>
                                </Col>
                                <Col xs={12}>
                                    <DynamicList name="contact" updater={contactListChanger} startingValue={[]}> </DynamicList>
                                </Col>
                            </Row>
                        </Grid>

                        <Grid>
                            <Row>
                                <Col xs={12}>
                                    <div style={{display: "flex", justifyContent: "center"}}>
                                        <div style={{
                                            backgroundImage: `url(${projectLogoUrl})`,
                                            backgroundSize: "contain",
                                            width: 150,
                                            height: 150
                                        }}/>
                                    </div>
                                </Col>
                                <Col xs={12}>
                                    <ImageCropper button={uploadLogoButton} propCrop={{
                                        unit: '%', // default, can be 'px' or '%'
                                        x: 0,
                                        y: 0,
                                        aspect:3.592
                                    }} keyField="projectImage" onChange={handleProjectLogoChange}/>
                                </Col>
                            </Row>
                           {/* <Row>
                                <Col xs={12}></Col>
                                <Col xs={12}>
                                        <SaveButton onClick={partialSave}>{t('Save')}</SaveButton>
                                </Col>
                            </Row>*/}
                        </Grid>

                        <Divider />
                        {isPortfolio &&
                            <>
                                <TitleBox>Partner </TitleBox>
                                <PartnersList formValue={formValue} setFormValue={setFormValue} />
                            </>}

                        <div>
                            <SaveButton type="submit">{t('Save')}</SaveButton>
                        </div>

                    </Form>
                </div>


            </InfoBox>
        </>);


}

const InfoBox =  styled.div`
padding: 10px;`
;

const TitleBox = styled.h4`
display: flex;
align-items:center;
padding-left: 20px;
color: white;
background-color: ${bordeaux};
height:100px;
margin: 10px 0 10px 0;
`;
