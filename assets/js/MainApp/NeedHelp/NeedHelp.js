import NewsPanel from "../Administration/News/NewsPanel";
import React, {useEffect, useState} from "react";
import {Col, Divider, Pagination, Row, TreePicker} from "rsuite";
import {
    BackTitle,
    FlexBetweenDiv,
    FlexCenterDiv,
    FrontTitle,
    newsPagePicture
} from "../../styledComponents/CustomComponents";
import {useTranslation} from "react-i18next";
import {useList} from "../../tools/list";

export default function NeedHelp() {

    const {t} = useTranslation();

    const {data, get} = useList("news");
    const [page, setPage] = useState(1);

    const VIDEO_TUTORIALS  = 5;

    useEffect(()=>get(page, {type:VIDEO_TUTORIALS}), [page]);

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
                    {t('Need Help?')}
                </FrontTitle>
                {t('Need help?')}
            </BackTitle>
            <FlexBetweenDiv>
                <PaginationNews/>
            </FlexBetweenDiv>

            {newsPanels.length!==0 ? newsPanels : <FlexCenterDiv style={{height:"100%"}}> No projects found </FlexCenterDiv>}
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
