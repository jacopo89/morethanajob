import React from "react";
import {Loader} from "rsuite";

export default function Loading(){
    return <Loader style={{bottom:0, right:0, marginBottom:15, marginRight:15, position: "fixed", zIndex:"99" }} inverse size="md"/>;
}