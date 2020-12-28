import React, {useEffect} from 'react';
import {useGetStatistics} from "../../Backend/hooks/useAdministration";
import styled from "styled-components";
import {bordeaux, FlexAroundDiv} from "../../styledComponents/CustomComponents";
export default function (){

    const [statistics, getStatistics] = useGetStatistics();


    useEffect(()=>{
        getStatistics();
    },[])


    const boxes = Object.keys(statistics).map((item, index)=> <StatisticBox name={item} value={statistics[item]}/>)

    return <FlexAroundDiv>{boxes}</FlexAroundDiv>;
}

function StatisticBox({name, value}){
    return <Box>
        <BoxName>{name}</BoxName>
        <BoxValue>{value}</BoxValue>
    </Box>
}

const Box = styled.div`
width:300px;
height:300px;
border: 10px solid ${bordeaux};
border-radius: 10px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
 `

const BoxName = styled.h4``;

const BoxValue = styled.h6``;