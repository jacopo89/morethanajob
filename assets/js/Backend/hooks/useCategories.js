import {BackendClient} from "../axios-client";
import {useCreateHook} from "../useHook";

export function  useGetCategories() {

    const backendClient = BackendClient();
    return useCreateHook(backendClient,'/backend/categories/get','get',[]);
}

export function  useEditCategory() {

    const backendClient = BackendClient();
    return useCreateHook(backendClient,'/backend/categories/edit','post',null);
}


export function useCategoryUploadPicture() {
    const backendClient = BackendClient();
    return useCreateHook(backendClient,'/backend/categories/uploadPicture','post',null);
}

export function useCreateCategory() {
    const backendClient = BackendClient();
    return useCreateHook(backendClient,'/backend/categories/add','post',null);
}


export function useDeleteCategory() {
    const backendClient = BackendClient();
    return useCreateHook(backendClient,'/backend/categories/delete','delete',null);
}
