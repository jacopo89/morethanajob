import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useCreateNewProject, useGetUserProjects} from "../../Backend/hooks/useProjects";
import TextField from "../../Login/Components/TextField";
import {
    Button,
    Col,
    DatePicker,
    Form, Grid,
    Icon,
    IconButton,
    List,
    Panel,
    Row,
    SelectPicker,
    TreePicker,
    Uploader
} from "rsuite";
import {dataCountry, dataLanguage, modalityData} from "../../selectData";
import {useGetServices} from "../../Backend/hooks/useServices";
import {generateCategoriesTree, generateServiceTree} from "../Administration/CategoriesManagement";
import {GenericTable} from "../../ReusableComponents/GenericTable";
import {bordeaux, InverseButton, MainButton} from "../../styledComponents/CustomComponents";
import styled from "styled-components";
import ImageCropper from "../../ReusableComponents/ImageCropper";
import {useHistory} from "react-router-dom";
import * as Routes from "../../routes";
import {getCalendarFormat} from "../../ReusableComponents/TimeManager";
import {useCreateNewCollaboration} from "../../Backend/hooks/useCollaborations";
import {useGetCategories} from "../../Backend/hooks/useCategories";
import {Schema} from 'rsuite';

export default function NewCollaboration({isService=false}){
    const [formValue, setFormValue] = useState({positions: []});
    const {user} = useSelector(state=>state);
    const [response, createNewProjectHandler] = useCreateNewCollaboration();
    const [projects, getProjectsHandler] = useGetUserProjects();
    const history = useHistory();

    useEffect(()=>{
        getProjectsHandler(user.email, {dataManipulationFunction:(data)=>{
            return data.map(item =>{
                return {...item, label:item.title, value: item.id }
            }  )

            }})
    },[]);

    const { StringType, NumberType, ArrayType, DateType } = Schema.Types;

    console.log(formValue);
    const model = Schema.Model({
        title: StringType().isRequired('This field is required.'),
        shortDescription: StringType().isRequired('This field is required.').maxLength(500),
        description: StringType().maxLength(500),
        category: NumberType().isRequired('This field is required.'),
        country: StringType().isRequired('This field is required.'),
        language: StringType().isRequired('This field is required.'),

    });

    const [categories, getCategoriesHandler] = useGetCategories();

    useEffect(()=>{
        getCategoriesHandler();
    },[]);

    let categoriesTree = generateCategoriesTree(categories)

    const onSubmitHandler = () =>{
        const formData = new FormData();
        formData.append('email', user.email);
        formData.append('isService', isService.toString());

        Object.keys(formValue).forEach((key)=>  { formData.append(key,JSON.stringify(formValue[key]));});
        createNewProjectHandler(formData, {successCallback: (data)=> history.push(Routes.collaboration(data)) });
    }

    const titleLabel = (isService) ? "Title of the service" : "Title of the collaboration";
    const categoryLabel = (isService) ? "Macro category of the service" : "Macro category of the collaboration" ;

    return (
        <>
            <TitleBox >{formValue.title}</TitleBox>
            <InfoBox >
                <h5 style={{color:bordeaux}}>Info </h5>
                <Form model={model} fluid formValue={formValue} onChange={setFormValue} onSubmit={onSubmitHandler}>
                    <TextField label={titleLabel} name="title" type="text" />
                    <TextField label="Short description" name="shortDescription" componentClass="textarea" />
                    <TextField label="Detailed description" name="description" componentClass="textarea" />

                    <div style={{display:"flex", justifyContent:"space-around"}}>
                        <TextField style={{width:"100%"}} label="Country" name="country" accepter={SelectPicker} data={dataCountry} />
                        <TextField style={{width:"100%"}} label="Modality" name="modality" accepter={SelectPicker} data={modalityData} />
                    </div>

                    {isService && <div style={{display:"flex", justifyContent:"space-around"}}>
                        <TextField label="Start Date" name="startDate" accepter={DatePicker}  style={{width:"100%"}} />
                        <TextField label="End Date" name="endDate" accepter={DatePicker}  style={{width:"100%"}} />
                    </div> }

                    {isService && <>
                        <TextField label="Rates" name="rates" componentClass="textarea" />
                        <TextField label="Main Beneficiaries" name="mainBeneficiaries" componentClass="textarea" />
                    </> }

                    <div style={{display:"flex", justifyContent:"space-around"}}>
                        <TextField style={{width:"100%"}} label="Project" name="project" accepter={SelectPicker} data={projects} />
                        <TextField style={{width:"100%"}} label={categoryLabel} name="category" accepter={TreePicker} data={categoriesTree} />
                    </div>
                    <div style={{display:"flex", justifyContent:"space-around"}}>
                        <TextField style={{width:"100%"}} label="Language" name="language" accepter={SelectPicker} data={dataLanguage} />

                    </div>
                    {!isService && <ListOrCreate formValue={formValue} setFormValue={setFormValue} />}

                    <>
                        <TextField label="Contacts" name="contacts"  />
                    </>

                    <MainButton style={{float:"right", margin:10}} type="submit">Save all</MainButton>
                </Form>

            </InfoBox>
        </>);


}

