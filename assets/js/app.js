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
import {BrowserRouter, Redirect, Route, Switch, useLocation} from "react-router-dom";
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
import UserManagement from "./MainApp/Administration/UserManagement";
import CategoriesManagement from "./MainApp/Administration/CategoriesManagement";
import ProjectPage from "./MainApp/Projects/ProjectsPage";
import Project from "./MainApp/Projects/Project";
import Profile from "./MainApp/Profile/Profile";
import NewProject from "./MainApp/Projects/NewProject";
import EditProject from "./MainApp/Projects/EditProject";
import DashboardLayout from "./Layout/DashboardLayout";
import NewCollaboration from "./MainApp/Collaborations/NewCollaboration";
import Collaboration from "./MainApp/Collaborations/Collaboration";
import EditCollaboration from "./MainApp/Collaborations/EditCollaboration";
import ImmediateLogout from "./Login/ImmediateLogout";

function App(){
    const {authenticated, language} = useSelector(state=>state);
    const {t,i18n} = useTranslation();

    let location = useLocation();



    if(i18n.language!==language){

        i18n.changeLanguage(language);
    }

    const registrationPage = <DashboardLayout page={<Registration/>}/>;
    const changePasswordPage = <DashboardLayout page={<ChangePassword/>}/>;
    const recoverPage = <DashboardLayout page={<RecoverPasswordForm/>}/>;
    const profilePage = <MainPage page={<Profile/>}/>;
    const administrationPage = <MainPage page={<CategoriesManagement/>}/>;
    const projectsPage = <MainPage page={<ProjectPage />}/>;
    const loginPage = <DashboardLayout page={<Login/>}/>;
    const projectDetailPage = <MainPage page={<Project/>}/>;
    const collaborationDetailPage = <MainPage page={<Collaboration/>}/>;
    const editProjectPage = <MainPage page={<EditProject/>}/>;
    const dashboardPage = <DashboardLayout page={<Dashboard/>} />
    const newProjectPage = <MainPage page={<NewProject isPortfolio={false}/>} />
    const newPorfolioPage = <MainPage page={<NewProject isPortfolio={true}/>} />
    const newCollaborationPage = <MainPage page={<NewCollaboration isService={false} />} />
    const newServicePage = <MainPage page={<NewCollaboration isService={true} />} />
    const editCollaborationDetailPage = <MainPage page={<EditCollaboration />} />

    const immediateLogoutPage = <ImmediateLogout />
    const {isLoading} = useSelector(state=>state);

    const loading = <Loading/>;


    const mainApp =
        (<>
            <Switch>
                <Route path={Routes.routeEditCollaboration} children={editCollaborationDetailPage}/>
                <Route path={Routes.registration} children={registrationPage}/>
                <Route exact path={Routes.changePassword} children={changePasswordPage}/>
                <Route path={Routes.passwordRecovery} children={recoverPage}/>
                <Route path={Routes.routeProfile} children={profilePage}/>
                <Route path={Routes.projectPage} children={projectsPage}/>
                <Route path={Routes.collaborationDetailPage} children={collaborationDetailPage}/>
                <Route path={Routes.dashboardPage} children={dashboardPage}/>
                <Route path={Routes.newProjectPage} children={newProjectPage}/>
                <Route path={Routes.newPortfolioPage} children={newPorfolioPage}/>
                <Route path={Routes.newCollaborationPage} children={newCollaborationPage}/>
                <Route path={Routes.newServicePage} children={newServicePage}/>
                <Route path={Routes.routeEditProject} children={editProjectPage}/>
                <Route path={Routes.administration} children={administrationPage}/>
                <Route path={Routes.routeProject} children={projectDetailPage}/>
                <Route path={Routes.immediateLogout} children={immediateLogoutPage}/>
                <Route path={Routes.main} children={loginPage}/>
                <Route path={Routes.login} children={loginPage}/>


            </Switch>
        </>);

    const authRequired =
        (<>
            <Switch>
                <Route exact path={Routes.main} children={dashboardPage} />
                <Route path={Routes.projectPage} children={projectsPage}/>
                <Route exact path={Routes.login} children={loginPage} />
                <Route exact path={Routes.registration} children={registrationPage}/>
                <Route path={Routes.dashboardPage} children={dashboardPage}/>
                <Route path="/">
                    <Redirect to="/login" />
                </Route>
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
//const messaging = firebase.messaging();
//messaging.usePublicVapidKey("BJ2vLwEXdwyrGarVrA8BlhuBKHIcjWNIAE4T9uNUoc2xoxEgAiTfpdVp86gVDkL9TPULDd9LkT5L4Uh9bqKTTKo");



ReactDOM.render(  <Provider store={store}>
    <BrowserRouter>
            <App />
    </BrowserRouter>
</Provider>, document.getElementById('root'));
