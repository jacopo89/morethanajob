import React, {useEffect, useState} from "react";
import {Button, Col, Form, Icon, IconButton, Pagination, Panel, PanelGroup, Row, SelectPicker} from "rsuite";
import NewProjectModal from "../../Projects/NewProjectModal";
import * as Routes from "../../../routes";
import {bordeaux, FlexBetweenDiv, InfoBox} from "../../../styledComponents/CustomComponents";
import {getCalendarFormat} from "../../../ReusableComponents/TimeManager";
import {useHistory} from "react-router-dom";
import {PortfolioPanelTitle} from "./SocietyPortfolio";
import {useGetCollaborations, useGetPaginatedCollaborations} from "../../../Backend/hooks/useCollaborations";
import {useTranslation} from "react-i18next";
import CollaborationDetail from "../DetailCards/CollaborationDetail";
import TextField from "../../../Login/Components/TextField";
import {PaginationLimit} from "../../../selectData";

export default function SocietyCollaborations({society}) {

    const {collaborationsNumber} = society;
    const [pagination, setPagination] = useState(1);
    const [limitPerPage, setLimitPerPage] = useState(5);
    const pages = Math.round(collaborationsNumber/limitPerPage);
    const onPaginationSelect = (item) => setPagination(item);


    const [collaborations, getCollaborationsHandler] = useGetCollaborations();

    const history = useHistory();
    const { t, i18n } = useTranslation();

    useEffect(()=>{
        getCollaborationsHandler([society.email, pagination, limitPerPage]);
    },[pagination, limitPerPage]);

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

    const panels = collaborations.map((collaboration, item)=> <CollaborationDetail key={item} collaboration={collaboration}/>);
    const panelShow = panels.length > 0 ? panels : <div style={{height:100, margin:"0 auto", textAlign:"center", color:bordeaux}}> No collaborations </div>
    return  <>
        <InfoBox>
            This section is thought to support the sharing of means and resources among organisations
            for the development or renovation of services supporting the social and employment
            inclusion of vulnerable groups. You can describe here what you are looking for to activate
            new services or delivering existing ones in your organisation.
        </InfoBox>
      {/*  <FlexBetweenDiv>
            <Pagination pages={pages} {...paginationSettings} onSelect={onPaginationSelect} />
            <Form><TextField accepter={SelectPicker} data={PaginationLimit} onChange={setLimitPerPage} searchable={false} /></Form>
        </FlexBetweenDiv>*/}
        {panelShow}
    </>


}

