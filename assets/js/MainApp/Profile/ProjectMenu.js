import {Icon, Nav} from "rsuite";
import React, {useState} from "react";
import SocietyPortfolio from "./submenus/SocietyPortfolio";
import SocietyContacts from "./submenus/SocietyContacts";
import SocietyServices from "./submenus/SocietyServices";
import SocietyCollaborations from "./submenus/SocietyCollaborations";


const renderItemFunction = (item) => {
    const style = {height:25}
    return item;
    return <div style={style}>{item.props.children[1]}</div>
}

const CustomNav = ({ active, onSelect, ...props }) => {
    return (
        <Nav {...props} activeKey={active} onSelect={onSelect} justified>
            <Nav.Item renderItem={renderItemFunction} eventKey="portfolio" icon={<Icon icon="home" />}>
                Portfolio
            </Nav.Item>
            <Nav.Item renderItem={renderItemFunction} eventKey="societies">Servizi</Nav.Item>
            <Nav.Item renderItem={renderItemFunction} eventKey="collaborations">Collaboriamo</Nav.Item>
            <Nav.Item renderItem={renderItemFunction} eventKey="contacts">Contatti</Nav.Item>
        </Nav>
    );
};

export function ProjectMenu({society}){

    const [active, setActive] = useState('portfolio');

    const handleSelect = (activeKey)  => {
        setActive(activeKey);
    };

    const mainPart  = (activeKey) =>{

        switch (activeKey) {
            case 'portfolio':{
                return <SocietyPortfolio society={society} />
            }
            case 'societies':{
                return <SocietyServices society={society} />
            }
            case 'collaborations':{
                return <SocietyCollaborations society={society} />
            }
            case 'contacts':{
                return <SocietyContacts society={society} />
            }

        }
    }

    return (
        <div>
            <CustomNav appearance="subtle" reversed active={active} onSelect={handleSelect} />
            {mainPart(active)}
        </div>
    );

}
