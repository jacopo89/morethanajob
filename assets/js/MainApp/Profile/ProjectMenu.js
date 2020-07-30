import {Button, ButtonGroup, Form, Icon, IconButton, Modal, Nav, SelectPicker, TreePicker} from "rsuite";
import React, {useState} from "react";
import SocietyPortfolio from "./submenus/SocietyPortfolio";
import SocietyContacts from "./submenus/SocietyContacts";
import SocietyFornitures, {NewServiceModal} from "./submenus/SocietyFornitures";
import SocietyCollaborations from "./submenus/SocietyCollaborations";
import {bordeaux, IconButtonTransparent} from "../../styledComponents/CustomComponents";
import "./projectMenu.css";
import SocietyProjects from "./submenus/SocietyProjects";
import * as Routes from "../../routes";
import {useHistory} from "react-router-dom";
import SocietyServices from "./submenus/SocietyServices";
import TextField from "../../Login/Components/TextField";
import {dataCountry} from "../../selectData";

const renderItemFunction = (item) => {
    const style = {height:25, color:bordeaux}

    return item;
}

const CustomNav = ({ active, onSelect,isOwner, ...props }) => {

    const history = useHistory();
    const [show, setShow] = useState(false);
    const openModal = ()=> setShow(true);
    const closeModal = ()=> setShow(false);

    const [showprojectModal, setShowProjectModal] = useState(false);
    const openProjectModal = () => setShowProjectModal(true);
    const closeProjectModal = ()=> setShowProjectModal(false);


    return (
        <Nav id="projectMenu" {...props} activeKey={active} onSelect={onSelect} justified>
            <Nav.Item renderItem={renderItemFunction} eventKey="portfolio">
                <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <Icon icon="home" /> PROJECTS  {isOwner &&<IconButtonTransparent onClick={openProjectModal} icon={<Icon icon="plus"/>}/>}
                </div>
                <ProjectModal show={showprojectModal} onHide={closeProjectModal}/>
            </Nav.Item>
            <Nav.Item renderItem={renderItemFunction} eventKey="offerings"> WHAT WE OFFER
                {isOwner && <IconButtonTransparent onClick={() => openModal()} icon={<Icon icon="plus"/>}/>}
                <NewServiceModal show={show} onHide={closeModal}/>
            </Nav.Item>
            <Nav.Item renderItem={renderItemFunction} eventKey="services">
                SERVICES AND OPPORTUNITIES
                {isOwner && <IconButtonTransparent onClick={() => history.push(Routes.newServicePage)} icon={<Icon icon="plus"/>}/>}
            </Nav.Item>
            <Nav.Item renderItem={renderItemFunction} eventKey="collaborations">
                COLLABORATIONS
                {isOwner &&<IconButtonTransparent onClick={() => history.push(Routes.newCollaborationPage)} icon={<Icon icon="plus"/>}/>}
            </Nav.Item>
            <Nav.Item renderItem={renderItemFunction} eventKey="contacts">CONTACTS</Nav.Item>
        </Nav>
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
            case 'projects':{
                return <SocietyProjects society={society}/>
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

    return (<Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
            Show Project Type
        </Modal.Header>
            <Modal.Body>
                <Button onClick={() => history.push(Routes.newPortfolioPage)}> Create portfolio project</Button>
                <Button onClick={() => history.push(Routes.newProjectPage)}> Create new project</Button>
            </Modal.Body>



    </Modal>)

}
