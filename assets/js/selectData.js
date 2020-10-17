import {useTranslation} from "react-i18next";

export function dataLanguage(){
    const {t,i18n} = useTranslation();

    return [
    {
        "label": t('Arabic'),
        "value": "ar"
    },
    {
        "label": t('Italian'),
        "value": "it",

    },
    {
        "label": t("Greek"),
        "value": "gr",

    },
    {
        "label": t("English"),
        "value": "en",

    }]
};

export const dataCountry = [
    {
        "label": "Palestine",
        "value": "palestine",
    },
    {
        "label": "Italy",
        "value": "italy",
    },
    {
        "label": "Lebanon",
        "value": "lebanon",
    },
    {
        "label": "Jordan",
        "value": "jordan",
    },
    {
        "label": "Greece",
        "value": "greece",
    }
];


export const modalityData = [
    {
        "label": "Online",
        "value": "online",
    },
    {
        "label": "Face 2 face",
        "value": "Face-to-face",
    },
    {
        "label": "Both",
        "value": "Both",
    }]



export const PaginationLimit = [
    {
        "label": "2",
        "value": 2,
    },
    {
        "label": "5",
        "value": 5,
    },
    {
        "label": "10",
        "value": 10,
    },
    {
        "label": "20",
        "value": 20,
    }
];


