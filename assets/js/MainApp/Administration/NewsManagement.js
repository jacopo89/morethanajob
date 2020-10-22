import React, {useEffect, useState} from "react";
import {Button, Col, Grid, Icon, List, Row, Uploader} from "rsuite";
import {useCreateNews, useDeleteNews, useEditNews, useGetAllNews} from "../../Backend/hooks/useNews";
import NewsDetail from "./News/NewsDetail";
import {bordeaux, FlexAroundDiv, FlexBetweenDiv, IconButtonTransparent} from "../../styledComponents/CustomComponents";

export default function NewsManagement() {


    const newsModel = {id:null, title:"", text:"", links:[]};

    const [news, getNewsHandler] = useGetAllNews();
    const [addResponse, addNewsHandler] = useCreateNews();
    const [editResponse, editNewsHandler] = useEditNews();
    const [deleteResponse, deleteNewsHandler] = useDeleteNews();

    const [selectedNews, setSelectedNews] = useState(newsModel);

    const callbacks = {successCallback: ()=>{
        getNewsHandler();
        setSelectedNews(newsModel);
        }};

    const addNews = ()=> setSelectedNews(newsModel);

    const saveNews = () => {

        const formData =  new FormData();
        formData.append('title', selectedNews.title);
        formData.append('text', selectedNews.text);
        formData.append('links', JSON.stringify(selectedNews.links));


        if(selectedNews.id!==null){
            formData.append('id', selectedNews.id);
            editNewsHandler(formData, callbacks);
        }else{
            addNewsHandler(formData, callbacks);
        }
    };

    const deleteNews = () => {
        deleteNewsHandler(selectedNews.id,callbacks);
    }




    useEffect(()=>{getNewsHandler()},[])

    return <Grid fluid>
        <Row style={{backgroundColor:bordeaux}}>
            <Col xs={24}>
                <FlexBetweenDiv style={{margin:10}}>
                    <Button onClick={addNews}>Add</Button>
                    <div>
                        <Button onClick={saveNews}>Save</Button>
                        <Button onClick={deleteNews}>Delete</Button>
                    </div>

                </FlexBetweenDiv>
            </Col>
        </Row>
        <Row style={{marginTop:5}}>
            <Col xs={8}>
                <List>
                    {news.map((item,index)=>
                        <List.Item  key={index} index={index}>
                            {item.title} <IconButtonTransparent onClick={()=>setSelectedNews(item)} icon={<Icon icon="edit" /> }/>
                        </List.Item>
                    )}
                </List>
            </Col>
            <Col xs={16}>
                <NewsDetail news={selectedNews} updater={setSelectedNews}/>
            </Col>
        </Row>

    </Grid>
}


