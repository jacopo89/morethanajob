import {useGetAllNews} from "../../Backend/hooks/useNews";
import NewsPanel from "../Administration/News/NewsPanel";
import React, {useState, useEffect} from "react";
import {Pagination, Divider, List, Panel, SelectPicker} from "rsuite";
import {BackTitle, bordeaux, FlexAroundDiv, FlexBetweenDiv, FrontTitle} from "../../styledComponents/CustomComponents";
import {useTranslation} from "react-i18next";
import {useList} from "../../tools/list";
import {newsSelectData} from "../../selectData";

export default function AllNews() {

    const {t} = useTranslation();

    const {data, get} = useList("news");
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState("");

    useEffect(()=>get(page, {type:filter}), [page, filter]);

    const {list:news} = data;

    const newsPanels = news.map((item, index) =>
        <div key={index}>
            <NewsPanel key={index} news={item} />
            <Divider />
        </div>);

    return <div style={{padding:20}}>

        <BackTitle >
            <FrontTitle>
                {t('News')}
            </FrontTitle>
            {t('News')}
        </BackTitle>
        <FlexBetweenDiv>
            <PaginationNews/><SelectPicker onChange={setFilter} searchable={false} data={newsSelectData} />
        </FlexBetweenDiv>

        {newsPanels}
    </div>

}


function PaginationNews({activePage,setActivePage, totalItems}){
    const [state, setState] = useState({
        prev: true,
        next: true,
        first: true,
        last: true,
        ellipsis: true,
        boundaryLinks: true,
        activePage: activePage
    });

    const pageNumber = Math.ceil(totalItems/30);


    const handleSelect = (eventKey) => {
            setState({...state, activePage: eventKey });
            setActivePage(eventKey);
        }

    return (pageNumber===1) ?  <Pagination
                {...state}
                pages={pageNumber}
                maxButtons={5}
                activePage={state.activePage}
                onSelect={handleSelect}
            /> : <div></div>

}