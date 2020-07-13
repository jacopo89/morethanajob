import {BackendClient} from "../axios-client";
import {useCreateHook} from "../useHook";

export function  useGetCategories() {

    const backendClient = BackendClient();
    return useCreateHook(backendClient,'/categories/get','get',[]);
}

export function useCategoryUploadPicture() {
    const backendClient = BackendClient();
    return useCreateHook(backendClient,'/categories/uploadPicture','post',null);
}

