import {useSelector} from "react-redux";
import {useEffect, useState} from 'react';

function generateServiceTree(items){

    items = items.map((item)=>{return {...item, label: item.label, value: item.id }});

//    console.log("generate tree", items);
    let rootItems = items.filter((item)=> item.parentServiceId ===null);


    while(rootItems.length !==items.length){

        let lastItems = items.filter((module)=> {return (items.findIndex((item)=> (item.parentServiceId) ? item.parentServiceId ===module.id : false ) ===-1) && module.parentServiceId!==null});
        let lastItemsId = lastItems.map((item)=>item.id);
        items = items.filter((module)=> !lastItemsId.includes(module.id) );
        items = items.map((module)=>{
            return {...module, children: lastItems.filter((item)=>  (item.parentServiceId) ? module.id===item.parentServiceId : false)}
        });
    }

    // console.log("tree", items);
    return items;
}


export function expertisesTreeByLanguage(){
    const {services, language} = useSelector(state=>state);

    const filterExpertise = (expertises) => {
        return expertises.map(expertise =>{
            return {...expertise, label: expertise[language]}
        }  );

    }
    const [languageExpertises, setLanguageExpertises] = useState(filterExpertise(services));


    useEffect(()=>{
        const newExpertises = filterExpertise(services);
        console.log("new expertises", newExpertises);
        setLanguageExpertises(newExpertises);
    },[language, services]);

    return generateServiceTree(languageExpertises);


}

