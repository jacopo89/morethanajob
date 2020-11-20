import React, {useEffect, useState} from "react";
import {
    useGetServicesBySociety
} from "../../../Backend/hooks/useServices";
import {bordeaux, FlexBetweenDiv, InfoBox, PaginationBox} from "../../../styledComponents/CustomComponents";
import {useTranslation} from "react-i18next";
import FurnitureDetail from "../../Furnitures/Details/FurnitureDetail";
import {useSelector} from "react-redux";
import {Form, Pagination, SelectPicker} from "rsuite";
import TextField from "../../../Login/Components/TextField";
import {PaginationLimit} from "../../../selectData";

export default function SocietyFornitures({society}){

    const [societyServices, getServicesHandler] = useGetServicesBySociety();

    useEffect(()=>{

        getServicesHandler(society.email);

    },[]);

    const {user} = useSelector(state=>state);
    const { t, i18n } = useTranslation();

    const {expertiseNumber} = society;
    const [pagination, setPagination] = useState(1);
    const [limitPerPage, setLimitPerPage] = useState(5);
    const pages = Math.ceil(expertiseNumber/limitPerPage);
    const onPaginationSelect = (item) => setPagination(item);



    const isOwner = (user!== undefined && society.email === user.email);

    const panels = societyServices.map((furniture, index) => <FurnitureDetail key={index} furniture={furniture} isOwner={isOwner}/>)
    const panelShow = panels.length > 0 ? panels : <div style={{height:100, margin:"0 auto", textAlign:"center", color:bordeaux}}> No offered services </div>

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

    return <>
        <InfoBox>
            Here, you can specify the kind of expertise you have in relation to one or more of the
            identified macro categories. Provide a description in a tailored way according to the field
            selected in order to support the creation of new synergies and cooperation locally and
            internationally.
        </InfoBox>
        <PaginationBox>
            <Pagination pages={pages} {...paginationSettings} onSelect={onPaginationSelect} />
            <Form><TextField accepter={SelectPicker} data={PaginationLimit} onChange={setLimitPerPage} searchable={false} /></Form>
        </PaginationBox>
        {panelShow}
        </>

}

