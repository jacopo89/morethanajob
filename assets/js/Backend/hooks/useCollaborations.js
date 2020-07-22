import {BackendClient} from "../axios-client";
import {useCreateHook} from "../useHook";

export function  useGetCollaborations() {

    const backendClient = BackendClient();
    return useCreateHook(backendClient,'/backend/collaborations/get','get',[]);
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
