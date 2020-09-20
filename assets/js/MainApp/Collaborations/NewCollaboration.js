import React, {useEffect, useState, useRef} from "react";
import {useSelector} from "react-redux";
import {useCreateNewProject, useGetUserProjects} from "../../Backend/hooks/useProjects";
import TextField from "../../Login/Components/TextField";
import {DatePicker, Form, SelectPicker, TreePicker} from "rsuite";
import {dataCountry, dataLanguage, modalityData} from "../../selectData";
import {generateCategoriesTree, generateServiceTree} from "../Administration/CategoriesManagement";
import {bordeaux, FormBox, InverseButton, MainButton} from "../../styledComponents/CustomComponents";
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import * as Routes from "../../routes";
import {useCreateNewCollaboration} from "../../Backend/hooks/useCollaborations";
import {useGetCategories} from "../../Backend/hooks/useCategories";
import {Schema} from 'rsuite';
import {useTranslation} from "react-i18next";
import PositionList from "../Position/PositionList";
import {collaborationModel} from "../FormModels/models";

export default function NewCollaboration({isService=false}){
    const [formValue, setFormValue] = useState({positions: []});
    const {user} = useSelector(state=>state);
    const [response, createNewProjectHandler] = useCreateNewCollaboration();
    const [projects, getProjectsHandler] = useGetUserProjects();
    const history = useHistory();
    const { t, i18n } = useTranslation();

    useEffect(()=>{
        getProjectsHandler(user.email, {dataManipulationFunction:(data)=>{
            return data.map(item =>{
                return {...item, label:item.title, value: item.id }
            }  )

            }})
    },[]);

    const formRef = useRef();

    const [categories, getCategoriesHandler] = useGetCategories();

    useEffect(()=>{
        getCategoriesHandler();
    },[]);

    let categoriesTree = generateCategoriesTree(categories)

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
    const categoryLabel = (isService) ? "Macro category of the service" : "Macro category of the collaboration" ;

    return (
        <>
            <TitleBox >{formValue.title}</TitleBox>
            <FormBox >
                <h5 style={{color:bordeaux}}>Info </h5>
                <Form ref={formRef} model={collaborationModel} fluid formValue={formValue} onChange={setFormValue} onSubmit={onSubmitHandler}>
                    <TextField label={titleLabel} name="title" type="text" />
                    <TextField label={titleLocalLabel} name="localTitle" type="text" />
                    <TextField label={t('Short description')} name="shortDescription" componentClass="textarea" />
                    <TextField label={t('Local Language Short description')} name="localLanguageShortDescription" componentClass="textarea" />
                    <TextField label={t('Detailed description')} name="description" componentClass="textarea" />
                    <TextField label={t('Local Language Detailed description')} name="localLanguageDescription" componentClass="textarea" />

                    <div style={{display:"flex", justifyContent:"space-around"}}>
                        <TextField style={{width:"100%"}} label={t('Country')} name="country" accepter={SelectPicker} data={dataCountry} />
                        <TextField style={{width:"100%"}} label={t('Modality')} name="modality" accepter={SelectPicker} data={modalityData} />
                    </div>

                    {isService && <div style={{display:"flex", justifyContent:"space-around"}}>
                        <TextField label={t('Start Date')} name="startDate" accepter={DatePicker} format="DD-MM-YYYY"  style={{width:"100%"}} />
                        <TextField label={t('End Date')} name="endDate" accepter={DatePicker} format="DD-MM-YYYY"  style={{width:"100%"}} />
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

const TitleBox =  styled.div`
width: 100%;
height:200px;
background-color: ${bordeaux};
color: white;
font-size: 40px;
font-weight: bolder;
display: flex;
align-items: center;    
justify-content: center;
`
;
