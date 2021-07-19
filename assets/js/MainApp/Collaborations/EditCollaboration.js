import React, {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {useDeleteCollaboration, useEditCollaboration, useGetCollaboration} from "../../Backend/hooks/useCollaborations";
import {useGetCollaborationProjects, useGetUserProjects} from "../../Backend/hooks/useProjects";
import * as Routes from "../../routes";
import {bordeaux, CollaborationBox, FormBox} from "../../styledComponents/CustomComponents";
import {Form} from "rsuite";
import styled from "styled-components";
import {useHistory, useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {collaborationModel, serviceModel} from "../FormModels/models";
import {categoriesTreeByLanguage} from "../../Functions/Categories";
import CollaborationForm from "../Forms/CollaborationForm";

export default function EditCollaboration({isService}) {
    const [formValue, setFormValue] = useState({positions: []});
    const {user,language} = useSelector(state=>state);
    const [getResponse, getCollaborationHandler] = useGetCollaboration();
    const [response, createNewCollaborationHandler] = useEditCollaboration();
    const [projects, getProjectsHandler] = useGetUserProjects();
    const { t, i18n } = useTranslation();
    const [deleteResponse, deleteCollaborationHandler] = useDeleteCollaboration();
    const history = useHistory();
    const {id} = useParams();
    const formRef = useRef();

    const {categories} = useSelector(state=>state);

    let {categoriesTree} = categoriesTreeByLanguage();

    const model = (isService) ? serviceModel : collaborationModel;





    const getCollaborationFunction = () =>{
        getCollaborationHandler(id,{
            successCallback: (data)=> {
                let formValue = {...data, category:data.category.value, project: (data.project)? data.project.id :null};
                if(data.startDate){
                    formValue = {...formValue, startDate: new Date(data.startDate)}
                }
                if(data.endDate){
                    formValue = {...formValue, endDate: new Date(data.endDate)}
                }
                setFormValue(formValue);
            }});
    }

    useEffect(()=>{
        getCollaborationFunction();
    },[]);



    useEffect(()=>{
        getProjectsHandler(user.email, {dataManipulationFunction:(data)=>{
                return data.map((project)=> {
                    return {
                        ...project, label:project.title, value:project.id
                    }
                })
            }})
    },[]);




    const deleteHandler = (id) => {
        deleteCollaborationHandler(id, {successCallback:()=>{
            history.push(Routes.profile(user.profileName));
        }});
    }

    const onSubmitHandler = () =>{
        const formData = new FormData();
        formData.append('email', user.email);
        console.log("editing service");

        if(formRef.current.check()){
            Object.keys(formValue).forEach((key)=>  { formData.append(key,JSON.stringify(formValue[key]));});

            createNewCollaborationHandler(formData, {successCallback: (data)=> history.push(Routes.collaboration(data)) });
        }

    }

    const categoryLabel = (isService) ? "Macro category of the service" : "Macro category of the collaboration" ;


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
                    <CollaborationForm isEdit={true} formValue={formValue} setFormValue={setFormValue} categoriesTree={categoriesTree} projects={projects} isService={isService} getCollaborationFunction={getCollaborationFunction} remover={deleteHandler}/>
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
