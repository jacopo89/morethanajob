import {Button, CheckTreePicker, Col, Form, Grid, Icon, Pagination, Panel, Row, SelectPicker} from "rsuite";
import React, {useEffect, useState} from "react";
import TextField from "../../Login/Components/TextField";
import * as Routes from '../../routes';
import {useHistory} from "react-router-dom";
import {dataCountry, PaginationLimit} from "../../selectData";
import {useSearcbPartners} from "../../Backend/hooks/usePartners";
import {BackTitle, bordeaux, FlexAroundDiv, FlexBetweenDiv, FlexCenterDiv, FormRow, FrontTitle, MainButton, ProfileImage, userPagePicture} from "../../styledComponents/CustomComponents";
import {useTranslation} from "react-i18next";
import {categoriesTreeByLanguage} from "../../Functions/Categories";
import {expertisesTreeByLanguage} from "../../Functions/Expertises";
import {manipulateMail, manipulatePhone, manipulateWebsite} from "../Profile/Profile";
import {iconStyle} from "../Profile/submenus/SocietyContacts";
import {getProfileLanguageElements} from "../../Functions/Profile";


export default function SearchPartners(){

    const [response, getPartnersHandler] = useSearcbPartners();
    const {t, i18n} = useTranslation();

    const {partnersNumber, partners} = response;
    const [pagination, setPagination] = useState(1);
    const [limitPerPage, setLimitPerPage] = useState(5);
    const pages = Math.ceil(partnersNumber/limitPerPage);

    const paginationSettings =
        {
            prev: true,
            next: true,
            first: true,
            last: true,
            ellipsis: true,
            boundaryLinks: true,
            activePage:pagination
        };

    const onPaginationSelect = (item) => {
        setPagination(item);
        console.log(item);
        const formData = new FormData();
        console.log(formValue);
        Object.keys(formValue).forEach((key)=>  { formData.append(key,JSON.stringify(formValue[key]));});
        formData.append('page', item);
        formData.append('limit', limitPerPage);
        getPartnersHandler(formData);
    }


    const [formValue, setFormValue] = useState({});

    const onSubmitHandler = () => {
        const formData = new FormData();
        formData.append('page', pagination);
        formData.append('limit', limitPerPage);
        Object.keys(formValue).forEach((key)=>  { formData.append(key,JSON.stringify(formValue[key]));});
        getPartnersHandler(formData);
    }

    useEffect(()=>{
        const formData = new FormData();
        formData.append('page', pagination);
        formData.append('limit', limitPerPage);
        getPartnersHandler(formData);
        return()=>{}
    },[])


    const partnersPanels = partners.map((partner, index)=> {
        return (<PartnerDetail key={index} partner={partner}/>)
    });


    let servicesTree = expertisesTreeByLanguage();
    let {categoriesTree} = categoriesTreeByLanguage();


    return <>
        <img width={"100%"} src={userPagePicture}/>
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
        <FlexBetweenDiv>
            <Pagination pages={pages} {...paginationSettings} onSelect={onPaginationSelect} />
            <Form><TextField accepter={SelectPicker} data={PaginationLimit} value={limitPerPage} onChange={setLimitPerPage} searchable={false} cleanable={false} /></Form>
        </FlexBetweenDiv>
        {partnersPanels}
    </>


}


