import React, {useEffect, useState} from 'react';
import {Button, Form, Icon, IconButton, List} from "rsuite";
import TextField from "../Login/Components/TextField";
import {IconButtonTransparent} from "../styledComponents/CustomComponents";

export default function DynamicList({name, label = name, updater, startingValue=[], options = {}}){

    const[list, setList] = useState(startingValue);
    const [bufferText, setBufferText] = useState("");
    const [position, setPosition] = useState(startingValue.length);

    useEffect(()=>{
        setList(startingValue);
        setPosition(startingValue.length);
    }, [startingValue])

    const addToList = () => {
        if(position===list.length){
            setList([...list, bufferText]);
        }else{
            let newList = list;
            newList[position] = bufferText;
            setList(newList);

        }
        setPosition(list.length);
        setBufferText("");

    };


    const editElement = (position)=>{
        setPosition(position);
        setBufferText(list[position]);
    }
    const removeElement = (event,position) =>{
        event.stopPropagation();
        const newList = list.filter((elem,index)=> index!==position);
        setList(newList);
        setBufferText("");
    }

    useEffect(()=> {
        if(list!==startingValue){
            updater(list)
        }
    }, [list]);




    return <div style={{padding:10}}>
        <b>{label}</b>

        <List hover>
            {list.map((item,index)=>
                <List.Item key={index} index={index}>
                    <div style={{display:"flex", justifyContent:"space-around", alignItems:"center"}} >
                        <span style={{paddingLeft: 10, flexGrow:1}}>{item}</span> <IconButtonTransparent icon={<Icon icon="edit"/>} onClick={()=>editElement(index)}/> <IconButtonTransparent icon={<Icon icon="trash-o"/>} onClick={(event)=>removeElement(event, index)}/>
                    </div>
                </List.Item>
            )}
        </List>
        <div style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
            <div style={{flexGrow:1}}>
            <TextField  onChange={setBufferText} value={bufferText}  />
            </div>
            <IconButtonTransparent icon={<Icon icon="plus"/>} onClick={addToList}/>
        </div>
    </div>

}
