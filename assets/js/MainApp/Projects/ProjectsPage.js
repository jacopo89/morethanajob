import {
    Button,
    ButtonGroup, Checkbox, CheckboxGroup,
    CheckTreePicker, ControlLabel,
    DatePicker,
    Form, FormControl, FormGroup, Icon,
    List,
    Modal,
    Panel,
    SelectPicker,
    TreePicker, Uploader
} from "rsuite";
import React, {useEffect, useState} from "react";
import TextField from "../../Login/Components/TextField";
import HorizontalStepForm from "../../ReusableComponents/HorizontalStepForm";
import {useGetServices} from "../../Backend/hooks/useServices";
import {generateServiceTree} from "../Administration/CategoriesManagement";
import {GenericTable} from "../../ReusableComponents/GenericTable";
import {useCreateNewProject, useGetLastProjects, useSearchProjects} from "../../Backend/hooks/useProjects";
import styled from "styled-components";
import {useSelector} from "react-redux";
import * as Routes from '../../routes';
import {useHistory} from "react-router-dom";
import {PortfolioDetail} from "../Profile/submenus/SocietyPortfolio";
import {dataCountry, dataLanguage} from "../../selectData";
import {useGetUsers} from "../../Backend/hooks/useAdministration";
import {ServiceDetail} from "../Profile/submenus/SocietyFornitures";


const FilterBox = styled.div`
    border-color: gray;
    border-width: 2px;
    border-style: dashed;
    border-radius: 10px;
    padding: 10px;`
;

export default function ProjectPage(){

    const [projects, getProjectsHandler] = useSearchProjects();
    const [users, getUsersListHandler] = useGetUsers();


    const [formValue, setFormValue] = useState();
    const [isPortFolioCheckboxChecked, setChecked] = useState(false);

    const onSubmitHandler = () => {
        const formData = new FormData();
       // formData.append('isPortfolio', isPortFolioCheckboxChecked);
        Object.keys(formValue).forEach((key)=>  { formData.append(key,JSON.stringify(formValue[key]));});
        getProjectsHandler(formData);
    }
    //const [projects, getProjectsHandler] = useGetLastProjects();
    const history = useHistory();

    useEffect(()=>{
        getProjectsHandler();
        getUsersListHandler(null, {dataManipulationFunction: (data)=>{
            return data.map((user)=> {
                return {...user, label:user.name, value: user.email}
            });
            } });
        return()=>{}
        },[])


    const projectPanels = projects.projects.map((project, index)=> {
        return (<PortfolioDetail project={project} />)
    });
    const servicePanels = projects.services.map((service, index)=>{
        return (<ServiceDetail service={service} />)
    })


    const [services, getServicesHandler] = useGetServices();

    useEffect(()=>{
        getServicesHandler();
    },[]);
    let servicesTree = generateServiceTree(services)



    const finalPanels = [...projectPanels, ...servicePanels];
    return <>

        <Panel header="Filters" bordered>

            <Form fluid formValue={formValue} onChange={setFormValue} onSubmit={onSubmitHandler}>
                <TextField name="freeText" type="text" style={{width:"100%"}}/>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <TextField label="Language" name="language" data={dataLanguage} accepter={SelectPicker} searchable={false} style={{width:"100%"}} />
                    <TextField label="Proposed by" name="user" data={users} accepter={SelectPicker} searchable={true} style={{width:"100%"}} />
                </div>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <TextField label="Country" name="country" data={dataCountry} accepter={SelectPicker} searchable={false} style={{width:"100%"}} />
                    <TextField label="Service" name="service" data={servicesTree} accepter={CheckTreePicker} style={{width:"100%"}} cascade={false} />
                </div>
                <Checkbox name="isPortfolio" onChange={()=>setChecked(!isPortFolioCheckboxChecked)}>
                            Show Portfolio projects
                </Checkbox>

                <Button type="submit">Search</Button>
            </Form>
        </Panel>

        {finalPanels}
        </>
}

function ProjectModal({show, onHide}){

    const [formValue, setFormValue] = useState({positions: []});
    const {user} = useSelector(state=>state);
    const [response, createNewProjectHandler] = useCreateNewProject();
    useEffect(()=>console.log("FormValue", formValue), [formValue]);

    const onSubmitHandler = () =>{
        const formData = new FormData();
        formData.append('projectPicture', formValue.projectPictureImage);
        formData.append('email', user.email);
        Object.keys(formValue).forEach((key)=>  { formData.append(key,JSON.stringify(formValue[key]));});
        createNewProjectHandler(formData);
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

    const components  =(formValue)=> [
        <>  <TextField label="Titolo del progetto" name="title" type="text" />
        <TextField label="Descrizione breve" name="shortDescription" type="textearea" />
        <TextField label="Data di inizio progetto" name="startTime" accepter={DatePicker} />
        <TextField label="Data di fine progetto" name="endTime" accepter={DatePicker} placement="topEnd" />
        </>,
        <>
            <Uploader autoUpload={false} onChange={handleFileChange}>
                <button>
                    <Icon icon='camera-retro' size="lg" />
                </button>
            </Uploader>

        </>,
        <ListOrCreate formValue={formValue} setFormValue={setFormValue} />
    ]

    const labels = ["Info","Immagine", "Posizioni"];




    return  <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
            Aggiungi contenuti alla lezione
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

    console.log("Injected formvalue", formValue);

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
        <p>Nuovo progetto</p>
        <Button onClick={back}>Cancella</Button>
        <Form formValue={formValue}  onChange={setFormValue}>
            <TextField name="service" label="Servizio" accepter={TreePicker} data={servicesTree} />
            <TextField name="position" type="text" label="posizione" />
        </Form>
        <Button>Salva</Button>
    </>
}
