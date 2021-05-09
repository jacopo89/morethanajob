import {useSelector} from "react-redux";

export function getProfileLanguageElements(user) {

    const {language} = useSelector(state=>state);

    console.log(language);
    console.log(user);
    const description = (user && user.language === language && user.localLanguageDescription!==null && user.localLanguageDescription.length!==0) ? user && user.localLanguageDescription  : user && user.description ;

    return {
        description: description
    }

}