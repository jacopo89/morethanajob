import {BackendClient} from "../axios-client";
import {useCreateHook} from "../useHook";

export function  useSetNotificationUrl() {

    const backendClient = BackendClient();
    return useCreateHook(backendClient,'/notifications/setNotificationUrl','post',null);
}


export function  useForceNotification() {

    const backendClient = BackendClient();
    return useCreateHook(backendClient,'/notifications/forceNotification','post',null);
}
