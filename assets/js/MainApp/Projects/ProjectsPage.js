import {
    Button,
    ButtonGroup, Checkbox, CheckboxGroup,
    CheckTreePicker, ControlLabel,
    DatePicker,
    Form, FormControl, FormGroup, Icon,
    List,
    Modal,
    Panel, Radio, RadioGroup,
    SelectPicker,
    TreePicker, Uploader
} from "rsuite";
import React, {useEffect, useState} from "react";
import TextField from "../../Login/Components/TextField";
import HorizontalStepForm from "../../ReusableComponents/HorizontalStepForm";
import {useGetServices} from "../../Backend/hooks/useServices";
import {generateCategoriesTree, generateServiceTree} from "../Administration/CategoriesManagement";
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
import {CollaborationDetail} from "../Profile/submenus/SocietyCollaborations";
import {useGetCategories} from "../../Backend/hooks/useCategories";


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

    const {user} = useSelector(state=>state);
    console.log("user", user);

    const [formValue, setFormValue] = useState();

    const onSubmitHandler = () => {
        const formData = new FormData();
        console.log(formValue);
       // formData.append('isPortfolio', isPortFolioCheckboxChecked);
        Object.keys(formValue).forEach((key)=>  { formData.append(key,JSON.stringify(formValue[key]));});
        getProjectsHandler(formData);
    }
    //const [projects, getProjectsHandler] = useGetLastProjects();
    const history = useHistory();

    useEffect(()=>{
        const formData = new FormData();
        if(user){
            formData.append('language', user.language);
            getProjectsHandler(formData);

        }else{
            getProjectsHandler();
        }
        getUsersListHandler(null, {dataManipulationFunction: (data)=>{
            return data.map((user)=> {
                return {...user, label:user.name, value: user.email}
            });
            } });
        return()=>{}
        },[])


    const projectPanels = projects.projects.map((project, index)=> {
        return (<CollaborationDetail collaboration={project} />)
    });
    const servicePanels = projects.services.map((service, index)=>{
        return (<ServiceDetail service={service} />)
    })


    const [services, getServicesHandler] = useGetServices();
    const [categories, getCategoriesHandler] = useGetCategories();

    useEffect(()=>{
        getServicesHandler();
        getCategoriesHandler();
    },[]);
    let servicesTree = generateServiceTree(services)
    let categoriesTree = generateCategoriesTree(categories)



    const finalPanels = [...projectPanels, ...servicePanels];
    return <>

        <Panel header="Filters" bordered>

            <Form fluid formValue={formValue} onChange={setFormValue} onSubmit={onSubmitHandler}>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <TextField label="Proposed by" name="user" data={users} accepter={SelectPicker} searchable={true} style={{width:"100%"}} />
                </div>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <TextField label="Deadline" name="to" accepter={DatePicker}  style={{width:"100%"}} />
                </div>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <TextField label="Country" name="country" data={dataCountry} accepter={SelectPicker} searchable={false} style={{width:"100%"}} />
                    <TextField label="Category" name="category" data={categoriesTree} accepter={CheckTreePicker} style={{width:"100%"}} cascade={false} />
                </div>
                <FormGroup>
                    <FormControl
                        name="radio"
                        accepter={RadioGroup}
                    >
                        <Radio defaultChecked value="all">All</Radio>
                        <Radio value="services">Services and opportunities</Radio>
                        <Radio value="collaborations">Collaborations</Radio>
                    </FormControl>
                </FormGroup>

                <Button type="submit">Search</Button>
            </Form>
        </Panel>

        {finalPanels}
        </>
}



