import Cookies from "universal-cookie";

export default function useCookies(){
    const cookies = new Cookies();

    let accessToken = (cookies.get('accessToken'))? cookies.get('accessToken') : null;
    const authenticated = cookies.get('authenticated');
    const user = cookies.get('user');
    const language = cookies.get('language');



    return [accessToken, authenticated, user, language];
}

