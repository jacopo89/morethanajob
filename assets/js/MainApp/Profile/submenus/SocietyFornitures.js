import React, {useEffect, useState} from "react";
import {
    useCreateOfferedService,
    useGetServices,
    useGetServicesBySociety,
    useRemoveOfferedService
} from "../../../Backend/hooks/useServices";
import {
    Button,
    ButtonGroup,
    Col,
    DatePicker,
    Form,
    Grid,
    Icon, IconButton,
    Modal,
    Panel,
    Row, Schema,
    SelectPicker,
    TreePicker
} from "rsuite";
import HorizontalStepForm from "../../../ReusableComponents/HorizontalStepForm";
import TextField from "../../../Login/Components/TextField";
import {generateServiceTree} from "../../Administration/CategoriesManagement";
import {useSelector} from "react-redux";
import * as Routes from "../../../routes";
import {bordeaux} from "../../../styledComponents/CustomComponents";
import {getCalendarFormat} from "../../../ReusableComponents/TimeManager";
import {useHistory} from "react-router-dom";
import {dataCountry, modalityData} from "../../../selectData";

export default function SocietyFornitures({society}){

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
        {panelShow}
        </>

}

export function ServiceDetail({service}){
    const serviceImage = (service && service.service) ? service.service.picture  : "";

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
    const [deleteService, deleteServiceHandler] = useRemoveOfferedService();
    console.log("service", service);

    return <div style={{color:bordeaux, height:40, backgroundColor:"whitesmoke", display: "flex", justifyContent: "space-evenly",alignItems: "center"}}>
        <div style={{flexGrow:3, paddingLeft:5, fontWeight: "bold", fontSize:20}}>
            {service.service.name}
        </div>
        <div>
            <IconButton icon={<Icon icon="trash"/> } onClick={() => deleteServiceHandler(service.id)}/>
        </div>
    </div>
}




export function NewServiceModal({show, onHide, successCallback}){

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

    let servicesTree = generateServiceTree(services);

    const data = [
        {
            "label": "Online",
            "value": "online",
        },
        {
            "label": "Face 2 face",
            "value": "f2f",
        }]


    const { StringType, ArrayType } = Schema.Types;
    const model = Schema.Model({
        service: ArrayType()
        // .addRule((value, data) => {return asyncCheckUsername(value);}, 'Duplicate username')
            .isRequired('This field is required'),
    })

    return (<Modal show={show} onHide={closeModal} centered>
        <Modal.Header closeButton>
            Expertise
        </Modal.Header>
        <Form fluid formValue={formValue} onChange={setFormValue} onSubmit={onSubmitHandler}  >
            <Modal.Body style={{height:500, padding:10}}>
                <TextField name="service" label="Field of expertise" accepter={TreePicker} data={servicesTree} style={{width:"100%"}} />
                <TextField name="description" label="Description" componentClass="textarea"/>
                <TextField name="country" label="Country" accepter={SelectPicker} data={dataCountry}/>
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
