import useCookies from "../Backend/useCookies";

import * as ActionTypes from "./actions";
const {accessToken, authenticated, user, language} = useCookies();

console.log("UnEscaped user", unescape(user));
const defaultLanguage = (language!==undefined) ? language : "en";
const authenticatedStatus = (authenticated!==undefined) ? authenticated : false;
const initialState = {authenticated:authenticatedStatus, accessToken:accessToken, user:(user), isLoading:false, language:defaultLanguage, services:[], categories:[]};

const reducer = (state = initialState, action) => {

    if(action){

        switch(action.type){
            case ActionTypes.SWITCH_AUTHENTICATION_STATUS: {
                return {...state,
                    authenticated: !state.authenticated
                };
            }
            case ActionTypes.SWITCH_LOADING_STATUS:{
                return {
                    ...state, isLoading: action.isLoading
                }
            }
            case ActionTypes.UPDATE_USER_INFO:{
                return {
                    ...state, user: action.user, language: action.user.language
                }
            }
            case ActionTypes.SWITCH_LANGUAGE:{
                return {
                    ...state, language: action.language,
                }
            }
            case ActionTypes.LOGOUT:{
                return {
                    ...state, authenticated: action.authenticated, user: action.user,
                }
            }
            case ActionTypes.LOGIN:{
                return {
                    ...state, authenticated: action.authenticated, accessToken: action.accessToken,
                }
            }
            case ActionTypes.UPDATE_SERVICES:{
                return {
                    ...state, services:action.services,
                }
            }
            case ActionTypes.UPDATE_CATEGORIES:{
                return {
                    ...state, categories:action.categories,
                }
            }
            default: return state;


        }
    }

    return state;
};

export default reducer;
