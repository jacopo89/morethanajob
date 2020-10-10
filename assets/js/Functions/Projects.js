import {useSelector} from "react-redux";

export function getProjectLanguageElements(project) {

    const {language} = useSelector(state=>state);

    const title = (project && project.language === language && project.localTitle!==null && project.localTitle.length!==0) ? project && project.localTitle  : project && project.title ;
    const description = (project && project.language === language && project.localLongDescription!==null && project.localLongDescription.length!==0) ? project && project.localLongDescription  : project && project.longDescription ;


    const isDescriptionInEnglish = (
        project &&
        project.localLanguage === language &&
        project.localLongDescription===null ||
        ( project && project.localLongDescription !==null && project.localLongDescription.length===0)
    );


    const languageMessage = (isDescriptionInEnglish) ? "This content is available only in English" :"";

    return {
        title: title,
        description: description,
        languageMessage: languageMessage
    }

}