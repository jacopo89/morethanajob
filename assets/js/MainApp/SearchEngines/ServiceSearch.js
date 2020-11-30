import {
    Button,
    CheckTreePicker,
    Col,
    DatePicker,
    Form,
    FormControl,
    FormGroup,
    Grid, Pagination, Panel,
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
import {dataCountry, PaginationLimit} from "../../selectData";
import {useGetUsers} from "../../Backend/hooks/useAdministration";
import {useTranslation} from "react-i18next";
import CollaborationDetail from "../Profile/DetailCards/CollaborationDetail";
import {
    BackTitle,
    FlexAroundDiv,
    FlexBetweenDiv, FlexCenterDiv,
    FormBox,
    FrontTitle, MainButton,
    Title
} from "../../styledComponents/CustomComponents";
import {categoriesTreeByLanguage} from "../../Functions/Categories";


export default function ServiceSearch(){

    const [projects, getProjectsHandler] = useSearchProjects();
    const [users, getUsersListHandler] = useGetUsers();
    const { t, i18n } = useTranslation();

    const {servicesNumber} = projects;
    const [pagination, setPagination] = useState(1);
    const [limitPerPage, setLimitPerPage] = useState(5);
    const pages = Math.ceil(servicesNumber/limitPerPage);

    const paginationSettings =
        {
            prev: true,
            next: true,
            first: true,
            last: true,
            ellipsis: true,
            boundaryLinks: true,
            activePage:pagination
        };

    const onPaginationSelect = (item) => setPagination(item);



    const {user,language} = useSelector(state=>state);

    const [formValue, setFormValue] = useState({category:[]});

    const onSubmitHandler = () => {
        const formData = new FormData();

       // formData.append('isPortfolio', isPortFolioCheckboxChecked);
        Object.keys(formValue).forEach((key)=>  { formData.append(key,JSON.stringify(formValue[key]));});
        formData.append('language', language);
        formData.append('page', pagination);
        formData.append('limit', limitPerPage);
        getProjectsHandler(formData);
    }
    const history = useHistory();
    const location = useLocation();

    useEffect(()=>{
        if(location.state && location.state.category){
            //console.log("Trying to push ",location.state.category);
            const categoriesArray = [location.state.category];
            setFormValue( {...formValue,  category: categoriesArray});
        }
    },[])

    useEffect(()=>{
        const formData = new FormData();
        formData.append('page', pagination);
        formData.append('limit', limitPerPage);
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
            <FlexAroundDiv>
                <BackTitle >
                    <FrontTitle>
                        {t('Search projects')}
                    </FrontTitle>
                    {t('Search projects')}
                </BackTitle>
            </FlexAroundDiv>
            <p>
                In this section, you can find the services and opportunities that the organisations are
                delivering to support the social and employment inclusion of vulnerable groups as well as the
                collaboration opportunities to renovate or develop new ones.
            </p>
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
                    <Row>
                        <Col xs={24}>
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
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24}>
                            <FlexCenterDiv>
                                <MainButton type="submit">{t('Search')}</MainButton>
                            </FlexCenterDiv>
                        </Col>
                    </Row>
                </Grid>
            </Form>
        <FlexBetweenDiv>
            <Pagination pages={pages} {...paginationSettings} onSelect={onPaginationSelect} />
            <Form><TextField accepter={SelectPicker} data={PaginationLimit} value={limitPerPage} onChange={setLimitPerPage} searchable={false} cleanable={false} /></Form>
        </FlexBetweenDiv>
        {finalPanels.length===0 ?<div style={{display:"flex", justifyContent:"center"}}>{t('No results found')}</div> : finalPanels }
        </FormBox>
        </>
}



