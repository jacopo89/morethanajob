import {
    Button,
    ButtonGroup, Checkbox, CheckboxGroup,
    CheckTreePicker, Col, ControlLabel,
    DatePicker,
    Form, FormControl, FormGroup, Icon,
    List,
    Modal,
    Panel, Radio, RadioGroup, Row,
    SelectPicker,
    TreePicker, Uploader
} from "rsuite";
import React, {useEffect, useState} from "react";
import TextField from "../../Login/Components/TextField";
import HorizontalStepForm from "../../ReusableComponents/HorizontalStepForm";
import {useGetServices} from "../../Backend/hooks/useServices";
import {generateCategoriesTree, generateServiceTree} from "../Administration/CategoriesManagement";
import {GenericTable} from "../../ReusableComponents/GenericTable";
import {useCreateNewProject, useGetLastProjects, useSearchProjects} from "../../Backend/hooks/useProjects";
import styled from "styled-components";
import {useSelector} from "react-redux";
import * as Routes from '../../routes';
import {useHistory} from "react-router-dom";
import {PortfolioDetail} from "../Profile/submenus/SocietyPortfolio";
import {dataCountry, dataLanguage} from "../../selectData";
import {useSearcbPartners} from "../../Backend/hooks/usePartners";
import {bordeaux} from "../../styledComponents/CustomComponents";
import {getCalendarFormat} from "../../ReusableComponents/TimeManager";
import {useGetCategories} from "../../Backend/hooks/useCategories";
import {useTranslation} from "react-i18next";


export default function SearchPartners(){

    const [partners, getPartnersHandler] = useSearcbPartners();
    const {t, i18n} = useTranslation();
    const {user} = useSelector(state=>state);

    const [formValue, setFormValue] = useState();

    const onSubmitHandler = () => {
        const formData = new FormData();
        console.log(formValue);
        // formData.append('isPortfolio', isPortFolioCheckboxChecked);
        Object.keys(formValue).forEach((key)=>  { formData.append(key,JSON.stringify(formValue[key]));});
        getPartnersHandler(formData);
    }
    //const [projects, getProjectsHandler] = useGetLastProjects();
    const history = useHistory();

    useEffect(()=>{
        const formData = new FormData();
        getPartnersHandler();
        return()=>{}
    },[])


    const partnersPanels = partners.map((partner, index)=> {
        return (<PartnerDetail key={index} partner={partner}/>)
    });



    const [services, getServicesHandler] = useGetServices();
    const [categories, getCategoriesHandler] = useGetCategories();


    useEffect(()=>{
        getServicesHandler();
        getCategoriesHandler();
    },[]);
    let servicesTree = generateServiceTree(services)
    let categoriesTree = generateCategoriesTree(categories)


    return <>

        <Panel header="Filters" bordered>

            <Form fluid formValue={formValue} onChange={setFormValue} onSubmit={onSubmitHandler}>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <TextField label={t('Country')} name="country" data={dataCountry} accepter={SelectPicker} searchable={false} style={{width:"100%"}} />
                    <TextField label={t('Expertise')} name="expertise" data={servicesTree} accepter={CheckTreePicker} searchable={false} style={{width:"100%"}} />
                    <TextField label={t('Category')} name="category" data={categoriesTree} accepter={CheckTreePicker} searchable={false} style={{width:"100%"}} />
                </div>

                <Button type="submit">Search</Button>
            </Form>
        </Panel>

        {partnersPanels}
    </>


}


export function PartnerDetail({partner}){

    const history = useHistory();

    const backgroundImage = (partner && partner.profilePicture && partner.profilePicture.url) ? partner.profilePicture.url  : "/defaults/project_thumbnail.png";


    return <Panel header={
        <PartnerTitle partner={partner} />}>
        <Row className="show-grid">
            <Col xs={8}>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <div style={{backgroundImage:  `url(${backgroundImage})`, backgroundSize: "contain", width:150, height:150}}/>
                </div>
            </Col>
        </Row>
    </Panel>

}

export function PartnerTitle({partner}){



    return <div style={{color:bordeaux, minHeight:40, backgroundColor:"whitesmoke", display: "flex", justifyContent: "space-evenly",alignItems: "center"}}>
        <div style={{flexGrow:3, paddingLeft:10, fontWeight: "bold", fontSize:20}}>
            <a href={Routes.profile(partner.profileName)}>{partner.profileName}</a>
        </div>
    </div>
}




