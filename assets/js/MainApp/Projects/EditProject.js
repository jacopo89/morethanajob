import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {
    useDeleteProject,
    useEditProject,
    useGetProject,
    useUploadProjectCover,
    useUploadProjectLogo
} from "../../Backend/hooks/useProjects";
import {Form, Uploader} from "rsuite";
import {coverPicture, coverStyle, InverseButton, uploaderCoverConfig} from "../../styledComponents/CustomComponents";
import styled from "styled-components";
import ImageCropper from "../../ReusableComponents/ImageCropper";
import {useHistory, useParams} from "react-router-dom";
import * as Routes from "../../routes";
import {useTranslation} from "react-i18next";
import {projectModel} from "../FormModels/models";
import ProjectForm from "../Forms/ProjectForm";

export default function EditProject({isPortfolio=false}){
    const [formValue, setFormValue] = useState({positions: [], partners:[], links:[], contacts:[]});

    const {id} = useParams();
    const { t, i18n } = useTranslation();

    const history = useHistory();

    const [project, getProjectHandler] = useGetProject();
    const[deleteProject, deleteProjectHandler] = useDeleteProject();
    useEffect(()=> {
        getProjectHandler(id, {successCallback: (data)=> {
            setFormValue(data);
            isPortfolio = data.isPortfolio;
            }});
    },[]);

    const[responseLogo, uploadProjectLogoHandler] = useUploadProjectLogo();
    const[responseCover, uploadProjectPictureHandler] = useUploadProjectCover();

    const {user} = useSelector(state=>state);
    const [response, editProjectHandler] = useEditProject();
//    useEffect(()=>console.log("FormValue", formValue), [formValue]);

    const onSubmitHandler = () =>{
        const formData = new FormData();
        formData.append('id', id);
        Object.keys(formValue).forEach((key)=>  { formData.append(key,JSON.stringify(formValue[key]));});
        editProjectHandler(formData, {successCallback: () =>    history.push(Routes.profile(user.profileName))} );
    }

    const handleFileChange = (file) => {
        if(file.length!==0){
            let data = {};
            const formData = new FormData();
            formData.append('file', file[0].blobFile);
            data.id = id;
            Object.keys(data).forEach((key)=>  { formData.append(key,JSON.stringify(data[key]));});
            uploadProjectPictureHandler(formData, {successCallback: ()=>{
                    getProjectHandler(id)
                }});
        }

    };

    const handleProjectLogoChange = (file) =>{
        let data = {};
        if(file.length!==0){
            const formData = new FormData();
            formData.append('file', file[0].blobFile);
            data.id = id;
            Object.keys(data).forEach((key)=>  { formData.append(key,JSON.stringify(data[key]));});
            uploadProjectLogoHandler(formData, {successCallback: ()=>{
                    getProjectHandler(id)
                }});
        }
    };





    const removeProjectSuccessCallaback = ()=> {
        history.push(Routes.profile(user.profileName));
    }

    const removeProject = (id)=> {
        deleteProjectHandler(id, {successCallback:removeProjectSuccessCallaback});
    }

    const backgroundImage = (project && project.projectLogo) ? project.projectLogo.url  : "";
    const backgrounCoverdImage = (project && project.projectPicture) ? project.projectPicture.url  : coverPicture;


    //const listElements = (formValue) => {return (isPortfolio)  ? <PartnersList formValue={formValue} setFormValue={setFormValue} /> : <ListOrCreate formValue={formValue} setFormValue={setFormValue} /> };

    const uploadCoverButton = <InverseButton style={{position: "absolute", top:5, left:5}}>{t('Upload Cover Button')}</InverseButton>;

    const linksListChanger = (list) => setFormValue({...formValue, links: list});
    const contactListChanger = (list) => setFormValue({...formValue, contacts: list});

    return (
        <>
            <div style={{...coverStyle, backgroundImage:`url(${backgrounCoverdImage})`}}>
                <Uploader fileListVisible={false} onChange={handleFileChange}>{uploadCoverButton}</Uploader>
            </div>
            <InfoBox >
                <Form fluid model={projectModel} formValue={formValue} onChange={setFormValue} onSubmit={onSubmitHandler}>
                    <ProjectForm formValue={formValue} setFormValue={setFormValue} isPortfolio={isPortfolio} linksListChanger={linksListChanger} contactsListChanger={contactListChanger} handleProjectLogoChange={handleProjectLogoChange} isEdit={true} remover={removeProject}/>
                </Form>


            </InfoBox>
        </>);


}





const InfoBox =  styled.div`
padding: 10px;`
;
