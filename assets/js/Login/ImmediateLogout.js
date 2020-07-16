import {useDispatch, useSelector} from "react-redux";
import * as ActionTypes from "../Redux/actions";
import * as Routes from "../routes";
import {useHistory} from "react-router-dom";

export default function ImmediateLogout(){
    const history = useHistory();
    const dispatch = useDispatch();

    const signOut = () => {
        dispatch(ActionTypes.logOut());
        history.push(Routes.login);
    }

    signOut();
}
