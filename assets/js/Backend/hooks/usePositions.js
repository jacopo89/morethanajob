import {useSelector} from "react-redux";
import {BackendClient} from "../axios-client";
import {useCreateHook} from "../useHook";

export function useEditPosition(){
    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/backend/positions/edit','post',null);
}

export function useDeletePosition(){
    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/backend/positions/delete','delete',null);
}

