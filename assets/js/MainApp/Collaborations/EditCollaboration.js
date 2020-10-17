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
import Modal, {
    Button, ButtonGroup,
    Col,
    DatePicker,
    Divider,
    Form,
    Grid,
    HelpBlock,
    Row,
    Schema,
    SelectPicker,
    TreePicker
} from "rsuite";
import TextField from "../../Login/Components/TextField";
import {currencies, dataCountry, dataLanguage, rateData} from "../../selectData";
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
                                <TextField style={{width:"100%"}} disabled label={t('Language')} name="language" accepter={SelectPicker} data={dataLanguage()} />
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

                    </Grid>

                    {!isService && <PositionList isEdit={true} formValue={formValue} setFormValue={setFormValue} callback={getCollaborationFunction} />}

                    <Grid fluid style={{marginTop:20}}>
                        <Row>
                            <Col xs={24}>
                                <ButtonGroup>
                                    <DeleteButton onClickHandler={() => deleteHandler(formValue.id)}/> <SaveButton type="submit">{t('Save')}</SaveButton>
                                </ButtonGroup>
                            </Col>
                        </Row>
                    </Grid>




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
