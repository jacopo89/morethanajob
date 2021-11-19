import {useSelector} from "react-redux";
import {BackendClient} from "../axios-client";
import {useCreateHook} from "../useHook";

export function  useSearcbPartners() {

    const {accessToken} = useSelector(state=>state);
    const backendClient = BackendClient(accessToken);;
    return useCreateHook(backendClient,'/backend/partners/searchfiltered','post',{partnersNumber: 0,partners:[]});
}
