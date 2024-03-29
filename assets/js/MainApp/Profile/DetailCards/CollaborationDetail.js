import {useHistory} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Button, Col, HelpBlock, Icon, Panel, Row} from "rsuite";
import {bordeaux, MainButton, ProfileImage} from "../../../styledComponents/CustomComponents";
import * as Routes from "../../../routes";
import {getCalendarFormat} from "../../../ReusableComponents/TimeManager";
import React from "react";
import {useSelector} from "react-redux";

export default function CollaborationDetail({collaboration}){

    const history = useHistory();
    const {language} = useSelector(state=>state);
    const { t, i18n } = useTranslation();

    const isDescriptionInEnglish = (
        collaboration.localLanguage === language &&
        collaboration.localLanguageShortDescription===null ||
        (collaboration.localLanguageShortDescription !==null && collaboration.localLanguageShortDescription.length===0)
    );

    const partner = collaboration?.user;
    const backgroundImage = (partner && partner.profilePicture && partner.profilePicture.url) ? partner.profilePicture.url  : "/defaults/project_thumbnail.png";

    const categoryImage = (collaboration && collaboration.category && collaboration.category.picture) ? collaboration.category.picture  : "/defaults/project_thumbnail.png";

    const trueTitle  = (collaboration.localLanguage === language && collaboration.localLanguageTitle && collaboration.localLanguageTitle.length!==0) ? collaboration.localLanguageTitle : collaboration.title;
    const trueDescription  = (collaboration.localLanguage === language && collaboration.localLanguageShortDescription && collaboration.localLanguageShortDescription.length!==0) ? collaboration.localLanguageShortDescription : collaboration.shortDescription;
    const message= (isDescriptionInEnglish) ? "This content is available only in English" : "";

    const image = (collaboration && collaboration.logo) ? collaboration.logo.url : categoryImage;

    const collaborationPositions = collaboration.positions.map((position, index)=> <div key={index} style={{width: 50, height: 50, backgroundImage: `url(${position.service.picture})`, backgroundSize:"contain"}} /> );

    return <Panel header={
        <CollaborationPanelTitle collaboration={collaboration} title={trueTitle} />}>
        <Row className="show-grid">
            <Col xs={8}>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <img src={image} width={150} height={150} alt={categoryImage}/>
                </div>
            </Col>
            <Col xs={16}>
                <div style={{display:"flex", flexDirection:"column", flexWrap:"wrap", justifyContent:"space-around"}}>
                    <div style={{width:"100%", flexGrow:1}} >{trueDescription}</div>
                    <HelpBlock>{message}</HelpBlock>
                    {collaborationPositions}
                </div>
            </Col>
        </Row>
        <Row className="show-grid">
            <Col xs={8}>

            </Col>
            <Col xs={16}>
                <ProfileImage onClick={() => history.push(Routes.profile(partner.profileName))} style={{cursor: "pointer"}} src={backgroundImage} width={50} />
                <MainButton style={{float:"right"}} onClick={()=> history.push(Routes.collaboration(collaboration.id))}>{t('Details')}</MainButton>
            </Col>
        </Row>

    </Panel>

}

export function CollaborationPanelTitle({collaboration, title}){

    const openPositions = collaboration.positions.filter((position) => position.isOpen === true).length;
    const { t, i18n } = useTranslation();

    let collaborationOpen = true;

    if(collaboration.endDate){
        const today = new Date();
        const endD = new Date(collaboration.endDate);

        collaborationOpen = (today <= endD);

    }

    const positionMessage = (collaborationOpen) ? t('Open positions') + ": " + openPositions : t('Closed');

    const startDate = collaboration.startDate;
    const endDate = collaboration.endDate;
    const bothDates = startDate && endDate;

    const showTime = bothDates || startDate || endDate;

    let timeMessage = "";
    if(bothDates){
        timeMessage = t('From')+ " " + getCalendarFormat(startDate) + " " + t('To') + " " + getCalendarFormat(endDate)
    }else if(startDate){
        timeMessage = t('From')+ " " + getCalendarFormat(startDate)
    }else{
        timeMessage = t('To') + " " + getCalendarFormat(endDate)
    }


    return <div style={{color:bordeaux, padding:5, minHeight:40, backgroundColor:"whitesmoke", display: "flex", justifyContent: "space-evenly",alignItems: "center"}}>
        <div style={{flexGrow:3, maxWidth:700, paddingLeft:10, fontWeight: "bold", fontSize:20, flexBasis:"60%"}}>
            {title}
        </div>
        <div style={{flexGrow:1, fontSize:12, flexBasis: "20%"}}>
            {showTime && (<Icon icon="calendar-o"/>  && timeMessage)}
        </div>
        <div style={{flexGrow:1, fontSize:12, flexBasis: "20%"}}>
            <Icon icon="suitcase" /> {positionMessage}
        </div>
    </div>
}
