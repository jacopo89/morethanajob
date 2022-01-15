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
import React, {useEffect} from "react";
import {applyMiddleware, compose, createStore} from "redux";
import thunk from 'redux-thunk';
import {Provider, useDispatch, useSelector} from "react-redux";
import Login from "./Login/Pages/Login";
import {BrowserRouter, Redirect, Route, Router, Switch, useLocation} from "react-router-dom";
import reducer from "./Redux/reducer";
import Registration from "./Login/Pages/Registration";
import RecoverPasswordForm from "./Login/Components/RecoverPasswordForm";
import Dashboard from "./MainApp/Dashboard";
import * as Routes from './routes';
import * as ActionTypes from "./Redux/actions";
import "firebase/auth";
import "firebase/messaging";
import ReactGA from 'react-ga';

import './i18n';
import Loading from "./Layout/Loading";
import MainPage from "./Layout/MainPage";
import {useTranslation} from "react-i18next";
import UserManagement from "./MainApp/Administration/UserManagement";
import CategoriesManagement from "./MainApp/Administration/CategoriesManagement";
import Project from "./MainApp/Projects/Project";
import Profile from "./MainApp/Profile/Profile";
import NewProject from "./MainApp/Projects/NewProject";
import EditProject from "./MainApp/Projects/EditProject";
import DashboardLayout from "./Layout/DashboardLayout";
import NewCollaboration from "./MainApp/Collaborations/NewCollaboration";
import Collaboration from "./MainApp/Collaborations/Collaboration";
import EditCollaboration from "./MainApp/Collaborations/EditCollaboration";
import ImmediateLogout from "./Login/ImmediateLogout";
import SearchPartners from "./MainApp/Partners/SearchPartners";
import ServiceSearch from "./MainApp/SearchEngines/ServiceSearch";
import NewFurniture from "./MainApp/Furnitures/NewFurniture";
import EditFurniture from "./MainApp/Furnitures/EditFurniture";
import ScrollToTop from "./ReusableComponents/ScrollToTop";
import {useGetServices} from "./Backend/hooks/useServices";
import {useGetCategories} from "./Backend/hooks/useCategories";
import CollaborationManagement from "./MainApp/Administration/CollaborationManagement";
import ProjectManagement from "./MainApp/Administration/ProjectManagement";
import PasswordReset from "./Login/Components/PasswordReset";
import AdministrationLayout from "./Layout/AdministrationLayout";
import ExpertiseManagement from "./MainApp/Administration/ExpertiseManagement";
import ProfileEdit from "./MainApp/Profile/ProfileEdit";
import NewsManagement from "./MainApp/Administration/NewsManagement";
import AllNews from "./MainApp/News/AllNews";
import Statistics from "./MainApp/Administration/Statistics";
import CookieAccept from "./CookieAccept";
import Privacy from "./Privacy";
import SubGrantedProjects from "./MainApp/News/SubGrantedProjects";

