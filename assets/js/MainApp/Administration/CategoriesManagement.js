import React, {useEffect, useState} from "react";
import {Button, ButtonToolbar, Form, Icon, SelectPicker, Tree} from "rsuite";
import {useDeleteService, useGetServices, useUploadPicture} from "../../Backend/hooks/useServices";
import TextField from "../../Login/Components/TextField";
import {MainButton, SecondaryButton} from "../../styledComponents/CustomComponents";
import ImageCropper from "../../ReusableComponents/ImageCropper";
import * as ActionTypes from "../../Redux/actions";

export default function CategoriesManagement(){


    const [selectedNode, setSelectedNode] = useState(null);
    const [selectedRef, setSelectedRef] = useState(null);

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

    let servicesTree = generateTree(services)

    const getService = (serviceId) =>{
        let filteredServiceArray = services.filter((service)=> service.value === serviceId);
        console.log("Selected Service", filteredServiceArray[0]);
        return filteredServiceArray[0];
    }

    return (<>
        <Tree defaultExpandAll={true} data={servicesTree} onSelect={
            (e) => {
                console.log(e);
                setSelectedNode(e.value);
                setSelectedRef(e.refKey);
            }
        } />
        <ServiceDetail service={getService(selectedNode)} refreshHandler={getServicesHandler} />
        <Button onClick={handleShowGroup}>Aggiungi servizio</Button>
        <Button onClick={()=>deleteServiceHandler(selectedNode,deleteCallbacks )}>Cancella Servizio</Button>

    </>)
}



export function generateTree(items){

    items = items.map((item)=>{return {...item, label: item.label, value: item.id }});

//    console.log("generate tree", items);
    let rootItems = items.filter((item)=> item.parentServiceId ===null);


    while(rootItems.length !==items.length){

        let lastItems = items.filter((module)=> {return (items.findIndex((item)=> (item.parentServiceId) ? item.parentServiceId ===module.id : false ) ===-1) && module.parentServiceId!==null});
        let lastItemsId = lastItems.map((item)=>item.id);
        items = items.filter((module)=> !lastItemsId.includes(module.id) );
        items = items.map((module)=>{
            return {...module, children: lastItems.filter((item)=>  (item.parentServiceId) ? module.id===item.parentServiceId : false)}
        });
    }

   // console.log("tree", items);
    return items;
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

    useEffect(()=>{setFormValue(service)},[service]);

    const uploaderButton = <Button>Upload </Button>;
    const serviceImage = (service && service.picture) ? "https://localhost:8000"+ service.picture : null;

    return (<Form
        formValue={formValue}
        onChange={setFormValue}
    //    onSubmit={()=>submitHandler(formValue)}
    >
        <TextField name="label" label="Nome società"  />
        {service && service.picture && <img src={`url("${serviceImage}")`} width="100%" height="100%" />}

        <ImageCropper button={uploaderButton} propCrop={{
            unit: 'px', // default, can be 'px' or '%'
            x: 130,
            y: 50,
            width: 200,
            height: 200
        }} keyField="servicePicture" onChange={onChangeProfileHandler}/>
    </Form>)

}
