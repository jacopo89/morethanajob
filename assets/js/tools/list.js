
import {useState} from "react";
import {ldfetch} from "./dataAccess";

export function useList(resource) {
    const [data, setData] = useState({list:[], totalItems: 0});

    const get = (page, filters=[]) => {
        let route = `/api/${resource}?`;

        Object.keys(filters).forEach((key,index)=> {
            if(index===0){
                route = route.concat(`${key}=${filters[key]}`);
            }else{
                route = route.concat(`&${key}=${filters[key]}`);
            }

        })
        //add page
        if(filters.length===0){
            route = route.concat(`page=${page}`)
        }else{
            route = route.concat(`&page=${page}`)
        }
        ldfetch(route)
            .then(response => {
                    return response
                        .json()
                        .then(retrieved =>{

                            return ({data: retrieved["hydra:member"], totalItems: retrieved["hydra:totalItems"]})
                        } )
                }
            )
            .then(({ data, totalItems }) => {


                setData({list:data, totalItems:totalItems});

            })
            .catch(e => {
            })
    };


    return {data, get};
}

