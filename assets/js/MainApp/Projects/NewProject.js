import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useCreateNewProject} from "../../Backend/hooks/useProjects";
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
import {generateServiceTree} from "../Administration/CategoriesManagement";
import {GenericTable} from "../../ReusableComponents/GenericTable";
import {
    bordeaux,
    InverseButton,
    MainButton,
    projectPicture,
    SecondaryButton
} from "../../styledComponents/CustomComponents";
import styled from "styled-components";
import ImageCropper from "../../ReusableComponents/ImageCropper";
import {useHistory} from "react-router-dom";
import * as Routes from "../../routes";
import {getCalendarFormat} from "../../ReusableComponents/TimeManager";
import {useGetUsers} from "../../Backend/hooks/useAdministration";

export default function NewProject({isPortfolio=false}){
    const [formValue, setFormValue] = useState({positions: [], partners:[]});
    const {user} = useSelector(state=>state);
    const [response, createNewProjectHandler] = useCreateNewProject();
    const history = useHistory();
//    useEffect(()=>console.log("FormValue", formValue), [formValue]);

    const onSubmitHandler = () =>{
        const formData = new FormData();
        formData.append('projectCover', formValue.projectCoverImage);
        formData.append('projectLogo', formValue.projectLogoImage);
        formData.append('email', user.email);
        formData.append('isPortfolio', isPortfolio.toString());

        Object.keys(formValue).forEach((key)=>  { formData.append(key,JSON.stringify(formValue[key]));});
        createNewProjectHandler(formData, {successCallback: (data)=> history.push(Routes.project(data)) });
    }

    const [pathUrl, setPathUrl] = useState();
    const [projectLogoUrl, setProjectLogoUrl] = useState(projectPicture);

    const handleFileChange = (file) =>{

        if(file){
            setFormValue({
                ...formValue,
                projectCoverImage:  file,
            })

            const fileReaderInstance = new FileReader();
            fileReaderInstance.readAsDataURL(file);
            fileReaderInstance.onload = ()=> {
                setPathUrl(fileReaderInstance.result);
            }
        }
    };

    const handleProjectLogoChange = (file) =>{

        if(file){
            setFormValue({
                ...formValue,
                projectLogoImage:  file,
            })

            const fileReaderInstance = new FileReader();
            fileReaderInstance.readAsDataURL(file);
            fileReaderInstance.onload = ()=> {
                setProjectLogoUrl(fileReaderInstance.result);
            }
        }
    };





    const listElements = (formValue) => {return (isPortfolio)  ? <PartnerListOrCreate formValue={formValue} setFormValue={setFormValue} /> : <ListOrCreate formValue={formValue} setFormValue={setFormValue} /> };

    const uploadCoverButton = <InverseButton>uploadCoverButton</InverseButton>;
    const uploadLogoButton = <InverseButton>uploadLogoButton</InverseButton>;


    return (
        <>
            <div style={{height:281, width:"100%", border:"1px solid black", marginBottom:10, backgroundColor:"black",position:"relative", backgroundImage:`url(${pathUrl})`,  backgroundSize: "contain"}}>
                <ImageCropper button={uploadCoverButton} propCrop={{
                    unit: 'px', // default, can be 'px' or '%'
                    x: 0,
                    y: 0,
                    height: 281,
                    aspect: 3.592
                }} keyField="projectImage" onChange={handleFileChange}/>
            </div>

            <InfoBox >
                <h5 style={{color:bordeaux}}>Info </h5>
                <Form fluid formValue={formValue} onChange={setFormValue} onSubmit={onSubmitHandler}>
                    <TextField label="Titolo del progetto" name="title" type="text" />
                    <TextField label="Descrizione breve" name="shortDescription" componentClass="textarea" />
                    <TextField label="Descrizione" name="longDescription" componentClass="textarea" />
                    <div style={{display:"flex", justifyContent:"space-around"}}>
                        <TextField style={{width:"100%"}} label="Data di inizio progetto" name="startTime" accepter={DatePicker} format="DD-MM-YYYY" />
                        <TextField style={{width:"100%"}}  label="Data di fine progetto" name="endTime" accepter={DatePicker} format="DD-MM-YYYY" placement="topEnd" /> </div>

                    <div style={{display:"flex", justifyContent:"space-around"}}>
                        <TextField style={{width:"100%"}} label="Paese" name="country" accepter={SelectPicker} data={dataCountry} />
                        <TextField style={{width:"100%"}} label="Lingua" name="language" accepter={SelectPicker} data={dataLanguage} />
                    </div>
                    <TextField label="Links" name="links" componentClass="textarea" />
                    <TextField label="Contatti" name="contacts" componentClass="textarea" />
                    <Grid>
                        <Row>
                            <Col xs={12}>
                                <div style={{display: "flex", justifyContent: "center"}}>
                                    <div style={{
                                        backgroundImage: `url(${projectLogoUrl})`,
                                        backgroundSize: "contain",
                                        width: 150,
                                        height: 150
                                    }}/>
                                </div>
                            </Col>
                            <Col xs={12}>
                                <ImageCropper button={uploadLogoButton} propCrop={{
                                    unit: 'px', // default, can be 'px' or '%'
                                    x: 0,
                                    y: 0,
                                    width: 250,
                                    height: 250
                                }} keyField="projectImage" onChange={handleProjectLogoChange}/>
                            </Col>
                        </Row>
                    </Grid>
                    <h5 style={{color:bordeaux}}>Partner </h5>
                    {isPortfolio && <PartnerListOrCreate formValue={formValue} setFormValue={setFormValue} />}

                    <Button type="submit">Save all</Button>
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
        <h5 style={{color:bordeaux}}>Posizioni </h5>
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
            <h5 style={{color:bordeaux}}>Posizioni </h5>
            <InverseButton onClick={createHandler}>Crea posizione</InverseButton>
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
                <TextField name="service" label="Servizio" accepter={TreePicker} data={servicesTree} style={{width:"100%"}} />
                <TextField name="modality" label="modality" accepter={SelectPicker} data={modalityData} style={{width:"100%"}} searchable={false}/>
            </div>
            <TextField name="shortDescription" label="Short Description" componentClass="textarea"/>
            <TextField name="description" label="Description" componentClass="textarea"/>

            <TextField name="address" label="address"/>
            <div style={{display:"flex", justifyContent:"space-around"}}>
                <TextField name="startDate" accepter={DatePicker} label="Data di inizio" format="DD-MM-YYYY" style={{width:"100%"}}/>
                <TextField name="endDate" accepter={DatePicker} label="Data di fine" format="DD-MM-YYYY" style={{width:"100%"}}/>
            </div>
            <TextField name="mainBeneficiaries" label="Beneficiaries" componentClass="textarea"/>
            <TextField name="rates" label="Rates" componentClass="textarea"/>
        </Form>
        <MainButton onClick={save}>Salva</MainButton><SecondaryButton onClick={()=>back(item.id)}>Cancella</SecondaryButton>
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
        <MainButton onClick={save}>Aggiungi</MainButton><SecondaryButton onClick={back}>Cancella</SecondaryButton>
    </>
}

function ExistingPartnerForm({item, updater, save, back, partnersList}){

    const [formValue, setFormValue] = useState(item);
    const [users, getUsersListHandler] = useGetUsers();

    useEffect(()=>{
        getUsersListHandler(null, {dataManipulationFunction: (data)=>{
                return data.map((user)=> {
                    return {...user, label:user.name, value: user.email}
                });
            } });
        },[])

    useEffect(()=>{
        updater(item.id, formValue);
    },[formValue])

    return <>
        <Form formValue={formValue}  onChange={setFormValue}>
            <TextField name="email" label="Partner Esistente" accepter={SelectPicker} data={users}/>

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
