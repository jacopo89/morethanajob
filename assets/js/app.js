/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.css';
import 'rsuite/dist/styles/rsuite-default.min.css';
import * as ReactDOM from "react-dom";
import React from "react";
import {applyMiddleware, compose, createStore} from "redux";
import thunk from 'redux-thunk';
import {Provider, useSelector} from "react-redux";
import Login from "./Login/Pages/Login";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import reducer from "./Redux/reducer";
import Layout from "./Layout/Layout";
import Registration from "./Login/Pages/Registration";
import RecoverPasswordForm from "./Login/Components/RecoverPasswordForm";
import Dashboard from "./MainApp/Dashboard";
import * as Routes from './routes';

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/messaging";

import './i18n';
import ChangePassword from "./Login/Components/ChangePassword";
import Loading from "./Layout/Loading";
import MainPage from "./Layout/MainPage";
import {useTranslation} from "react-i18next";
import Test from "./Test";

function App(){
    const {authenticated, language} = useSelector(state=>state);
    const {t,i18n} = useTranslation();
    console.log("translation", i18n.language)
    console.log("cookies", language)
    if(i18n.language!==language){

        i18n.changeLanguage(language);
    }

    const registrationPage = <Layout page={<Registration/>}/>;
    const changePasswordPage = <Layout page={<ChangePassword/>}/>;
    const recoverPage = <Layout page={<RecoverPasswordForm/>}/>;
    const dashboardPage = <MainPage page={<Dashboard/>}/>;
    const loginPage = <Layout page={<Login/>}/>;
    const {isLoading} = useSelector(state=>state);

    const loading = <Loading/>;


    const mainApp =
        (<>
            <Switch>
                <Route path={Routes.registration} children={registrationPage}/>
                <Route exact path={Routes.changePassword} children={changePasswordPage}/>
                <Route path={Routes.passwordRecovery} children={recoverPage}/>
                <Route path={Routes.dashboard} children={dashboardPage}/>
                <Route path={Routes.main} children={loginPage}/>
            </Switch>
        </>);

    const authRequired =
        (<>
            <Switch>
                <Route exact path={Routes.main} children={loginPage} />
                <Route exact path={Routes.login} children={loginPage} />
                <Route exact path={Routes.registration} children={registrationPage}/>
            </Switch>
        </>);


    const render = (authenticated) ? mainApp : authRequired ;
    return <>{render}{isLoading && loading}</>;
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,composeEnhancers(
    applyMiddleware(thunk)
));


const  firebaseConfig = {
    apiKey: "AIzaSyDxbfpWNPN68Pd2arE1mVZlDPSJ_ddbLio",
    authDomain: "morethanajob-555ac.firebaseapp.com",
    databaseURL: "https://morethanajob-555ac.firebaseio.com",
    projectId: "morethanajob-555ac",
    storageBucket: "morethanajob-555ac.appspot.com",
    messagingSenderId: "658273758321",
    appId: "1:658273758321:web:abbb5898193d348bac7fd0",
    measurementId: "G-KH5GT2GVYS"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.usePublicVapidKey("BJ2vLwEXdwyrGarVrA8BlhuBKHIcjWNIAE4T9uNUoc2xoxEgAiTfpdVp86gVDkL9TPULDd9LkT5L4Uh9bqKTTKo");


ReactDOM.render(  <Provider store={store}>
    <BrowserRouter>
            <Test />
    </BrowserRouter>
</Provider>, document.getElementById('root'));
