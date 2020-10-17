import {Form} from "rsuite";
import React, {useEffect, useState} from "react";
import TextField from "../../../Login/Components/TextField";
import DynamicList from "../../../ReusableComponents/DynamicList";
import {useCreateNews, useEditNews} from "../../../Backend/hooks/useNews";

export default function NewsDetail({news, updater}) {

    const [formValue, setFormValue] = useState(news);

    useEffect(()=>{setFormValue(news)},[news])

    const linksListChanger = (list) => updater({...formValue, links: list});

    return <Form formValue={formValue} onChange={updater} fluid>

        <TextField disabled label="Id" name="id" />
        <TextField label="Title" name="title" />
        <TextField label="Text" name="text" componentClass="textarea"  />
        <DynamicList name="link" updater={linksListChanger} startingValue={formValue.links}  />

    </Form>

}
