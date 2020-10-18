import React, {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {useCreateNewProject} from "../../Backend/hooks/useProjects";
import TextField from "../../Login/Components/TextField";
import {Col, Divider, Form, Grid, Row, SelectPicker} from "rsuite";
import {dataLanguage, getLanguageFromValue} from "../../selectData";
import {
    bordeaux,
    coverPicture, FormButtonGroup, FormRow,
    InverseButton,
    projectPicture,
    SaveButton, uploaderCoverConfig
} from "../../styledComponents/CustomComponents";
import styled from "styled-components";
import ImageCropper from "../../ReusableComponents/ImageCropper";
import {useHistory} from "react-router-dom";
import * as Routes from "../../routes";
import {useTranslation} from "react-i18next";
import PartnersList from "./Partners/PartnersList";
import {projectModel} from "../FormModels/models";
import DynamicList from "../../ReusableComponents/DynamicList";
import DeleteButton from "../../ReusableComponents/DeleteButton";
import {ProjectFields} from "../FormModels/project-fields";
import ProjectForm from "../Forms/ProjectForm";

export default function NewProject({isPortfolio=false}){
    const {user} = useSelector(state=>state);
    const [formValue, setFormValue] = useState({language:user.language, positions: [], partners:[], links:[], contacts:[]});

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

    const uploadCoverButton = <InverseButton>{t('Upload Cover Button')}</InverseButton>;



    return (
        <>
            <div style={{height:281, width:"100%", marginBottom:10,position:"relative", backgroundImage:`url(${pathUrl})`,  backgroundSize: "contain"}}>
                <div style={{position:"absolute", bottom:5, left:5}}>
                    <ImageCropper button={uploadCoverButton} propCrop={uploaderCoverConfig} keyField="projectImage" onChange={handleFileChange}/>
                </div>
            </div>
            <InfoBox >
                <Form ref={formRef} fluid formValue={formValue} model={projectModel} onChange={setFormValue} onSubmit={onSubmitHandler}>
                    <ProjectForm formValue={formValue} linksListChanger={linksListChanger} contactsListChanger={contactListChanger} handleProjectLogoChange={handleProjectLogoChange} isPortfolio={isPortfolio}/>
                </Form>
            </InfoBox>
        </>);


}

const InfoBox =  styled.div`
padding: 10px;`
;
