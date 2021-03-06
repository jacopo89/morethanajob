import React, {useEffect, useState} from "react";
import {Button, ButtonGroup, Col, Form, Grid, Modal, Row, Tree} from "rsuite";
import {useEditExpertise, useGetServices, useUploadPicture} from "../../Backend/hooks/useServices";
import TextField from "../../Login/Components/TextField";
import {bordeaux, FlexBetweenDiv, FormBox, FormButtonGroup, FormRow} from "../../styledComponents/CustomComponents";
import ImageCropper from "../../ReusableComponents/ImageCropper";
import {expertisesTreeByLanguage, generateServiceTree} from "../../Functions/Expertises";
import {useCreateExpertise, useDeleteExpertise} from "../../Backend/hooks/useExpertise";
import {CategoryModal} from "./CategoriesManagement";

export default function ExpertiseManagement(){


    const [selectedServiceNode, setSelectedServiceNode] = useState(null);
    const [selectedServiceRef, setSelectedServiceRef] = useState(null);


    const [services, getServicesHandler] = useGetServices();

    const [showGroup, setShowGroup] = useState(false);
    const handleCloseGroup = () => setShowGroup(false);
    const handleShowGroup = () => setShowGroup(true);
    const [response, deleteServiceHandler] = useDeleteExpertise();


    useEffect(()=>{
        getServicesHandler();
    },[]);

    let servicesTree = generateServiceTree(services);

    const getService = (serviceId) => services.find((service)=> service.value === serviceId);


    const addRootExpertise = ()=>{
       setSelectedServiceNode(null);
        setShowGroup(true);
    }


    const successCallbackCreation = ()=> {
        setShowGroup(false);
        getServicesHandler();

    }

    return (<FormBox style={{width:"100%"}}>

        <Grid fluid>
            <Row style={{backgroundColor:bordeaux}}>
                <Col xs={24}>

                    <FlexBetweenDiv style={{margin:10}}>
                        <div>
                            <h3>Expertise Management</h3>
                            <p>Please select one element from the tree to edit its property</p>
                        </div>
                        <div>
                            <ButtonGroup>
                                <Button onClick={addRootExpertise}>Create root expertise</Button>
                                {selectedServiceNode!==null && <Button onClick={handleShowGroup}>Add child expertise</Button>}
                                <Button onClick={()=>deleteServiceHandler(selectedServiceNode,{successCallback: getServicesHandler} )}>Remove expertise</Button>
                            </ButtonGroup>
                        </div>

                    </FlexBetweenDiv>
                </Col>
            </Row>
            <Row>
                <Col xs={8}>
                    <Tree defaultExpandAll={true} data={servicesTree} onSelect={
                        (e) => {
                            console.log(e);
                            setSelectedServiceNode(e.value);
                            setSelectedServiceRef(e.refKey);
                        }
                    } />
                </Col>
                <Col xs={16}>
                    {selectedServiceNode!==null && <ServiceDetail service={getService(selectedServiceNode)} refreshHandler={getServicesHandler} />}
                    <ServiceModal parentId={selectedServiceNode} onHide={()=>setShowGroup(false)} show={showGroup} successCallback={successCallbackCreation} />
                </Col>

            </Row>

        </Grid>

    </FormBox>)
}




function ServiceDetail({service, refreshHandler}){


    const [response, uploadPictureHandler ] = useUploadPicture();
    const [formValue, setFormValue] = useState(service);
    const onChangeProfileHandler = (file) => {
        let data = {};
        const formData = new FormData();
        formData.append('file', file);
        data.id = service.id;
        Object.keys(data).forEach((key)=>  { formData.append(key,JSON.stringify(data[key]));});
        uploadPictureHandler(formData, {successCallback: ()=>{
                refreshHandler();
            }});
    };

    const [editExpResp, editExpertiseHandler] = useEditExpertise();

    const saveExpertise = ()=>{
        const formData = new FormData();
        formData.append('id', formValue.id);
        formData.append('value', formValue.label);
        formData.append('ar', formValue.ar);
        formData.append('en', formValue.en);
        formData.append('it', formValue.it);
        formData.append('gr', formValue.gr);
        editExpertiseHandler(formData,{successCallback:refreshHandler});
    }

    useEffect(()=>{setFormValue(service)},[service]);

    console.log("service selezionata", service);
    const uploaderButton = <Button>Upload image </Button>;
    const serviceImage = (service && service.picture) ? service.picture : null;

    return (<Form fluid
                  formValue={formValue}
                  onChange={setFormValue}
                  onSubmit={saveExpertise}
        //    onSubmit={()=>submitHandler(formValue)}
    >
        <Grid fluid>
            <FormRow>
                <Col xs={24}>
                    <TextField style={{width:"100%"}} name="label" label="Expertise"  />
                </Col>
            </FormRow>
            <FormRow>
                <Col xs={12}>
                    <TextField style={{width:"100%"}} name="en" label="English"  />
                </Col>
                <Col xs={12}>
                    <TextField style={{width:"100%"}} name="it" label="Italian"  />
                </Col>
            </FormRow>
            <FormRow>
                <Col xs={12}>
                    <TextField style={{width:"100%"}} name="ar" label="Arabic"  />
                </Col>
                <Col xs={12}>
                    <TextField style={{width:"100%"}} name="gr" label="Greek"  />
                </Col>
            </FormRow>
            <FormRow>
                <Col xs={12}>
                    {service && service.picture && <img src={serviceImage} width="200" height="200" />}
                    <ImageCropper button={uploaderButton} propCrop={{
                        unit: 'px', // default, can be 'px' or '%'
                        x: 130,
                        y: 50,
                        width: 200,
                        height: 200
                    }} keyField="servicePicture" onChange={onChangeProfileHandler}/>

                </Col>
                <Col xs={12}>
                    <FormButtonGroup>
                        <Button type="submit">Save</Button>
                    </FormButtonGroup>
                </Col>
            </FormRow>
        </Grid>
    </Form>)

}


export function ServiceModal({show, onHide, successCallback = ()=>{}, parentId}){

    const [formValue, setFormValue] = useState();
    const [response, createExpertiseHandler] = useCreateExpertise();

    const localCallback = () => {
        setFormValue({});
        successCallback();
    }

    const onSubmitHandler = () =>{
        const formData = new FormData();
        formData.append('parentId', parentId);
        formData.append('value', formValue.value);
        formData.append('ar', formValue.ar);
        formData.append('en', formValue.en);
        formData.append('it', formValue.it);
        formData.append('gr', formValue.gr);
        createExpertiseHandler(formData, {successCallback: localCallback });
    }



    return  <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
            New expertise
        </Modal.Header>
        <Form fluid formValue={formValue} onChange={setFormValue} onSubmit={onSubmitHandler}  >
            <Modal.Body >
                <TextField style={{width:"100%"}} name="value" label="Name"/>
                <TextField style={{width:"100%"}} name="en" label="English"  />
                <TextField style={{width:"100%"}} name="it" label="Italian"  />
                <TextField style={{width:"100%"}} name="ar" label="Arabic"  />
                <TextField style={{width:"100%"}} name="gr" label="Greek"  />
            </Modal.Body>

            <Modal.Footer>
                <ButtonGroup>
                    <Button type="submit" style={{float:'right'}}>
                        Save
                    </Button>
                </ButtonGroup>
            </Modal.Footer>
        </Form>
    </Modal>

}
