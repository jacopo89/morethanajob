import React, {useEffect, useState, useRef} from "react";
import {useSelector} from "react-redux";
import {useCreateNewProject, useGetUserProjects} from "../../Backend/hooks/useProjects";
import TextField from "../../Login/Components/TextField";
import {DatePicker, Form, SelectPicker, TreePicker} from "rsuite";
import {dataCountry, dataLanguage, modalityData} from "../../selectData";
import {generateCategoriesTree, generateServiceTree} from "../Administration/CategoriesManagement";
import {bordeaux, CollaborationBox, FormBox, InverseButton, MainButton} from "../../styledComponents/CustomComponents";
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import * as Routes from "../../routes";
import {useCreateNewCollaboration} from "../../Backend/hooks/useCollaborations";
import {useGetCategories} from "../../Backend/hooks/useCategories";
import {Schema} from 'rsuite';
import {useTranslation} from "react-i18next";
import PositionList from "../Position/PositionList";
import {collaborationModel} from "../FormModels/models";
import {categoriesTreeByLanguage} from "../../Functions/Categories";

export default function NewCollaboration({isService=false}){
    const [formValue, setFormValue] = useState({positions: []});
    const {user, categories, language} = useSelector(state=>state);
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
                <h5 style={{color:bordeaux}}>Info </h5>
                <Form ref={formRef} model={collaborationModel} fluid formValue={formValue} onChange={setFormValue} onSubmit={onSubmitHandler}>
                    <TextField label={titleLabel} name="title" type="text" />
                    <TextField label={titleLocalLabel} name="localTitle" type="text" />
                    <TextField label={t('Short Description')} name="shortDescription" componentClass="textarea" />
                    <TextField label={t('Local Language Short description')} name="localLanguageShortDescription" componentClass="textarea" />
                    <TextField label={t('Description')} name="description" componentClass="textarea" />
                    <TextField label={t('Local Language Detailed description')} name="localLanguageDescription" componentClass="textarea" />

                    <div style={{display:"flex", justifyContent:"space-around"}}>
                        <TextField style={{width:"100%"}} label={t('Country')} name="country" accepter={SelectPicker} data={dataCountry} />
                        <TextField style={{width:"100%"}} label={t('Modality')} name="modality" accepter={SelectPicker} data={modalityData} />
                    </div>

                    {isService && <div style={{display:"flex", justifyContent:"space-around"}}>
                        <TextField label={t('Start date')} name="startDate" accepter={DatePicker} format="DD-MM-YYYY"  style={{width:"100%"}} />
                        <TextField label={t('End date')} name="endDate" accepter={DatePicker} format="DD-MM-YYYY"  style={{width:"100%"}} />
                    </div> }

                    {isService && <>
                        <TextField label={t('Rates')} name="rates" componentClass="textarea" />
                        <TextField label={t('Main Beneficiaries')} name="mainBeneficiaries" componentClass="textarea" />
                    </> }

                    <div style={{display:"flex", justifyContent:"space-around"}}>
                        <TextField style={{width:"100%"}} label={t('Project')} name="project" accepter={SelectPicker} data={projects} />
                        <TextField style={{width:"100%"}} label={categoryLabel} name="category" accepter={TreePicker} data={categoriesTree} />
                    </div>
                    <div style={{display:"flex", justifyContent:"space-around"}}>
                        <TextField style={{width:"100%"}} label={t('Language')} name="language" accepter={SelectPicker} data={dataLanguage} />

                    </div>
                    <>
                        <TextField label={t('Contacts')} name="contacts"  />
                    </>
                    {!isService && <PositionList formValue={formValue} setFormValue={setFormValue} />}



                    <MainButton style={{float:"right", margin:10}} type="submit">{t('Save')}</MainButton>
                </Form>

            </FormBox>
        </>);


}
