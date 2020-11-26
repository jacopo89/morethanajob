import {useSelector} from "react-redux";

export function getCollaborationsLanguageElements(collaboration){

    const {language} = useSelector(state=>state);

    const title = (collaboration && collaboration.localLanguage === language && collaboration.localLanguageTitle && collaboration.localLanguageTitle.length!==0) ? collaboration && collaboration.localLanguageTitle  : collaboration && collaboration.title ;
    const description = (collaboration && collaboration.localLanguage === language && collaboration.localLanguageDescription && collaboration.localLanguageDescription.length!==0) ? collaboration && collaboration.localLanguageDescription  : collaboration && collaboration.description ;
    const isDescriptionInEnglish = (
        collaboration &&
        collaboration.localLanguage === language &&
        collaboration.localLanguageDescription===null ||
        ( collaboration && collaboration.localLanguageDescription !==null && collaboration.localLanguageDescription.length===0)
    );

    const beneficiaries = (collaboration && collaboration.localLanguage === language && collaboration.localBeneficiaries && collaboration.localBeneficiaries.length!==0) ? collaboration && collaboration.localBeneficiaries  : collaboration && collaboration.mainBeneficiaries ;

    const languageMessage = (isDescriptionInEnglish) ? "This content is available only in English" : "";

    return {
        title: title,
        description: description,
        languageMessage: languageMessage,
        beneficiaries:beneficiaries
    }
}