import React, {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {useGetUserProjects} from "../../Backend/hooks/useProjects";
import {Form} from "rsuite";
import {bordeaux, CollaborationBox, FormBox} from "../../styledComponents/CustomComponents";
import {useHistory} from "react-router-dom";
import * as Routes from "../../routes";
import {useCreateNewCollaboration} from "../../Backend/hooks/useCollaborations";
import {useTranslation} from "react-i18next";
import {collaborationModel, serviceModel} from "../FormModels/models";
import {categoriesTreeByLanguage} from "../../Functions/Categories";
import styled from "styled-components";
import CollaborationForm from "../Forms/CollaborationForm";

export default function NewCollaboration({isService=false}){
    const {user, categories, language} = useSelector(state=>state);
    const [formValue, setFormValue] = useState({language: user.language,positions: []});
    const [response, createNewProjectHandler] = useCreateNewCollaboration();
    const [projects, getProjectsHandler] = useGetUserProjects();
    const history = useHistory();
    const { t, i18n } = useTranslation();

    let categoriesTree = categoriesTreeByLanguage();

    useEffect(()=>{
        getProjectsHandler(user.email, {dataManipulationFunction:(data)=>{
            return data.map(item =>{
                return {...item, label:item.title, value: item.id }
            }  )

            }})
    },[]);


    const model = (isService) ? serviceModel : collaborationModel;



    const formRef = useRef();


    const onSubmitHandler = () =>{
        const formData = new FormData();
        formData.append('email', user.email);
        formData.append('localLanguage', user.language);
        formData.append('isService', isService.toString());

        if(formRef.current.check()){
            Object.keys(formValue).forEach((key)=>  { formData.append(key,JSON.stringify(formValue[key]));});
            createNewProjectHandler(formData, {successCallback: (data)=> history.push(Routes.collaboration(data)) });
        }

    }
    const titleLabel = (isService) ? t('Title of the service') : t('Title of the collaboration');
    const titleLocalLabel = (isService) ? t('Title of the service in local language') : t('Title of the collaboration in local language');
    const categoryLabel = (isService) ? t('Macro category of the service') : t('Macro category of the collaboration') ;

    const categoryImage = formValue && formValue.category && categories.find(category=>category.id===formValue.category);
    const categoryImageUrl = categoryImage && categoryImage.picture;

    return (
        <>
            <CollaborationBox>
                <div style={{height: 150, width: 150, backgroundImage: `url(${categoryImageUrl})`, backgroundColor: "white", backgroundSize: "contain", flex:"none", margin:10}}/>
                {formValue.title}
            </CollaborationBox>
            <FormBox >
                <TitleBox>Info </TitleBox>
                <Form ref={formRef} model={model} fluid formValue={formValue} onChange={setFormValue} onSubmit={onSubmitHandler}>
                    <CollaborationForm formValue={formValue} setFormValue={setFormValue} categoriesTree={categoriesTree} projects={projects} isService={isService}/>
                </Form>

            </FormBox>
        </>);


}
const TitleBox = styled.h4`
display: flex;
align-items:center;
padding-left: 20px;
color: ${bordeaux};
background-color: whitesmoke;
height:100px;
margin: 10px 0 10px 0;
`;
