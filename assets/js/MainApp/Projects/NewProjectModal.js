import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useCreateNewProject} from "../../Backend/hooks/useProjects";
import TextField from "../../Login/Components/TextField";
import {Button, ButtonGroup, DatePicker, Form, Icon, List, Modal, SelectPicker, TreePicker, Uploader} from "rsuite";
import HorizontalStepForm from "../../ReusableComponents/HorizontalStepForm";
import {useGetServices} from "../../Backend/hooks/useServices";
import {generateTree} from "../Administration/CategoriesManagement";
import {GenericTable} from "../../ReusableComponents/GenericTable";
import {dataCountry, dataLanguage} from "../../selectData";

export default function NewProjectModal({show, onHide, successCallback = ()=>{},  isPortfolio=false}){

    const [formValue, setFormValue] = useState({positions: [], partners:[]});
    const {user} = useSelector(state=>state);
    const [response, createNewProjectHandler] = useCreateNewProject();
    useEffect(()=>console.log("FormValue", formValue), [formValue]);

    const onSubmitHandler = () =>{
        const formData = new FormData();
        formData.append('projectPicture', formValue.projectPictureImage);
        formData.append('email', user.email);
        formData.append('isPortfolio', isPortfolio.toString());
        Object.keys(formValue).forEach((key)=>  { formData.append(key,JSON.stringify(formValue[key]));});
        createNewProjectHandler(formData, {successCallback: successCallback });
    }

    const handleFileChange = (file) =>{
        if(file){
            console.log("File immagine progetto", file);
            setFormValue({
                ...formValue,
                projectPictureImage:  file[0].blobFile,
            })
        }
    };

    const listElements = (formValue) => {return (isPortfolio)  ? <PartnerListOrCreate formValue={formValue} setFormValue={setFormValue} /> : <ListOrCreate formValue={formValue} setFormValue={setFormValue} /> };


    const components  =(formValue)=> [
        <>  <TextField label="Titolo del progetto" name="title" type="text" />
            <TextField label="Descrizione breve" name="shortDescription" componentClass="textarea" />
            <div style={{display:"flex", justifyContent:"space-around"}}>
                <TextField style={{width:"100%"}} label="Data di inizio progetto" name="startTime" accepter={DatePicker} format="DD-MM-YYYY" />
                <TextField style={{width:"100%"}}  label="Data di fine progetto" name="endTime" accepter={DatePicker} format="DD-MM-YYYY" placement="topEnd" /> </div>

                <TextField style={{width:"100%"}} label="Paese" name="country" accepter={SelectPicker} data={dataCountry} />
                <TextField style={{width:"100%"}} label="Lingua" name="language" accepter={SelectPicker} data={dataLanguage} />


        </>,
        <>
            <Uploader autoUpload={false} onChange={handleFileChange}>
                <button>
                    <Icon icon='camera-retro' size="lg" />
                </button>
            </Uploader>

        </>,
        listElements(formValue)
    ]

    const labels = (isPortfolio) ? ["Info","Immagine", "Partner"] : ["Info","Immagine", "Posizioni"];




    return  <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
            Project
        </Modal.Header>
        <Form fluid formValue={formValue} onChange={setFormValue} onSubmit={onSubmitHandler}  >
            <Modal.Body style={{height:500}}>
                <HorizontalStepForm labels={labels} components={components(formValue)} />
            </Modal.Body>

            <Modal.Footer>
                <ButtonGroup>
                    <Button type="submit" style={{float:'right'}}>
                        Salva
                    </Button>
                </ButtonGroup>
            </Modal.Footer>
        </Form>
    </Modal>

}

function ListOrCreate({formValue, setFormValue}){

    const [services, getServicesHandler] = useGetServices();
    useEffect(()=>{
        getServicesHandler();
    },[]);

    let servicesTree = generateTree(services)


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

    const back= ()=>setCreate(false);

    const createForm = <>
        <IncludableForm item={element} updater={update} back={back} servicesTree={servicesTree}  />
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

    const table = <>
        <Button onClick={createHandler}>Crea</Button>
        <GenericTable rowKey="id" modelData={modelData} propData={formValue.positions} />
    </>
    const list = <>
        <List>
            {formValue.positions.map((item, index) => (
                <List.Item key={index} index={index}>
                    {item.service}
                </List.Item>
            ))}
        </List>
        <Button onClick={createHandler}>Crea</Button>
    </>

    return (create) ? createForm : table;
}

function IncludableForm({item, updater, remover, back, servicesTree}){

    const [formValue, setFormValue] = useState(item);

    useEffect(()=>{
        updater(item.id, formValue);
    },[formValue])

    return <>
        <Button onClick={back}>Cancella</Button>
        <Form formValue={formValue}  onChange={setFormValue}>
            <TextField name="position" type="text" label="descrizione" />
            <TextField name="service" label="Servizio" accepter={TreePicker} data={servicesTree} style={{width:"100%"}} />
            <TextField name="shortDescription" label="Short Description" componentClass="textarea"/>
            <TextField name="description" label="Description" componentClass="textarea"/>
            <TextField name="modality" label="modality" accepter={SelectPicker} data={modalityData} searchable={false}/>
            <TextField name="address" label="address"/>
            <div style={{display:"flex", justifyContent:"space-around"}}>
                <TextField name="startDate" accepter={DatePicker} label="Data di inizio" format="DD-MM-YYYY"/>
                <TextField name="endDate" accepter={DatePicker} label="Data di fine" format="DD-MM-YYYY"/>
            </div>
            <TextField name="mainBeneficiaries" label="Beneficiaries"/>
            <TextField name="rates" label="Rates"/>
        </Form>
        <Button>Salva</Button>
    </>
}


function PartnerListOrCreate({formValue, setFormValue}){

    const [services, getServicesHandler] = useGetServices();
    useEffect(()=>{
        getServicesHandler();
    },[]);

    let servicesTree = generateTree(services)

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
