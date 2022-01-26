import {bordeaux} from "../../styledComponents/CustomComponents";
import React, {useEffect} from "react";
import {Carousel} from "rsuite";

export default function NewsCarousel({news}){

    const newsSlider = news.filter(item => item.image).slice(0, Math.min(news.length, 5)).map((item, index) => {
        console.log("new",item)
        return <div style={{backgroundSize: "cover", backgroundImage:`url('${item.image.url}')`,position:"relative", display:"flex", justifyContent:"center"}}>
            <h3 style={{position:"absolute", bottom: 40, margin: "0 auto", color: bordeaux}}>{item.title}</h3>
        </div>
    })

    return newsSlider.length > 0 && <Carousel autoplay={true}>
        {newsSlider}
    </Carousel>
}
