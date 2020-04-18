import {Cookies} from "universal-cookie";

export const SWITCH_AUTHENTICATION_STATUS = "SWITCH_AUTHENTICATION_STATUS";
export const SWITCH_LOADING_STATUS = "SWITCH_LOADING_STATUS";

export const switchAuthenticatedStatus = () =>{

    return {
        type: SWITCH_AUTHENTICATION_STATUS,
    }
};