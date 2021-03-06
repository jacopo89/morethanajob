import {Button, ButtonGroup, Form, Icon, IconButton, Modal, Nav, SelectPicker, TreePicker} from "rsuite";
import React, {useState} from "react";
import SocietyPortfolio from "./submenus/SocietyPortfolio";
import SocietyContacts from "./submenus/SocietyContacts";
import SocietyFornitures from "./submenus/SocietyFornitures";
import SocietyCollaborations from "./submenus/SocietyCollaborations";
import {bordeaux, IconButtonTransparent} from "../../styledComponents/CustomComponents";
import "./projectMenu.css";
import * as Routes from "../../routes";
import {useHistory} from "react-router-dom";
import SocietyServices from "./submenus/SocietyServices";
import TextField from "../../Login/Components/TextField";
import {dataCountry} from "../../selectData";
import ResponsiveNav from '@rsuite/responsive-nav';
import {useTranslation} from "react-i18next";
import styled from "styled-components";

const renderItemFunction = (item) => {
    const style = {height:25, color:bordeaux}

    return item;
}

const CustomNav = ({ active, onSelect,isOwner, ...props }) => {

    const history = useHistory();
    const { t, i18n } = useTranslation();
    const [show, setShow] = useState(false);
    const openModal = ()=> setShow(true);
    const closeModal = ()=> setShow(false);

    const [showprojectModal, setShowProjectModal] = useState(false);
    const openProjectModal = () => setShowProjectModal(true);
    const closeProjectModal = ()=> setShowProjectModal(false);


    return (
        <ResponsiveNav id="projectMenu" {...props} activeKey={active} onSelect={onSelect} justified>
            <ResponsiveNav.Item renderItem={renderItemFunction} eventKey="portfolio">
                <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                    {t('PORTFOLIO')}  {isOwner &&<IconButtonTransparent onClick={()=>history.push(Routes.newProjectPage)} icon={<Icon icon="plus"/>}/>}
                </div>
                <ProjectModal show={showprojectModal} onHide={closeProjectModal}/>
            </ResponsiveNav.Item>
            <ResponsiveNav.Item renderItem={renderItemFunction} eventKey="offerings">  {t('WHAT WE OFFER')}
                {isOwner && <IconButtonTransparent onClick={() => history.push(Routes.newFurniturePage)} icon={<Icon icon="plus"/>}/>}
            </ResponsiveNav.Item>
            <ResponsiveNav.Item renderItem={renderItemFunction} eventKey="services">
                 {t('SERVICES AND OPPORTUNITIES')}
                {isOwner && <IconButtonTransparent onClick={() => history.push(Routes.newServicePage)} icon={<Icon icon="plus"/>}/>}
            </ResponsiveNav.Item>
            <ResponsiveNav.Item renderItem={renderItemFunction} eventKey="collaborations">
                {t('COLLABORATIONS')}
                {isOwner &&<IconButtonTransparent onClick={() => history.push(Routes.newCollaborationPage)} icon={<Icon icon="plus"/>}/>}
            </ResponsiveNav.Item>
            <ResponsiveNav.Item renderItem={renderItemFunction} eventKey="contacts">{t('CONTACTS')}</ResponsiveNav.Item>
        </ResponsiveNav>
    );
};


export function ProjectMenu({society, isOwner}){

    const [active, setActive] = useState('portfolio');

    const handleSelect = (activeKey)  => {
        setActive(activeKey);
    };

    const mainPart  = (activeKey) =>{

        switch (activeKey) {
            case 'portfolio':{
                return <SocietyPortfolio society={society} />
            }
            case 'offerings':{
                return <SocietyFornitures society={society} />
            }
            case 'collaborations':{
                return <SocietyCollaborations society={society} />
            }
            case 'contacts':{
                return <SocietyContacts society={society} />
            }
            case 'services':{
                return <SocietyServices society={society} />
            }

        }
    }

    return (
        <div>
            <CustomNav appearance="subtle" active={active} onSelect={handleSelect} isOwner={isOwner} />
            {mainPart(active)}
        </div>
    );

}



function ProjectModal({show, onHide}){

    const history = useHistory();
    const {t} = useTranslation();

    return (<Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
        </Modal.Header>
            <Modal.Body>
                <div style={{display:"flex"}}>
                    <Button style={{flexGrow:1, margin:5}} onClick={() => history.push(Routes.newPortfolioPage)}> {t('Create portfolio project')}</Button>
                    <Button style={{flexGrow:1, margin:5}} onClick={() => history.push(Routes.newProjectPage)}> {t('Create new project')}</Button>
                </div>

            </Modal.Body>



    </Modal>)

}
