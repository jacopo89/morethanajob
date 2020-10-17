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

export function getLanguageFromValue(value){
    const languages = dataLanguage();
    return languages.find((language)=> language.value===value)["label"];
}

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



export const rateData = [
    {
        "label": "Free",
        "value": "free",
    },
    {
        "label": "Paid",
        "value": "paid",
    }
    ]


export const currencies = [
    {
        "label": "Euro (€)",
        "value": "EUR",
        "symbol": "€"
    },
    {
        "label": "Dollar ($)",
        "value": "USD",
        "symbol": "$"
    },
    {
        "label": "Jordanian Dinar (د.ا)",
        "value": "JOD",
        "symbol": "د.ا"
    }
]

export function digestAmounts(amount, currency){
    
    const currencySymbol = currencies.find((cur)=> cur.value === currency);

    return amount + " " + currencySymbol.symbol;

}
