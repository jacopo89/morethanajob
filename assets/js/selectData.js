import {useTranslation} from "react-i18next";

export function dataLanguage(){

    return [
    {
        "label": "اللغة العربية",
        "value": "ar"
    },
    {
        "label": "Italiano",
        "value": "it",
    },
    {
        "label": "Ελληνικά",
        "value": "gr",

    },
    {
        "label": "English",
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
        "label": "Blended",
        "value": "Blended",
    }]



export const PaginationLimit = [
    {
        "label": "Show 5 results",
        "value": 5,
    },
    {
        "label": "Show 10 results",
        "value": 10,
    },
    {
        "label": "Show 20 results",
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

export const newsSelectData = [
    {
        "label": "Project News",
        "value": 1,
    },
    {
        "label": "Relevant publications",
        "value": 2,
    },
    {
        "label": "Library",
        "value": 3,
        "children": [
            {
                "label": "Video Tutorials",
                "value": 5
            },
            {
                "label": "Communication Tools",
                "value": 6
            },
            {
                "label": "Training material",
                "value": 7
            },
            {
                "label": "Policy briefs",
                "value": 8
            }
        ]
    },
    {
        "label": "Funding opportunities",
        "value": 4,

    },
    {
        "label": "Sub-granted Projects",
        "value": 9,

    },
]

export function digestAmounts(amount, currency){

    const currencySymbol = currencies.find((cur)=> cur.value === currency);

    if(currencySymbol!==undefined){
        return amount + " " + currencySymbol.symbol;
    }
    else{
        return "";
    }



}
