import {BackendClient} from "../axios-client";
import {useCreateHook} from "../useHook";
import {useSelector} from "react-redux";

export function  useGetUsers() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/administration/getusers','get',[]);
}

export function  useChangeUserRole() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/administration/changerole','post',null);
}



