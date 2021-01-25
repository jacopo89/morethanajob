import {Button, CheckTreePicker, Col, Form, Grid, HelpBlock, Icon, Panel, Row, SelectPicker} from "rsuite";
import React, {useEffect, useState} from "react";
import TextField from "../../Login/Components/TextField";
import {useSelector} from "react-redux";
import * as Routes from '../../routes';
import {useHistory} from "react-router-dom";
import {dataCountry} from "../../selectData";
import {useSearcbPartners} from "../../Backend/hooks/usePartners";
import {
    BackTitle,
    bordeaux,
    FlexAroundDiv,
    FlexCenterDiv,
    FormRow,
    FrontTitle, MainButton
} from "../../styledComponents/CustomComponents";
import {useTranslation} from "react-i18next";
import {categoriesTreeByLanguage} from "../../Functions/Categories";
import {expertisesTreeByLanguage} from "../../Functions/Expertises";
import {manipulateMail, manipulateWebsite} from "../Profile/Profile";
import {iconStyle, textStyle} from "../Profile/submenus/SocietyContacts";


export default function SearchPartners(){

    console.log("partners page");
    const [partners, getPartnersHandler] = useSearcbPartners();
    const {t, i18n} = useTranslation();

    const [formValue, setFormValue] = useState();

    const onSubmitHandler = () => {
        const formData = new FormData();
        // formData.append('isPortfolio', isPortFolioCheckboxChecked);
        Object.keys(formValue).forEach((key)=>  { formData.append(key,JSON.stringify(formValue[key]));});
        getPartnersHandler(formData);
    }
    //const [projects, getProjectsHandler] = useGetLastProjects();
    const history = useHistory();

    useEffect(()=>{
        getPartnersHandler();
        return()=>{}
    },[])


    const partnersPanels = partners.map((partner, index)=> {
        return (<PartnerDetail key={index} partner={partner}/>)
    });


    let servicesTree = expertisesTreeByLanguage();
    let {categoriesTree} = categoriesTreeByLanguage();


    return <>

        <Panel bordered>
            <FlexAroundDiv>
                <BackTitle >
                    <FrontTitle>
                        {t('Search organisations')}
                    </FrontTitle>
                    {t('Search organisations')}
                </BackTitle>
            </FlexAroundDiv>
            <p>
                Discover the organisations that are part of the MoreThanAJob community!
            </p>
            <Form fluid formValue={formValue} onChange={setFormValue} onSubmit={onSubmitHandler}>
                <Grid fluid>
                    <Row>
                        <Col xs={24}>
                            <TextField label={t('Country')} name="country" data={dataCountry} accepter={SelectPicker} searchable={false} style={{width:"100%"}} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24}>
                            <TextField label={t('Expertise')} name="expertise" data={servicesTree} accepter={CheckTreePicker} searchable={false} style={{width:"100%"}} />
                        </Col>
                    </Row>
                    <FormRow>
                        <Col xs={24}>
                            <TextField label={t('Category')} name="category" data={categoriesTree} accepter={CheckTreePicker} searchable={false} style={{width:"100%"}} />
                        </Col>
                    </FormRow>
                    <Row>
                        <Col xs={24}>
                            <FlexCenterDiv>
                                <MainButton type="submit">{t('Search')}</MainButton>
                            </FlexCenterDiv>
                        </Col>
                    </Row>
                </Grid>


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
                    <div onClick={()=>history.push(Routes.profile(partner.profileName))} style={{cursor:"pointer",backgroundImage:  `url(${backgroundImage})`, backgroundSize: "contain", width:150, height:150}}/>
                </div>
            </Col>
            <Col xs={16}>
                <Grid fluid>
                    <Row>
                        <Col md={12}>Numero progetti: {partner && partner.projects.length}</Col>
                        <Col md={12}></Col>
                    </Row>
                    <Row>
                        <Col md={12}>Numero servizi: {partner && partner.services.length}</Col>
                        <Col md={12}>Numero collaborazioni: {partner && partner.collaborations.length}</Col>
                    </Row>
                </Grid>
                <Grid fluid>
                    <Row>
                        <Col xs={6} md={2}><Icon style={iconStyle} icon="globe" size="3x" /></Col>
                        <Col xs={18} md={6}>
                            <div style={textStyle}>
                                <a style={{wordBreak:"break-word"}} target="_blank" href={partner && manipulateWebsite(partner.website)}> {partner && partner.website}</a>
                            </div>

                        </Col>
                        <Col xs={6} md={2}><Icon style={iconStyle} icon="envelope" size="3x" /></Col>
                        <Col xs={18} md={6}>
                            <div style={textStyle}>
                                <a style={{wordBreak:"break-word"}} href={partner && manipulateMail(partner.email)}> {partner && partner.email}</a>
                            </div>

                        </Col>
                        <Col xs={6} md={2}><Icon style={iconStyle} icon="phone-square" size="3x" /></Col>
                        <Col xs={18} md={6}>
                            <div style={textStyle}>

                                {partner && partner.telephone}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={2}><Icon style={iconStyle} icon="facebook-square" size="3x" /></Col>
                        <Col xs={18} md={6}>
                            <div style={textStyle}>
                                <a style={{wordBreak:"break-word"}} target="_blank" href={partner && manipulateWebsite(partner.facebook)}> {partner && partner.facebook}</a>
                            </div>
                        </Col>
                        <Col xs={6} md={2}><Icon style={iconStyle} icon="linkedin-square" size="3x" /></Col>
                        <Col xs={18} md={6}>
                            <div style={textStyle}>
                                <a style={{wordBreak:"break-word"}} target="_blank" href={partner && manipulateWebsite(partner.linkedin)}> {partner && partner.linkedin}</a>
                            </div>
                        </Col>
                        <Col xs={6} md={2}><Icon style={iconStyle} icon="twitter-square" size="3x" /></Col>
                        <Col xs={18} md={6}>
                            <div style={textStyle}>
                                <a style={{wordBreak:"break-word"}} target="_blank" href={partner && manipulateWebsite(partner.twitter)}> {partner && partner.twitter}</a>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </Col>
        </Row>
    </Panel>

}

export function PartnerTitle({partner}){



    return <div style={{color:bordeaux, minHeight:40, backgroundColor:"whitesmoke", display: "flex", justifyContent: "space-evenly",alignItems: "center"}}>
        <div style={{flexGrow:3, paddingLeft:10, fontWeight: "bold", fontSize:20}}>
            <a href={Routes.profile(partner.profileName)}>{partner.name}</a>
        </div>
    </div>
}




