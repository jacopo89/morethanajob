import useCookies from "../Backend/useCookies";

import * as ActionTypes from "./actions";
const [accessToken, authenticated] = useCookies();

const initialState = {authenticated:authenticated, user:null, isLoading:false};

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
            default: return state;
        }
    }

    return state;
};

export default reducer;
