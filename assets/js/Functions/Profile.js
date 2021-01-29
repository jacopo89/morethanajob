import {useSelector} from "react-redux";

export function getProfileLanguageElements(user) {

    const {language} = useSelector(state=>state);

    const description = (user && user.language === language && user.localLanguageDescription!==null && user.localLanguageDescription.length!==0) ? user && user.localDescription  : user && user.description ;

    return {
        description: description
    }

}