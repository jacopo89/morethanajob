import React, {useState} from 'react';
import {Uploader} from "rsuite";
export function SingleControlledUploader({onChange, children}) {

    const onChangeHandler = (file)=>{
        onChange(file);
        setFileList([])
    }

    const [fileList, setFileList] = useState([]);

    return <Uploader fileListVisible={false} fileList={fileList} onChange={onChangeHandler}>{children}</Uploader>

}