function ListOrCreate({formValue, setFormValue}){

    const [services, getServicesHandler] = useGetServices();

    useEffect(()=>{
        getServicesHandler();
    },[]);

    let servicesTree = generateServiceTree(services)


    const [create, setCreate] = useState(false);
    const [element, setElement] = useState(null);

    const add = () => {
        const creationTime = Date.now();
        const newElement = { id: creationTime, creationTimeFrontend:creationTime }
        const oldElements = formValue.positions;
        const newElements = oldElements.concat(newElement);
        const newFormValue = Object.assign({},formValue);
        newFormValue.positions = newElements;
        setFormValue(newFormValue);
        return newElement;
    };

    const remove = (id) => {
        const newElements = formValue.positions.filter((element)=> element.id !== id);
        const newFormValue = Object.assign({},formValue);
        newFormValue.positions = newElements;
        setFormValue(newFormValue);

    };

    const update = (id, elementFormValue) => {
        const newElements = formValue.positions.map((element) =>  {
            if(element.id===id){
                return {id: element.id, creationTimeFrontend: element.creationTimeFrontend,...elementFormValue};
            }else{
                return element;
            }
        })
        const newFormValue = Object.assign({},formValue);
        newFormValue.positions = newElements;
        setFormValue(newFormValue);
    }

    const removeIds = (formValue) =>{
        const oldElements = formValue.positions;
        const newElements = oldElements.map((element) => {
            let newElement = Object.assign({}, element);
            if(element.id === element.creationTimeFrontend){
                delete newElement.id;
            }
            return newElement;
        })
        const newFormValue = Object.assign({},formValue);
        newFormValue.positions = newElements;
        return newFormValue;
    }


    const createHandler = () => {
        let newElement = add();
        setElement(newElement);
        setCreate(true);
    }

    const back= (id)=>{
        remove(id);
        setCreate(false);
    }

    const save= ()=>{
        setCreate(false);
    }


    const createForm = <>
        <h5 style={{color:bordeaux}}>Need </h5>
        <IncludableForm item={element} updater={update} save={save} back={back} servicesTree={servicesTree}  />
    </>

    const actionRender= (rowData) => {
        console.log("RowData", rowData)

        const editHandler = ()=>{
            setElement(rowData);
            setCreate(true);
        }

        const removeHandler = () => {
            remove(rowData.id);
        }

        function handleAction() {
            alert(`id:${rowData.id}`);
        }
        return (
            <span>
                    <a onClick={editHandler}> Edit </a> |{' '}
                <a onClick={removeHandler}> Remove </a>
                  </span>
        );
    }
    const modelData = [
        {label:"id",dataKey: "id"},
        {label:"servizio", dataKey: "service"},
        {label:"actions", render:actionRender}
    ]
    const editHandler = (element)=>{
        setElement(element);
        setCreate(true);
    }

    const table = <>
        <Button onClick={createHandler}>Crea</Button>
        <GenericTable rowKey="id" modelData={modelData} propData={formValue.positions} />
    </>
    const list = <>
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <h5 style={{color:bordeaux}}>Positions </h5>
            <InverseButton onClick={createHandler}>Create position</InverseButton>
        </div>
        <List>
            {formValue.positions.map((position, index) => (
                <PositionCreationDescription position={position} services={services} remover={remove} updater={update} setEdit={editHandler} />
            ))}
        </List>

    </>

    return (create) ? createForm : list;
}

