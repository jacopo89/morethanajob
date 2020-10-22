import {useGetAllNews} from "../../Backend/hooks/useNews";
import NewsPanel from "../Administration/News/NewsPanel";
import React, {useEffect} from "react";
import {Divider, List} from "rsuite";
import {bordeaux} from "../../styledComponents/CustomComponents";

export default function AllNews() {

    const [news, getNewsHandler] = useGetAllNews();

    useEffect(()=>{getNewsHandler()}, []);

    const newsPanels = news.map((item, index) =>
        <>
            <NewsPanel key={index} news={item} />
            <Divider />
        </>);

    return <div style={{padding:20}}>
        <h3 style={{color:bordeaux}}>News</h3>
        <List size='lg'>{newsPanels}</List>
    </div>

}