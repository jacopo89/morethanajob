import React from "react";
import { useTranslation } from 'react-i18next';

export default function Test(){
    const { t, i18n } = useTranslation();
    // or const [t, i18n] = useTranslation();
    const changeLanguage = lng => {
        i18n.changeLanguage(lng).then(()=>console.log("changed language"));
    };

    return <>
        <button onClick={()=>changeLanguage('it')}>It</button>
        <button onClick={()=>changeLanguage('en')}>En</button>
        <h2>{t('Welcome to React')}</h2>;
    </>


}
