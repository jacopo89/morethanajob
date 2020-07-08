import {BackendClient} from "../axios-client";
import {useCreateHook} from "../useHook";
import {useSelector} from "react-redux";

export function  useGetProjects() {

    const backendClient = BackendClient();
    return useCreateHook(backendClient,'/profile/loadfile','post',null);
}


export function  useSearchProjects() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/project/searchfiltered','post',{projects:[], services:[]});
}

export function  useGetUserProjects() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/profile/loadfile','post',null);
}


export function  useCreateNewProject() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/project/new','post',null);
}

export function  useEditProject() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/project/edit','post',null);
}

export function  useGetLastProjects() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/project/getlast','get',[]);
}

export function  useGetPortfolioProjects() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/project/getportfolio','get',[]);
}



export function  useGetCollaborationProjects() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/project/getcollaborations','get',[]);
}



export function  useGetProject() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/project/get','get',{positions:[],projectPartnersRelations:[]});
}


export function  useUploadProjectLogo() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/project/logo','post',null);
}

export function  useUploadProjectCover() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/project/cover','post',null);
}



export function  usePostApplication() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/project/postApplication','post',null);
}


export function  useConfirmApplication() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/project/confirmCollaboration','post',null);
}

export function  useGetApplications() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/project/getApplications','get',[]);
}



