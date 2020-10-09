import React, {useEffect, useState, useRef} from "react";
import {useSelector} from "react-redux";
import {
    useCreateNewCollaboration, useDeleteCollaboration,
    useEditCollaboration,
    useGetCollaboration
} from "../../Backend/hooks/useCollaborations";
import {useGetCollaborationProjects, useGetUserProjects} from "../../Backend/hooks/useProjects";
import {useGetCategories} from "../../Backend/hooks/useCategories";
import {generateCategoriesTree} from "../Administration/CategoriesManagement";
import * as Routes from "../../routes";
import {
    bordeaux,
    CollaborationBox,
    FormBox,
    InverseButton,
    MainButton, SaveButton,
    SecondaryButton
} from "../../styledComponents/CustomComponents";
import Modal, {Button, DatePicker, Form, HelpBlock, Schema, SelectPicker, TreePicker} from "rsuite";
import TextField from "../../Login/Components/TextField";
import {dataCountry, dataLanguage} from "../../selectData";
import styled from "styled-components";
import {useHistory, useParams} from "react-router-dom";
import {getCalendarDate} from "../../ReusableComponents/TimeManager";
import {useTranslation} from "react-i18next";
import PositionList from "../Position/PositionList";
import {collaborationModel} from "../FormModels/models";
import DeleteButton from "../../ReusableComponents/DeleteButton";
import {categoriesTreeByLanguage} from "../../Functions/Categories";

export default function EditCollaboration({isService}) {
    const [formValue, setFormValue] = useState({positions: []});
    const {user,language} = useSelector(state=>state);
    const [getResponse, getCollaborationHandler] = useGetCollaboration();
    const [response, createNewCollaborationHandler] = useEditCollaboration();
    const [projects, getProjectsHandler] = useGetCollaborationProjects();
    const { t, i18n } = useTranslation();
    const [deleteResponse, deleteCollaborationHandler] = useDeleteCollaboration();
    const history = useHistory();
    const {id} = useParams();
    const formRef = useRef();

    const {categories} = useSelector(state=>state);

    let categoriesTree = categoriesTreeByLanguage();







    const getCollaborationFunction = () =>{
        getCollaborationHandler(id,{
            successCallback: (data)=> {
                console.log("Data in get collaboration",data);
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
                <h5 style={{color:bordeaux}}>Info </h5>
                <Form ref={formRef} model={collaborationModel} fluid formValue={formValue} onChange={setFormValue} onSubmit={onSubmitHandler}>
                    <TextField label={t('Title')} name="title" type="text" />
                    <TextField label={t('Local Title')} name="localLanguageTitle" type="text" />
                    <TextField label={t('Short Description')} name="shortDescription" componentClass="textarea" />
                    <TextField label={t('Local Language Short description')} name="localLanguageShortDescription" componentClass="textarea" />
                    <TextField label={t('Description')} name="description" componentClass="textarea" />
                    <TextField label={t('Local Language Detailed description')} name="localLanguageDescription" componentClass="textarea" />
                    <div style={{display:"flex", justifyContent:"space-around"}}>
                        <TextField style={{width:"100%"}} label={t('Start date')} name="startDate" format="DD-MM-YYYY" accepter={DatePicker} />
                        <TextField style={{width:"100%"}}  label={t('End date')} name="endDate" accepter={DatePicker} format="DD-MM-YYYY" placement="topEnd" /> </div>

                    <div style={{display:"flex", justifyContent:"space-around"}}>
                        <TextField style={{width:"100%"}} label={t('Project')} name="project" accepter={SelectPicker} data={projects} />
                        <TextField style={{width:"100%"}} label={t('Category')} name="category" accepter={TreePicker} data={categoriesTree} />
                    </div>

                    {isService && <>
                        <TextField label={t('Rates')} name="rates" componentClass="textarea" />
                        <TextField label={t('Main beneficiaries')} name="mainBeneficiaries" componentClass="textarea" />
                    </> }

                    {isService && <>
                        <TextField label={t('Contacts')} name="contacts"  />
                    </> }

                    <div style={{display:"flex", justifyContent:"space-around"}}>
                        <TextField style={{width:"100%"}} label={t('Language')} name="language" accepter={SelectPicker} data={dataLanguage} />
                    </div>

                    {!isService && <PositionList isEdit={true} formValue={formValue} setFormValue={setFormValue} callback={getCollaborationFunction} />}


                    <SaveButton type="submit">{t('Save')}</SaveButton>
                    <DeleteButton onClickHandler={() => deleteHandler(formValue.id)}/>

                </Form>

            </FormBox>

        </>);


}
