import React, {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {useGetUserProjects} from "../../Backend/hooks/useProjects";
import TextField from "../../Login/Components/TextField";
import {Col, DatePicker, Divider, Form, Grid, Row, SelectPicker, TreePicker} from "rsuite";
import {currencies, dataCountry, dataLanguage, modalityData, rateData} from "../../selectData";
import {bordeaux, CollaborationBox, FormBox, MainButton} from "../../styledComponents/CustomComponents";
import {useHistory} from "react-router-dom";
import * as Routes from "../../routes";
import {useCreateNewCollaboration} from "../../Backend/hooks/useCollaborations";
import {useTranslation} from "react-i18next";
import PositionList from "../Position/PositionList";
import {collaborationModel} from "../FormModels/models";
import {categoriesTreeByLanguage} from "../../Functions/Categories";
import styled from "styled-components";

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
                <Form ref={formRef} model={collaborationModel} fluid formValue={formValue} onChange={setFormValue} onSubmit={onSubmitHandler}>
                    <Grid fluid>
                        <Row>
                            <Col xs={24}>
                                <TextField label={t('Title')} name="title" type="text" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={24}>
                                <TextField label={t('Local Title')} name="localLanguageTitle" type="text" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={24}>
                                <TextField label={t('Short Description')} name="shortDescription" componentClass="textarea" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={24}>
                                <TextField label={t('Local Language Short description')} name="localLanguageShortDescription" componentClass="textarea" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={24}>
                                <TextField label={t('Local Language Detailed description')} name="localLanguageDescription" componentClass="textarea" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <TextField style={{width:"100%"}} label={t('Start date')} name="startDate" format="DD-MM-YYYY" accepter={DatePicker} />
                            </Col>
                            <Col xs={12}>
                                <TextField style={{width:"100%"}}  label={t('End date')} name="endDate" accepter={DatePicker} format="DD-MM-YYYY" placement="topEnd" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <TextField style={{width:"100%"}} label={t('Project')} name="project" accepter={SelectPicker} data={projects} />
                            </Col>
                            <Col xs={12}>
                                <TextField style={{width:"100%"}} label={t('Category')} name="category" accepter={TreePicker} data={categoriesTree} />
                            </Col>
                        </Row>
                        <Divider />
                        {isService &&
                        <>
                            <Row>
                                <TitleBox>{t('Rates')}</TitleBox>
                                <Col xs={8}>
                                    <TextField style={{width:"100%"}} label={t('Paid or free')} name="rateType" accepter={SelectPicker} data={rateData} searchable={false}  />
                                </Col>
                                <Col xs={8}>
                                    {formValue.rateType && formValue.rateType==="paid" && <TextField style={{width:"100%"}} label={t('Currency')} name="currency" accepter={SelectPicker} data={currencies} searchable={false}  />}
                                </Col>
                                <Col xs={8}>
                                    {formValue.rateType && formValue.rateType==="paid" && <TextField label={t('Rate value')} name="rates" />}
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={24}>
                                    <TextField label={t('Rates')} name="ratesText" componentClass="textarea" />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={24}>
                                    <TextField label={t('Main beneficiaries')} name="mainBeneficiaries" componentClass="textarea" />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={24}>
                                    <TextField label={t('Contacts')} name="contacts"  />
                                </Col>
                            </Row>
                        </>
                        }
                        <Row>
                            <Col xs={24}>
                                <TextField style={{width:"100%"}} disabled label={t('Language')} name="language" accepter={SelectPicker} data={dataLanguage()} />
                            </Col>
                        </Row>
                    </Grid>

                    {!isService && <PositionList formValue={formValue} setFormValue={setFormValue} />}



                    <MainButton style={{float:"right", margin:10}} type="submit">{t('Save')}</MainButton>
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
