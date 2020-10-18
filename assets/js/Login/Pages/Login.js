import React from "react";
import {Link, useHistory} from "react-router-dom";
import {useLogin} from "../../Backend/useBackend";
import {useDispatch, useSelector} from "react-redux";
import * as ActionTypes from "../../Redux/actions";
import LoginForm from "../Components/LoginForm";
import Cookies from "universal-cookie";
import * as Routes from '../../routes';
import {useGetUserInfo, useGetUserInfoByEmail} from "../../Backend/hooks/UserInfo";
import {useTranslation} from "react-i18next";
import {Button, ButtonToolbar, ControlLabel, Form, FormControl, FormGroup} from "rsuite";
import {MainButton, RegistrationBox, SecondaryButton} from "../../styledComponents/CustomComponents";

export default function Login(){
    const history = useHistory();
    const {t} = useTranslation();

    const [loginResponse, postLoginHandler] = useLogin();
    const [userInfo, userInfoHandler] = useGetUserInfoByEmail();
    //const { t, i18n } = useTranslation();
    const cookies = new Cookies();

    const {authenticated, user} = useSelector(state=>state);

    const dispatch = useDispatch();
    const successCallback = (accessToken) => {
        dispatch(ActionTypes.login(accessToken));

    };
    const userInfoSuccessCallback = (data) => {
        dispatch(ActionTypes.updateUserInfo(data));
        history.push(Routes.profile(data.profileName));
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

  return (authenticated) ? <AlreadyLoggedIn/> : <LoginForm loginProps={loginProps}/>;
}

function AlreadyLoggedIn(){

    const dispatch = useDispatch();
    const {t} = useTranslation();
    const history = useHistory();
    const {user} = useSelector(state=>state);

    const signOut = () => {
        dispatch(ActionTypes.logOut());
    }

    return (user) ? <Button onClick={history.push(Routes.profile(user.profileName))}/> : <RegistrationBox>
        <div>
            <h3>Sign in</h3>
        </div>
        <div>
           <div>{t('already_logged_message')}</div>
           <Button onClick={()=>signOut()}>{t('sign_out')}</Button>
        </div>

    </RegistrationBox>
}
