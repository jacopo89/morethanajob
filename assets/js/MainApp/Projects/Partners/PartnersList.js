import React, {useState} from 'react';
import {Button, ButtonGroup, FlexboxGrid, Icon, List} from "rsuite";
import {GenericTable} from "../../../ReusableComponents/GenericTable";
import PartnerForm from "./PartnerForm";
import ExistingPartnerForm from "./ExistingPartnerForm";
import {InverseButton, SecondaryButton} from "../../../styledComponents/CustomComponents";
import {expertisesTreeByLanguage} from "../../../Functions/Expertises";

export default function PartnersList({formValue, setFormValue}){

    let servicesTree = expertisesTreeByLanguage()

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

  /*  const actionRender= (rowData) => {
        //console.log("RowData", rowData)

        const editHandler = (rowData)=>{
            if(rowData.type==="old"){
                setExistingPartner(true)
            }else{
                setExistingPartner(false)
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
        {label:"Organisation name", dataKey: "name"},
        {label:"Website", dataKey: "website"},
        {label:"actions", render:actionRender}
    ]*/

    const editHandler = (rowData)=>{
        if(rowData.type==="old"){
            setExistingPartner(true)
        }else{
            setExistingPartner(false)
        }
        setElement(rowData);
        setCreate(true);
    }

    const removeHandler = (element) => {
        remove(element.id);
    }


    const table = <>

        {/*<GenericTable rowKey="id" modelData={modelData} propData={formValue.partners} />*/}
    </>
    const list = <>
        <ButtonGroup style={{marginTop:10, marginBottom:10}}>
            <SecondaryButton onClick={createHandlerExistingPartner}>Insert existing partner</SecondaryButton>
            <SecondaryButton onClick={createHandler}>Create new partner</SecondaryButton>
        </ButtonGroup>
        <PartnerList data={formValue.partners} deleteHandler={removeHandler} editHandler={editHandler} >
        </PartnerList>
        {/*<Button onClick={createHandler}>Crea</Button>*/}
    </>

    return (create) ? createForm : list;
}


function PartnerList({data, editHandler, deleteHandler}){
    const styleCenter = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60px'
    };

    const titleStyle = {
        paddingBottom: 5,
        whiteSpace: 'nowrap',
        fontWeight: 500
    };

    const dataStyle = {
        fontSize: '1.2em',
        fontWeight: 500
    };




    return <List>
            {data.map((item,index)=>
                <List.Item key={item['title']} index={index}>
                    <FlexboxGrid>

                        <FlexboxGrid.Item colspan={6} style={{
                            ...styleCenter,
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            overflow: 'hidden'
                        }}>
                            <div style={titleStyle}>{item['title']}</div>
                            <div>
                                <div><Icon icon='user-circle-o' />{' ' + item['email']}</div>
                            </div>
                        </FlexboxGrid.Item>
                        {/*peak data*/}
                        <FlexboxGrid.Item colspan={6} style={styleCenter}>
                            <div style={{ textAlign: 'right' }}>
                                <div style={dataStyle}>{item['name']}</div>
                            </div>
                        </FlexboxGrid.Item>
                        {/*uv data*/}
                        <FlexboxGrid.Item colspan={6} style={styleCenter}>
                            <div style={{ textAlign: 'right' }}>
                                <div style={dataStyle}>{item['website']}</div>
                            </div>
                        </FlexboxGrid.Item>
                        {/*uv data*/}
                        <FlexboxGrid.Item colspan={4} style={{
                            ...styleCenter
                        }}>
                            <InverseButton onClick={()=>editHandler(item)}>Edit</InverseButton>
                            <span style={{ padding: 5 }}>|</span>
                            <InverseButton onClick={()=>deleteHandler(item)}>Delete</InverseButton>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </List.Item>
            )}
        </List>
    ;

}
