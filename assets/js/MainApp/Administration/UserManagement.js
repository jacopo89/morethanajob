import React, {useEffect} from 'react'
import {useGetUsers} from "../../Backend/hooks/useAdministration";
import {TablePanelDetail} from "../../ReusableComponents/TablePanelDetail";
import HorizontalStepForm from "../../ReusableComponents/HorizontalStepForm";
import UserDetail from "./UserDetail";

export default function UserManagement(){

    const [users, getUsersHandler] = useGetUsers();

    useEffect(()=>{getUsersHandler(); return ()=>{}},[]);

    /*useEffect(()=>{
        const dataManipulationFunction = (data) => data.map((item)=>{return {...item,
            startTime:defaultDate(item.startTime), endTime:defaultDate(item.endTime),
            startTimeValue: defaultDateToStringTime(item.startTime), endTimeValue:defaultDateToStringTime(item.endTime)}}) ;
        getLecturesHandler(code, {dataManipulationFunction:dataManipulationFunction})},[])
    */

    const modelData = [
        {label:"id",dataKey: "id"},
        {label:"Email", dataKey: "email"},
        {label:"Ruoli",dataKey: "roles"}
    ]

    const labels = ["Dettaglio utente"];


    const components  = (data) => [<UserDetail user={data} />];


    const stepForm = (data)=> <HorizontalStepForm labels={labels} components={components(data)} />

    return <TablePanelDetail rowKey="id" data={users} modelData={modelData} panelDetail={()=>console.log("dettaglio utente")} />
}
