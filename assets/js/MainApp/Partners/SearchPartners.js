import {Button, CheckTreePicker, Col, Form, Grid, HelpBlock, Panel, Row, SelectPicker} from "rsuite";
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


export default function SearchPartners(){

    const [partners, getPartnersHandler] = useSearcbPartners();
    const {t, i18n} = useTranslation();
    const {user} = useSelector(state=>state);

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
        const formData = new FormData();
        getPartnersHandler();
        return()=>{}
    },[])


    const partnersPanels = partners.map((partner, index)=> {
        return (<PartnerDetail key={index} partner={partner}/>)
    });


    let servicesTree = expertisesTreeByLanguage();
    let categoriesTree = categoriesTreeByLanguage();


    return <>

        <Panel bordered>
            <FlexAroundDiv>
                <BackTitle >
                    <FrontTitle>
                        Search Partners
                    </FrontTitle>
                    Search Partners
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
                            <HelpBlock>Insert country</HelpBlock>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24}>
                            <TextField label={t('Expertise')} name="expertise" data={servicesTree} accepter={CheckTreePicker} searchable={false} style={{width:"100%"}} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24}>
                            <TextField label={t('Category')} name="category" data={categoriesTree} accepter={CheckTreePicker} searchable={false} style={{width:"100%"}} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24}>
                            <FlexCenterDiv>
                                <MainButton type="submit">Search</MainButton>
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
                    <div style={{backgroundImage:  `url(${backgroundImage})`, backgroundSize: "contain", width:150, height:150}}/>
                </div>
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




