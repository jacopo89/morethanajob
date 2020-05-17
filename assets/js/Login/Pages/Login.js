import React from "react";
import {useHistory} from "react-router-dom";
import {useLogin} from "../../Backend/useBackend";
import {useDispatch, useSelector} from "react-redux";
import * as ActionTypes from "../../Redux/actions";
import LoginForm from "../Components/LoginForm";
import Cookies from "universal-cookie";
import * as Routes from '../../routes';
import {useGetUserInfo} from "../../Backend/hooks/UserInfo";
import {useTranslation} from "react-i18next";

export default function Login(){
    const history = useHistory();
    const {t} = useTranslation();

    const [loginResponse, postLoginHandler] = useLogin();
    const [userInfo, userInfoHandler] = useGetUserInfo();
    //const { t, i18n } = useTranslation();
    const cookies = new Cookies();

    const {authenticated, user} = useSelector(state=>state);

    const dispatch = useDispatch();
    const successCallback = (data) => {
        cookies.set('accessToken', data);
        cookies.set('authenticated', true);
        dispatch(ActionTypes.switchAuthenticatedStatus());

    };
    const userInfoSuccessCallback = (data) => {
        console.log("info callback",data);
        cookies.set('user', data);
        //cookies.set('user', JSON.stringify(data));
        dispatch(ActionTypes.updateUserInfo(data));
        history.push(Routes.dashboard);
    };



    const login = (formData) =>
    {
        const finalFormData =  new FormData();
        Object.keys(formData).forEach((key)=> finalFormData.append(key, formData[key] ));
        postLoginHandler(finalFormData, {successCallback: successCallback});
        userInfoHandler(formData.email,{successCallback: userInfoSuccessCallback});
    };
    const goToRegistration = () => history.push(Routes.registration);


    const loginProps = {
        registration: true,
        registrationNavigation : goToRegistration,
        loginHandler: login

    }

  return (authenticated) ? <div>{t('Already logged')} </div> : <LoginForm loginProps={loginProps}/>;
}
