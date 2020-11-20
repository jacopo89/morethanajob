import React, {useRef, useState} from "react";
import {useSelector} from "react-redux";
import {useCreateNewProject} from "../../Backend/hooks/useProjects";
import {Form, Uploader} from "rsuite";
import {coverPicture, InverseButton, projectPicture} from "../../styledComponents/CustomComponents";
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import * as Routes from "../../routes";
import {useTranslation} from "react-i18next";
import {projectModel} from "../FormModels/models";
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

        if(file.length!==0){
            const trueFile = file[0].blobFile
            setFormValue({
                ...formValue,
                projectCoverImage: trueFile ,
            })

            const fileReaderInstance = new FileReader();
            fileReaderInstance.readAsDataURL(trueFile);
            fileReaderInstance.onload = ()=> {
                setPathUrl(fileReaderInstance.result);
            }
        }
    };

    const handleProjectLogoChange = (file) =>{

        if(file.length!==0){
            const blobFile = file[0].blobFile;
            setFormValue({
                ...formValue,
                projectLogoImage:  blobFile,
            })

            const fileReaderInstance = new FileReader();
            fileReaderInstance.readAsDataURL(blobFile);
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
            <div style={{height:281, width:"100%", marginBottom:10,position:"relative", backgroundImage:`url(${pathUrl})`,  backgroundSize: "cover"}}>
                <div style={{position:"absolute", bottom:5, left:5}}>
                    <Uploader fileListVisible={false} onChange={handleFileChange}>{uploadCoverButton}</Uploader>
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
