import React, {useEffect, useState} from "react";
import {
    useGetServicesBySociety
} from "../../../Backend/hooks/useServices";
import {bordeaux} from "../../../styledComponents/CustomComponents";
import {useTranslation} from "react-i18next";
import FurnitureDetail from "../../Furnitures/Details/FurnitureDetail";

export default function SocietyFornitures({society}){

    const [societyServices, getServicesHandler] = useGetServicesBySociety();

    useEffect(()=>{

        getServicesHandler(society.email);

    },[]);

    const [show, setShow] = useState(false);
    const openModal = ()=>setShow(true);
    const closeModal = ()=>setShow(false);
    const { t, i18n } = useTranslation();

    const successCallback = () => {
        closeModal();
        getServicesHandler(society.email);
    }

    const panels = societyServices.map((furniture, index) => <FurnitureDetail key={index} furniture={furniture}/>)
    const panelShow = panels.length > 0 ? panels : <div style={{height:100, margin:"0 auto", textAlign:"center", color:bordeaux}}> No offered services </div>

    return <>
        {panelShow}
        </>

}



/*export function NewServiceModal({show, onHide, successCallback}){

    const [formValue, setFormValue] = useState();
    const {user} = useSelector(state=>state);
    const [createOfferedService, createOfferedServiceHandler] = useCreateOfferedService();
    const { t, i18n } = useTranslation();


    const onSubmitHandler = () => {
        const formData = new FormData();
        formData.append('email', user.email);
        Object.keys(formValue).forEach((key)=>  { formData.append(key,JSON.stringify(formValue[key]));});
        createOfferedServiceHandler(formData, {successCallback:successCallback});
    };

    const closeModal = () => {
        setFormValue({});
        onHide();
    }

    const [services, getServicesHandler] = useGetServices();

    useEffect(()=>{
        getServicesHandler();
    },[]);

    let servicesTree = generateServiceTree(services);


    const { StringType, ArrayType } = Schema.Types;
    const model = Schema.Model({
        service: ArrayType()
        // .addRule((value, data) => {return asyncCheckUsername(value);}, 'Duplicate username')
            .isRequired('This field is required'),
    })

    return (<Modal show={show} onHide={closeModal} centered>
        <Modal.Header closeButton>
            Expertise
        </Modal.Header>
        <Form fluid formValue={formValue} onChange={setFormValue} onSubmit={onSubmitHandler}  >
            <Modal.Body style={{height:500, padding:10}}>
                <TextField name="service" label={t('Field of expertise')} accepter={TreePicker} data={servicesTree} style={{width:"100%"}} />
                <TextField name="description" label={t('description')} componentClass="textarea"/>
                <TextField name="country" label={t('Country')} accepter={SelectPicker} data={dataCountry}/>
            </Modal.Body>

            <Modal.Footer>
                <ButtonGroup>
                    <Button type="submit" style={{float:'right', backgroundColor: bordeaux, color:"white", margin:5}}>
                        {t('Save')}
                    </Button>
                </ButtonGroup>
            </Modal.Footer>
        </Form>
    </Modal>)

}*/
