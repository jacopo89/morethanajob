import React, {useEffect, useState} from "react";
import {Button, Col, Form, HelpBlock, Pagination, Panel, PanelGroup, Row, SelectPicker} from "rsuite";
import {
    useGetAllUserProjects,
    useGetCollaborationProjects, useGetPaginatedProjects,
    useGetPortfolioProjects
} from "../../../Backend/hooks/useProjects";
import {bordeaux, FlexBetweenDiv} from "../../../styledComponents/CustomComponents";
import {useHistory} from "react-router-dom";
import * as Routes from '../../../routes';
import NewProjectModal from "../../Projects/NewProjectModal";

import {useTranslation} from "react-i18next";
import NoElementsFound from "./NoElementsFound";
import {useSelector} from "react-redux";
import TextField from "../../../Login/Components/TextField";
import {PaginationLimit} from "../../../selectData";

export default function SocietyPortfolio({society}) {

    const {projectsNumber} = society;
    const [pagination, setPagination] = useState(1);
    const [limitPerPage, setLimitPerPage] = useState(5);
    const pages = Math.ceil(projectsNumber/limitPerPage);

    const [userProjects, getAllUserProjects] = useGetAllUserProjects();
    const [userPaginatedProjects, getUserPaginatedProjectsHandler] = useGetPaginatedProjects();
    const [show, setShow] = useState(false);
    const openModal = ()=> setShow(true);
    const closeModal = ()=> setShow(false);
    const { t, i18n } = useTranslation();


    const history = useHistory();


    useEffect(()=>{
        getUserPaginatedProjectsHandler([society.email, pagination, limitPerPage]);
    },[pagination, limitPerPage]);

    const successCallback = ()=>{
        closeModal();
        getAllUserProjects(society.email);
    }

    const panels = userPaginatedProjects.map((project, item)=> <PortfolioDetail key={item} project={project}/>);
    const panelShow = panels.length > 0 ? panels : <NoElementsFound message="No projects" />

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

    const onPaginationSelect = (item) => setPagination(item);

   return  <>
       <FlexBetweenDiv>
           <Pagination pages={pages} {...paginationSettings} onSelect={onPaginationSelect} />
           <Form><TextField accepter={SelectPicker} data={PaginationLimit} value={limitPerPage} onChange={setLimitPerPage} searchable={false} cleanable={false} /></Form>
       </FlexBetweenDiv>
        <PanelGroup>{panelShow}</PanelGroup>
        <NewProjectModal show={show} onHide={closeModal} successCallback={successCallback} isPortfolio={true} />
        </>



}

export function PortfolioDetail({project}){

    const history = useHistory();
    const { t, i18n } = useTranslation();
    const {language} = useSelector(state=>state);
    const title = (project && project.language === language && project.localTitle!==null && project.localTitle.length!==0) ? project && project.localTitle  : project && project.title ;
    const description = (project && project.language === language && project.localShortDescription!==null && project.localShortDescription.length!==0) ? project && project.localShortDescription  : project && project.shortDescription ;


    const isDescriptionInEnglish = (
        project &&
        project.localLanguage === language &&
        project.localShortDescription===null ||
        ( project && project.localShortDescription !==null && project.localShortDescription.length===0)
    );
    const message = isDescriptionInEnglish ? "This content is available only in English" :"";

    const backgroundImage = (project && project.projectLogo) ? project.projectLogo.url  : "/defaults/project_thumbnail.png";

        const existingPartners = project.projectPartnersRelations.map((projectPartnersRelation, index)=>{
            let profileImage = (projectPartnersRelation.partner.profilePicture) ? projectPartnersRelation.partner.profilePicture.url : "";
            return <div key={index} style={{backgroundImage:  `url(${profileImage})`, backgroundSize: "contain", width:50, height:50}}/>
        });
        let list = <>
            <div style={{display:"flex", flexWrap:"wrap"}}>{existingPartners}</div>
        </>


        return <Panel header={
        <PortfolioPanelTitle title={title} project={project} />}>
        <Row className="show-grid">
            <Col xs={8}>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <div style={{backgroundImage:  `url(${backgroundImage})`, backgroundSize: "contain", width:150, height:150}}/>
                </div>
            </Col>
            <Col xs={16}>
                <div style={{display:"flex", flexDirection:"column", flexWrap:"wrap", justifyContent:"space-around"}}>
                    <div style={{width:"100%", flexGrow:1}} >{description}</div>
                    <HelpBlock>{message}</HelpBlock>
                    {list}
                </div>

            </Col>
        </Row>
            <Row className="show-grid">
                <Col xs={8}>

                </Col>
                <Col xs={16}>
                    <Button style={{backgroundColor:bordeaux, color:"white", float:"right"}} onClick={()=> history.push(Routes.project(project.id))}>{t('Read More')}</Button>
                </Col>
            </Row>
    </Panel>

}

export function PortfolioPanelTitle({project, title}){
    const { t, i18n } = useTranslation();
    return <div style={{backgroundColor:bordeaux, minHeight:40, color:"white", display: "flex", justifyContent: "space-evenly",alignItems: "center"}}>
        <div style={{flexGrow:3, paddingLeft:5, fontWeight: "bold", fontSize:20}}>
            {title}
        </div>

    </div>
}
