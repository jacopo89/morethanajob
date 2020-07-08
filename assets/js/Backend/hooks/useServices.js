import {BackendClient} from "../axios-client";
import {useCreateHook} from "../useHook";
import {useSelector} from "react-redux";

export function  useGetServices() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/service/getAll','get',[]);
}

export function  useAddService() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/service/add','post',null);
}


export function  useEditService() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/service/edit','post',null);
}

export function  useDeleteService() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/service/delete','delete',null);
}


export function useGetServicesBySociety(){
    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/service/getuserservices','get',[]);
}

export function  useUploadPicture() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/service/uploadPicture','post',null);
}


export function useCreateOfferedService(){
    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/service/createUserService','post',null);
}
