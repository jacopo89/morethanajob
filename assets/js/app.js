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
import './i18n';
import ChangePassword from "./Login/Components/ChangePassword";
import Loading from "./Layout/Loading";
import MainPage from "./Layout/MainPage";
import {useTranslation} from "react-i18next";

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


ReactDOM.render(  <Provider store={store}>
    <BrowserRouter>
            <App />
    </BrowserRouter>
</Provider>, document.getElementById('root'));
