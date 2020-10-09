import {
    Button,
    CheckTreePicker,
    Col,
    DatePicker,
    Form,
    FormControl,
    FormGroup,
    Grid,
    Radio,
    RadioGroup,
    Row,
    SelectPicker
} from "rsuite";
import React, {useEffect, useState} from "react";
import TextField from "../../Login/Components/TextField";
import {useGetServices} from "../../Backend/hooks/useServices";
import {useSearchProjects} from "../../Backend/hooks/useProjects";
import {useSelector} from "react-redux";
import {useHistory, useLocation} from "react-router-dom";
import {dataCountry} from "../../selectData";
import {useGetUsers} from "../../Backend/hooks/useAdministration";
import {useTranslation} from "react-i18next";
import CollaborationDetail from "../Profile/DetailCards/CollaborationDetail";
import {FormBox} from "../../styledComponents/CustomComponents";
import {categoriesTreeByLanguage} from "../../Functions/Categories";


export default function ServiceSearch(){

    const [projects, getProjectsHandler] = useSearchProjects();
    const [users, getUsersListHandler] = useGetUsers();
    const { t, i18n } = useTranslation();

    const {user,language} = useSelector(state=>state);

    const [formValue, setFormValue] = useState({category:[]});

    const onSubmitHandler = () => {
        const formData = new FormData();

       // formData.append('isPortfolio', isPortFolioCheckboxChecked);
        Object.keys(formValue).forEach((key)=>  { formData.append(key,JSON.stringify(formValue[key]));});
        formData.append('language', language);
        getProjectsHandler(formData);
    }
    const history = useHistory();
    const location = useLocation();

    useEffect(()=>{
        if(location.state && location.state.category){
            console.log("Trying to push ",location.state.category);
            const categoriesArray = [location.state.category];
            setFormValue( {...formValue,  category: categoriesArray});
        }
    },[])

    useEffect(()=>{
        const formData = new FormData();
        console.log("Location", location);
        if(location.state && location.state.category){
            formData.append('language', language);
            formData.append('category', [].push(location.state.category));
        }
        if(user){
            formData.append('language', language);
            getProjectsHandler(formData);

        }else{
            formData.append('language', language);
            getProjectsHandler(formData);
        }
        getUsersListHandler(null, {dataManipulationFunction: (data)=>{
            return data.map((user)=> {
                return {...user, label:user.name, value: user.email}
            });
            } });
        return()=>{}
        },[language])


    const projectPanels = projects.projects.map((project, index)=> {
        return (<CollaborationDetail collaboration={project} />)
    });
    const servicePanels = projects.services.map((service, index)=>{
        return (<ServiceDetail service={service} />)
    })


    const [services, getServicesHandler] = useGetServices();

    useEffect(()=>{
        getServicesHandler();
    },[]);

    let categoriesTree = categoriesTreeByLanguage();



    const finalPanels = [...projectPanels, ...servicePanels];
    return <>
        <FormBox>
            <Form fluid formValue={formValue} onChange={setFormValue} onSubmit={onSubmitHandler}>
                <Grid fluid>
                    <Row>
                        <TextField label={t('Proposed by')} name="user" data={users} accepter={SelectPicker} searchable={true} style={{width:"100%"}} />
                    </Row>
                    <Row>
                        <TextField label={t('Deadline')} name="to" accepter={DatePicker}  style={{width:"100%"}} />
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <TextField label={t('Country')} name="country" data={dataCountry} accepter={SelectPicker} searchable={false} style={{width:"100%"}} />
                        </Col>
                        <Col xs={12}>
                            <TextField label={t('Category')} name="category" data={categoriesTree} accepter={CheckTreePicker} style={{width:"100%"}}  />
                        </Col>


                    </Row>
                </Grid>

                <div style={{display:"flex", justifyContent:"space-between"}}>

                </div>
                <div style={{display:"flex", justifyContent:"space-between"}}>

                </div>
                <FormGroup>
                    <FormControl
                        name="radio"
                        accepter={RadioGroup}
                    >
                        <Radio defaultChecked value="all">{t('All')}</Radio>
                        <Radio value="services">{t('Services and opportunities')}</Radio>
                        <Radio value="collaborations">{t('Collaborations')}</Radio>
                    </FormControl>
                </FormGroup>

                <Button type="submit">{t('Search')}</Button>
            </Form>

        {finalPanels.length===0 ?<div>No results found</div> : finalPanels }
        </FormBox>
        </>
}



