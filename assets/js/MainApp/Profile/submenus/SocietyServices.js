import React, {useEffect, useState} from "react";
import {useCreateOfferedService, useGetServices, useGetServicesBySociety} from "../../../Backend/hooks/useServices";
import {
    Button,
    ButtonGroup,
    Col,
    DatePicker,
    Form,
    Grid,
    Icon,
    Modal,
    Panel,
    Row,
    SelectPicker,
    TreePicker
} from "rsuite";
import HorizontalStepForm from "../../../ReusableComponents/HorizontalStepForm";
import TextField from "../../../Login/Components/TextField";
import {generateTree} from "../../Administration/CategoriesManagement";
import {useSelector} from "react-redux";
import * as Routes from "../../../routes";
import {bordeaux} from "../../../styledComponents/CustomComponents";
import {getCalendarFormat} from "../../../ReusableComponents/TimeManager";
import {useHistory} from "react-router-dom";
import {modalityData} from "../../../selectData";

export default function SocietyServices({society}){

    const [societyServices, getServicesHandler] = useGetServicesBySociety();

    useEffect(()=>{

        getServicesHandler(society.email);

    },[]);

    const [show, setShow] = useState(false);
    const openModal = ()=>setShow(true);
    const closeModal = ()=>setShow(false);

    const successCallback = () => {
        closeModal();
        getServicesHandler(society.email);
    }

    const panels = societyServices.map((service, index) => <ServiceDetail key={index} service={service}/>)
    const panelShow = panels.length > 0 ? panels : <div style={{height:100, margin:"0 auto", textAlign:"center", color:bordeaux}}> No offered services </div>


    return <>
        <Button onClick={openModal}>Add offered Service</Button>
        {panelShow}
        <NewServiceModal show={show} onHide={closeModal} successCallback={successCallback}/>
        </>

}

export function ServiceDetail({service}){
    const serviceImage = (service && service.service) ? "https://localhost:8000/"+service.service.picture  : "https://localhost:8000/uploads/users/7/society-5ed3a86ac6b2d.png";

    return <Panel header={
        <ServicePanelTitle service={service} />}>
        <Row className="show-grid">
            <Col xs={8}>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <div style={{backgroundImage:  `url(${serviceImage})`, backgroundSize: "contain", width:150, height:150}}/>
                </div>
            </Col>
            <Col xs={16}>
                <div style={{height:150, maxHeight:150}}>{service.description}</div>
            </Col>
        </Row>
    </Panel>


}



export function ServicePanelTitle({service}){
    return <div style={{backgroundColor:bordeaux, height:40, color:"white", display: "flex", justifyContent: "space-evenly",alignItems: "center"}}>
        <div style={{flexGrow:3, paddingLeft:5, fontWeight: "bold", fontSize:20}}>
            {service.service.name}
        </div>
        <div style={{flexGrow:1}}>
            <Icon icon="calendar-o"/> From {getCalendarFormat(service.startDate)} to {getCalendarFormat(service.endDate)}
        </div>
        <div style={{flexGrow:1}}>

        </div>
    </div>
}




function NewServiceModal({show, onHide, successCallback}){

    const [formValue, setFormValue] = useState();
    const {user} = useSelector(state=>state);
    const [createOfferedService, createOfferedServiceHandler] = useCreateOfferedService();


    const onSubmitHandler = () => {
        const formData = new FormData();
        formData.append('email', user.email);
        Object.keys(formValue).forEach((key)=>  { formData.append(key,JSON.stringify(formValue[key]));});
        createOfferedServiceHandler(formData, {successCallback:successCallback});
    };

    const closeModal = () => {
        setFormValue({});
        onHide();
    }

    const [services, getServicesHandler] = useGetServices();

    useEffect(()=>{
        getServicesHandler();
    },[]);

    let servicesTree = generateTree(services);

    const data = [
        {
            "label": "Online",
            "value": "online",
        },
        {
            "label": "Face 2 face",
            "value": "f2f",
        }]

    return (<Modal show={show} onHide={closeModal} centered>
        <Modal.Header closeButton>
            Offered Service
        </Modal.Header>
        <Form fluid formValue={formValue} onChange={setFormValue} onSubmit={onSubmitHandler}  >
            <Modal.Body style={{height:500, padding:10}}>
                <TextField name="service" label="Servizio" accepter={TreePicker} data={servicesTree} style={{width:"100%"}} />
                <TextField name="shortDescription" label="Short Description" componentClass="textarea"/>
                <TextField name="description" label="Description" componentClass="textarea"/>
                <TextField name="modality" label="Modality" accepter={SelectPicker} data={modalityData} searchable={false} style={{width:"100%"}} />
                <TextField name="address" label="address"/>
                <div style={{display:"flex", justifyContent:"space-around"}}>
                    <TextField name="startDate" accepter={DatePicker} label="Data di inizio" format="DD-MM-YYYY"/>
                    <TextField name="endDate" accepter={DatePicker} label="Data di fine" format="DD-MM-YYYY"/>
                </div>

                <TextField name="mainBeneficiaries" label="Beneficiaries" componentClass="textarea"/>
                <TextField name="rates" label="Rates" componentClass="textarea"/>
            </Modal.Body>

            <Modal.Footer>
                <ButtonGroup>
                    <Button type="submit" style={{float:'right', backgroundColor: bordeaux, color:"white", margin:5}}>
                        Salva
                    </Button>
                </ButtonGroup>
            </Modal.Footer>
        </Form>
    </Modal>)

}
