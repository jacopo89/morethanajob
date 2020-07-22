import {BackendClient} from "./axios-client";
import {useCreateHook} from "./useHook";

export function  useLogin() {

    const backendClient = BackendClient();
    return useCreateHook(backendClient,'/backend/login','post',null);
}

export function  useRegister() {
    const backendClient = BackendClient();
    return useCreateHook(backendClient,'/backend/register','post',null);
}

export function  usePasswordRecovery() {
    const backendClient = BackendClient();
    return useCreateHook(backendClient,'/backend/recovery','post',false);
}

export function  useChangePassword() {
    const backendClient = BackendClient();
    return useCreateHook(backendClient,'/backend/passwordchange','post',false);
}

export function  useCheckUserMail() {
    const backendClient = BackendClient();
    return useCreateHook(backendClient,'/backend/checkuser','post',false);
}
