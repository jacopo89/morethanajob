import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {
    useCreateNewCollaboration,
    useEditCollaboration,
    useGetCollaboration
} from "../../Backend/hooks/useCollaborations";
import {useGetCollaborationProjects, useGetUserProjects} from "../../Backend/hooks/useProjects";
import {useGetCategories} from "../../Backend/hooks/useCategories";
import {generateCategoriesTree} from "../Administration/CategoriesManagement";
import * as Routes from "../../routes";
import {bordeaux} from "../../styledComponents/CustomComponents";
import {Button, DatePicker, Form, SelectPicker, TreePicker} from "rsuite";
import TextField from "../../Login/Components/TextField";
import {dataCountry, dataLanguage} from "../../selectData";
import styled from "styled-components";
import {useHistory, useParams} from "react-router-dom";

export default function EditCollaboration() {
    const [formValue, setFormValue] = useState({positions: []});
    const {user} = useSelector(state=>state);
    const [getResponse, getCollaborationHandler] = useGetCollaboration();
    const [response, createNewCollaborationHandler] = useEditCollaboration();
    const [projects, getProjectsHandler] = useGetCollaborationProjects();
    const history = useHistory();
    const {id} = useParams();

    useEffect(()=>{
        getCollaborationHandler(id,{successCallback: (data)=> {
                setFormValue(data);
            }});
    },[]);

    useEffect(()=>{
        getProjectsHandler(user.email, {dataManipulationFunction:(data)=>{
                return data.map((project)=> {
                    return {
                        ...project, label:project.title, value:project.id
                    }
                })
            }})
    },[]);

    const [categories, getCategoriesHandler] = useGetCategories();

    useEffect(()=>{
        getCategoriesHandler();
    },[]);

    let categoriesTree = generateCategoriesTree(categories)

    const onSubmitHandler = () =>{
        const formData = new FormData();
        formData.append('email', user.email);

        Object.keys(formValue).forEach((key)=>  { formData.append(key,JSON.stringify(formValue[key]));});
        createNewCollaborationHandler(formData, {successCallback: (data)=> history.push(Routes.collaboration(data)) });
    }

    console.log(projects);
    return (
        <>
            <div style={{border:`2px solid ${bordeaux}`, height:100, width:"100%", textAlign:"center"}}>{formValue.title}</div>
            <InfoBox >
                <h5 style={{color:bordeaux}}>Info </h5>
                <Form fluid formValue={formValue} onChange={setFormValue} onSubmit={onSubmitHandler}>
                    <TextField label="Titolo del progetto" name="title" type="text" />
                    <TextField label="Descrizione breve" name="shortDescription" componentClass="textarea" />
                    <div style={{display:"flex", justifyContent:"space-around"}}>
                        <TextField style={{width:"100%"}} label="Data di inizio progetto" name="startTime" accepter={DatePicker} format="DD-MM-YYYY" />
                        <TextField style={{width:"100%"}}  label="Data di fine progetto" name="endTime" accepter={DatePicker} format="DD-MM-YYYY" placement="topEnd" /> </div>

                    <div style={{display:"flex", justifyContent:"space-around"}}>
                        <TextField style={{width:"100%"}} label="Paese" name="country" accepter={SelectPicker} data={dataCountry} />
                        <TextField style={{width:"100%"}} label="Lingua" name="language" accepter={SelectPicker} data={dataLanguage} />
                    </div>
                    <div style={{display:"flex", justifyContent:"space-around"}}>
                        <TextField style={{width:"100%"}} label="Progetto" name="project" accepter={SelectPicker} data={projects} />
                        <TextField style={{width:"100%"}} label="Categoria" name="category" accepter={TreePicker} data={categoriesTree} />
                    </div>

                    <Button type="submit">Save all</Button>
                </Form>

            </InfoBox>
        </>);


}


const InfoBox =  styled.div`
padding: 10px;`
;
