import React, {useEffect, useRef, useState} from "react";
import {Button, ButtonGroup, Col, Form, Grid, Modal, Row, Tree} from "rsuite";
import TextField from "../../Login/Components/TextField";
import {bordeaux, FlexBetweenDiv, FormBox, FormButtonGroup, FormRow} from "../../styledComponents/CustomComponents";
import ImageCropper from "../../ReusableComponents/ImageCropper";
import {
    useCategoryUploadPicture,
    useCreateCategory,
    useDeleteCategory,
    useEditCategory,
    useGetCategories
} from "../../Backend/hooks/useCategories";
import {useTranslation} from "react-i18next";
import {categoryModel} from "../FormModels/models";

export default function CategoriesManagement(){


    const [selectedCategoryNode, setSelectedCategoryNode] = useState(null);
    const [selectedCategoryRef, setSelectedCategoryRef] = useState(null);


    const [categories, getCategoriesHandler] = useGetCategories();
    const [delResponse, deleteCategoryHandler] = useDeleteCategory();

    const [showGroup, setShowGroup] = useState(false);
    const handleCloseGroup = () => setShowGroup(false);
    const handleShowGroup = () => setShowGroup(true);


    useEffect(()=>{
        getCategoriesHandler();
    },[]);

    let categoriesTree = generateCategoriesTree(categories);


    const addRootCategory = ()=>{
        setSelectedCategoryNode(null);
        setShowGroup(true);
    }

    const getCategory = (categoryId) => categories.find((category)=> category.value === categoryId);


    const successCallbackCreation = ()=> {
        setShowGroup(false);
        getCategoriesHandler();

    }

    return (
        <FormBox style={{width:"100%"}}>


            <Grid fluid>
            <Row style={{backgroundColor:bordeaux}}>
                <Col xs={24}>

                    <FlexBetweenDiv style={{margin:10}}>
                        <div>
                            <h3>Category Management</h3>
                            <p>Please select one element from the tree to edit its property</p>
                        </div>
                        <div>
                            <ButtonGroup>
                                <Button onClick={addRootCategory}>Create root category</Button>
                                {selectedCategoryNode!==null && <Button onClick={handleShowGroup}>Add child category</Button>}
                                <Button onClick={()=>deleteCategoryHandler(selectedCategoryNode,{successCallback: getCategoriesHandler} )}>Remove category</Button>
                            </ButtonGroup>
                        </div>

                    </FlexBetweenDiv>
                </Col>
            </Row>
            <Row>
                <Col xs={8}>
                    <Tree defaultExpandAll={true} data={categoriesTree} onSelect={
                        (e) => {
                            console.log(e);
                            setSelectedCategoryNode(e.value);
                            setSelectedCategoryRef(e.refKey);
                        }
                    } />
                </Col>
                <Col xs={16}>
                    {selectedCategoryNode!==null && <CategoryDetail category={getCategory(selectedCategoryNode)} refreshHandler={getCategoriesHandler} />}
                    <CategoryModal parentId={selectedCategoryNode} onHide={()=>setShowGroup(false)} show={showGroup} successCallback={successCallbackCreation} />
                </Col>

            </Row>

        </Grid>


    </FormBox>)
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
        formData.append('ar', formValue.ar);
        formData.append('en', formValue.en);
        formData.append('it', formValue.it);
        formData.append('gr', formValue.gr);
        editCategoryHandler(formData,{successCallback:refreshHandler});
    }

    useEffect(()=>{setFormValue(category)},[category]);

    const uploaderButton = <Button>Upload image </Button>;
    const serviceImage = (category && category.picture) ? category.picture : null;

    return (<Form
        fluid
        formValue={formValue}
        onChange={setFormValue}
        onSubmit={saveCategory}
        //    onSubmit={()=>submitHandler(formValue)}
    >
        <Grid fluid>
            <FormRow>
                <Col xs={24}>
                    <TextField style={{width:"100%"}} name="label" label="Category"  />
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
                    {category && category.picture && <img src={serviceImage} width="200" height="200" />}
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


export function CategoryModal({show, onHide, successCallback = ()=>{}, parentId}){

    const [formValue, setFormValue] = useState();
    const [response, createCategoryHandler] = useCreateCategory();
    const formRef = useRef();

    const onSubmitHandler = () =>{

        if(formRef.current.check()){
            const formData = new FormData();
            formData.append('parentId', parentId);
            formData.append('value', formValue.value);
            formData.append('ar', formValue.ar);
            formData.append('en', formValue.en);
            formData.append('it', formValue.it);
            formData.append('gr', formValue.gr);
            createCategoryHandler(formData, {successCallback: successCallback });
        }

    };




    return  <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
            New category
        </Modal.Header>
        <Form ref={formRef} model={categoryModel} fluid formValue={formValue} onChange={setFormValue} onSubmit={onSubmitHandler}  >
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