function IncludableForm({item, updater, save, remover, back, servicesTree}){

    const [formValue, setFormValue] = useState(item);

    useEffect(()=>{
        updater(item.id, formValue);
    },[formValue])

    return <div style={{border:"1px solid", borderColor:bordeaux, padding:5}}>
        <Form formValue={formValue}  onChange={setFormValue}>
            <div style={{display:"flex", justifyContent:"space-around"}}>
                <TextField name="service" label="Expertise" accepter={TreePicker} data={servicesTree} style={{width:"100%"}} />
            </div>
            <TextField name="description" label="Description" componentClass="textarea"/>

            <div style={{display:"flex", justifyContent:"space-around"}}>
                <TextField name="deadline" accepter={DatePicker} label="Deadline" format="DD-MM-YYYY" style={{width:"100%"}}/>
            </div>

        </Form>
        <Button onClick={save}>Save</Button><Button onClick={()=>back(item.id)}>Undo</Button>
    </div>
}


function PartnerListOrCreate({formValue, setFormValue}){

    const [services, getServicesHandler] = useGetServices();
    useEffect(()=>{
        getServicesHandler();
    },[]);

    let servicesTree = generateServiceTree(services)

    const [create, setCreate] = useState(false);
    const [existingPartner, setExistingPartner] = useState(false);
    const [element, setElement] = useState(null);

    const add = () => {
        const creationTime = Date.now();
        const newElement = { id: creationTime, creationTimeFrontend:creationTime }
        const oldElements = formValue.partners;
        const newElements = oldElements.concat(newElement);
        const newFormValue = Object.assign({},formValue);
        newFormValue.partners = newElements;
        setFormValue(newFormValue);
        return newElement;
    };

    const remove = (id) => {
        const newElements = formValue.partners.filter((element)=> element.id !== id);
        const newFormValue = Object.assign({},formValue);
        newFormValue.partners = newElements;
        setFormValue(newFormValue);

    };

    const update = (id, elementFormValue) => {
        const newElements = formValue.partners.map((element) =>  {
            if(element.id===id){
                return {id: element.id, creationTimeFrontend: element.creationTimeFrontend,...elementFormValue};
            }else{
                return element;
            }
        })
        const newFormValue = Object.assign({},formValue);
        newFormValue.partners = newElements;
        setFormValue(newFormValue);
    }

    const removeIds = (formValue) =>{
        const oldElements = formValue.partners;
        const newElements = oldElements.map((element) => {
            let newElement = Object.assign({}, element);
            if(element.id === element.creationTimeFrontend){
                delete newElement.id;
            }
            return newElement;
        })
        const newFormValue = Object.assign({},formValue);
        newFormValue.partners = newElements;
        return newFormValue;
    }


    const createHandler = () => {
        let newElement = add();
        newElement.type = "new";
        setElement(newElement);
        setExistingPartner(false);
        setCreate(true);
    }
    const createHandlerExistingPartner = () => {
        let newElement = add();
        newElement.type = "old";
        setElement(newElement);
        setExistingPartner(true);
        setCreate(true);
    }

    const back= (id)=>{
        remove(id);
        setCreate(false);
    }

    const save= ()=>{
        setCreate(false);
    }



    const createForm = (!existingPartner) ?  <><PartnerForm item={element} updater={update} save={save} back={()=>back(element.id)} servicesTree={servicesTree}  /></> :  <><ExistingPartnerForm item={element} updater={update} save={save} back={()=>back(element.id)} servicesTree={servicesTree}  /></>

    const actionRender= (rowData) => {
        //console.log("RowData", rowData)

        const editHandler = (rowData)=>{
            if(rowData.type==="old"){
                setExistingPartner(false)
            }else{
                setExistingPartner(true)
            }
            setElement(rowData);
            setCreate(true);
        }

        const removeHandler = () => {
            remove(rowData.id);
        }

        function handleAction() {
            alert(`id:${rowData.id}`);
        }
        return (
            <span>
                    <a onClick={()=> editHandler(rowData)}> Edit </a> |{' '}
                <a onClick={removeHandler}> Remove </a>
                  </span>
        );
    }
    const modelData = [
        {label:"id",dataKey: "id"},
        {label:"Email", dataKey: "email"},
        {label:"actions", render:actionRender}
    ]

    const table = <>
        <Button onClick={createHandlerExistingPartner}>Insert existing partner</Button>
        <Button onClick={createHandler}>Create new partner</Button>
        <GenericTable rowKey="id" modelData={modelData} propData={formValue.partners} />
    </>
    const list = <>
        <List>
            {formValue.partners.map((item, index) => (
                <List.Item key={index} index={index}>
                    {item.service}
                </List.Item>
            ))}
        </List>
        <Button onClick={createHandler}>Crea</Button>
    </>

    return (create) ? createForm : table;
}

