import React, {useEffect} from "react";
import {Redirect, useHistory} from "react-router-dom";
import {useLogin} from "../../Backend/useBackend";
import {useDispatch, useSelector} from "react-redux";
import * as ActionTypes from "../../Redux/actions";
import LoginForm from "../Components/LoginForm";
import * as Routes from '../../routes';
import {useGetUserInfoByEmail} from "../../Backend/hooks/UserInfo";
import {useTranslation} from "react-i18next";
import {Button} from "rsuite";
import {RegistrationBox} from "../../styledComponents/CustomComponents";

export default function Login(){

    const authenticationData = document.getElementById('js-user-rating');
    const userData = document.getElementById('js-user-profile');
    const dispatch = useDispatch();
    const {authenticated} = useSelector(state=>state);
    useEffect(()=>{
        const userProfile = userData.dataset.userProfile;
        if(userProfile){
            dispatch(ActionTypes.updateUserInfo(JSON.parse(userProfile)))
        }

        if(authenticated.toString()!==authenticationData.dataset.isAuthenticated){
            dispatch(ActionTypes.switchAuthenticatedStatus())
        }
    },[])
    const history = useHistory();
    const {t} = useTranslation();
    const [loginResponse, postLoginHandler] = useLogin();
    const [userInfo, userInfoHandler] = useGetUserInfoByEmail();


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


    const loginProps = {
        registration: true,
        registrationNavigation : "/registration",
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

    //<Button onClick={history.push(Routes.profile(user.profileName))}/>
    return (user) ? window.location.replace(Routes.profile(user.profileName)) : <RegistrationBox>
        <div>
            <h3>Sign in</h3>
        </div>
        <div>
           <div>{t('already_logged_message')}</div>
           <Button onClick={()=>signOut()}>{t('sign_out')}</Button>
        </div>

    </RegistrationBox>
}
