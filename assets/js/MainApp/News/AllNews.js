import NewsPanel from "../Administration/News/NewsPanel";
import React, {useEffect, useState} from "react";
import {Carousel,Col, Divider, Pagination, Row, TreePicker} from "rsuite";
import {
    BackTitle, bordeaux,
    FlexBetweenDiv,
    FlexCenterDiv,
    FrontTitle,
    newsPagePicture
} from "../../styledComponents/CustomComponents";
import {useTranslation} from "react-i18next";
import {useList} from "../../tools/list";
import {useLocation} from 'react-router-dom';
import NewsCarousel from "./NewsCarousel";

export default function AllNews() {

    const {t} = useTranslation();
    const params = useLocation();
    const initialFilter = (params.state) ? params.state.filter : undefined

    const {data, get} = useList("news");
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState(initialFilter);

    const newsTree = [
        {
            "label": "Project News",
            "value": 1,
        },
        {
            "label": "Relevant publications",
            "value": 2,
        },
        {
            "label": "Library",
            "value": 3,
            "children": [
                {
                    "label": "Video Tutorials",
                    "value": 5
                },
                {
                    "label": "Communication Tools",
                    "value": 6
                },
                {
                    "label": "Training material",
                    "value": 7
                },
                {
                    "label": "Policy briefs",
                    "value": 8
                }
            ]
        },
        {
            "label": "Funding opportunities",
            "value": 4,

        },
    ]

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
            <NewsCarousel news={sortedNews}/>
            <Row>
                <Col xs={12}>

                </Col>
                <Col xs={12} style={{display:"flex", justifyContent:"end",height:150, "align-items":"center"}}>
                    <TreePicker placeholder={"Type of news"} value={filter} onChange={(value)=>setFilter(value)} label={"News type"} searchable={false} defaultExpandAll data={newsTree} style={{ width: 246 }} />
                </Col>
            </Row>
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
