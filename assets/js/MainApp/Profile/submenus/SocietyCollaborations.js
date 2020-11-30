import React, {useEffect, useState} from "react";
import {bordeaux, InfoBox} from "../../../styledComponents/CustomComponents";
import {useHistory} from "react-router-dom";
import {useGetCollaborations} from "../../../Backend/hooks/useCollaborations";
import {useTranslation} from "react-i18next";
import CollaborationDetail from "../DetailCards/CollaborationDetail";
import {useSelector} from "react-redux";

export default function SocietyCollaborations({society}) {

    const {collaborationsNumber} = society;
    const [pagination, setPagination] = useState(1);
    const [limitPerPage, setLimitPerPage] = useState(5);
    const pages = Math.round(collaborationsNumber/limitPerPage);
    const onPaginationSelect = (item) => setPagination(item);

    const {user} = useSelector(state=>state)

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
        {user && <InfoBox>
            {t('societyCollaborationsText')}
        </InfoBox>}
      {/*  <FlexBetweenDiv>
            <Pagination pages={pages} {...paginationSettings} onSelect={onPaginationSelect} />
            <Form><TextField accepter={SelectPicker} data={PaginationLimit} onChange={setLimitPerPage} searchable={false} /></Form>
        </FlexBetweenDiv>*/}
        {panelShow}
    </>


}

