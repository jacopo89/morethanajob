import Cookies from "universal-cookie";
import React, {useEffect, useState} from 'react'
import {useGetUserInfo} from "../Backend/hooks/UserInfo";

export const SWITCH_AUTHENTICATION_STATUS = "SWITCH_AUTHENTICATION_STATUS";
export const SWITCH_LOADING_STATUS = "SWITCH_LOADING_STATUS";
export const UPDATE_USER_INFO = "UPDATE_USER_INFO";
export const SWITCH_LANGUAGE = "SWITCH_LANGUAGE";
export const LOGOUT = "LOGOUT";
export const LOGIN = "LOGIN";

export const cookiesOptions = {path: "/"};


export const switchAuthenticatedStatus = () =>{

    return {
        type: SWITCH_AUTHENTICATION_STATUS,
    }
};



export const updateUserInfo = (data) =>{
    const cookies = new Cookies();

    const userCookie = {
        email: data.email,
        roles: data.roles,
        profileName: data.profileName,
        language: data.language
    }
    cookies.set('user', JSON.stringify(userCookie), cookiesOptions);

    let userCookies = cookies.get('user');

    return {
        type: UPDATE_USER_INFO,
        user: data
    }
}


export const switchLanguage = (language) =>{
    const cookies = new Cookies();
    cookies.set('language', language, cookiesOptions);
    console.log("Switch language to", language)
    return {
        type: SWITCH_LANGUAGE,
        language: language
    }
}


export const login = (accessToken) =>{
    const cookies = new Cookies();
    cookies.set('accessToken', accessToken, cookiesOptions);
    cookies.set('authenticated', true, cookiesOptions);
    return {
        type: LOGIN,
        authenticated: true,
        accessToken: accessToken
    }
}



export const logOut = () =>{
    const cookies = new Cookies();
    cookies.remove('authenticated',cookiesOptions);
    cookies.remove('accessToken', cookiesOptions);
    cookies.remove('user', cookiesOptions);
    return {
        type: LOGOUT,
        authenticated: false,
        user: null,
        accessToken: null
    }
}

