import {ButtonGroup, Col, DatePicker, Divider, Form, Grid, SelectPicker, TreePicker} from "rsuite";
import {bordeaux, FormButtonGroup, FormRow, MainButton, SaveButton} from "../../styledComponents/CustomComponents";
import TextField from "../../Login/Components/TextField";
import {currencies, dataCountry, dataLanguage, modalityData, rateData} from "../../selectData";
import React from "react";
import PositionList from "../Position/PositionList";
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import DeleteButton from "../../ReusableComponents/DeleteButton";
import HelpBlock from "rsuite/es/HelpBlock/HelpBlock";

export default function CollaborationForm({formValue, setFormValue, projects, categoriesTree, isService, isEdit=false, getCollaborationFunction = ()=>{}, remover}){

    const {t} = useTranslation();

    const titleLabel = (isService) ? t('Service Title') : t('Collaboration Title')
    const localTitleLabel = (isService) ? t('Local Service Title') : t('Local Collaboration Title')
    const categoryLabel = (isService) ? t('Service Category') : t('Collaboration Category')

    return <Grid fluid>
        <FormRow>
            <Col xs={24}>
                <TextField label={titleLabel} name="title" type="text" />
            </Col>
        </FormRow>
        <FormRow>
            <Col xs={24}>
                <TextField style={{width:"100%"}} disabled label={t('Language')} name="language" accepter={SelectPicker} data={dataLanguage()} />
            </Col>
        </FormRow>
        <FormRow>
            <Col xs={24}>
                <TextField label={localTitleLabel} name="localLanguageTitle" type="text" />
            </Col>
        </FormRow>
        <FormRow>
            <Col xs={24}>
                <TextField label={t('Short Description')} name="shortDescription" componentClass="textarea" placeholder={"Max 500 characters (including spaces)"} />
                <HelpBlock>{formValue.shortDescription && formValue.shortDescription.length+"/500"}</HelpBlock>
            </Col>
        </FormRow>
        <FormRow>
            <Col xs={24}>
                <TextField label={t('Local Short Description')} name="localLanguageShortDescription" componentClass="textarea"  placeholder={"Max 500 characters (including spaces)"} />
                <HelpBlock>{formValue.localLanguageShortDescription && formValue.localLanguageShortDescription.length+"/500"}</HelpBlock>
            </Col>
        </FormRow>
        <FormRow>
            <Col xs={24}>
                <TextField label={t('Description')} name="description" componentClass="textarea" placeholder={"Max 1500 characters (including spaces)"} />
                <HelpBlock>{formValue.description && formValue.description.length+"/1500"}</HelpBlock>
            </Col>
        </FormRow>
        <FormRow>
            <Col xs={24}>
                <TextField label={t('Local Description')} name="localLanguageDescription" componentClass="textarea" placeholder={"Max 1500 characters (including spaces)"} />
                <HelpBlock>{formValue.localLanguageDescription && formValue.localLanguageDescription.length+"/1500"}</HelpBlock>
            </Col>
        </FormRow>
        {isService && <FormRow>
            <Col xs={12}>
                <TextField width="100%" label={t('Modality')} name="modality" accepter={SelectPicker} data={modalityData}/>
            </Col>
            <Col xs={12}>
                <TextField width="100%" label={t('Country')} name="country" accepter={SelectPicker} data={dataCountry}/>
            </Col>
        </FormRow>}
        <FormRow>
            <Col xs={12}>
                <TextField style={{width:"100%"}} label={t('Start date')} name="startDate" format="DD-MM-YYYY" accepter={DatePicker} />
            </Col>
            <Col xs={12}>
                <TextField style={{width:"100%"}}  label={t('End date')} name="endDate" accepter={DatePicker} format="DD-MM-YYYY" placement="topEnd" />
            </Col>
        </FormRow>
        <FormRow>
            <Col xs={12}>
                <TextField style={{width:"100%"}} label={t('Project')} name="project" accepter={SelectPicker} data={projects} />
                <HelpBlock>If the case, link with relevant project in portfolio</HelpBlock>
            </Col>
            <Col xs={12}>
                <TextField style={{width:"100%"}} label={categoryLabel} name="category" accepter={TreePicker} data={categoriesTree} />
            </Col>
        </FormRow>
        <Divider />
        {isService &&
        <>
            <FormRow>
                <TitleBox>{t('Rates')}</TitleBox>
                <Col xs={8}>
                    <TextField style={{width:"100%"}} label={t('Paid or free')} name="rateType" accepter={SelectPicker} data={rateData} searchable={false}  />
                </Col>
                <Col xs={8}>
                    {formValue.rateType && formValue.rateType==="paid" && <TextField style={{width:"100%"}} label={t('Currency')} name="currency" accepter={SelectPicker} data={currencies} searchable={false}  />}
                </Col>
                <Col xs={8}>
                    {formValue.rateType && formValue.rateType==="paid" && <TextField label={t('Cost')} name="rates" />}
                </Col>
            </FormRow>
            <FormRow>
                <Col xs={24}>
                    <TextField label={t('Additional info')} name="ratesText" componentClass="textarea" />
                </Col>
            </FormRow>
            <FormRow>
                <Col xs={24}>
                    <TextField label={t('Main beneficiaries')} name="mainBeneficiaries" componentClass="textarea" />
                </Col>
            </FormRow>

        </>
        }
        <FormRow>
            <Col xs={24}>
                <TextField label={t('Contacts')} name="contacts"  />
            </Col>
        </FormRow>

        {!isEdit && <FormRow>
            <Col xs={24}>
                {!isService && <PositionList formValue={formValue} setFormValue={setFormValue} />}
            </Col>
        </FormRow>}

        {isEdit && <FormRow>
            <Col xs={24}>
                {!isService && <PositionList isEdit={true} formValue={formValue} setFormValue={setFormValue} callback={getCollaborationFunction} />}
            </Col>
        </FormRow> }
        <FormRow>
            <Col xs={24}>
                <FormButtonGroup>
                    <SaveButton type="submit">{t('Save')}</SaveButton>
                    {isEdit && <DeleteButton onClickHandler={() => remover(formValue.id)}/>}
                </FormButtonGroup>
            </Col>
        </FormRow>

    </Grid>

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
