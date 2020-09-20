import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {
    useCreateNewProject, useDeleteProject, useEditProject,
    useGetProject,
    useUploadProjectCover,
    useUploadProjectLogo
} from "../../Backend/hooks/useProjects";
import TextField from "../../Login/Components/TextField";
import {
    Button,
    Col,
    DatePicker,
    Form,
    Icon,
    IconButton,
    List,
    Panel,
    Row,
    SelectPicker,
    TreePicker,
    Uploader
} from "rsuite";
import {dataCountry, dataLanguage, modalityData} from "../../selectData";
import {useGetServices} from "../../Backend/hooks/useServices";
import {generateServiceTree} from "../Administration/CategoriesManagement";
import {GenericTable} from "../../ReusableComponents/GenericTable";
import {
    bordeaux,
    coverPicture,
    coverStyle,
    InverseButton,
    MainButton,
    SaveButton
} from "../../styledComponents/CustomComponents";
import styled from "styled-components";
import ImageCropper from "../../ReusableComponents/ImageCropper";
import {useHistory, useParams} from "react-router-dom";
import * as Routes from "../../routes";
import {useTranslation} from "react-i18next";
import {PositionDescription} from "../Position/PositionDescription";
import PartnersList from "./Partners/PartnersList";
import {projectModel} from "../FormModels/models";
import DeleteButton from "../../ReusableComponents/DeleteButton";
export default function EditProject({isPortfolio=false}){
    const [formValue, setFormValue] = useState({positions: [], partners:[]});

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
        let data = {};
        const formData = new FormData();
        formData.append('file', file);
        data.id = id;
        Object.keys(data).forEach((key)=>  { formData.append(key,JSON.stringify(data[key]));});
        uploadProjectPictureHandler(formData, {successCallback: ()=>{
                getProjectHandler(id)
            }});
    };

    const handleProjectLogoChange = (file) =>{

        if(file){
            const formData = new FormData();
            formData.append('file', file);
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


    const listElements = (formValue) => {return (isPortfolio)  ? <PartnersList formValue={formValue} setFormValue={setFormValue} /> : <ListOrCreate formValue={formValue} setFormValue={setFormValue} /> };

    const uploadCoverButton = <InverseButton style={{position: "absolute", top:5, left:5}}>{t('Upload Cover Button')}</InverseButton>;
    const uploadLogoButton = <InverseButton>{t('Upload Logo Button')}</InverseButton>;


    return (
        <>
            <div style={{...coverStyle, backgroundImage:`url(${backgrounCoverdImage})`}}>
                <ImageCropper button={uploadCoverButton} propCrop={{
                    unit: 'px', // default, can be 'px' or '%'
                    x: 0,
                    y: 0,
                    height: 250,
                    aspect:3.592
                }} keyField="projectImage" onChange={handleFileChange}/>
            </div>
            <InfoBox >
                <Form fluid model={projectModel} formValue={formValue} onChange={setFormValue} onSubmit={onSubmitHandler}>
                    <TextField label={t('Title')} name="title" type="text" />
                    <TextField label={t('Short Description')} name="shortDescription" componentClass="textarea" />
                    <TextField label={t('Description')} name="longDescription" componentClass="textarea" />
                    <TextField label={t('Links')} name="links" componentClass="textarea" />
                    <TextField label={t('Contacts')} name="contacts" componentClass="textarea" />


                    <ImageCropper button={uploadLogoButton} propCrop={{
                        unit: 'px', // default, can be 'px' or '%'
                        x: 0,
                        y: 0,
                        width: 250,
                        height: 250
                    }} keyField="projectImage" onChange={handleProjectLogoChange}/>


                    <SaveButton type="submit">{t('Save')}</SaveButton>
                </Form>
                <DeleteButton onClickHandler={()=>removeProject(formValue.id)} >{t('Delete')}</DeleteButton>

            </InfoBox>
        </>);


}





const InfoBox =  styled.div`
padding: 10px;`
;
