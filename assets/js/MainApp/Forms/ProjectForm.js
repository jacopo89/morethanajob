import {bordeaux, FormButtonGroup, FormRow, InverseButton, SaveButton} from "../../styledComponents/CustomComponents";
import {Col, Divider, Form, Grid, SelectPicker} from "rsuite";
import TextField from "../../Login/Components/TextField";
import {ProjectFields} from "../FormModels/project-fields";
import {dataLanguage} from "../../selectData";
import DynamicList from "../../ReusableComponents/DynamicList";
import ImageCropper from "../../ReusableComponents/ImageCropper";
import React from "react";
import {useTranslation} from "react-i18next";
import DeleteButton from "../../ReusableComponents/DeleteButton";
import PartnersList from "../Projects/Partners/PartnersList";
import styled from "styled-components";

export default function ProjectForm({formValue, setFormValue, linksListChanger, contactsListChanger, handleProjectLogoChange, isEdit = false, isPortfolio, remover = ()=>{}}){
    const { t, i18n } = useTranslation();
    const uploadLogoButton = <InverseButton>{t('Upload Logo Button')}</InverseButton>;


    return <Grid fluid>
        <TitleBox>Info </TitleBox>
        <FormRow>
            <Col xs={24}>
                <TextField label={t('Title')} name={ProjectFields.title} type="text" />
            </Col>
        </FormRow>
        <FormRow>
            <Col xs={24}>
                <TextField style={{width:"100%"}} disabled label={t('Language')} name={ProjectFields.language} accepter={SelectPicker} data={dataLanguage()} />
            </Col>
        </FormRow>
        <FormRow>
            <Col xs={24}>
                <TextField label={t('Local Title')} name={ProjectFields.localTitle} type="text" />
            </Col>
        </FormRow>
        <FormRow>
            <Col xs={24}>
                <TextField label={t('Short Description')} name={ProjectFields.shortDescription} componentClass="textarea" />
            </Col>
        </FormRow>
        <FormRow>
            <Col xs={24}>
                <TextField label={t('Local Short Description')} name={ProjectFields.localShortDescription} componentClass="textarea" />
            </Col>
        </FormRow>
        <FormRow>
            <Col xs={24}>
                <TextField label={t('Description')} name={ProjectFields.longDescription} componentClass="textarea" />
            </Col>
        </FormRow>
        <FormRow>
            <Col xs={24}>
                <TextField label={t('Local Description')} name={ProjectFields.localLongDescription} componentClass="textarea" />
            </Col>
        </FormRow>
        <FormRow>
            <Col xs={12}>
                <DynamicList name="link" updater={linksListChanger} startingValue={formValue.links}> </DynamicList>
            </Col>
            <Col xs={12}>
                <DynamicList name="contact" updater={contactsListChanger} startingValue={formValue.contacts}> </DynamicList>
            </Col>
        </FormRow>
        <FormRow>
            <Col xs={12}>
                <ImageCropper button={uploadLogoButton} propCrop={{
                    unit: 'px', // default, can be 'px' or '%'
                    x: 0,
                    y: 0,
                    width: 250,
                    height: 250
                }} keyField="projectImage" onChange={handleProjectLogoChange}/>
            </Col>
            <Col xs={12}/>
        </FormRow>
        <FormRow>
            <Col xs={24}>
                { isPortfolio &&
                <div style={{display:"none"}}>
                    <TitleBox>Partner </TitleBox>
                    <PartnersList formValue={formValue} setFormValue={setFormValue} />
                </div>}
            </Col>
        </FormRow>
        <Divider />
        <FormRow>
            <Col xs={24}>
                <FormButtonGroup>
                    <SaveButton type="submit">{t('Save')}</SaveButton>
                    {isEdit && <DeleteButton onClickHandler={()=>remover(formValue.id)} >{t('Delete')}</DeleteButton>}
                </FormButtonGroup>
            </Col>
        </FormRow>
    </Grid>
}


const TitleBox = styled.h4`
display: flex;
align-items:center;
padding-left: 20px;
color: white;
background-color: ${bordeaux};
height:100px;
margin: 10px 0 10px 0;
`;
