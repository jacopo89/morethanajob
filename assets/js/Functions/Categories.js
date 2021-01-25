import {useSelector} from "react-redux";
import {generateCategoriesTree} from "../MainApp/Administration/CategoriesManagement";
import react, {useEffect, useState} from 'react';

export function categoriesTreeByLanguage(){
    const {categories, language} = useSelector(state=>state);

    const filterCategories = (categories) => {
        return categories.map(category =>{
            return {...category, label: category[language]}
        }  );

    }
    const [languageCategories, setLanguageCategories] = useState(filterCategories(categories));


    useEffect(()=>{
        const newCategories = filterCategories(categories);
        setLanguageCategories(newCategories);
    },[language, categories]);

    return {categories: languageCategories, categoriesTree:generateCategoriesTree(languageCategories)};

    r

}