function App(){
    const location = useLocation();
    useEffect(()=>{
        console.log("location", location);
        ReactGA.pageview(location.pathname);
        //ReactGA.set({ page: location.pathname }); // Update the user's current page
        //ReactGA.send({ page: location.pathname })
    },[location])

    const dispatch = useDispatch();
    const {authenticated, language} = useSelector(state=>state);

    const authenticationData = document.getElementById('js-user-rating');
    const userData = document.getElementById('js-user-profile');


    useEffect(()=>{
        const userProfile = userData.dataset.userProfile;
        if(userProfile){
            dispatch(ActionTypes.updateUserInfo(JSON.parse(userProfile)))
        }
        if(authenticated!==authenticationData.dataset.isAuthenticated){
            dispatch(ActionTypes.switchAuthenticatedStatus())
        }
    },[])

    const {t,i18n} = useTranslation();
    const [services, getServicesHandler] = useGetServices();
    const [categories, getCategoriesHandler] = useGetCategories();

    useEffect(()=>{
        getServicesHandler();
        getCategoriesHandler();
    },[]);

    useEffect(()=>{
        dispatch(ActionTypes.updateServices(services));
        dispatch(ActionTypes.updateCategories(categories));
    },[categories, services])


    if(i18n.language!==language){

        i18n.changeLanguage(language);
    }

    const registrationPage = <DashboardLayout page={<Registration/>}/>;
    const changePasswordPage = <DashboardLayout page={<PasswordReset/>}/>;
    const recoverPage = <DashboardLayout page={<RecoverPasswordForm/>}/>;
    const profilePage = <MainPage page={<Profile/>}/>;
    const profileEditPage = <MainPage page={<ProfileEdit/>}/>;
    const administrationCategoriesPage = <AdministrationLayout page={<CategoriesManagement/>}/>;
    const administrationProjectPage = <AdministrationLayout page={<ProjectManagement/>}/>;
    const administrationCollaborationsPage = <AdministrationLayout page={<CollaborationManagement/>}/>;
    const administrationUserPage = <AdministrationLayout page={<UserManagement />} />
    const administrationNewsPage = <AdministrationLayout page={<NewsManagement />} />
    const administrationExpertisePage = <AdministrationLayout page={<ExpertiseManagement />} />
    const statisticsPage = <AdministrationLayout page={<Statistics/>} />
    const allNewsPage = <MainPage page={<AllNews/>}/>;
    const subGrantedProjectsPage = <MainPage page={<SubGrantedProjects/>}/>;
    const serviceSearchPage = <MainPage page={<ServiceSearch />}/>;
    const searchUserPage = <MainPage page={<SearchPartners />}/>;
    const loginPage = <DashboardLayout page={<Login/>}/>;
    const projectDetailPage = <MainPage page={<Project/>}/>;
    const collaborationDetailPage = <MainPage page={<Collaboration/>}/>;
    const editProjectPage = <MainPage page={<EditProject/>}/>;
    const dashboardPage = <DashboardLayout page={<Dashboard/>} />
    const newProjectPage = <MainPage page={<NewProject isPortfolio={false}/>} />
    const newPorfolioPage = <MainPage page={<NewProject isPortfolio={true}/>} />
    const newCollaborationPage = <MainPage page={<NewCollaboration isService={false} />} />
    const newServicePage = <MainPage page={<NewCollaboration isService={true} />} />
    const editCollaborationDetailPage = <MainPage page={<EditCollaboration isService={false} />} />
    const editServiceDetailPage = <MainPage page={<EditCollaboration isService={true} />} />
    const newFurniturePage = <MainPage page={<NewFurniture  />} />
    const editFurniturePage = <MainPage page={<EditFurniture  />} />
    const privacy = <MainPage page={<Privacy  />} />

    const immediateLogoutPage = <ImmediateLogout />
    const {isLoading} = useSelector(state=>state);

    const loading = <Loading/>;


    const mainApp =
        (<>
            <Switch>
                {/*<Route path={Routes.login} children={loginPage}/>*/}
                <Route path={Routes.privacy} children={privacy}/>
                <Route path={Routes.changePassword} children={changePasswordPage} />
                <Route path={Routes.routeEditCollaboration} children={editCollaborationDetailPage}/>
                <Route path={Routes.routeEditService} children={editServiceDetailPage}/>
                <Route path={Routes.administrationStatistics} children={statisticsPage}/>
                <Route path={Routes.registration} children={registrationPage}/>
                <Route path={Routes.passwordRecovery} children={recoverPage}/>
                <Route path={Routes.routeProfile} children={profilePage}/>
                <Route path={Routes.routeProfileEdit} children={profileEditPage}/>
                <Route path={Routes.serviceSearchPage} children={serviceSearchPage}/>
                <Route path={Routes.searchUserPage} children={searchUserPage}/>
                <Route path={Routes.collaborationDetailPage} children={collaborationDetailPage}/>
                <Route path={Routes.dashboardPage} children={dashboardPage}/>
                <Route path={Routes.newProjectPage} children={newProjectPage}/>
                <Route path={Routes.newPortfolioPage} children={newPorfolioPage}/>
                <Route path={Routes.newCollaborationPage} children={newCollaborationPage}/>
                <Route path={Routes.newFurniturePage} children={newFurniturePage}/>
                <Route path={Routes.newServicePage} children={newServicePage}/>
                <Route path={Routes.routeEditProject} children={editProjectPage}/>
                <Route path={Routes.administrationCategories} children={administrationCategoriesPage}/>
                <Route path={Routes.administrationExpertise} children={administrationExpertisePage}/>
                <Route path={Routes.administrationCollaborations} children={administrationCollaborationsPage}/>
                <Route path={Routes.administrationProjects} children={administrationProjectPage}/>
                <Route path={Routes.administrationUsers} children={administrationUserPage}/>
                <Route path={Routes.administrationNews} children={administrationNewsPage}/>
                <Route path={Routes.routeProject} children={projectDetailPage}/>
                <Route path={Routes.immediateLogout} children={immediateLogoutPage}/>
                <Route path={"/news/:news_type"} children={allNewsPage}/>
                <Route path={Routes.subGrantedProjectsPage} children={subGrantedProjectsPage}/>
                <Route path={Routes.main} children={dashboardPage}/>




            </Switch>
        </>);

    const authRequired =
        (<>
            <Switch>
                {/*<Route path={Routes.login} children={loginPage}/>*/}
                <Route path={Routes.privacy} children={privacy}/>
                <Route path={Routes.routeEditCollaboration} children={editCollaborationDetailPage}/>
                <Route path={Routes.routeEditService} children={editServiceDetailPage}/>
                <Route path={Routes.registration} children={registrationPage}/>
                <Route path={Routes.changePassword} children={changePasswordPage}/>
                <Route path={Routes.administrationStatistics} children={statisticsPage}/>
                <Route path={Routes.passwordRecovery} children={recoverPage}/>
                <Route path={Routes.routeProfile} children={profilePage}/>
                <Route path={Routes.routeProfileEdit} children={profileEditPage}/>
                <Route path={Routes.serviceSearchPage} children={serviceSearchPage}/>
                <Route path={Routes.searchUserPage} children={searchUserPage}/>
                <Route path={Routes.collaborationDetailPage} children={collaborationDetailPage}/>
                <Route path={Routes.newFurniturePage} children={newFurniturePage}/>
                <Route path={Routes.dashboardPage} children={dashboardPage}/>
                <Route path={Routes.newProjectPage} children={newProjectPage}/>
                <Route path={Routes.newPortfolioPage} children={newPorfolioPage}/>
                <Route path={Routes.newCollaborationPage} children={newCollaborationPage}/>
                <Route path={Routes.newServicePage} children={newServicePage}/>
                <Route path={Routes.routeEditProject} children={editProjectPage}/>
                <Route path={Routes.administrationCategories} children={administrationCategoriesPage}/>
                <Route path={Routes.administrationExpertise} children={administrationExpertisePage}/>
                <Route path={Routes.routeProject} children={projectDetailPage}/>
                <Route path={Routes.administrationCollaborations} children={administrationCollaborationsPage}/>
                <Route path={Routes.administrationProjects} children={administrationProjectPage}/>
                <Route path={Routes.administrationNews} children={administrationNewsPage}/>
                <Route path={"/news/:news_type"} children={allNewsPage}/>
                <Route path={Routes.subGrantedProjectsPage} children={subGrantedProjectsPage}/>
                <Route path={Routes.immediateLogout} children={immediateLogoutPage}/>
                <Route path={Routes.main} children={dashboardPage}/>
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

/*ReactGA.initialize("G-CWESWE50Y8",{
    siteSpeedSampleRate:100
});*/
ReactGA.initialize("G-ZGTBFYBYBY")
ReactGA.pageview(window.location.pathname);
// Initialize google analytics page view tracking


ReactDOM.render(  <Provider store={store}>
    <BrowserRouter history={history}>
            <ScrollToTop />
            <App />
            <CookieAccept/>
    </BrowserRouter>
</Provider>, document.getElementById('root'));
