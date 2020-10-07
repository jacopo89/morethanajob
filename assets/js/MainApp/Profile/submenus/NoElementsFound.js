import {bordeaux} from "../../../styledComponents/CustomComponents";
import React from "react";

export default function NoElementsFound({message}) {
    return <div style={{height:100, margin:"0 auto", textAlign:"center", color:bordeaux}}>  {message} </div>

}