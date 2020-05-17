import {BackendClient} from "../axios-client";
import {useCreateHook} from "../useHook";

export function  useUploadPictures() {

    const backendClient = BackendClient();
    return useCreateHook(backendClient,'/profile/loadfile','post',null);
}
