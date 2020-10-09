import {BackendClient} from "../axios-client";
import {useCreateHook} from "../useHook";

export function useCreateExpertise() {
    const backendClient = BackendClient();
    return useCreateHook(backendClient,'/backend/expertise/add','post',null);
}


export function useDeleteExpertise() {
    const backendClient = BackendClient();
    return useCreateHook(backendClient,'/backend/expertise/delete','delete',null);
}
