import {bordeaux, MainButton} from "../../styledComponents/CustomComponents";
import React, {useEffect} from "react";
import {Carousel} from "rsuite";

export default function NewsCarousel({news}){

    const newsSlider = news.filter(item => item.image).slice(0, Math.min(news.length, 5)).map((item, index) => {
        return <div key={index} style={{backgroundImage:`url('${item.image.url}')`,backgroundSize:"cover", position:"relative"}}>
            <div style={{height:"100%", backgroundImage: "linear-gradient(to top,black,white)", opacity:"33%"}}></div>
            <div style={{position:"absolute", flexDirection:"column", top:0,left:0, margin:"0 100px", height:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                {item.link!=="undefined" ? <a style={{color:"white", fontSize:28, fontWeight:"bolder", lineHeight:42}}  href={item.link}>{item.title}</a> : <h3 style={{color:"white"}}>{item.title}</h3>}
            </div>
        </div>
    })

    return newsSlider.length > 0 && <Carousel style={{height:600}} autoplay={true}>
        {newsSlider}
    </Carousel>
}
