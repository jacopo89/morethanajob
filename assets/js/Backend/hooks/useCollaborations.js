import {BackendClient} from "../axios-client";
import {useCreateHook} from "../useHook";
import {useSelector} from "react-redux";

export function  useGetCollaborations() {

    const backendClient = BackendClient();
    return useCreateHook(backendClient,'/backend/collaborations/get','get',[]);
}

export function  useGetPaginatedCollaborations() {

    const backendClient = BackendClient();
    return useCreateHook(backendClient,'/backend/collaborations/get-paginated','get',[]);
}

export function  useGetCollaborationServices() {

    const backendClient = BackendClient();
    return useCreateHook(backendClient,'/backend/collaborations/getservices','get',[]);
}


export function  useGetCollaboration() {

    const backendClient = BackendClient();
    return useCreateHook(backendClient,'/backend/collaborations/getById','get',null);
}

export function  useCreateNewCollaboration() {

    const backendClient = BackendClient();
    return useCreateHook(backendClient,'/backend/collaborations/new','post',null);
}

export function  useEditCollaboration() {

    const backendClient = BackendClient();
    return useCreateHook(backendClient,'/backend/collaborations/edit','post',null);
}


export function  useGetRandomCollaborations() {

    const backendClient = BackendClient();
    return useCreateHook(backendClient,'/backend/collaborations/getrandom','post',[]);
}

export function  useDeleteCollaboration() {

    const backendClient = BackendClient();
    return useCreateHook(backendClient,'/backend/collaborations/delete','delete',null);
}

export function  useSendMessage() {

    const backendClient = BackendClient();
    return useCreateHook(backendClient,'/backend/collaborations/sendmessage','post',null);
}

export function  useUploadCollaborationLogo() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/backend/collaborations/logo','post',null);
}
