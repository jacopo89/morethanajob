import React, {useEffect, useState} from "react";
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
import {bordeaux, InverseButton, MainButton} from "../../styledComponents/CustomComponents";
import {Button, DatePicker, Form, HelpBlock, Schema, SelectPicker, TreePicker} from "rsuite";
import TextField from "../../Login/Components/TextField";
import {dataCountry, dataLanguage} from "../../selectData";
import styled from "styled-components";
import {useHistory, useParams} from "react-router-dom";
import {getCalendarDate} from "../../ReusableComponents/TimeManager";
import {useTranslation} from "react-i18next";

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

    useEffect(()=>{
        getCollaborationHandler(id,{
            dataManipulationFunction:(data) =>
            {
                const newData = {...data, startTime: getCalendarDate(data.startDate)}
                console.log("premanipulation", newData);
                return newData
                } ,
            successCallback: (data)=> {
                console.log("collaboration", data);
                const formValue = {...data, category:data.category.value, startTime: getCalendarDate(data.startDate)};
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

    const [categories, getCategoriesHandler] = useGetCategories();

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

        Object.keys(formValue).forEach((key)=>  { formData.append(key,JSON.stringify(formValue[key]));});
        createNewCollaborationHandler(formData, {successCallback: (data)=> history.push(Routes.collaboration(data)) });
    }
    const { StringType, NumberType } = Schema.Types;
    const model = Schema.Model({
        service: NumberType()
        // .addRule((value, data) => {return asyncCheckUsername(value);}, 'Duplicate username')
            .isRequired('This field is required'),
    })

    const categoryLabel = (isService) ? "Macro category of the service" : "Macro category of the collaboration" ;

    return (
        <>
            <div style={{border:`2px solid ${bordeaux}`, height:100, width:"100%", textAlign:"center"}}>
                {formValue.title}
            </div>
            <InfoBox >
                <h5 style={{color:bordeaux}}>Info </h5>
                <Form fluid formValue={formValue} onChange={setFormValue} onSubmit={onSubmitHandler}>
                    <TextField label={t('title')} name="title" type="text" />
                    <TextField label={t('Local Title')} name="localTitle" type="text" />
                    <TextField label={t('Short Description')} name="shortDescription" componentClass="textarea" />
                    <TextField label={t('Description')} name="description" componentClass="textarea" />
                    <TextField label={t('Local Language Detailed description')} name="localDescription" componentClass="textarea" />
                    <div style={{display:"flex", justifyContent:"space-around"}}>
                        <TextField style={{width:"100%"}} label={t('Start Date')} name="startTime" accepter={DatePicker} format="DD-MM-YYYY" />
                        <TextField style={{width:"100%"}}  label={t('End Date')} name="endTime" accepter={DatePicker} format="DD-MM-YYYY" placement="topEnd" /> </div>

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


                    <MainButton type="submit">{t('Save')}</MainButton>
                    <Button onClick={()=>deleteHandler(formValue.id)}>Delete</Button>

                </Form>

            </InfoBox>
        </>);


}


const InfoBox =  styled.div`
padding: 10px;`
;
