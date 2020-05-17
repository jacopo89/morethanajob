import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {Uploader, Icon} from "rsuite";
import {useGetUserInfo} from "../Backend/hooks/UserInfo";
import {useUploadPictures} from "../Backend/hooks/useProfile";

export default function Dashboard(){

    const {user} = useSelector(state=>state);
    const[response, uploadPictureHandler] = useUploadPictures();
    console.log("Dashboard user",user);

    const onChangeHandler = (file) => {
        console.log("file", file);
        let data = {};
        const formData = new FormData();
        formData.append('file', file.blobFile);
        data.email = user.email;
        Object.keys(data).forEach((key)=>  { formData.append(key,JSON.stringify(data[key]));});
        uploadPictureHandler(formData);
    };

    return <>
        <div style={{height:250, width:"100%", backgroundColor:"green", backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png)`}}>
            <CoverPicture />
            <ProfilePicture />
            <Uploader autoUpload={false} onChange={onChangeHandler} action="//jsonplaceholder.typicode.com/posts/" >
                <button>
                    <Icon icon='camera-retro' size="lg" />
                </button>
            </Uploader>
            <div>{user && user.email}</div>
        </div>
        <div style={{height:500, width:"100%", backgroundColor:"cyan"}}>
            <h3>Info</h3>
        </div>
        <div style={{height:300, width:"100%", backgroundColor:"grey"}}>
            <h3>Projects</h3>
        </div>

        </>;
}

function CoverPicture(){
    return <div>Picture</div>
}

function ProfilePicture(){
    return <div>Profile Picture</div>
}
