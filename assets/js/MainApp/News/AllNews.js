import {useGetAllNews} from "../../Backend/hooks/useNews";
import NewsPanel from "../Administration/News/NewsPanel";
import React, {useEffect} from "react";
import {Divider, List} from "rsuite";
import {bordeaux} from "../../styledComponents/CustomComponents";

export default function AllNews() {

    const [news, getNewsHandler] = useGetAllNews();

    useEffect(()=>{getNewsHandler()}, []);


    const projectNews = news.filter(item => item.type===1).map((item, index) =>
        <>
            <NewsPanel key={index} news={item} />
            <Divider />
        </>);

    const relevantPubs = news.filter(item => item.type===2).map((item, index) =>
        <>
            <NewsPanel key={index} news={item} />
            <Divider />
        </>);
    const disseminationProj = news.filter(item => item.type===3).map((item, index) =>
        <>
            <NewsPanel key={index} news={item} />
            <Divider />
        </>);
    const funding = news.filter(item => item.type===4).map((item, index) =>
        <>
            <NewsPanel key={index} news={item} />
            <Divider />
        </>);
    const newsPanels = news.map((item, index) =>
        <>
            <NewsPanel key={index} news={item} />
            <Divider />
        </>);

    return <div style={{padding:20}}>
        <h3 style={{color:bordeaux}}>Project News</h3>
        <List size='lg'>{projectNews}</List>
        <h3 style={{color:bordeaux}}>Relevant publications</h3>
        <List size='lg'>{relevantPubs}</List>
        <h3 style={{color:bordeaux}}>Project dissemination material and resources</h3>
        <List size='lg'>{disseminationProj}</List>
        <h3 style={{color:bordeaux}}>Funding opportunities</h3>
        <List size='lg'>{funding}</List>
    </div>

}