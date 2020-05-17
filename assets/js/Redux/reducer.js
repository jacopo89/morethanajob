import useCookies from "../Backend/useCookies";

import * as ActionTypes from "./actions";
const [accessToken, authenticated, user, language] = useCookies();

console.log("reducer language", language);
const defaultLanguage = (language!==undefined) ? language : "en";
const initialState = {authenticated:authenticated, user:user, isLoading:false, language:defaultLanguage};

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
                    ...state, user: action.user
                }
            }
            case ActionTypes.SWITCH_LANGUAGE:{
                return {
                    ...state, language: action.language,
                }
            }
            default: return state;
        }
    }

    return state;
};

export default reducer;
