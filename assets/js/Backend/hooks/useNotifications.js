import {BackendClient} from "../axios-client";
import {useCreateHook} from "../useHook";
import {useSelector} from "react-redux";

export function  useSetNotificationUrl() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/notifications/setNotificationUrl','post',null);
}


export function  useForceNotification() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/notifications/forceNotification','post',null);
}
