import {useHistory} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Button, Col, Icon, Panel, Row} from "rsuite";
import {bordeaux} from "../../../styledComponents/CustomComponents";
import * as Routes from "../../../routes";
import {getCalendarFormat} from "../../../ReusableComponents/TimeManager";
import React from "react";
import {useSelector} from "react-redux";

export default function CollaborationDetail({collaboration}){

    const history = useHistory();
    const {language} = useSelector(state=>state);
    const { t, i18n } = useTranslation();

    const backgroundImage = (collaboration && collaboration.category && collaboration.category.picture) ? collaboration.category.picture  : "/defaults/project_thumbnail.png";
    const trueTitle  = (collaboration.localLanguage === language && collaboration.localLanguageTitle && collaboration.localLanguageTitle.length!==0) ? collaboration.localLanguageTitle : collaboration.title;
    const trueDescription  = (collaboration.localLanguage === language && collaboration.localLanguageShortDescription && collaboration.localLanguageShortDescription.length!==0) ? collaboration.localLanguageShortDescription : collaboration.description;



    const collaborationPositions = collaboration.positions.map((position)=> <div style={{width: 50, height: 50, backgroundImage: `url(${position.service.picture})`, backgroundSize:"contain"}} /> );

    return <Panel header={
        <CollaborationPanelTitle collaboration={collaboration} title={trueTitle} />}>
        <Row className="show-grid">
            <Col xs={8}>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <div style={{backgroundImage:  `url(${backgroundImage})`, backgroundSize: "contain", width:150, height:150}}/>
                </div>
            </Col>
            <Col xs={16}>
                <div style={{display:"flex", flexDirection:"column", flexWrap:"wrap", justifyContent:"space-around"}}>
                    <div style={{width:"100%", flexGrow:1}} >{trueDescription}</div>
                    {collaborationPositions}
                </div>
            </Col>
        </Row>
        <Row className="show-grid">
            <Col xs={8}>

            </Col>
            <Col xs={16}>
                <Button style={{float:"right", color:"white", backgroundColor: bordeaux}} onClick={()=> history.push(Routes.collaboration(collaboration.id))}>{t('Details')}</Button>
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

    const positionMessage = (collaborationOpen) ? t('Open positions') + ": " + openPositions : "Closed";

    const timeMessage = (collaboration.startDate && collaboration.endDate) ? t('From')+ " " + getCalendarFormat(collaboration.startDate) + " " + t('To') + " " + getCalendarFormat(collaboration.endDate)  : "";


    return <div style={{color:bordeaux, padding:5, minHeight:40, backgroundColor:"whitesmoke", display: "flex", justifyContent: "space-evenly",alignItems: "center"}}>
        <div style={{flexGrow:3, maxWidth:700, paddingLeft:10, fontWeight: "bold", fontSize:20}}>
            {title}
        </div>
        <div style={{flexGrow:1, fontSize:12}}>
            <Icon icon="calendar-o"/>  {timeMessage}
        </div>
        <div style={{flexGrow:1, fontSize:12}}>
            <Icon icon="suitcase" /> {positionMessage}
        </div>
    </div>
}
