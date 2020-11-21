import {useGetAllNews} from "../../Backend/hooks/useNews";
import NewsPanel from "../Administration/News/NewsPanel";
import React, {useEffect} from "react";
import {Divider, List, Panel} from "rsuite";
import {BackTitle, bordeaux, FrontTitle} from "../../styledComponents/CustomComponents";
import {useTranslation} from "react-i18next";

export default function AllNews() {

    const [news, getNewsHandler] = useGetAllNews();
    const {t} = useTranslation();

    useEffect(()=>{getNewsHandler()}, []);


    const projectNews = news.filter(item => item.type===1).map((item, index) =>
        <div key={index}>
            <NewsPanel key={index} news={item} />
            <Divider />
        </div>);

    const relevantPubs = news.filter(item => item.type===2).map((item, index) =>
        <div key={index}>
            <NewsPanel key={index} news={item} />
            <Divider />
        </div>);
    const disseminationProj = news.filter(item => item.type===3).map((item, index) =>
        <div key={index}>
            <NewsPanel key={index} news={item} />
            <Divider />
        </div>);
    const funding = news.filter(item => item.type===4).map((item, index) =>
        <div key={index}>
            <NewsPanel key={index} news={item} />
            <Divider />
        </div>);
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
        <Panel header="Project News" collapsible bordered  >
            <List size='lg'>{projectNews}</List>
        </Panel>
        <Panel header="Relevant publications" collapsible bordered>
            <List size='lg'>{relevantPubs}</List>
        </Panel>
        <Panel header="Project dissemination material and resources" collapsible bordered>
            <List size='lg'>{disseminationProj}</List>
        </Panel>
        <Panel header="Funding opportunities" collapsible bordered>
            <List size='lg'>{funding}</List>
        </Panel>
    </div>

}