function PartnerForm({item, updater, save, back, servicesTree}){

    const [formValue, setFormValue] = useState(item);

    useEffect(()=>{
        updater(item.id, formValue);
    },[formValue])

    return <>
        <Form formValue={formValue}  onChange={setFormValue}>
            <TextField name="email" label="Email"  />
            <TextField name="name" label="Society Name"  />
            <TextField name="website" label="Website"  />

        </Form>
        <Button onClick={save}>Salva</Button><Button onClick={back}>Cancella</Button>
    </>
}

function ExistingPartnerForm({item, updater, save, back, partnersList}){

    const [formValue, setFormValue] = useState(item);

    useEffect(()=>{
        updater(item.id, formValue);
    },[formValue])

    return <>
        <Form formValue={formValue}  onChange={setFormValue}>
            <TextField name="email" label="Partner Esistente"/>

        </Form>
        <Button onClick={save}>Salva</Button><Button onClick={back}>Cancella</Button>
    </>
}



export function PositionCreationDescription({position, services, remover, updater, setEdit}){

    const servicePicture = services.filter((service)=> service.id === position.service)[0].picture;

    const backgroundImage = (position && position.service && position.service.picture) ? position.service.picture  : "https://localhost:8000/uploads/users/7/society-5ed3a86ac6b2d.png";



    return <>
        <Panel header={
            <PositionPanelTitle position={position}  remover={remover} setEdit={setEdit}/>}>
            <Row className="show-grid">
                <Col xs={8}>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <div style={{
                            backgroundImage: `url(${servicePicture})`,
                            backgroundSize: "contain",
                            width: 150,
                            height: 150
                        }}/>
                    </div>
                </Col>
                <Col xs={16}>
                    <div style={{height: 150, maxHeight: 150}}>{position.description}</div>
                </Col>
            </Row>
        </Panel>
    </>;

}

export function PositionPanelTitle({position, remover, updater, setEdit}){



    return <div style={{backgroundColor:bordeaux, height:40, color:"white", display: "flex", justifyContent: "space-evenly",alignItems: "center"}}>
        <div style={{flexGrow:3, paddingLeft:5, fontWeight: "bold", fontSize:20}}>
            {position.service && position.service.label}
        </div>
        <div style={{flexGrow:1}}>
            <Icon icon="calendar-o"/> From {getCalendarFormat(position.startDate)} to {getCalendarFormat(position.endDate)}
        </div>
        <div><IconButton onClick={() => setEdit(position)} icon={<Icon icon="edit2"/>}/><IconButton onClick={() => remover(position.id)} icon={<Icon icon="trash"/>}/></div>
    </div>

}


const InfoBox =  styled.div`
padding: 10px;`
;


const TitleBox =  styled.div`
width: 100%;
height:200px;
background-color: ${bordeaux};
color: white;
font-size: 40px;
font-weight: bolder;
display: flex;
align-items: center;    
justify-content: center;
`
;
