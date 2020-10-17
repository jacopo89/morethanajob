import {BackendClient} from "../axios-client";
import {useCreateHook} from "../useHook";

export function useGetAllNews() {
    const backendClient = BackendClient();
    return useCreateHook(backendClient,'/backend/news/get-all','get',[]);
}

export function useCreateNews() {
    const backendClient = BackendClient();
    return useCreateHook(backendClient,'/backend/news/new','post',null);
}

export function useEditNews() {
    const backendClient = BackendClient();
    return useCreateHook(backendClient,'/backend/news/edit','post',null);
}

export function useDeleteNews() {
    const backendClient = BackendClient();
    return useCreateHook(backendClient,'/backend/news/delete','delete',null);
}

export function useGetRecentNews() {
    const backendClient = BackendClient();
    return useCreateHook(backendClient,'/backend/news/get-recent','get',[]);
}