export function PartnerDetail({partner}){

    const history = useHistory();
    const {description} = getProfileLanguageElements(partner);

    const backgroundImage = (partner && partner.profilePicture && partner.profilePicture.url) ? partner.profilePicture.url  : "/defaults/project_thumbnail.png";

    return <Panel header={
        <PartnerTitle partner={partner} />}>
        <Row className="show-grid">
            <Col xs={8}>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <ProfileImage onClick={()=>history.push(Routes.profile(partner.profileName))} style={{cursor:"pointer"}} src={backgroundImage} width={150} height={150}></ProfileImage>
                </div>
            </Col>
            <Col xs={16}>
                <Grid fluid>
                    <FormRow>
                        {description}
                    </FormRow>
                    <Row>
                        <Col md={8}>Numero progetti: {partner && partner.allProjects.length}</Col>
                        <Col md={8}>Numero servizi: {partner && partner.services.length}</Col>
                        <Col md={8}>Numero collaborazioni: {partner && partner.activeCollaborations.length}</Col>

                    </Row>
                </Grid>
                <Grid fluid>
                    <Row>
                        {partner && partner.website &&
                            <>
                                <Col xs={4} md={4}>
                                    <Button style={{backgroundColor: "transparent"}} target="_blank" onClick={() => window.location.href = partner && manipulateWebsite(partner.website)}><Icon style={iconStyle} icon="globe" size="3x"/></Button>
                                </Col>
                                {/*<Col xs={18} md={6}>
                                    <div style={textStyle}>
                                        <a style={{wordBreak: "break-word"}} target="_blank" href={manipulateWebsite(partner.website)}> {partner && partner.website}</a>
                                    </div>

                                </Col>*/}
                            </>
                        }
                        {partner && partner.email &&
                            <>
                                <Col xs={4} md={4}><Button style={{backgroundColor: "transparent"}} target="_blank" onClick={() => window.location.href = manipulateMail(partner.email)}><Icon style={iconStyle} icon="envelope" size="3x"/></Button></Col>
                               {/* <Col xs={18} md={6}>
                                    <div style={textStyle}>
                                        <a style={{wordBreak:"break-word"}} href={manipulateMail(partner.email)}> {partner.email}</a>
                                    </div>

                                </Col>*/}
                            </>
                        }
                        {
                            partner && partner.telephone && <>
                                <Col xs={4} md={4}>
                                    <Button style={{backgroundColor: "transparent"}} target="_blank" onClick={() => window.location.href = manipulatePhone(partner.telephone)}><Icon style={iconStyle} icon="phone-square" size="3x" /></Button>
                                    </Col>
                                {/*<Col xs={18} md={6}>
                                    <div style={textStyle}>

                                        {partner && partner.telephone}
                                    </div>
                                </Col>*/}
                            </>
                        }
                        {
                            partner && partner.facebook && <>
                                <Col xs={4} md={4}>
                                    <Button style={{backgroundColor: "transparent"}} target="_blank" onClick={() => window.location.href = manipulateWebsite(partner.facebook)}><Icon style={iconStyle} icon="facebook-square" size="3x" /></Button>
                                </Col>
                                {/*<Col xs={18} md={6}>
                                    <div style={textStyle}>
                                        <a style={{wordBreak:"break-word"}} target="_blank" href={partner && manipulateWebsite(partner.facebook)}> {partner && partner.facebook}</a>
                                    </div>
                                </Col>*/}
                            </>
                        }
                        {
                            partner && partner.linkedin && <>
                                <Col xs={4} md={4}>
                                    <Button style={{backgroundColor: "transparent"}} target="_blank" onClick={() => window.location.href = manipulateWebsite(partner.linkedin)}><Icon style={iconStyle} icon="linkedin-square" size="3x" /></Button>
                                </Col>
                                {/* <Col xs={18} md={6}>
                                    <div style={textStyle}>
                                        <a style={{wordBreak:"break-word"}} target="_blank" href={partner && manipulateWebsite(partner.linkedin)}> {partner && partner.linkedin}</a>
                                    </div>
                                </Col>*/}
                            </>
                        }
                        {
                            partner && partner.twitter && <>
                                <Col xs={6} md={2}>
                                    <Button style={{backgroundColor: "transparent"}} target="_blank" onClick={() => window.location.href = manipulateWebsite(partner.twitter)}><Icon style={iconStyle} icon="twitter-square" size="3x" /></Button></Col>
                                {/*<Col xs={18} md={6}>
                                    <div style={textStyle}>
                                        <a style={{wordBreak:"break-word"}} target="_blank" href={partner && manipulateWebsite(partner.twitter)}> {partner && partner.twitter}</a>
                                    </div>
                                </Col>*/}
                            </>
                        }


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




