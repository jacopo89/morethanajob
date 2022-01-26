import {Button, Col, Form, Row, SelectPicker, TreePicker, Uploader} from "rsuite";
import React, {useEffect, useState} from "react";
import TextField from "../../../Login/Components/TextField";
import {useNewsLoadFile, useNewsLoadImage} from "../../../Backend/hooks/useNews";
import {newsSelectData} from "../../../selectData";

export default function NewsDetail({news, updater}) {

    const [formValue, setFormValue] = useState(news);
    const [fileList, setFileList] = useState([]);
    const [imageList, setImageList] = useState([]);
    const [fileLoadResponse, loadFileHandler] = useNewsLoadFile();
    const [imageLoadResponse, loadImageHandler] = useNewsLoadImage();

    const handleFileChange = (file) =>{
        setFormValue({
            ...formValue,
            file: file[0].blobFile,
            title: file[0].name
        })
        setFileList([...fileList, file[0].blobFile]);
    };

    const handleImageChange = (file) =>{
        setFormValue({
            ...formValue,
            imageFile: file[0].blobFile,
            title: file[0].name
        })
        setImageList([...imageList, file[0].blobFile]);
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

    const submitImage = () => {
        const formData = new FormData();
        formData.append('id', formValue.id);
        formData.append('imageFile', formValue.imageFile);

        loadImageHandler(formData, {successCallback: ()=>{
                setFormValue({...formValue, imageFile:null});
                setImageList([]);

            }});

    }

    useEffect(()=>{setFormValue(news)},[news])


    return <Form formValue={formValue} onChange={updater} fluid>

        <TextField disabled label="Id" name="id" />
        <TextField label="Title" name="title" />
        <TextField label="Text" name="text" componentClass="textarea"  />
        <TextField style={{width:"100%"}} label="Type" name="type"  defaultExpandAll accepter={TreePicker} data={newsSelectData}  />
        <TextField name="link"  label="link" />
        <TextField name="videoLink"  label="Video Link" />
        {news.id && <Row>
            <Col xs={24}>
                Documents
                <Uploader
                    action="//jsonplaceholder.typicode.com/posts/"
                    onChange={handleFileChange}
                    fileList={fileList}
                    fileKey="newsfile"
                    dragable autoUpload={false} multiple={false}>
                    <div style={{lineHeight: 10}}>Click or drag a file</div>
                </Uploader>
                <Button onClick={submitFiles}>
                    Upload file
                </Button>
            </Col>
        </Row>}

        {news.id && <Row>
            <Col xs={24}>
                Image
                <Uploader
                    action="//jsonplaceholder.typicode.com/posts/"
                    onChange={handleImageChange}
                    fileList={imageList}
                    fileKey="newsImage"
                    dragable autoUpload={false} multiple={false}>
                    <div style={{lineHeight: 10}}>Click or drag a file</div>
                </Uploader>
                <Button onClick={submitImage}>
                    Upload Image
                </Button>
            </Col>
        </Row>}


    </Form>

}
