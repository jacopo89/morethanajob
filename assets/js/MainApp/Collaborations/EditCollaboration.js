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
import {bordeaux, CollaborationBox, FormBox, InverseButton, MainButton} from "../../styledComponents/CustomComponents";
import {Button, DatePicker, Form, HelpBlock, Schema, SelectPicker, TreePicker} from "rsuite";
import TextField from "../../Login/Components/TextField";
import {dataCountry, dataLanguage} from "../../selectData";
import styled from "styled-components";
import {useHistory, useParams} from "react-router-dom";
import {getCalendarDate} from "../../ReusableComponents/TimeManager";
import {useTranslation} from "react-i18next";
import PositionList from "../Position/PositionList";
import {collaborationModel} from "../FormModels/models";

export default function EditCollaboration({isService}) {
    const [formValue, setFormValue] = useState({positions: []});
    const {user} = useSelector(state=>state);
    const [getResponse, getCollaborationHandler] = useGetCollaboration();
    const [response, createNewCollaborationHandler] = useEditCollaboration();
    const [projects, getProjectsHandler] = useGetCollaborationProjects();
    const { t, i18n } = useTranslation();
    const [deleteResponse, deleteCollaborationHandler] = useDeleteCollaboration();
    const history = useHistory();
    const {id} = useParams();
    const formRef = useRef();
    const [categories, getCategoriesHandler] = useGetCategories();

    useEffect(()=>{
        getCollaborationHandler(id,{
            dataManipulationFunction:(data) =>
            {
                const newData = {...data, startDate: getCalendarDate(data.startDate), endDate:getCalendarDate(data.endDate)}
                console.log("premanipulation", newData);
                return newData
                } ,
            successCallback: (data)=> {
                console.log("collaboration", data);
                const formValue = {...data, category:data.category.value, startDate: getCalendarDate(data.startDate), endDate:getCalendarDate(data.endDate)};
                setFormValue(formValue);
            }});
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

    useEffect(()=>{
        getCategoriesHandler();
    },[]);

    let categoriesTree = generateCategoriesTree(categories)

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

    const categoryImage = formValue && formValue.category && formValue.category.picture;

        return (
        <>
            <CollaborationBox>
                <div style={{height: 150, width: 150, backgroundImage: `url(${categoryImage})`, backgroundColor: "white", backgroundSize: "contain", flex:"none", marginLeft:10, marginRight:10}}/>
                {formValue.title}
            </CollaborationBox>
            <FormBox >
                <h5 style={{color:bordeaux}}>Info </h5>
                <Form ref={formRef} model={collaborationModel} fluid formValue={formValue} onChange={setFormValue} onSubmit={onSubmitHandler}>
                    <TextField label={t('title')} name="title" type="text" />
                    <TextField label={t('Local Title')} name="localLanguageTitle" type="text" />
                    <TextField label={t('Short Description')} name="shortDescription" componentClass="textarea" />
                    <TextField label={t('Local Language Short description')} name="localShortDescription" componentClass="textarea" />
                    <TextField label={t('Description')} name="description" componentClass="textarea" />
                    <TextField label={t('Local Language Detailed description')} name="localDescription" componentClass="textarea" />
                    <div style={{display:"flex", justifyContent:"space-around"}}>
                        <TextField style={{width:"100%"}} label={t('Start Date')} name="startDate" format="DD-MM-YYYY" accepter={DatePicker} />
                        <TextField style={{width:"100%"}}  label={t('End Date')} name="endDate" accepter={DatePicker} format="DD-MM-YYYY" placement="topEnd" /> </div>

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
                    <HelpBlock>This content in available only in {formValue.language}</HelpBlock>
                    {!isService && <PositionList isEdit={true} formValue={formValue} setFormValue={setFormValue} />}


                    <MainButton type="submit">{t('Save')}</MainButton>
                    <Button onClick={()=>deleteHandler(formValue.id)}>Delete</Button>

                </Form>

            </FormBox>
        </>);


}
