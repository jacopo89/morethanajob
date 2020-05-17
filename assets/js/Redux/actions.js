import Cookies from "universal-cookie";
import React, {useEffect} from 'react'

export const SWITCH_AUTHENTICATION_STATUS = "SWITCH_AUTHENTICATION_STATUS";
export const SWITCH_LOADING_STATUS = "SWITCH_LOADING_STATUS";
export const UPDATE_USER_INFO = "UPDATE_USER_INFO";
export const SWITCH_LANGUAGE = "SWITCH_LANGUAGE";


export const switchAuthenticatedStatus = () =>{

    return {
        type: SWITCH_AUTHENTICATION_STATUS,
    }
};



export const updateUserInfo = (data) =>{
    console.log("Updating user info to", data)
    return {
        type: UPDATE_USER_INFO,
        user: data
    }
}


export const switchLanguage = (language) =>{
    const cookies = new Cookies();
    cookies.set('language', language);
    console.log("Switch language to", language)
    return {
        type: SWITCH_LANGUAGE,
        language: language
    }
}

