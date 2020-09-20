import {BackendClient} from "../axios-client";
import {useCreateHook} from "../useHook";
import {useSelector} from "react-redux";

export function  useGetUsers() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/backend/administration/getusers','get',[]);
}

export function  useChangeUserRole() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/backend/administration/changerole','post',null);
}


export function  useGetAllCollaborations() {

    const backendClient = BackendClient();
    return useCreateHook(backendClient,'/backend/collaborations/getall','get',[]);
}

export function  useGetAllProjects() {

    const backendClient = BackendClient();
    return useCreateHook(backendClient,'/backend/project/getall','get',[]);
}

