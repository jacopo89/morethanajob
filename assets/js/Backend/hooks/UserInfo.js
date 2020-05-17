import {BackendClient} from "../axios-client";
import {useCreateHook} from "../useHook";

export function  useGetUserInfo() {

    const backendClient = BackendClient();
    return useCreateHook(backendClient,'/users/get','get',null);
}