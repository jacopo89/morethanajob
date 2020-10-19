import {useSelector} from "react-redux";

export function getProfileLanguageElements(user) {

    const {language} = useSelector(state=>state);

    const description = (user && user.language === language && user.localDescription!==null && user.localDescription.length!==0) ? user && user.localDescription  : user && user.description ;

    return {
        description: description
    }

}