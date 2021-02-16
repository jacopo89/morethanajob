import NewsPanel, {chooseNewsImage} from "../Administration/News/NewsPanel";
import React, {useEffect, useState} from "react";
import {Divider, Pagination} from "rsuite";
import {
    BackTitle,
    FlexBetweenDiv,
    FlexCenterDiv,
    FrontTitle,
    newsPagePicture
} from "../../styledComponents/CustomComponents";
import {useTranslation} from "react-i18next";
import {useList} from "../../tools/list";
import {newsSelectData} from "../../selectData";

export default function AllNews() {

    const {t} = useTranslation();

    const {data, get} = useList("news");
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState();

    useEffect(()=>get(page, {type:filter}), [page, filter]);

    const {list:news} = data;

    const sortedNews =news.sort((a,b)=> {
        return (a.creationTime.timestamp > b.creationTime.timestamp) ? -1 :1
    } )

    const newsPanels = sortedNews.map((item, index) =>
        <div key={index}>
            <NewsPanel key={index} news={item} />
            <Divider />
        </div>);

    return<>
        <img width={"100%"} src={newsPagePicture}/>
        <div style={{padding:20}}>

        <BackTitle >
            <FrontTitle>
                {t('News')}
            </FrontTitle>
            {t('News')}
        </BackTitle>
        <FlexBetweenDiv style={{marginBottom:50}}>
            {newsSelectData.map(({value, label} )=> <FlexCenterDiv style={{flexDirection:"column"}}>
                <img onClick={()=>setFilter(value)} style={{cursor:"pointer"}} width={"100"} src={chooseNewsImage(value)}/>
                <div>{label}</div>
            </FlexCenterDiv>)}
        </FlexBetweenDiv>
        <FlexBetweenDiv>
            <PaginationNews/>
        </FlexBetweenDiv>

        {newsPanels.length!==0 ? newsPanels : <FlexCenterDiv style={{height:"100%"}}> No news found </FlexCenterDiv>}
    </div>
        </>

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