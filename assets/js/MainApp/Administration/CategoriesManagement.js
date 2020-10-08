import React, {useEffect, useState} from "react";
import {Button, ButtonToolbar,Col, Form, Grid, Icon, Row, SelectPicker, Tree} from "rsuite";
import {useDeleteService, useEditExpertise, useGetServices, useUploadPicture} from "../../Backend/hooks/useServices";
import TextField from "../../Login/Components/TextField";
import {FormBox, MainButton, SecondaryButton} from "../../styledComponents/CustomComponents";
import ImageCropper from "../../ReusableComponents/ImageCropper";
import * as ActionTypes from "../../Redux/actions";
import {useCategoryUploadPicture, useEditCategory, useGetCategories} from "../../Backend/hooks/useCategories";
import {useTranslation} from "react-i18next";

export default function CategoriesManagement(){


    const [selectedServiceNode, setSelectedServiceNode] = useState(null);
    const [selectedCategoryNode, setSelectedCategoryNode] = useState(null);
    const [selectedServiceRef, setSelectedServiceRef] = useState(null);
    const [selectedCategoryRef, setSelectedCategoryRef] = useState(null);


    const [services, getServicesHandler] = useGetServices();
    const [categories, getCategoriesHandler] = useGetCategories();

    const [showGroup, setShowGroup] = useState(false);
    const handleCloseGroup = () => setShowGroup(false);
    const handleShowGroup = () => setShowGroup(true);
    const [response, deleteServiceHandler] = useDeleteService();

    const deleteCallbacks = {
        successCallback: ()=> getServicesHandler()
    }

    useEffect(()=>{
        getServicesHandler();
        getCategoriesHandler();
    },[]);

    let servicesTree = generateServiceTree(services)
    let categoriesTree = generateCategoriesTree(categories)

    const getService = (serviceId) =>{
        let filteredServiceArray = services.filter((service)=> service.value === serviceId);
        return filteredServiceArray[0];
    }

    const getCategory = (categoryId) =>{
        let filteredServiceArray = categories.filter((category)=> category.value === categoryId);

        return filteredServiceArray[0];
    }

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


            <Row>
                <h3>Category Management</h3>
                <p>Please select one element from the tree to edit its property</p>
                <Col xs={12}>
                    <Tree defaultExpandAll={true} data={categoriesTree} onSelect={
                        (e) => {
                            console.log(e);
                            setSelectedCategoryNode(e.value);
                            setSelectedCategoryRef(e.refKey);
                        }
                    } />
                </Col>
                <Col xs={12}>
                    <CategoryDetail category={getCategory(selectedCategoryNode)} refreshHandler={getCategoriesHandler} />
                    {false && <Button onClick={handleShowGroup}>Aggiungi Categoria</Button>}
                    <Button onClick={()=>deleteServiceHandler(selectedCategoryNode,deleteCallbacks )}>Remove category</Button>
                </Col>


            </Row>
        </Grid>

    </FormBox>)
}



export function generateServiceTree(items){

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

export function generateCategoriesTree(items){
    const { t, i18n } = useTranslation();

    items = items.map((item)=>{return {...item, label: t(item.label), value: item.id }});

//    console.log("generate tree", items);
    let rootItems = items.filter((item)=> item.parentCategoryId ===null);


    while(rootItems.length !==items.length){

        let lastItems = items.filter((module)=> {return (items.findIndex((item)=> (item.parentCategoryId) ? item.parentCategoryId ===module.id : false ) ===-1) && module.parentCategoryId!==null});
        let lastItemsId = lastItems.map((item)=>item.id);
        items = items.filter((module)=> !lastItemsId.includes(module.id) );
        items = items.map((module)=>{
            return {...module, children: lastItems.filter((item)=>  (item.parentCategoryId) ? module.id===item.parentCategoryId : false)}
        });
    }

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


function CategoryDetail({category, refreshHandler}){

    const [response, uploadPictureHandler ] = useCategoryUploadPicture();
    const [formValue, setFormValue] = useState(category);
    const onChangeProfileHandler = (file) => {
        let data = {};
        const formData = new FormData();
        formData.append('file', file);
        data.id = category.id;
        Object.keys(data).forEach((key)=>  { formData.append(key,JSON.stringify(data[key]));});
        uploadPictureHandler(formData, {successCallback: ()=>{
                refreshHandler();
            }});
    };

    const [editCategoryResp, editCategoryHandler] = useEditCategory();

    const saveCategory = ()=>{
        const formData = new FormData();
        formData.append('id', formValue.id);
        formData.append('value', formValue.label);
        editCategoryHandler(formData,{successCallback:refreshHandler});
    }

    useEffect(()=>{setFormValue(category)},[category]);

    const uploaderButton = <Button>Upload image </Button>;
    const serviceImage = (category && category.picture) ? category.picture : null;

    console.log("Categoria selezionata", category);

    return (<Form
        fluid
        formValue={formValue}
        onChange={setFormValue}
        onSubmit={saveCategory}
        //    onSubmit={()=>submitHandler(formValue)}
    >
        <TextField style={{width:"100%"}} name="label" label="Category"  />
        <div style={{display:"flex", justifyContent:"center"}}>
            {category && category.picture && <img src={serviceImage} width="200" height="200" />}
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
