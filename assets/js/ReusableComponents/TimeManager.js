import React from "react";
const dateFormat = require('dateformat');

export function changeTime(time) {
    //console.log("Time in prop", time);
    if(time!==undefined){
        time = time.date;
        const offset = new Date().getTimezoneOffset();
        const tempoReset = (new Date(time).getTime() - offset*60*1000);
        return new Date(tempoReset).toLocaleTimeString();
        return dateFormat(new Date(tempoReset), "yyyy-mm-dd'T'HH:MM");
        //const date = dateFormat(evt.target.value,"isoUtcDateTime");
    }else{
        return time;
    }

}
export function getCalendarFormat(date) {

    if(date){
        const newDate = new Date(date);
        return newDate.getDate() + "-"+ (newDate.getMonth()+1) + "-" + newDate.getFullYear();
    }else{
        return "Undefined";
    }

}

export function getCalendarDate(time) {
    if(time!==undefined){
        time = time.timestamp*1000;
        const offset = new Date().getTimezoneOffset();
        const tempoReset = (new Date(time).getTime() - offset*60*1000);

        return tempoReset;
        //const date = dateFormat(evt.target.value,"isoUtcDateTime");
    }else{
        return time;
    }

}



export function getDayAndMonth(time) {
    if(time!==undefined){
        time = time.timestamp*1000;
        const offset = new Date().getTimezoneOffset();
        const tempoReset = (new Date(time).getTime() - offset*60*1000);

        return dateFormat(tempoReset, "dd-mm");
        //const date = dateFormat(evt.target.value,"isoUtcDateTime");
    }else{
        return time;
    }

}





export function customNormalizedDate(){


}

export function customNormalizedDateToString(item){
    return changeTime(item);
}


export function defaultDate(item){
    return changeTimeDef(new Date(item.timestamp*1000));

}

export function defaultDateToString(item){
    console.log("Time changed",changeTimeDef(new Date(item.timestamp*1000)))
    const time = changeTimeDef(new Date(item.timestamp*1000));
    console.log("LocaleString",time.toLocaleString())
    console.log("LocaleTimeString",time.toLocaleTimeString())
    return changeTimeDef(new Date(item.timestamp*1000)).toLocaleTimeString();

}

/**
 *
 * @param item
 * @returns {string}
 *
 *
 */
export function defaultTimeToStringTime(item){
    const time = changeTimeDef(new Date(item.timestamp*1000));
    const hours = (time.getHours()<10) ? "0"+time.getHours() : time.getHours();
    const minutes = (time.getMinutes()<10) ? "0"+time.getMinutes() : time.getMinutes();
    return (hours + ":" +minutes);
}

export function defaultDateToStringTime(item){
    const time = changeTimeDef(new Date(item.timestamp*1000));
    const hours = (time.getHours()<10) ? "0"+time.getHours() : time.getHours();
    const minutes = (time.getMinutes()<10) ? "0"+time.getMinutes() : time.getMinutes();

    return time.toDateString() + " " + (hours + ":" +minutes);
}
