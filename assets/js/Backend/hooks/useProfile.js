import {BackendClient} from "../axios-client";
import {useCreateHook} from "../useHook";
import {useSelector} from "react-redux";

export function  useUploadPictures() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);;
    return useCreateHook(backendClient,'/backend/profile/cover','post',null);
}

export function  useUploadProfilePicture() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/backend/profile/profilePicture','post',null);
}
export function useSaveProfile(){
    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/backend/profile/save','post',null);
}

