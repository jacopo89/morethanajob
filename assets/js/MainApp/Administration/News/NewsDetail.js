import {Button, Col, Form, Row, SelectPicker, Uploader} from "rsuite";
import React, {useEffect, useState} from "react";
import TextField from "../../../Login/Components/TextField";
import DynamicList from "../../../ReusableComponents/DynamicList";
import {useCreateNews, useEditNews, useNewsLoadFile} from "../../../Backend/hooks/useNews";
import {newsSelectData} from "../../../selectData";

export default function NewsDetail({news, updater}) {

    const [formValue, setFormValue] = useState(news);
    const [fileList, setFileList] = useState([]);
    const [fileLoadResponse, loadFileHandler] = useNewsLoadFile();

    const handleFileChange = (file) =>{
        setFormValue({
            ...formValue,
            file: file[0].blobFile,
            title: file[0].name
        })
        setFileList([...fileList, file[0].blobFile]);
    };
    const submitFiles = () => {
        const formData = new FormData();
        formData.append('id', formValue.id);
        formData.append('file', formValue.file);
        formData.append('title', formValue.title);
        formData.append('type', formValue.type);

        loadFileHandler(formData, {successCallback: ()=>{
                setFormValue({...formValue, file:null, title:null});
                setFileList([]);

            }});

    }

    useEffect(()=>{setFormValue(news)},[news])

    const linksListChanger = (list) => updater({...formValue, links: list});

    return <Form formValue={formValue} onChange={updater} fluid>

        <TextField disabled label="Id" name="id" />
        <TextField label="Title" name="title" />
        <TextField label="Text" name="text" componentClass="textarea"  />
        <TextField label="Type" name="type" accepter={SelectPicker} data={newsSelectData}  />
        <TextField name="link"  label="link" />
        <Row>
            <Col xs={24}>
                Documents
                <Uploader
                    action="//jsonplaceholder.typicode.com/posts/"
                    onChange={handleFileChange}
                    fileList={fileList}
                    fileKey="newsfile"
                    dragable  autoUpload={false} multiple={false}>
                    <div style={{lineHeight:10}}>Click or drag a file</div>
                </Uploader>
                <Button onClick={submitFiles}>
                   Start upload
                </Button>
            </Col>
        </Row>


    </Form>

}
