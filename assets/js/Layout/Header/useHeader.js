import React from 'react';
import {useMyCustomMediaQuery} from "../../tools/useMyCustomMediaQuery";
import FinalHeader from "../FinalHeader";
import ListHeader from "../ListHeader";

export function useHeader(){
    const{ isTabletOrMobile: isSmall} =  useMyCustomMediaQuery();


        return <FinalHeader/>

    return <ListHeader/>
}