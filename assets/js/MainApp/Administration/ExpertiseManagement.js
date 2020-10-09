import React, {useEffect, useState} from "react";
import {Button, Col, Form, Grid, Row, Tree} from "rsuite";
import {useDeleteService, useEditExpertise, useGetServices, useUploadPicture} from "../../Backend/hooks/useServices";
import TextField from "../../Login/Components/TextField";
import {FormBox} from "../../styledComponents/CustomComponents";
import ImageCropper from "../../ReusableComponents/ImageCropper";
import {expertisesTreeByLanguage} from "../../Functions/Expertises";

export default function ExpertiseManagement(){


    const [selectedServiceNode, setSelectedServiceNode] = useState(null);
    const [selectedServiceRef, setSelectedServiceRef] = useState(null);


    const [services, getServicesHandler] = useGetServices();

    const [showGroup, setShowGroup] = useState(false);
    const handleCloseGroup = () => setShowGroup(false);
    const handleShowGroup = () => setShowGroup(true);
    const [response, deleteServiceHandler] = useDeleteService();

    const deleteCallbacks = {
        successCallback: ()=> getServicesHandler()
    }

    useEffect(()=>{
        getServicesHandler();
    },[]);

    let servicesTree = expertisesTreeByLanguage();

    const getService = (serviceId) => services.find((service)=> service.value === serviceId);


    return (<FormBox style={{width:"100%"}}>
        <Grid fluid>
            <Row>
                <h3>Expertise Management</h3>
                <p>Please select one element from the tree to edit its property</p>
                <Col xs={12}>
                    <Tree style={{width:"100%"}} defaultExpandAll={true} data={servicesTree} onSelect={
                        (e) => {
                            console.log(e);
                            setSelectedServiceNode(e.value);
                            setSelectedServiceRef(e.refKey);
                        }
                    } />
                </Col>
                <Col xs={12}>
                    <ServiceDetail service={getService(selectedServiceNode)} refreshHandler={getServicesHandler} />
                    {false &&    <Button onClick={handleShowGroup}>Add expertise</Button>}
                    <Button onClick={()=>deleteServiceHandler(selectedServiceNode,deleteCallbacks )}>Remove expertise</Button>
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
        <TextField style={{width:"100%"}} name="label" label="Expertise"  />
        <div style={{display:"flex", justifyContent:"center"}}>
            {service && service.picture && <img src={serviceImage} width="200" height="200" />}
        </div>

        <ImageCropper button={uploaderButton} propCrop={{
            unit: 'px', // default, can be 'px' or '%'
            x: 130,
            y: 50,
            width: 200,
            height: 200
        }} keyField="servicePicture" onChange={onChangeProfileHandler}/>
        <Button type="submit">Save</Button>
    </Form>)

}


