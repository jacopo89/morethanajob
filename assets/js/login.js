import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import Login from "./Login/Pages/Login";
import {applyMiddleware, compose, createStore} from "redux";
import reducer from "./Redux/reducer";
import thunk from "redux-thunk";
import DashboardLayout from "./Layout/DashboardLayout";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,composeEnhancers(
    applyMiddleware(thunk)
));


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <DashboardLayout page={<Login/>}/>;
        </BrowserRouter>
    </Provider>
    , document.getElementById('login-form'));

