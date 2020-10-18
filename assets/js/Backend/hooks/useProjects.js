import {BackendClient} from "../axios-client";
import {useCreateHook} from "../useHook";
import {useSelector} from "react-redux";
import {projectEmptyModel} from "../../MainApp/FormModels/models";

export function  useGetProjects() {

    const backendClient = BackendClient();
    return useCreateHook(backendClient,'/backend/profile/loadfile','post',null);
}


export function  useSearchProjects() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/backend/collaborations/searchfiltered','post',{servicesNumber: 0,projects:[], services:[]});
}

export function  useGetUserProjects() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/backend/project/getbymail','get',[]);
}


export function  useCreateNewProject() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/backend/project/new','post',null);
}

export function  useEditProject() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/backend/project/edit','post',null);
}

export function  useGetLastProjects() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/backend/project/getlast','get',[]);
}

export function  useGetPortfolioProjects() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/backend/project/getportfolio','get',[]);
}



export function  useGetCollaborationProjects() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/backend/project/getcollaborations','get',[]);
}

export function  useGetAllUserProjects() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/backend/project/get-all-projects','get',[]);
}





export function  useGetProject() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/backend/project/get','get',projectEmptyModel);
}


export function  useUploadProjectLogo() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/backend/project/logo','post',null);
}

export function  useUploadProjectCover() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/backend/project/cover','post',null);
}



export function  usePostApplication() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/backend/project/postApplication','post',null);
}


export function  useConfirmApplication() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/backend/project/confirmCollaboration','post',null);
}

export function  useGetApplications() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/backend/project/getApplications','get',[]);
}


export function useDeleteProject(){

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/backend/project/removeProject','delete',null);
}


export function useGetPaginatedProjects(){

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/backend/project/get-user-paginated','get',[]);
}


