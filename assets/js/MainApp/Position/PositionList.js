import {useGetServices} from "../../Backend/hooks/useServices";
import React, {useEffect, useState} from "react";
import {bordeaux, InverseButton} from "../../styledComponents/CustomComponents";
import {List} from "rsuite";
import {PositionDescription} from "./PositionDescription";
import PositionForm from "./PositionForm";
import {expertisesTreeByLanguage} from "../../Functions/Expertises";
import styled from "styled-components";

export default function PositionList({formValue, setFormValue, callback, isEdit=false}){

    const [services, getServicesHandler] = useGetServices();

    useEffect(()=>{
        getServicesHandler();
    },[]);

    let servicesTree = expertisesTreeByLanguage()


    const [create, setCreate] = useState(false);
    const [element, setElement] = useState(null);

    const add = () => {
        const creationTime = Date.now();
        const newElement = { id: creationTime, creationTimeFrontend:creationTime, collaboration: formValue.id }
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
        <PositionForm isEdit={isEdit} item={element} updater={update} save={save} back={back} servicesTree={servicesTree} callback={callback}  />
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

    const list = <>
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <TitleBox style={{color:bordeaux}}>{('Positions')} </TitleBox>
        </div>
        <InverseButton onClick={createHandler}>{('Create position')}</InverseButton>
        <List>
            {formValue.positions.map((position, index) => (
                <PositionDescription key={index} isEdit={isEdit} position={position} services={services} remover={remove} updater={update} setEdit={editHandler} callback={callback} />
            ))}
        </List>

    </>

    return (create) ? createForm : list;
}


const TitleBox = styled.h4`
display: flex;
align-items:center;
padding-left: 20px;
color: ${bordeaux};
background-color: whitesmoke;
height:100px;
margin: 10px 0 10px 0;
`;
