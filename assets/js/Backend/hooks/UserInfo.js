import {BackendClient} from "../axios-client";
import {useCreateHook} from "../useHook";
import useCookies from "../useCookies";
import {useSelector} from "react-redux";

export function  useGetUserInfo() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/backend/users/get','get',null);
}

export function useGetUserInfoByEmail(){
    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/backend/users/getByMail','get',null);
}

export function useGetRandomProfiles(){
    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);
    return useCreateHook(backendClient,'/backend/users/getrandom','get',[]);
}
