import React from "react";
import Header from "./Header";

function Layout(props){

        return (
            <div>
            <div style={{ paddingTop: '66px', position: 'absolute', height: '100vh', width: '100vw', display:"flex", alignItems:"center", justifyContent:"space-around"}}>
                {props.page}
            </div>
    </div>
);
}

export default Layout;
